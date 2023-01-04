import React, {useContext, useEffect, useState} from 'react';
import {
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useFormContext} from 'react-hook-form';
import IconFeather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {ThemeContext, UIContext} from '../../../context';
import {
  IPropsModalFollow,
  ISeguimiento,
  stylesInventoryByID,
} from '../../../screens';
import {InputGeneric, InputSelect, InputSingleImage} from '../Inputs';
import {Button} from '../Button';
import {managementApi} from '../../../services';

export const ModalFollow = ({
  isLoading,
  handleCreateFollow,
}: IPropsModalFollow) => {
  const {isCreateFollowModal, toggleModalFollow} = useContext(UIContext);
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const {
    control,
    handleSubmit: onSubmit,
    watch,
  } = useFormContext<Partial<ISeguimiento>>();
  const presentaFallaWatcher = watch('presentaFalla');

  const [idxIdRelationMaq, setIdxIdRelationMaq] = useState<
    Array<{label: string; value: string}>
  >([]);

  const handlerIndexOfIdMaq = async () => {
    await managementApi
      .get('/admin/inventorysMaq')
      .then(({data}) => {
        // console.log({data});
        setIdxIdRelationMaq(
          data.map((item: any) => {
            return {
              label: `MAQ_${item.id_maquina}`,
              value: item.id_maquina.toString(),
            };
          }),
        );
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    handlerIndexOfIdMaq();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: colors.secondary}}>
      <StatusBar
        backgroundColor={colors.secondary}
        showHideTransition="slide"
        barStyle="default"
      />
      <Modal
        visible={isCreateFollowModal}
        transparent={true}
        onRequestClose={toggleModalFollow}
        animationType={'slide'}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}>
          <TouchableOpacity
            onPress={toggleModalFollow}
            activeOpacity={1}
            style={{flex: Platform.OS === 'android' ? 0.075 : 0.13}}
          />
          <View
            style={{
              ...stylesInventoryByID.modalContentFollow,
              backgroundColor: colors.background,
            }}>
            <View style={{...stylesInventoryByID.wrapperHeaderStocks}}>
              <IconFeather
                name="file-text"
                size={31}
                color={colors.secondary}
              />
              <Text
                style={{
                  ...stylesInventoryByID.titleModalStocks,
                  color: colors.textPrimary,
                }}>
                Creando Seguimiento
              </Text>
              <View style={{flexGrow: 1}} />
              <AntDesign
                onPress={toggleModalFollow}
                name="close"
                size={35}
                color={colors.textPrimary}
              />
            </View>
            <ScrollView style={{marginTop: 14}}>
              <Text
                style={{
                  ...stylesInventoryByID.titleOfInput,
                  color: colors.textPrimary,
                }}>
                Imagen
              </Text>
              <View style={{marginBottom: 13}}>
                <InputSingleImage
                  backgroundColor={colors.primary}
                  btnTextColor={colors.background}
                  name="imgDeVerificacion"
                  control={control}
                />
              </View>
              <Text
                style={{
                  ...stylesInventoryByID.titleOfInput,
                  color: colors.textPrimary,
                }}>
                Comentario
              </Text>
              <View style={{marginBottom: 13}}>
                <InputGeneric
                  control={control}
                  name={'comentario'}
                  borderColor={colors.secondary}
                  placeholder="La maquina presenta..."
                  keyboardType="web-search"
                  placeholderTextColor={colors.textSecondary}
                  inputColor={colors.textPrimary}
                  autoCorrect={false}
                />
              </View>
              <Text
                style={{
                  ...stylesInventoryByID.titleOfInput,
                  color: colors.textPrimary,
                }}>
                Estado de la maquina
              </Text>
              <View style={{marginBottom: 13}}>
                <InputSelect
                  borderColor={colors.secondary}
                  control={control}
                  name="estadoDeLaMaquina"
                  placeholder="Por establecer"
                  colorValueSelected={colors.textPrimary}
                  placeholderTextColor={colors.textSecondary}
                  itemArr={[
                    {label: 'Bueno', value: 'bueno'},
                    {label: 'Malo', value: 'malo'},
                    {label: 'Regular', value: 'regular'},
                  ]}
                />
              </View>
              <Text
                style={{
                  ...stylesInventoryByID.titleOfInput,
                  color: colors.textPrimary,
                }}>
                Nombre completo del observador
              </Text>
              <View style={{marginBottom: 13}}>
                <InputGeneric
                  control={control}
                  name={'nombreDeObservador'}
                  borderColor={colors.secondary}
                  placeholder="John Doe"
                  keyboardType="default"
                  placeholderTextColor={colors.textSecondary}
                  inputColor={colors.textPrimary}
                  autoCorrect={false}
                />
              </View>
              <Text
                style={{
                  ...stylesInventoryByID.titleOfInput,
                  color: colors.textPrimary,
                }}>
                Tiempo de funcionamiento
              </Text>
              <View style={{marginBottom: 13}}>
                <InputGeneric
                  control={control}
                  name={'tiempoDeFuncionamiento'}
                  borderColor={colors.secondary}
                  placeholder="4 (en Horas)"
                  keyboardType="number-pad"
                  placeholderTextColor={colors.textSecondary}
                  inputColor={colors.textPrimary}
                  autoCorrect={false}
                />
              </View>
              <Text
                style={{
                  ...stylesInventoryByID.titleOfInput,
                  color: colors.textPrimary,
                }}>
                Tiempo de reparación
              </Text>
              <View style={{marginBottom: 13}}>
                <InputGeneric
                  control={control}
                  name={'tiempoDeReparacion'}
                  borderColor={colors.secondary}
                  placeholder="3 (en Horas)"
                  keyboardType="number-pad"
                  placeholderTextColor={colors.textSecondary}
                  inputColor={colors.textPrimary}
                  autoCorrect={false}
                />
              </View>
              <Text
                style={{
                  ...stylesInventoryByID.titleOfInput,
                  color: colors.textPrimary,
                }}>
                Presenta fallas ?
              </Text>
              <View style={{marginBottom: 13}}>
                <InputSelect
                  borderColor={colors.secondary}
                  control={control}
                  name="presentaFalla"
                  placeholder="Por establecer"
                  colorValueSelected={colors.textPrimary}
                  placeholderTextColor={colors.textSecondary}
                  itemArr={[
                    {label: 'Si', value: 'si'},
                    {label: 'No', value: 'no'},
                  ]}
                />
              </View>
              {presentaFallaWatcher === 'si' && (
                <>
                  <Text
                    style={{
                      ...stylesInventoryByID.titleOfInput,
                      color: colors.textPrimary,
                    }}>
                    Tiempo de falla
                  </Text>
                  <View style={{marginBottom: 13}}>
                    <InputGeneric
                      control={control}
                      name={'tiempoDeFalla'}
                      borderColor={colors.secondary}
                      placeholder="1 (en Horas)"
                      keyboardType="number-pad"
                      placeholderTextColor={colors.textSecondary}
                      inputColor={colors.textPrimary}
                      autoCorrect={false}
                    />
                  </View>
                </>
              )}
              <Text
                style={{
                  ...stylesInventoryByID.titleOfInput,
                  color: colors.textPrimary,
                }}>
                Maquina de relación
              </Text>
              <View style={{marginBottom: 13}}>
                <InputSelect
                  borderColor={colors.secondary}
                  control={control}
                  name="maquina_id_relacion"
                  placeholder="MAQ_YYYY"
                  colorValueSelected={colors.textPrimary}
                  placeholderTextColor={colors.textSecondary}
                  itemArr={idxIdRelationMaq}
                />
              </View>
              <View style={{marginBottom: 15}}>
                <Button
                  isLoading={isLoading}
                  buttonStyle={{
                    ...stylesInventoryByID.btnSaveInfo,
                    backgroundColor: colors.card,
                  }}
                  activeOpacity={0.9}
                  onPress={onSubmit(handleCreateFollow)}
                  textContent={
                    <Text
                      style={{
                        ...stylesInventoryByID.textBtnSaveInfo,
                        color: colors.textSecondary,
                      }}>
                      Crear seguimiento
                    </Text>
                  }
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
