import React, {useContext, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {Controller} from 'react-hook-form';

import {Button} from '../Button';
import {PermissionsContext} from '../../../context/permissions/PermissionsContext';
import {IInputSingleImg} from '../types';
import {managementApi} from '../../../services';

interface source {
  uri: string | undefined;
  type: string | undefined;
  name: string | undefined;
}

export const InputSingleImage = ({
  name: nameController,
  control,
  backgroundColor,
  btnTextColor,
}: IInputSingleImg) => {
  const {
    cameraState,
    galleryState,
    askCameraPermissions,
    askGalleryPermissions,
  } = useContext(PermissionsContext);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Controller
      shouldUnregister
      control={control}
      name={nameController}
      render={({field: {onChange, value = ''}, formState: {errors}}) => {
        const takePhoto = () => {
          if (cameraState !== 'granted') {
            askCameraPermissions().then(res => {
              if (res === 'granted') {
                launchCamera(
                  {
                    mediaType: 'photo',
                    quality: 0.7,
                  },
                  ({assets, didCancel}: ImagePickerResponse) => {
                    if (didCancel) {
                      return;
                    }
                    if (!assets) {
                      return;
                    }
                    // console.log(assets);
                    const uri = assets[0]?.uri;
                    const type = assets[0]?.type;
                    const name = assets[0]?.fileName;
                    const source = {
                      uri,
                      type,
                      name,
                    };
                    onFilesSelected(source);
                  },
                );
              }
            });
          }
          if (cameraState === 'granted') {
            launchCamera(
              {
                mediaType: 'photo',
                quality: 0.7,
              },
              ({assets, didCancel}: ImagePickerResponse) => {
                if (didCancel) {
                  return;
                }
                if (!assets) {
                  return;
                }
                // console.log(assets);
                const uri = assets[0]?.uri;
                const type = assets[0]?.type;
                const name = assets[0]?.fileName;
                const source = {
                  uri,
                  type,
                  name,
                };
                onFilesSelected(source);
              },
            );
          }
        };

        const takePhotoByGallery = () => {
          if (galleryState !== 'granted') {
            askGalleryPermissions().then(res => {
              if (res === 'granted') {
                launchImageLibrary(
                  {
                    mediaType: 'photo',
                    quality: 0.7,
                  },
                  ({assets, didCancel, errorMessage}: ImagePickerResponse) => {
                    if (didCancel) {
                      return;
                    }
                    if (!assets) {
                      return;
                    }
                    if (errorMessage) {
                      return console.log({errorMessage});
                    }
                    // console.log({assets});
                    const uri = assets[0]?.uri;
                    const type = assets[0]?.type;
                    const name = assets[0]?.fileName;
                    const source = {
                      uri,
                      type,
                      name,
                    };
                    onFilesSelected(source);
                  },
                );
              }
            });
          }
          if (galleryState === 'granted') {
            launchImageLibrary(
              {
                mediaType: 'photo',
                quality: 0.7,
              },
              ({assets, didCancel, errorMessage}: ImagePickerResponse) => {
                if (didCancel) {
                  return;
                }
                if (!assets) {
                  return;
                }
                if (errorMessage) {
                  return console.log({errorMessage});
                }
                // console.log({assets});
                const uri = assets[0]?.uri;
                const type = assets[0]?.type;
                const name = assets[0]?.fileName;
                const source = {
                  uri,
                  type,
                  name,
                };
                onFilesSelected(source);
              },
            );
          }
        };

        const onFilesSelected = async (target: source) => {
          // console.log({target});
          if (isLoading) {
            return;
          }
          setIsLoading(true);
          if (!target) {
            return;
          }

          try {
            //investigar mas sobre FormData
            const formData = new FormData();

            formData.append('file', target);
            //el 'file' es el nombre que recibe la propiedad podia ser el nombre que quisieras
            const {data} = await managementApi.post<{message: string}>(
              '/upload',
              formData,
            );

            //console.log(data);
            //seteamos la nueva imagen traida del backend con cloudinary en el formulario con useForm y renderizamos de una
            onChange(data.message);
            setIsLoading(false);
          } catch (error) {
            console.log({error});
            setIsLoading(false);
          }
        };

        return (
          <View>
            {value && (
              <>
                <Image
                  source={{uri: value}}
                  style={{width: '100%', height: 230}}
                />
                <Button
                  isLoading={isLoading}
                  colorSpinierLoading={btnTextColor}
                  buttonStyle={{
                    ...styles.btnDeleteDate,
                    backgroundColor: backgroundColor,
                  }}
                  activeOpacity={0.9}
                  onPress={() => onChange('')}
                  textContent={
                    <Text
                      style={{
                        ...styles.titleOfDeleteBtn,
                        color: btnTextColor,
                      }}>
                      Borrar Imagen
                    </Text>
                  }
                />
              </>
            )}
            <View style={{...styles.container}}>
              <Button
                isLoading={isLoading}
                colorSpinierLoading={btnTextColor}
                buttonStyle={{
                  ...styles.btnChangeDate,
                  width: 120,
                  backgroundColor: backgroundColor,
                }}
                activeOpacity={0.9}
                onPress={takePhoto}
                textContent={
                  <Text
                    style={{
                      ...styles.titleOfDataBtn,
                      color: btnTextColor,
                    }}>
                    Foto
                  </Text>
                }
              />
              <Button
                isLoading={isLoading}
                colorSpinierLoading={btnTextColor}
                buttonStyle={{
                  ...styles.btnChangeDate,
                  width: 140,
                  backgroundColor: backgroundColor,
                }}
                activeOpacity={0.9}
                onPress={takePhotoByGallery}
                textContent={
                  <Text
                    style={{
                      ...styles.titleOfDataBtn,
                      color: btnTextColor,
                    }}>
                    Galería
                  </Text>
                }
              />
            </View>
            {!!errors[nameController] && (
              <Text style={styles.helperText}>
                {errors[nameController]?.message as string}
              </Text>
            )}
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  btnChangeDate: {
    borderRadius: 5,
    alignContent: 'center',
    justifyContent: 'center',
    height: 50,
    paddingHorizontal: 35,
    marginRight: 10,
  },
  btnDeleteDate: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    paddingHorizontal: 35,
    marginBottom: 10,
  },
  titleOfDataBtn: {
    fontSize: 18.5,
    textAlign: 'center',
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
  },
  titleOfDeleteBtn: {
    fontSize: 20.5,
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'Roboto-Black',
  },
  helperText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15.2,
    paddingLeft: 10,
    // fontWeight: '400',
    color: '#ff4d4f',
  },
});
