import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../navigation';
import {useInventoryByID} from './useInventoryByID';

interface Props
  extends StackScreenProps<RootStackParams, 'NavigationInventoryByID'> {}

export const InventoryByID = ({route, navigation}: Props) => {
  const {singleInventoryID} = route.params;
  const {singleInventory} = useInventoryByID({singleInventoryID});

  console.log({singleInventory});
  console.log(singleInventory?.nombre);

  return (
    <View style={{flex: 1}}>
      <Text>{singleInventory?.nombre}</Text>

      <Text style={{color: 'orange'}}>xxxx</Text>
    </View>
  );
};
