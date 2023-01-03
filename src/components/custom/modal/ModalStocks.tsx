import React, {useContext} from 'react';
import {
  Modal,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useFormContext} from 'react-hook-form';

import {ThemeContext, UIContext} from '../../../context';
import {
  IPropsModalStocks,
  ISingleReplacement,
  stylesInventoryByID,
} from '../../../screens';
import {InputGeneric} from '../Inputs';
import {Button} from '../Button';

export const ModalStocks = ({
  isLoading,
  handleUpdateStock,
}: IPropsModalStocks) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const {isUpdateStocksModal, toggleModalStocks} = useContext(UIContext);
  const {
    control,
    handleSubmit: onSubmit,
    watch,
  } = useFormContext<ISingleReplacement>();
  const existencia = watch('existencia');
  console.log(typeof existencia);
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={colors.secondary}
        showHideTransition="slide"
        barStyle="default"
      />
      <Modal
        visible={isUpdateStocksModal}
        transparent={true}
        onRequestClose={() => toggleModalStocks()}
        animationType={'fade'}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}>
          <TouchableOpacity
            onPress={toggleModalStocks}
            activeOpacity={1}
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              zIndex: -1,
            }}
          />
          <View
            style={{
              ...stylesInventoryByID.modalContent,
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
                Existencias
              </Text>
              <View style={{flexGrow: 1}} />
              <AntDesign
                onPress={toggleModalStocks}
                name="close"
                size={35}
                color={colors.textPrimary}
              />
            </View>
            <View style={{marginBottom: 13}}>
              <InputGeneric
                control={control}
                name={'existencia'}
                borderColor={colors.secondary}
                placeholder="49"
                keyboardType="number-pad"
                placeholderTextColor={colors.textSecondary}
                inputColor={colors.textPrimary}
                autoCorrect={false}
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
                onPress={onSubmit(handleUpdateStock)}
                textContent={
                  <Text
                    style={{
                      ...stylesInventoryByID.textBtnSaveInfo,
                      color: colors.textSecondary,
                    }}>
                    Actualizar Información
                  </Text>
                }
              />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
