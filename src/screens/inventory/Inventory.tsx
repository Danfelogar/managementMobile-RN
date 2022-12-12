import React, {useContext} from 'react';
import {View, Text, SafeAreaView, StatusBar, FlatList} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {useInventory} from './useInventory';
import {stylesInventory} from './stylesInventory';
import {ModalFilter} from '../../components';
import {InventoryContext, UIContext} from '../../context';
import {InventoryCard} from './components';

export const Inventory = () => {
  const {changeModalFilterInventory} = useContext(UIContext);
  const {dataInventory} = useContext(InventoryContext);
  const {background, secondary} = useInventory();
  // console.log({dataInventory});
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: secondary}}>
      <StatusBar
        backgroundColor={secondary}
        showHideTransition="slide"
        barStyle="default"
      />
      <View style={{backgroundColor: secondary}}>
        <View style={{...stylesInventory.wrapperHeaderIcon}}>
          <AntDesign
            name="qrcode"
            style={{marginHorizontal: 12}}
            size={31}
            color={'#fff'}
          />
          <IconFeather
            onPress={changeModalFilterInventory}
            name="filter"
            size={31}
            color={'#fff'}
          />
        </View>
        <View style={{...stylesInventory.wrapperHeaderText}}>
          <Text style={stylesInventory.textTitleHeader}>Inventario</Text>
          <Text style={stylesInventory.textBodyHeader}>
            Maquinas - Repuestos
          </Text>
        </View>
      </View>
      <FlatList
        data={dataInventory}
        style={{
          flex: 1,
          backgroundColor: background,
          paddingHorizontal: 20,
          paddingTop: 13,
        }}
        contentContainerStyle={{paddingBottom: 98}}
        keyExtractor={item => item._id}
        renderItem={({item}) => <InventoryCard key={item._id} item={item} />}
        // extraData={selectedId}
      />
      <ModalFilter />
    </SafeAreaView>
  );
};
