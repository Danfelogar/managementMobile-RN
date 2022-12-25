import React, {useState} from 'react';
import {
  View,
  Text,
  ImageErrorEventData,
  NativeSyntheticEvent,
  Image,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {width} from '../../../helpers';
import {ArrMaq} from '../../inventory/types';
import {stylesInventoryByID} from '../stylesInventoryByID';

interface Props {
  arrObj: ArrMaq[];
  colorBackgroundCard: string;
  colorText: string;
}

export const SnapCarouselByRep = ({
  arrObj,
  colorBackgroundCard,
  colorText,
}: Props) => {
  const [catchError, setCatchError] =
    useState<NativeSyntheticEvent<ImageErrorEventData>>();

  const renderItem = (item: ArrMaq) => {
    return (
      <View
        style={{
          ...stylesInventoryByID.wrapperContentInventoryRep,
          backgroundColor: colorBackgroundCard,
        }}>
        <View style={{...stylesInventoryByID.wrapperImgContainerRep}}>
          <View
            style={{
              ...stylesInventoryByID.boxImgRep,
              backgroundColor: colorBackgroundCard,
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
        <View
          style={{
            ...stylesInventoryByID.wrapperTextContainerRep,
          }}>
          <Text
            numberOfLines={1}
            style={{...stylesInventoryByID.textTitleCardRep, color: colorText}}>
            {item.nombre}
          </Text>
          <Text
            style={{
              ...stylesInventoryByID.textTypeInventoryRep,
              color: colorText,
            }}>
            {item.marca}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{...stylesInventoryByID.wrapperSnapCarouselByRep}}>
      <Carousel
        layout="default"
        data={arrObj}
        renderItem={({item}: {item: ArrMaq}) => renderItem(item)}
        sliderWidth={width}
        itemWidth={width / 1.42}
        itemHeight={150}
        sliderHeight={150}
      />
    </View>
  );
};
