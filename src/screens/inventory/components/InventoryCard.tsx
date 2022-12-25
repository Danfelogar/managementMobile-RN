import React, {useState} from 'react';
import {
  Image,
  ImageErrorEventData,
  NativeSyntheticEvent,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {stylesInventory} from '../stylesInventory';
import {IInventario} from '../types';
import {useInventory} from '../useInventory';
import moment from 'moment';

interface Props {
  item: IInventario;
}

export const InventoryCard = ({item}: Props) => {
  const [catchError, setCatchError] =
    useState<NativeSyntheticEvent<ImageErrorEventData>>();
  const {textPrimary, textSecondary, card, changeNavigateSingleInventory} =
    useInventory();
  // console.log({item});
  return (
    <View style={{...stylesInventory.wrapperListInventory}}>
      <TouchableOpacity
        activeOpacity={0.92}
        onPress={() =>
          changeNavigateSingleInventory(item._id, item.tipoInventario)
        }
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
              backgroundColor: card,
              overflow: 'hidden',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
              }}
              onError={e => setCatchError(e)}
              source={{
                uri: !catchError
                  ? item.imagenes[0]
                  : 'https://cdn-icons-png.flaticon.com/512/2748/2748558.png',
              }}
            />
          </View>
        </View>
        <View style={{...stylesInventory.wrapperTextContainer}}>
          <Text
            numberOfLines={1}
            style={{...stylesInventory.textTitleCard, color: textPrimary}}>
            {item.nombre}
          </Text>
          <Text
            style={{
              ...stylesInventory.textTypeInventory,
              color: textSecondary,
            }}>
            {item.tipoInventario === 'maquina' ? 'Maquina' : 'Repuesto'}
          </Text>
          <Text
            style={{
              ...stylesInventory.textTypeInventory,
              color: textSecondary,
            }}>
            {item.fechaDeEntrada &&
              moment(new Date(item.fechaDeEntrada)).format('YYYY/MM/DD')}
          </Text>
        </View>
        <View style={{...stylesInventory.wrapperIndicatorContainer}}>
          <View
            style={
              item.estado === 'bueno'
                ? {
                    ...stylesInventory.contentTypeInventory,
                    backgroundColor: '#88c071',
                  }
                : item.estado === 'regular'
                ? {
                    ...stylesInventory.contentTypeInventory,
                    backgroundColor: '#efb706',
                  }
                : {
                    ...stylesInventory.contentTypeInventory,
                    backgroundColor: '#ff4d4f',
                  }
            }>
            <Text
              style={{
                ...stylesInventory.textTypeInventory,
                color: '#fff',
                paddingVertical: 8,
                alignSelf: 'center',
              }}>
              {item.estado}
            </Text>
          </View>
          <Text
            style={{
              ...stylesInventory.textTypeInventory,
              color: textSecondary,
              alignSelf: 'center',
              marginTop: 5,
            }}>
            Exs: {item.existencia}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
