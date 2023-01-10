import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import {useIsFocused} from '@react-navigation/native';

import {useInventory} from './useInventory';
import {stylesInventory} from './stylesInventory';
import {ModalFilter, Skeleton} from '../../components';
import {InventoryContext, UIContext} from '../../context';
import {InventoryCard} from './components';
import {height, width} from '../../helpers';

export const Inventory = () => {
  const {changeModalFilterInventory} = useContext(UIContext);
  const {dataInventory, isLoading, getInventoriesData} =
    useContext(InventoryContext);
  const isFocused = useIsFocused();
  const {background, secondary, textPrimary} = useInventory();
  const arrSkeleton = [0, 1, 2, 3, 4, 5, 6];
  // console.log({dataInventory});
  useEffect(() => {
    if (isFocused) {
      getInventoriesData();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: secondary}}>
      <StatusBar
        backgroundColor={secondary}
        showHideTransition="slide"
        barStyle="default"
      />
      <View style={{backgroundColor: secondary}}>
        <View style={{...stylesInventory.wrapperHeaderIcon}}>
          {/* <AntDesign
            name="qrcode"
            style={{marginHorizontal: 12}}
            size={31}
            color={'#fff'}
          /> */}
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
      {isLoading || dataInventory.length === 0 ? (
        <View
          style={{
            flex: 1,
            backgroundColor: background,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          {dataInventory.length === 0 && !isLoading && (
            <>
              <Image
                style={{
                  width: width / 1.4,
                  height: height / 3,
                  resizeMode: 'contain',
                }}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/1548/1548784.png',
                }}
              />
              <Text
                style={{
                  ...stylesInventory.textTitleHeader,
                  color: textPrimary,
                }}>
                Resultado no encontrados
              </Text>
            </>
          )}
          {isLoading && (
            <>
              {arrSkeleton.map(item => (
                <Skeleton
                  key={item}
                  style={{
                    borderRadius: 13.5,
                    marginTop: item === 0 ? 20 : 8,
                    margin: 8,
                  }}
                  height={height / 10.96}
                  width={width / 1.075}
                />
              ))}
            </>
          )}
        </View>
      ) : (
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
      )}
      <ModalFilter />
    </SafeAreaView>
  );
};
