import React, {useContext} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {useInventory} from './useInventory';
import {stylesInventory} from './stylesInventory';
import {ModalFilter} from '../../components';
import {UIContext} from '../../context';

export const Inventory = () => {
  const {changeModalFilterInventory} = useContext(UIContext);
  const {
    textPrimary,
    textSecondary,
    background,
    // primary,
    secondary,
    tertiary,
    card,
  } = useInventory();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: secondary}}>
      <View style={{backgroundColor: secondary}}>
        <View style={{...stylesInventory.wrapperHeaderIcon}}>
          <AntDesign
            name="qrcode"
            style={{marginHorizontal: 12}}
            size={31}
            color={textPrimary}
          />
          <IconFeather
            onPress={changeModalFilterInventory}
            name="filter"
            size={31}
            color={textPrimary}
          />
        </View>
        <View style={{...stylesInventory.wrapperHeaderText}}>
          <Text
            style={{
              ...stylesInventory.textTitleHeader,
              color: textPrimary,
            }}>
            Inventario
          </Text>
          <Text
            style={{
              ...stylesInventory.textBodyHeader,
              color: textSecondary,
            }}>
            Maquinas - Repuestos
          </Text>
        </View>
      </View>
      <ScrollView
        style={{
          backgroundColor: background,
          paddingHorizontal: 20,
        }}>
        <View style={{...stylesInventory.wrapperListInventory}}>
          <View
            style={{
              ...stylesInventory.wrapperContentInventoryList,
              backgroundColor: card,
            }}>
            <View style={{...stylesInventory.wrapperImgContainer}}>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 25,
                  backgroundColor: tertiary,
                }}
              />
            </View>
            <View style={{...stylesInventory.wrapperTextContainer}}>
              <Text
                style={{...stylesInventory.textTitleCard, color: textPrimary}}>
                MAQ1-REP100
              </Text>
              <Text
                style={{
                  ...stylesInventory.textTypeInventory,
                  color: textSecondary,
                }}>
                Maquina
              </Text>
              <Text
                style={{
                  ...stylesInventory.textTypeInventory,
                  color: textSecondary,
                }}>
                20/10/2020
              </Text>
            </View>
            <View style={{...stylesInventory.wrapperIndicatorContainer}}>
              <View
                style={{
                  ...stylesInventory.contentTypeInventory,
                  backgroundColor: '#88c071',
                }}>
                <Text
                  style={{
                    ...stylesInventory.textTypeInventory,
                    color: textPrimary,
                    paddingVertical: 8,
                    alignSelf: 'center',
                  }}>
                  Bueno
                </Text>
              </View>
              <Text
                style={{
                  ...stylesInventory.textTypeInventory,
                  color: textSecondary,
                  alignSelf: 'center',
                  marginTop: 5,
                }}>
                Exs: 10
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <ModalFilter />
    </SafeAreaView>
  );
};
