import React, {useContext} from 'react';
import {
  Modal,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {useModalFilter} from '../../../screens';
import {stylesInventory} from '../../../screens/inventory/stylesInventory';
import {InputSearch} from '../Inputs';
import {width} from '../../../helpers';
import {Button} from '../Button';
import {InventoryContext, UIContext} from '../../../context';

export const ModalFilter = () => {
  const {isOpenFilterInventory, changeModalFilterInventory} =
    useContext(UIContext);
  const {isLoading} = useContext(InventoryContext);
  const {
    textPrimary,
    textSecondary,
    background,
    primary,
    secondary,
    card,
    searchName,
    typeInventory,
    state,
    exist,
    stateFilters,
    setStateFilters,
    changeDataWithTheFilter,
    changeResetDataWithTheFilter,
  } = useModalFilter();
  // console.log({stateFilters});
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={secondary}
        showHideTransition="slide"
        barStyle="default"
      />
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
                <IconFeather name="search" size={21} color={textSecondary} />
              }
              placeholder="Escribe una maquina o repuesto"
              placeholderTextColor={textSecondary}
              inputColor={textPrimary}
              onChange={e => setStateFilters({...stateFilters, searchName: e})}
              value={searchName}
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
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() =>
                    setStateFilters({
                      ...stateFilters,
                      typeInventory: 'maquina',
                    })
                  }
                  style={{
                    ...stylesInventory.cornerLeftBox,
                    borderColor: primary,
                    width: width / 3.9,
                    backgroundColor:
                      typeInventory === 'maquina' ? primary : background,
                  }}>
                  <Text
                    style={{
                      ...stylesInventory.textOptionsFilter,
                      color:
                        typeInventory === 'maquina'
                          ? background
                          : textSecondary,
                    }}>
                    Maquina
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() =>
                    setStateFilters({
                      ...stateFilters,
                      typeInventory: 'repuesto',
                    })
                  }
                  style={{
                    ...stylesInventory.centerBox,
                    borderColor: primary,
                    width: width / 3.9,
                    backgroundColor:
                      typeInventory === 'repuesto' ? primary : background,
                  }}>
                  <Text
                    style={{
                      ...stylesInventory.textOptionsFilter,
                      color:
                        typeInventory === 'repuesto'
                          ? background
                          : textSecondary,
                    }}>
                    Repuesto
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() =>
                    setStateFilters({
                      ...stateFilters,
                      typeInventory: '',
                    })
                  }
                  style={{
                    ...stylesInventory.cornerRightBox,
                    borderColor: primary,
                    width: width / 3.9,
                    backgroundColor:
                      typeInventory === '' ? primary : background,
                  }}>
                  <Text
                    style={{
                      ...stylesInventory.textOptionsFilter,
                      color: typeInventory === '' ? background : textSecondary,
                    }}>
                    Todos
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  ...stylesInventory.titleOfSubFilters,
                  color: textPrimary,
                }}>
                Estado
              </Text>
              <View style={{...stylesInventory.contentSelectors}}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() =>
                    setStateFilters({
                      ...stateFilters,
                      state: 'bueno',
                    })
                  }
                  style={{
                    ...stylesInventory.cornerLeftBox,
                    borderColor: primary,
                    width: width / 4.5,
                    backgroundColor: state === 'bueno' ? primary : background,
                  }}>
                  <Text
                    style={{
                      ...stylesInventory.textOptionsFilter,
                      color: state === 'bueno' ? background : textSecondary,
                    }}>
                    Bueno
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() =>
                    setStateFilters({
                      ...stateFilters,
                      state: 'malo',
                    })
                  }
                  style={{
                    ...stylesInventory.centerBox,
                    borderColor: primary,
                    width: width / 4.5,
                    backgroundColor: state === 'malo' ? primary : background,
                  }}>
                  <Text
                    style={{
                      ...stylesInventory.textOptionsFilter,
                      color: state === 'malo' ? background : textSecondary,
                    }}>
                    Malo
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() =>
                    setStateFilters({
                      ...stateFilters,
                      state: 'regular',
                    })
                  }
                  style={{
                    ...stylesInventory.centerBox,
                    borderColor: primary,
                    width: width / 4.5,
                    backgroundColor: state === 'regular' ? primary : background,
                  }}>
                  <Text
                    style={{
                      ...stylesInventory.textOptionsFilter,
                      color: state === 'regular' ? background : textSecondary,
                    }}>
                    Regular
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() =>
                    setStateFilters({
                      ...stateFilters,
                      state: '',
                    })
                  }
                  style={{
                    ...stylesInventory.cornerRightBox,
                    borderColor: primary,
                    width: width / 4.5,
                    backgroundColor: state === '' ? primary : background,
                  }}>
                  <Text
                    style={{
                      ...stylesInventory.textOptionsFilter,
                      color: state === '' ? background : textSecondary,
                    }}>
                    Todos
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  ...stylesInventory.titleOfSubFilters,
                  color: textPrimary,
                }}>
                Existencias
              </Text>
              <View style={{...stylesInventory.contentSelectors}}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() =>
                    setStateFilters({
                      ...stateFilters,
                      exist: '-1/11',
                    })
                  }
                  style={{
                    ...stylesInventory.cornerLeftBox,
                    borderColor: primary,
                    width: width / 4.5,
                    backgroundColor: exist === '-1/11' ? primary : background,
                  }}>
                  <Text
                    style={{
                      ...stylesInventory.textOptionsFilter,
                      color: exist === '-1/11' ? background : textSecondary,
                    }}>
                    {'< 11'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() =>
                    setStateFilters({
                      ...stateFilters,
                      exist: '10/31',
                    })
                  }
                  style={{
                    ...stylesInventory.centerBox,
                    borderColor: primary,
                    width: width / 4.5,
                    backgroundColor: exist === '10/31' ? primary : background,
                  }}>
                  <Text
                    style={{
                      ...stylesInventory.textOptionsFilter,
                      color: exist === '10/31' ? background : textSecondary,
                    }}>
                    11 - 30
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() =>
                    setStateFilters({
                      ...stateFilters,
                      exist: '30/99999999999999',
                    })
                  }
                  style={{
                    ...stylesInventory.centerBox,
                    borderColor: primary,
                    width: width / 4.5,
                    backgroundColor:
                      exist === '30/99999999999999' ? primary : background,
                  }}>
                  <Text
                    style={{
                      ...stylesInventory.textOptionsFilter,
                      color:
                        exist === '30/99999999999999'
                          ? background
                          : textSecondary,
                    }}>
                    {'> 31'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() =>
                    setStateFilters({
                      ...stateFilters,
                      exist: '-1/99999999999999',
                    })
                  }
                  style={{
                    ...stylesInventory.cornerRightBox,
                    borderColor: primary,
                    width: width / 4.5,
                    backgroundColor:
                      exist === '-1/99999999999999' ? primary : background,
                  }}>
                  <Text
                    style={{
                      ...stylesInventory.textOptionsFilter,
                      color:
                        exist === '-1/99999999999999'
                          ? background
                          : textSecondary,
                    }}>
                    Todos
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  ...stylesInventory.contentSelectors,
                  justifyContent: 'space-between',
                }}>
                <Button
                  isLoading={isLoading}
                  buttonStyle={{
                    ...stylesInventory.btnFilter,
                    backgroundColor: primary,
                  }}
                  colorSpinierLoading={background}
                  activeOpacity={0.9}
                  onPress={changeDataWithTheFilter}
                  textContent={
                    <Text
                      style={{
                        ...stylesInventory.titleBntFilters,
                        color: background,
                      }}>
                      Filtrar
                    </Text>
                  }
                />
                <Button
                  isLoading={isLoading}
                  buttonStyle={{
                    ...stylesInventory.btnFilter,
                    backgroundColor: '#ff4d4f',
                  }}
                  colorSpinierLoading={'#fff'}
                  activeOpacity={0.9}
                  onPress={changeResetDataWithTheFilter}
                  textContent={
                    <Text
                      style={{
                        ...stylesInventory.titleBntFilters,
                        color: background,
                      }}>
                      Limpiar Filtro
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
