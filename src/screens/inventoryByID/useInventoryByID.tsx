import {useContext, useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';

import {IPropsUseInventoryByID} from './types';
import {IInventario, ISingleReplacement} from '../inventory';
import {managementApi} from '../../services';
import {AuthContext, PermissionsContext, ThemeContext} from '../../context';
const optionsGPS = {
  enableHighAccuracy: true,
  timeout: 15000,
  maximumAge: 10000,
};
export const useInventoryByID = ({
  singleInventoryID,
  type,
}: IPropsUseInventoryByID) => {
  const {user} = useContext(AuthContext);
  const {gpsState, askGPSPermissions} = useContext(PermissionsContext);
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

  const addStockOrTracking = (res: ISingleReplacement) => {
    if (res.tipoInventario === 'repuesto') {
      if (res.validacionPorGPS === 'si' || res.validacionPorIMG === 'si') {
        if (res.validacionPorGPS === 'si' && gpsState !== 'granted') {
          askGPSPermissions().then(resp => {
            if (resp === 'granted') {
              Geolocation.getCurrentPosition(
                position => {
                  console.log(position);
                },
                error => {
                  // See error code charts below.
                  console.log({error});
                },
                optionsGPS,
              );
            }
          });
        }
        console.log({gpsState});
        if (res.validacionPorGPS === 'si' && gpsState === 'granted') {
          Geolocation.getCurrentPosition(
            position => {
              console.log(position);
            },
            error => {
              // See error code charts below.
              console.log({error});
            },
            optionsGPS,
          );
        }
        if (res.validacionPorIMG) {
          //aqui va la api que valida imgs
        }
      }
    }
  };

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
    addStockOrTracking,
  };
};
