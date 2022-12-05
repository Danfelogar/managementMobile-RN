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
import {InputGeneric, InputSelect} from '../Inputs';

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
              <InputSelect
                borderColor={secondary}
                control={control}
                name="maquina"
                placeholder="MAQ_YYYY"
                colorValueSelected={textPrimary}
                placeholderTextColor={textSecondary}
                itemArr={idxIdRelationMaq}
              />
              <Text
                style={{
                  ...stylesCalendar.titleOfInput,
                  color: textPrimary,
                }}>
                Slug(slug)
              </Text>
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
              <Text
                style={{
                  ...stylesCalendar.titleOfInput,
                  color: textPrimary,
                }}>
                Repuesto a necesitar(repuesto)
              </Text>
              <Text
                style={{
                  ...stylesCalendar.titleOfInput,
                  color: textPrimary,
                }}>
                Encargado del mantenimiento(tecnico_ing)
              </Text>
              <Text
                style={{
                  ...stylesCalendar.titleOfInput,
                  color: textPrimary,
                }}>
                Estado de la OT(estado_de_OT)
              </Text>
              <Text
                style={{
                  ...stylesCalendar.titleOfInput,
                  color: textPrimary,
                }}>
                Numero de orden de compra
              </Text>
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
              <Text
                style={{
                  ...stylesCalendar.titleOfInput,
                  color: textPrimary,
                }}>
                Fecha de expedición(fecha_expedicion)
              </Text>
              <Text
                style={{
                  ...stylesCalendar.titleOfInput,
                  color: textPrimary,
                }}>
                Fecha de cierre(fecha_cierre)
              </Text>
              <Text
                style={{
                  ...stylesCalendar.titleOfInput,
                  color: textPrimary,
                }}>
                Tiempo de ejecución
              </Text>
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
              <Text
                style={{
                  ...stylesCalendar.titleOfInput,
                  color: textPrimary,
                }}>
                Imagen(imgDeLaMaquina)
              </Text>
              <Text
                style={{
                  ...stylesCalendar.titleOfInput,
                  color: textPrimary,
                }}>
                Tareas(tareas)
              </Text>
              <Text
                style={{
                  ...stylesCalendar.titleOfInput,
                  color: textPrimary,
                }}>
                Comentarios(comentario)
              </Text>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
