import React, {useContext} from 'react';
import {
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useFormContext} from 'react-hook-form';
import IconFeather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {IOT, stylesCalendar, useCalendar} from '../../../screens';
import {OTsContext, UIContext} from '../../../context';
import {InputDataPicker, InputGeneric, InputSelect} from '../Inputs';
import {width} from '../../../helpers';

export const ModalOT = () => {
  const {isOpenOTModal, toggleModalOTs} = useContext(UIContext);
  const {isLoading, isUpdateOT, oTForUpdate} = useContext(OTsContext);
  const {
    textPrimary,
    textSecondary,
    background,
    primary,
    secondary,
    tertiary,
    card,
    idxIdRelationMaq,
    idxIdRelationRep,
    idxUsersMttos,
    handleCreateOrUpdateOT,
  } = useCalendar();
  const {control, handleSubmit: onSubmit} = useFormContext<IOT>();
  return (
    <SafeAreaView>
      <Modal
        visible={isOpenOTModal}
        transparent={true}
        onRequestClose={toggleModalOTs}
        animationType={'slide'}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}>
          <TouchableOpacity
            onPress={toggleModalOTs}
            activeOpacity={1}
            style={{flex: Platform.OS === 'android' ? 0.075 : 0.13}}
          />
          <View
            style={{
              ...stylesCalendar.modalContent,
              backgroundColor: background,
            }}>
            <View style={{...stylesCalendar.wrapperHeaderOT}}>
              <IconFeather name="file-text" size={31} color={secondary} />
              <Text
                style={{
                  ...stylesCalendar.titleModalOT,
                  color: textPrimary,
                }}>
                {isUpdateOT
                  ? `Editando OT: ${oTForUpdate?.slug}`
                  : 'Creando OT'}
              </Text>
              <View style={{flexGrow: 1}} />
              <AntDesign
                onPress={toggleModalOTs}
                name="close"
                size={35}
                color={textPrimary}
              />
            </View>
            <ScrollView style={{marginTop: 14}}>
              <Text
                style={{
                  ...stylesCalendar.titleOfInput,
                  color: textPrimary,
                }}>
                Maquina a realizar mantenimiento(maquina)
              </Text>
              <View style={{marginBottom: 13}}>
                <InputSelect
                  borderColor={secondary}
                  control={control}
                  name="maquina"
                  placeholder="MAQ_YYYY"
                  colorValueSelected={textPrimary}
                  placeholderTextColor={textSecondary}
                  itemArr={idxIdRelationMaq}
                />
              </View>
              <Text
                style={{
                  ...stylesCalendar.titleOfInput,
                  color: textPrimary,
                }}>
                Slug
              </Text>
              <View style={{marginBottom: 13}}>
                <InputGeneric
                  control={control}
                  name={'slug'}
                  borderColor={secondary}
                  placeholder="OT000X"
                  keyboardType="web-search"
                  placeholderTextColor={textSecondary}
                  inputColor={textPrimary}
                  autoCorrect={false}
                />
              </View>
              <Text
                style={{
                  ...stylesCalendar.titleOfInput,
                  color: textPrimary,
                }}>
                Repuesto a necesitar
              </Text>
              <View style={{marginBottom: 13}}>
                <InputSelect
                  borderColor={secondary}
                  control={control}
                  name="repuesto"
                  placeholder="YYYY Existencias: YY"
                  colorValueSelected={textPrimary}
                  placeholderTextColor={textSecondary}
                  itemArr={idxIdRelationRep}
                />
              </View>
              <Text
                style={{
                  ...stylesCalendar.titleOfInput,
                  color: textPrimary,
                }}>
                Encargado del mantenimiento
              </Text>
              <View style={{marginBottom: 13}}>
                <InputSelect
                  borderColor={secondary}
                  control={control}
                  name="tecnico_ing"
                  placeholder="John Doe"
                  colorValueSelected={textPrimary}
                  placeholderTextColor={textSecondary}
                  itemArr={idxUsersMttos}
                />
              </View>
              <Text
                style={{
                  ...stylesCalendar.titleOfInput,
                  color: textPrimary,
                }}>
                Estado de la OT
              </Text>
              <View style={{marginBottom: 13}}>
                <InputSelect
                  borderColor={secondary}
                  control={control}
                  name="estado_de_OT"
                  placeholder="Por establecer"
                  colorValueSelected={textPrimary}
                  placeholderTextColor={textSecondary}
                  itemArr={[
                    {label: 'Pendiente', value: 'pendiente'},
                    {label: 'En Proceso', value: 'en_proceso'},
                    {label: 'Finalizada', value: 'finalizada'},
                  ]}
                />
              </View>
              <Text
                style={{
                  ...stylesCalendar.titleOfInput,
                  color: textPrimary,
                }}>
                Numero de orden de compra
              </Text>
              <View style={{marginBottom: 13}}>
                <InputGeneric
                  control={control}
                  name={'numero_de_orden_de_compra'}
                  borderColor={secondary}
                  placeholder="ABC-123"
                  keyboardType="web-search"
                  placeholderTextColor={textSecondary}
                  inputColor={textPrimary}
                  autoCorrect={false}
                />
              </View>
              <Text
                style={{
                  ...stylesCalendar.titleOfInput,
                  color: textPrimary,
                }}>
                Fecha de expedición
              </Text>
              <View style={{marginBottom: 13}}>
                <InputDataPicker
                  control={control}
                  name={'fecha_expedicion'}
                  widthBtn={width / (Platform.OS === 'android' ? 1.65 : 1.8)}
                />
              </View>
              <Text
                style={{
                  ...stylesCalendar.titleOfInput,
                  color: textPrimary,
                }}>
                Fecha de cierre
              </Text>
              <View style={{marginBottom: 13}}>
                <InputDataPicker
                  control={control}
                  name={'fecha_cierre'}
                  widthBtn={width / (Platform.OS === 'android' ? 1.65 : 1.8)}
                />
              </View>
              <Text
                style={{
                  ...stylesCalendar.titleOfInput,
                  color: textPrimary,
                }}>
                Tiempo de ejecución
              </Text>
              <View style={{marginBottom: 13}}>
                <InputGeneric
                  control={control}
                  name={'tiempoDeEjecucion'}
                  borderColor={secondary}
                  placeholder="15"
                  keyboardType="numeric"
                  placeholderTextColor={textSecondary}
                  inputColor={textPrimary}
                  autoCorrect={false}
                />
              </View>
              <Text
                style={{
                  ...stylesCalendar.titleOfInput,
                  color: textPrimary,
                }}>
                Imagen(imgDeLaMaquina)
              </Text>
              <View style={{marginBottom: 13}} />
              <Text
                style={{
                  ...stylesCalendar.titleOfInput,
                  color: textPrimary,
                }}>
                Tareas
              </Text>
              <View style={{marginBottom: 13}}>
                <InputGeneric
                  control={control}
                  name={'tareas'}
                  borderColor={secondary}
                  placeholder="La maquina necesita un par de ajustes en..."
                  keyboardType="default"
                  placeholderTextColor={textSecondary}
                  inputColor={textPrimary}
                  autoCorrect={false}
                  multiline
                  heightMultiline={88}
                  multilineStyle={{height: 88}}
                />
              </View>
              <Text
                style={{
                  ...stylesCalendar.titleOfInput,
                  color: textPrimary,
                }}>
                Comentarios
              </Text>
              <View style={{marginBottom: 13}}>
                <InputGeneric
                  control={control}
                  name={'comentario'}
                  borderColor={secondary}
                  placeholder="Se debe de revisar los accesorios de la maquina ..."
                  keyboardType="default"
                  placeholderTextColor={textSecondary}
                  inputColor={textPrimary}
                  autoCorrect={false}
                  multiline
                  heightMultiline={110}
                  multilineStyle={{height: 110}}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
