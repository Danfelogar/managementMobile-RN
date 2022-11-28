import React, {useContext} from 'react';
import {
  Modal,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {useModalFilter} from '../../../screens';
import {stylesInventory} from '../../../screens/inventory/stylesInventory';
import {InputSearch} from '../Inputs';
import {width} from '../../../helpers';
import {Button} from '../Button';
import {UIContext} from '../../../context';

export const ModalFilter = () => {
  const {isOpenFilterInventory, changeModalFilterInventory} =
    useContext(UIContext);
  const {
    textPrimary,
    textSecondary,
    background,
    primary,
    secondary,
    tertiary,
    card,
  } = useModalFilter();
  return (
    <SafeAreaView>
      <Modal
        visible={isOpenFilterInventory}
        transparent={true}
        onRequestClose={() => changeModalFilterInventory()}
        animationType={'slide'}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}>
          <TouchableOpacity
            onPress={changeModalFilterInventory}
            activeOpacity={1}
            style={{flex: 0.48}}
          />
          <View
            style={{
              ...stylesInventory.modalContent,
              backgroundColor: background,
            }}>
            <View style={{...stylesInventory.wrapperHeaderFilter}}>
              <IconFeather name="filter" size={31} color={secondary} />
              <Text
                style={{
                  ...stylesInventory.titleModalFilters,
                  color: textPrimary,
                }}>
                Filtros
              </Text>
              <View style={{flexGrow: 1}} />
              <AntDesign
                onPress={changeModalFilterInventory}
                name="close"
                size={35}
                color={textPrimary}
              />
            </View>
            <InputSearch
              keyboardType="default"
              borderColor="transparent"
              backgroundColor={card}
              firstIcon={
                <IconFeather name="search" size={31} color={textSecondary} />
              }
              placeholder="Escribe una maquina o repuesto"
              placeholderTextColor={textSecondary}
              inputColor={textPrimary}
              onChange={() => {}}
            />
            <ScrollView style={{marginTop: 14}}>
              <Text
                style={{
                  ...stylesInventory.titleOfSubFilters,
                  color: textPrimary,
                }}>
                Tipo De Inventario
              </Text>
              <View style={{...stylesInventory.contentSelectors}}>
                <View
                  style={{
                    ...stylesInventory.cornerLeftBox,
                    borderColor: primary,
                    width: width / 3.9,
                  }}>
                  <Text
                    style={{
                      ...stylesInventory.textOptionsFilter,
                      color: textSecondary,
                    }}>
                    Maquina
                  </Text>
                </View>
                <View
                  style={{
                    ...stylesInventory.centerBox,
                    borderColor: primary,
                    width: width / 3.9,
                  }}>
                  <Text
                    style={{
                      ...stylesInventory.textOptionsFilter,
                      color: textSecondary,
                    }}>
                    Repuesto
                  </Text>
                </View>
                <View
                  style={{
                    ...stylesInventory.cornerRightBox,
                    borderColor: primary,
                    width: width / 3.9,
                  }}>
                  <Text
                    style={{
                      ...stylesInventory.textOptionsFilter,
                      color: textSecondary,
                    }}>
                    Todos
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  ...stylesInventory.titleOfSubFilters,
                  color: textPrimary,
                }}>
                Estado
              </Text>
              <View style={{...stylesInventory.contentSelectors}}>
                <View
                  style={{
                    ...stylesInventory.cornerLeftBox,
                    borderColor: primary,
                    width: width / 4.5,
                  }}>
                  <Text
                    style={{
                      ...stylesInventory.textOptionsFilter,
                      color: textSecondary,
                    }}>
                    Bueno
                  </Text>
                </View>
                <View
                  style={{
                    ...stylesInventory.centerBox,
                    borderColor: primary,
                    width: width / 4.5,
                  }}>
                  <Text
                    style={{
                      ...stylesInventory.textOptionsFilter,
                      color: textSecondary,
                    }}>
                    Malo
                  </Text>
                </View>
                <View
                  style={{
                    ...stylesInventory.centerBox,
                    borderColor: primary,
                    width: width / 4.5,
                  }}>
                  <Text
                    style={{
                      ...stylesInventory.textOptionsFilter,
                      color: textSecondary,
                    }}>
                    Regular
                  </Text>
                </View>
                <View
                  style={{
                    ...stylesInventory.cornerRightBox,
                    borderColor: primary,
                    width: width / 4.5,
                  }}>
                  <Text
                    style={{
                      ...stylesInventory.textOptionsFilter,
                      color: textSecondary,
                    }}>
                    Todos
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  ...stylesInventory.titleOfSubFilters,
                  color: textPrimary,
                }}>
                Existencias
              </Text>
              <View style={{...stylesInventory.contentSelectors}}>
                <View
                  style={{
                    ...stylesInventory.cornerLeftBox,
                    borderColor: primary,
                    width: width / 4.5,
                  }}>
                  <Text
                    style={{
                      ...stylesInventory.textOptionsFilter,
                      color: textSecondary,
                    }}>
                    {'< 10'}
                  </Text>
                </View>
                <View
                  style={{
                    ...stylesInventory.centerBox,
                    borderColor: primary,
                    width: width / 4.5,
                  }}>
                  <Text
                    style={{
                      ...stylesInventory.textOptionsFilter,
                      color: textSecondary,
                    }}>
                    11 - 30
                  </Text>
                </View>
                <View
                  style={{
                    ...stylesInventory.centerBox,
                    borderColor: primary,
                    width: width / 4.5,
                  }}>
                  <Text
                    style={{
                      ...stylesInventory.textOptionsFilter,
                      color: textSecondary,
                    }}>
                    {'> 31'}
                  </Text>
                </View>
                <View
                  style={{
                    ...stylesInventory.cornerRightBox,
                    borderColor: primary,
                    width: width / 4.5,
                  }}>
                  <Text
                    style={{
                      ...stylesInventory.textOptionsFilter,
                      color: textSecondary,
                    }}>
                    Todos
                  </Text>
                </View>
              </View>
              <View
                style={{
                  ...stylesInventory.contentSelectors,
                  justifyContent: 'flex-start',
                }}>
                <Button
                  isLoading={false}
                  buttonStyle={{
                    ...stylesInventory.btnFilter,
                    backgroundColor: tertiary,
                  }}
                  activeOpacity={0.9}
                  onPress={() => console.log('testing filter')}
                  textContent={
                    <Text
                      style={{
                        ...stylesInventory.titleModalFilters,
                        color: textPrimary,
                      }}>
                      FILTRAR
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
