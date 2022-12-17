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
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {height, width} from '../../helpers';
import {RootStackParams} from '../../navigation';
import {useInventoryByID} from './useInventoryByID';
import {stylesInventoryByID} from './stylesInventoryByID';

interface Props
  extends StackScreenProps<RootStackParams, 'NavigationInventoryByID'> {}

export const InventoryByID = ({route, navigation}: Props) => {
  const {singleInventoryID} = route.params;
  //para medir las zonas del notch o inutilizables por la pantalla si el teléfono las tiene
  const {top} = useSafeAreaInsets();
  const [catchError, setCatchError] =
    useState<NativeSyntheticEvent<ImageErrorEventData>>();
  const {
    singleInventory,
    textPrimary,
    textSecondary,
    background,
    primary,
    secondary,
    tertiary,
    card,
  } = useInventoryByID({singleInventoryID});

  console.log({singleInventory});
  console.log({top});

  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={{
          backgroundColor: background,
        }}>
        <View
          style={{
            ...stylesInventoryByID.wrapperImgMain,
            backgroundColor: card,
          }}>
          <View
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
          </View>
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            onError={e => setCatchError(e)}
            source={{
              uri: !catchError
                ? singleInventory?.imagenes[0]
                : 'https://cdn-icons-png.flaticon.com/512/2748/2748558.png',
            }}
          />
          <View
            style={{
              position: 'absolute',
              paddingHorizontal: 10,
              paddingBottom: 18,
              zIndex: 2,
              bottom: 90,
              // marginHorizontal: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
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
          <View
            style={{
              ...stylesInventoryByID.wrapperInitCardBorder,
              backgroundColor: background,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};
