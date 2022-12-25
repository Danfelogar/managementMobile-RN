import React, {useRef, useState} from 'react';
import {size} from 'lodash';
import {
  Image,
  ImageErrorEventData,
  NativeSyntheticEvent,
  View,
  TouchableOpacity,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Feather from 'react-native-vector-icons/Feather';

import {height, width} from '../../../helpers';
import {stylesInventoryByID} from '../stylesInventoryByID';

interface Props {
  arrImg: string[];
  colorArrow: string;
  colorActiveDot: string;
}

// export const SnapCarouselByID = ({arrImg}: Props) => {
export const SnapCarouselByID = ({
  arrImg,
  colorArrow,
  colorActiveDot,
}: Props) => {
  const carouselRef: any = useRef(null);
  const [catchError, setCatchError] =
    useState<NativeSyntheticEvent<ImageErrorEventData>>();
  const [idxActive, setIdxActive] = useState(0);
  const renderItem = (item: string) => {
    return (
      <View style={{...stylesInventoryByID.contentCardForSnapCarousel}}>
        <Image
          style={{...stylesInventoryByID.contentImgCardForSnap}}
          onError={e => setCatchError(e)}
          source={{
            uri: !catchError
              ? item
              : 'https://cdn-icons-png.flaticon.com/512/2748/2748558.png',
          }}
        />
      </View>
    );
  };

  return (
    <View style={{...stylesInventoryByID.wrapperSnapCarouselByID}}>
      <TouchableOpacity
        activeOpacity={0.86}
        style={{
          position: 'absolute',
          zIndex: 2,
          left: 0,
        }}
        onPress={() => carouselRef.current.snapToPrev()}>
        <Feather
          name="arrow-left-circle"
          size={height / 20}
          color={colorArrow}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.86}
        style={{
          position: 'absolute',
          zIndex: 2,
          right: 0,
        }}
        onPress={() => carouselRef.current.snapToNext()}>
        <Feather
          name="arrow-right-circle"
          size={height / 20}
          color={colorArrow}
        />
      </TouchableOpacity>
      <Carousel
        ref={ref => (carouselRef.current = ref)}
        layout="default"
        data={arrImg}
        renderItem={({item}: {item: string}) => renderItem(item)}
        sliderWidth={width}
        itemWidth={width / 1.5}
        itemHeight={650}
        sliderHeight={650}
        onSnapToItem={idx => setIdxActive(idx)}
      />
      <Pagination
        dotsLength={size(arrImg)}
        activeDotIndex={idxActive}
        containerStyle={stylesInventoryByID.containerPagination}
        dotStyle={{
          ...stylesInventoryByID.dotActive,
          backgroundColor: colorActiveDot,
        }}
        inactiveDotStyle={stylesInventoryByID.dotInactive}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.6}
      />
    </View>
  );
};
