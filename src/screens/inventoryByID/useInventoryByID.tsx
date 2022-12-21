import {useContext, useEffect, useState} from 'react';

import {IPropsUseInventoryByID} from './types';
import {IInventario} from '../inventory';
import {managementApi} from '../../services';
import {ThemeContext} from '../../context';

export const useInventoryByID = ({
  singleInventoryID,
}: IPropsUseInventoryByID) => {
  const [singleInventory, setSingleInventory] = useState<IInventario>();

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const {
    textPrimary,
    textSecondary,
    background,
    primary,
    secondary,
    tertiary,
    card,
    border,
  } = colors;

  const getSingleInventoryData = async (
    _id?: string,
  ): Promise<IInventario[]> => {
    return await managementApi
      .get('/admin/inventorys', {
        params: {_id},
      })
      .then(({data}) => {
        return data;
      })
      .catch(err => {
        console.log(err.message);
        return [];
      });
  };

  useEffect(() => {
    if (singleInventoryID) {
      getSingleInventoryData(singleInventoryID).then(res =>
        setSingleInventory(res[0]),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    //state
    singleInventory,
    textPrimary,
    textSecondary,
    background,
    primary,
    secondary,
    tertiary,
    card,
    border,
    //methods
    //functions
  };
};
