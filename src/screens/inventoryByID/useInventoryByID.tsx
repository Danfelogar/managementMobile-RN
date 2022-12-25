import {useContext, useEffect, useState} from 'react';

import {IPropsUseInventoryByID} from './types';
import {IInventario, ISingleReplacement} from '../inventory';
import {managementApi} from '../../services';
import {ThemeContext} from '../../context';

export const useInventoryByID = ({
  singleInventoryID,
  type,
}: IPropsUseInventoryByID) => {
  const [singleInventory, setSingleInventory] = useState<ISingleReplacement>();

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

  const getSingleMachineData = async (_id?: string): Promise<IInventario[]> => {
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

  const getSingleReplacementData = async (
    _id?: string,
  ): Promise<ISingleReplacement> => {
    return await managementApi
      .get('/admin/singleRepMobile', {
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
      if (type === 'maquina') {
        getSingleMachineData(singleInventoryID).then(res =>
          setSingleInventory(res[0]),
        );
      } else if (type === 'repuesto') {
        getSingleReplacementData(singleInventoryID).then(res =>
          setSingleInventory(res),
        );
      }
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
