import React, {useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  Image,
  ImageErrorEventData,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  View,
} from 'react-native';
import moment from 'moment';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {height, width} from '../../helpers';
import {RootStackParams} from '../../navigation';
import {useInventoryByID} from './useInventoryByID';
import {stylesInventoryByID} from './stylesInventoryByID';
import {TouchableOpacity, Platform} from 'react-native';
import {SnapCarouselByID, SnapCarouselByRep} from './components';
import {useNavigation} from '@react-navigation/native';
import {
  Button,
  ModalFollow,
  ModalStocks,
  Skeleton,
  SnackbarError,
  SnackbarSuccess,
} from '../../components';
import {FormProvider} from 'react-hook-form';

interface Props
  extends StackScreenProps<RootStackParams, 'NavigationInventoryByID'> {}

export const InventoryByID = ({route, navigation}: Props) => {
  const {singleInventoryID, type} = route.params;
  //para medir las zonas del notch o inutilizables por la pantalla si el teléfono las tiene
  const navigationAbsolute = useNavigation<any>();
  const {top} = useSafeAreaInsets();
  const [catchError, setCatchError] =
    useState<NativeSyntheticEvent<ImageErrorEventData>>();
  // console.log('height====>', height);
  // console.log('width====>', width);
  const {
    singleInventory,
    textPrimary,
    textSecondary,
    background,
    primary,
    secondary,
    tertiary,
    card,
    isSnackbarError,
    isSnackbarSuccess,
    textSuccess,
    textError,
    isLoadingStockOrAddTracking,
    isLoading,
    isLoading2,
    formMethodsCreate,
    formMethodsUpdate,
    updateStockOrAddTracking,
    toggleSnackBarError,
    toggleSnackBarSuccess,
    handleUpdateStock,
    handleCreateFollow,
  } = useInventoryByID({singleInventoryID, type});

  // console.log({singleInventory});
  console.log('xDaIuda :(',singleInventory?.imagenes[0]);
  return (
    <View style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: background,
        }}>
        <View
          style={{
            ...stylesInventoryByID.wrapperImgMain,
            backgroundColor: card,
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('NavigationInventory')}
            style={{
              ...stylesInventoryByID.wrapperBtnBack,
              backgroundColor: background,
              top: top + 15,
            }}>
            <Ionicons
              name="arrow-back-outline"
              size={height / 28}
              color={textPrimary}
            />
          </TouchableOpacity>
          <Button
            isLoading={isLoadingStockOrAddTracking}
            colorSpinierLoading={tertiary}
            buttonStyle={{
              ...stylesInventoryByID.wrapperBtnAdd,
              backgroundColor: background,
              top: top + 15,
              right: 0,
            }}
            activeOpacity={0.8}
            onPress={() => {
              if (singleInventory?.tipoInventario) {
                return updateStockOrAddTracking(singleInventory);
              } else {
                return console.log('espero a que cargue');
              }
            }}
            textContent={
              <Text
                style={{
                  ...stylesInventoryByID.typeInventoryText,
                  color: textPrimary,
                }}>
                {singleInventory?.tipoInventario === 'repuesto'
                  ? 'Agregar Existencias'
                  : singleInventory?.tipoInventario === 'maquina'
                  ? 'Hacer Seguimiento'
                  : '...Cargando'}
              </Text>
            }
          />

          {singleInventory ? (
            <Image
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
              }}
              onError={e => setCatchError(e)}
              source={{
                uri:
                  !catchError && singleInventory
                    ? singleInventory?.imagenes[0]
                    : 'https://cdn-icons-png.flaticon.com/512/2748/2748558.png',
              }}
            />
          ) : (
            <Skeleton height={height / 2.75} width={width} />
          )}
          {singleInventory ? (
            <View
              style={{
                ...stylesInventoryByID.contentTypeInventor,
                backgroundColor: background,
              }}>
              <Text
                style={{
                  ...stylesInventoryByID.typeInventoryText,
                  color: primary,
                }}>
                {singleInventory?.tipoInventario}
              </Text>
            </View>
          ) : (
            <Skeleton
              style={stylesInventoryByID.contentTypeInventor}
              height={height / 20.71}
              width={width / 4.388}
            />
          )}
          <View
            style={{
              ...stylesInventoryByID.wrapperInitCardBorder,
              backgroundColor: background,
            }}
          />
        </View>
        <View style={{...stylesInventoryByID.wrapperContentStandard}}>
          <View style={{...stylesInventoryByID.wrapperHeadContent}}>
            {singleInventory ? (
              <Text
                style={{...stylesInventoryByID.titleName, color: textPrimary}}>
                {singleInventory?.nombre}
              </Text>
            ) : (
              <Skeleton
                style={{borderRadius: 10}}
                height={height / 20.71}
                width={width / 2.39}
              />
            )}
            {singleInventory ? (
              <View
                style={
                  singleInventory?.estado === 'bueno'
                    ? {
                        ...stylesInventoryByID.contentTypeInventoryForID,
                        backgroundColor: '#88c071',
                      }
                    : singleInventory?.estado === 'regular'
                    ? {
                        ...stylesInventoryByID.contentTypeInventoryForID,
                        backgroundColor: '#efb706',
                      }
                    : {
                        ...stylesInventoryByID.contentTypeInventoryForID,
                        backgroundColor: '#ff4d4f',
                      }
                }>
                <Text style={{...stylesInventoryByID.textTypeInventoryByID}}>
                  {singleInventory?.estado}
                </Text>
              </View>
            ) : (
              <Skeleton
                style={{...stylesInventoryByID.contentTypeInventoryForID}}
                height={height / 20.71}
                width={width / 2.39}
              />
            )}
          </View>
          <View style={{...stylesInventoryByID.wrapperStatsGeneralContent}}>
            <View
              style={{
                ...stylesInventoryByID.wrapperGenericCardForStats,
                backgroundColor: background,
              }}>
              <View style={{...stylesInventoryByID.wrapperHeadCard}}>
                <Fontisto name="date" size={height / 32} color={secondary} />
                <Text
                  style={{
                    ...stylesInventoryByID.titleCard,
                    color: textPrimary,
                  }}>
                  Registro
                </Text>
              </View>
              {singleInventory ? (
                <Text
                  style={{
                    ...stylesInventoryByID.textContentCard,
                    color: textPrimary,
                  }}>
                  Entrada para actualizar:{' '}
                  {moment(new Date(singleInventory?.fechaDeEntrada!)).format(
                    'YYYY-MM-DD',
                  )}
                </Text>
              ) : (
                <Skeleton
                  style={{borderRadius: 5}}
                  height={height / 51.78}
                  width={width / 2.37}
                />
              )}
              {singleInventory ? (
                <Text
                  style={{
                    ...stylesInventoryByID.textContentCard,
                    color: textPrimary,
                  }}>
                  Actualización:{' '}
                  {moment(
                    new Date(singleInventory?.fechaDeActualizacion!),
                  ).format('YYYY-MM-DD')}
                </Text>
              ) : (
                <Skeleton
                  style={{borderRadius: 5, marginTop: 6}}
                  height={height / 51.78}
                  width={width / 2.37}
                />
              )}
            </View>
            <View
              style={{
                ...stylesInventoryByID.wrapperGenericCardForStats,
                backgroundColor: background,
              }}>
              <View style={{...stylesInventoryByID.wrapperHeadCard}}>
                <Fontisto
                  name="direction-sign"
                  size={height / 32}
                  color={secondary}
                />
                <Text
                  style={{
                    ...stylesInventoryByID.titleCard,
                    color: textPrimary,
                  }}>
                  Locación
                </Text>
              </View>
              {singleInventory ? (
                <Text
                  style={{
                    ...stylesInventoryByID.textContentCard,
                    color: textPrimary,
                  }}>
                  Lugar: {singleInventory?.locacion}
                </Text>
              ) : (
                <Skeleton
                  style={{borderRadius: 5}}
                  height={height / 51.78}
                  width={width / 3.1}
                />
              )}
              {singleInventory ? (
                <Text
                  style={{
                    ...stylesInventoryByID.textContentCard,
                    color: textPrimary,
                  }}>
                  SubLoc: {singleInventory?.subLocacion}
                </Text>
              ) : (
                <Skeleton
                  style={{borderRadius: 5, marginTop: 6}}
                  height={height / 51.78}
                  width={width / 3.1}
                />
              )}
            </View>
          </View>
          {singleInventory?.tipoInventario === 'maquina' && (
            <>
              <Text
                style={{
                  ...stylesInventoryByID.textBodyInventoryByID,
                  color: textSecondary,
                }}>
                {singleInventory?.observacionGeneral}
              </Text>
              <View
                style={{
                  ...stylesInventoryByID.wrapperGenericCardForStats,
                  backgroundColor: background,
                }}>
                <View style={{...stylesInventoryByID.wrapperHeadCard}}>
                  <FontAwesome
                    name="gears"
                    size={height / 32}
                    color={tertiary}
                  />
                  <Text
                    style={{
                      ...stylesInventoryByID.titleCard,
                      color: textPrimary,
                    }}>
                    Registro
                  </Text>
                </View>
                <Text
                  style={{
                    ...stylesInventoryByID.textContentCard,
                    color: textPrimary,
                  }}>
                  Capacidad nominal: {singleInventory?.capacidadNominal}
                </Text>
                <Text
                  style={{
                    ...stylesInventoryByID.textContentCard,
                    color: textPrimary,
                  }}>
                  Serie: {singleInventory?.serie}
                </Text>
                <Text
                  style={{
                    ...stylesInventoryByID.textContentCard,
                    color: textPrimary,
                  }}>
                  Marca: {singleInventory?.marca}
                </Text>
                <Text
                  style={{
                    ...stylesInventoryByID.textContentCard,
                    color: textPrimary,
                  }}>
                  Voltaje: {singleInventory?.voltaje} V
                </Text>
                <Text
                  style={{
                    ...stylesInventoryByID.textContentCard,
                    color: textPrimary,
                  }}>
                  Corriente: {singleInventory?.corriente} A
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    navigationAbsolute.navigate('WebScreen', {
                      idForIND: singleInventory?.id_maquina,
                    })
                  }
                  activeOpacity={0.85}>
                  <Text
                    style={{
                      ...stylesInventoryByID.textContentCard,
                      color: secondary,
                    }}>
                    Link de gráfica IND
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
          {singleInventory?.imagenes! && (
            <SnapCarouselByID
              arrImg={singleInventory?.imagenes!}
              colorArrow={secondary}
              colorActiveDot={tertiary}
            />
          )}
          {!singleInventory && (
            <Skeleton
              style={{
                ...stylesInventoryByID.contentCardForSnapCarousel,
                marginTop: 18,
                borderRadius: 14,
              }}
              height={height / 3.2}
              width={width / 1.112}
            />
          )}
          {singleInventory?.tipoInventario === 'repuesto' && (
            <SnapCarouselByRep
              arrObj={singleInventory?.arrMaq!}
              colorBackgroundCard={background}
              colorText={textPrimary}
            />
          )}
          <View style={{paddingBottom: Platform.OS === 'android' ? 90 : 120}} />
        </View>
      </ScrollView>
      <SnackbarSuccess
        handleChangeSnackbar={toggleSnackBarSuccess}
        isOpen={isSnackbarSuccess}
        isNotPlusIcon
        msmText={
          textSuccess
            ? textSuccess
            : 'ha ocurrido un error interno revisar la consola'
        }
      />
      <SnackbarError
        handleChangeSnackbar={toggleSnackBarError}
        isOpen={isSnackbarError}
        msmText={
          textError
            ? textError
            : 'ha ocurrido un error interno revisar la consola'
        }
      />
      <FormProvider {...formMethodsUpdate}>
        <ModalStocks
          isLoading={isLoading}
          handleUpdateStock={handleUpdateStock}
        />
      </FormProvider>
      <FormProvider {...formMethodsCreate}>
        <ModalFollow
          isLoading={isLoading2}
          handleCreateFollow={handleCreateFollow}
        />
      </FormProvider>
    </View>
  );
};
