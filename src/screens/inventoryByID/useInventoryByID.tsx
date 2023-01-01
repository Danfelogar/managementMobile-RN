import {useContext, useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';

import {IPropsUseInventoryByID} from './types';
import {IInventario, ISingleReplacement} from '../inventory';
import {managementApi} from '../../services';
import {
  AuthContext,
  InventoryContext,
  PermissionsContext,
  ThemeContext,
  UIContext,
} from '../../context';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {source as Isource} from '../../components';
import {distanceCompareInKm} from '../../helpers';

const authorizedToUpdate = ['admin_bodega', 'bodega'];

const authorizedToAdd = ['admin_mtto', 'mtto'];

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
  const {toggleSnackBarError, isSnackbarError} = useContext(UIContext);
  const {distanceInKm, changeDistanceInKm} = useContext(InventoryContext);
  const {gpsState, askGPSPermissions, askCameraPermissions, cameraState} =
    useContext(PermissionsContext);
  const [validationImg, setValidationImg] = useState<{
    message: string | undefined;
    response: boolean | undefined;
  }>({
    message: undefined,
    response: undefined,
  });
  const [textError, setTextError] = useState<string | undefined>(undefined);
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

  //open modals
  useEffect(() => {
    console.log({distanceInKm, validationImg});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [distanceInKm, validationImg]);

  //set snakbarerror
  useEffect(() => {
    if (distanceCompareInKm < distanceInKm) {
      //TODO: hacer que funciones snackbar error
      setTextError(
        ' esta por fuera del rango de los 0.2Km designados por la empresa',
      );
      changeDistanceInKm(0);
      toggleSnackBarError();
    } else if (validationImg.message === 'Validation fails') {
      //TODO: hacer que funciones snackbar error
      setTextError(
        ' La foto tomada no coincide con la registrada en la base de datos',
      );
      setValidationImg({
        message: undefined,
        response: undefined,
      });
      toggleSnackBarError();
    }
    return () => {
      // changeDistanceInKm(0);
      // setTextError(undefined);
      // setValidationImg({
      //   message: undefined,
      //   response: undefined,
      // });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [distanceInKm, validationImg]);

  const validationImgForStock = async (
    imgReference: string,
    imgDemo: string,
  ) => {
    // console.log({imgReference, imgDemo});
    await managementApi
      .post('/validation/img', null, {
        params: {
          imgReference: imgReference,
          imgDemo: imgDemo,
        },
      })
      .then(({data}) => {
        // console.log({data});
        setValidationImg({
          message: data.message,
          response: data.response,
        });
        return data;
      })
      .catch(err => {
        console.log(err.message);
        setTextError(err.message);
        return toggleSnackBarError();
      });
  };

  const getPhotographs = (imgBase: string) => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.7,
      },
      ({assets, didCancel, errorMessage}: ImagePickerResponse) => {
        if (didCancel) {
          return;
        }
        if (!assets) {
          return;
        }
        if (errorMessage) {
          return console.log({errorMessage});
        }
        // console.log({assets});
        const uri = assets[0]?.uri;
        const typeURL = assets[0]?.type;
        const name = assets[0]?.fileName;
        const source = {
          uri,
          type: typeURL,
          name,
        };
        onFilesSelected(source, imgBase);
      },
    );
  };

  const onFilesSelected = async (target: Isource, imgBase: string) => {
    // console.log({target});
    if (!target) {
      return;
    }

    try {
      //investigar mas sobre FormData
      const formData = new FormData();

      formData.append('file', target);
      //el 'file' es el nombre que recibe la propiedad podia ser el nombre que quisieras
      const {data} = await managementApi.post<{message: string}>(
        '/upload',
        formData,
      );

      //console.log(data);
      //seteamos la nueva imagen traida del backend con cloudinary en el formulario con useForm y renderizamos de una
      // onChange(data.message);
      validationImgForStock(imgBase, data.message);
    } catch (error: any) {
      console.log({error});
      setTextError(error.message);
      return toggleSnackBarError();
    }
  };

  const deg2rad = (deg: number) => {
    return deg * (Math.PI / 180);
  };

  const getDistanceFromLatLoninkm = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ) => {
    const R = 6371; // radius of the earth in Km
    const dLat = deg2rad(lat2 - lat1); // deg2rad below
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    // console.log({d})
    changeDistanceInKm(d);
    return d;
  };

  const getGeoLocation = (lat: string, long: string) => {
    Geolocation.getCurrentPosition(
      (position): number => {
        // console.log(position);
        return getDistanceFromLatLoninkm(
          position.coords.latitude,
          position.coords.longitude,
          Number(lat),
          Number(long),
        );
      },
      error => {
        // See error code charts below.
        console.log({error});
        setTextError(error.message);
        return toggleSnackBarError();
      },
      optionsGPS,
    );
  };

  const updateStockOrAddTracking = async (res: ISingleReplacement) => {
    if (
      (res.tipoInventario === 'repuesto' || res.tipoInventario === 'maquina') &&
      !authorizedToUpdate.includes(user?.user?.rol!) &&
      user?.user?.rol! !== 'super_admin'
    ) {
      //TODO: agregar llamada a una ventana de error
      setTextError(
        'se le restringe el acceso a esta acción, por no estar autorizado.',
      );
      toggleSnackBarError();
    } else if (
      res.tipoInventario === 'repuesto' &&
      authorizedToUpdate.includes(user?.user?.rol!) &&
      user?.user?.rol! !== 'super_admin'
    ) {
      if (res.validacionPorGPS === 'si' || res.validacionPorIMG === 'si') {
        if (res.validacionPorGPS === 'si' && gpsState !== 'granted') {
          askGPSPermissions().then(async resp => {
            if (resp === 'granted') {
              getGeoLocation(
                res.coordenadas_gps?.split(',')[0]!,
                res.coordenadas_gps?.split(',')[1]!,
              );
            }
          });
        }
        if (res.validacionPorGPS === 'si' && gpsState === 'granted') {
          getGeoLocation(
            res.coordenadas_gps?.split(',')[0]!,
            res.coordenadas_gps?.split(',')[1]!,
          );
        }
        if (res.validacionPorIMG === 'si' && cameraState !== 'granted') {
          //aqui va la api que valida imgs
          askCameraPermissions().then(async resp => {
            if (resp === 'granted') {
              getPhotographs(res.imagenes[0]);
            }
          });
        }
        if (res.validacionPorIMG === 'si' && cameraState === 'granted') {
          getPhotographs(res.imagenes[0]);
        }
      }
    } else if (
      res.tipoInventario === 'maquina' &&
      authorizedToAdd.includes(user?.user?.rol!) &&
      user?.user?.rol! !== 'super_admin'
    ) {
    } else if (user?.user?.rol! === 'super_admin') {
      if (res.tipoInventario === 'maquina') {
        //TODO: openModal for follow
      } else if (res.tipoInventario === 'repuesto') {
        //TODO: openModal for stocks
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
    isSnackbarError,
    textError,
    //methods
    //functions
    updateStockOrAddTracking,
    toggleSnackBarError,
  };
};
