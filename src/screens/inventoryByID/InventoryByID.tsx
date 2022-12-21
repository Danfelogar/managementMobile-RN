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
import moment from 'moment';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {height} from '../../helpers';
import {RootStackParams} from '../../navigation';
import {useInventoryByID} from './useInventoryByID';
import {stylesInventoryByID} from './stylesInventoryByID';
import {TouchableOpacity, Platform} from 'react-native';
import {SnapCarouselByID} from './components';

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
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
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
          </TouchableOpacity>
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
              ...stylesInventoryByID.contentTypeInventor,
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
        <View style={{...stylesInventoryByID.wrapperContentStandard}}>
          <View style={{...stylesInventoryByID.wrapperHeadContent}}>
            <Text
              style={{...stylesInventoryByID.titleName, color: textPrimary}}>
              {singleInventory?.nombre}
            </Text>
            <View
              style={
                singleInventory?.estado === 'bueno'
                  ? {
                      ...stylesInventoryByID.contentTypeInventoryForID,
                      backgroundColor: '#88c071',
                    }
                  : singleInventory?.estado === 'regular'
                  ? {
                      ...stylesInventoryByID.contentTypeInventoryForID,
                      backgroundColor: '#efb706',
                    }
                  : {
                      ...stylesInventoryByID.contentTypeInventoryForID,
                      backgroundColor: '#ff4d4f',
                    }
              }>
              <Text style={{...stylesInventoryByID.textTypeInventoryByID}}>
                {singleInventory?.estado}
              </Text>
            </View>
          </View>
          <View style={{...stylesInventoryByID.wrapperStatsGeneralContent}}>
            <View
              style={{
                ...stylesInventoryByID.wrapperGenericCardForStats,
                backgroundColor: background,
              }}>
              <View style={{...stylesInventoryByID.wrapperHeadCard}}>
                <Fontisto name="date" size={height / 32} color={secondary} />
                <Text
                  style={{
                    ...stylesInventoryByID.titleCard,
                    color: textPrimary,
                  }}>
                  Registro
                </Text>
              </View>
              <Text
                style={{
                  ...stylesInventoryByID.textContentCard,
                  color: textPrimary,
                }}>
                Entrada:{' '}
                {moment(new Date(singleInventory?.fechaDeEntrada!)).format(
                  'YYYY-MM-DD',
                )}
              </Text>
              <Text
                style={{
                  ...stylesInventoryByID.textContentCard,
                  color: textPrimary,
                }}>
                Actualización:{' '}
                {moment(
                  new Date(singleInventory?.fechaDeActualizacion!),
                ).format('YYYY-MM-DD')}
              </Text>
            </View>
            <View
              style={{
                ...stylesInventoryByID.wrapperGenericCardForStats,
                backgroundColor: background,
              }}>
              <View style={{...stylesInventoryByID.wrapperHeadCard}}>
                <Fontisto
                  name="direction-sign"
                  size={height / 32}
                  color={secondary}
                />
                <Text
                  style={{
                    ...stylesInventoryByID.titleCard,
                    color: textPrimary,
                  }}>
                  Locación
                </Text>
              </View>
              <Text
                style={{
                  ...stylesInventoryByID.textContentCard,
                  color: textPrimary,
                }}>
                Lugar: {singleInventory?.locacion}
              </Text>
              <Text
                style={{
                  ...stylesInventoryByID.textContentCard,
                  color: textPrimary,
                }}>
                SubLoc: {singleInventory?.subLocacion}
              </Text>
            </View>
          </View>
          {singleInventory?.tipoInventario === 'maquina' && (
            <>
              <Text
                style={{
                  ...stylesInventoryByID.textBodyInventoryByID,
                  color: textSecondary,
                }}>
                {singleInventory?.observacionGeneral}
              </Text>
              <View
                style={{
                  ...stylesInventoryByID.wrapperGenericCardForStats,
                  backgroundColor: background,
                }}>
                <View style={{...stylesInventoryByID.wrapperHeadCard}}>
                  <FontAwesome
                    name="gears"
                    size={height / 32}
                    color={tertiary}
                  />
                  <Text
                    style={{
                      ...stylesInventoryByID.titleCard,
                      color: textPrimary,
                    }}>
                    Registro
                  </Text>
                </View>
                <Text
                  style={{
                    ...stylesInventoryByID.textContentCard,
                    color: textPrimary,
                  }}>
                  Capacidad nominal: {singleInventory?.capacidadNominal}
                </Text>
                <Text
                  style={{
                    ...stylesInventoryByID.textContentCard,
                    color: textPrimary,
                  }}>
                  Serie: {singleInventory?.serie}
                </Text>
                <Text
                  style={{
                    ...stylesInventoryByID.textContentCard,
                    color: textPrimary,
                  }}>
                  Marca: {singleInventory?.marca}
                </Text>
                <Text
                  style={{
                    ...stylesInventoryByID.textContentCard,
                    color: textPrimary,
                  }}>
                  Voltaje: {singleInventory?.voltaje} V
                </Text>
                <Text
                  style={{
                    ...stylesInventoryByID.textContentCard,
                    color: textPrimary,
                  }}>
                  Corriente: {singleInventory?.corriente} A
                </Text>
                <TouchableOpacity activeOpacity={0.85}>
                  <Text
                    style={{
                      ...stylesInventoryByID.textContentCard,
                      color: secondary,
                    }}>
                    Link de gráfica IND
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
          {singleInventory?.imagenes! && (
            <SnapCarouselByID
              arrImg={singleInventory?.imagenes!}
              colorArrow={secondary}
              colorActiveDot={tertiary}
            />
          )}
          <View style={{paddingBottom: Platform.OS === 'android' ? 90 : 120}} />
        </View>
      </ScrollView>
    </View>
  );
};
