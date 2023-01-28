import {useContext, useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {yupResolver} from '@hookform/resolvers/yup';

import {IPropsUseInventoryByID, ISeguimiento} from './types';
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
  // launchImageLibrary,
} from 'react-native-image-picker';
import {source as Isource} from '../../components';
import {
  distanceCompareInKm,
  validationCreateFollow,
  validationUpdateInventoryStock,
} from '../../helpers';
import {useForm} from 'react-hook-form';

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
  const {
    toggleSnackBarError,
    toggleSnackBarSuccess,
    toggleModalStocks,
    toggleModalFollow,
    isUpdateStocksModal,
    isSnackbarError,
    isSnackbarSuccess,
  } = useContext(UIContext);
  const {gpsState, askGPSPermissions, askCameraPermissions, cameraState} =
    useContext(PermissionsContext);
  const {inventoryForUpdate, changeInventoryForUpdate} =
    useContext(InventoryContext);
  const [textError, setTextError] = useState<string | undefined>(undefined);
  const [textSuccess, setTextSuccess] = useState<string | undefined>(undefined);
  const [singleInventory, setSingleInventory] = useState<ISingleReplacement>();
  const [isLoadingStockOrAddTracking, setIsLoadingStockOrAddTracking] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
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
    if (singleInventoryID && singleInventory === undefined) {
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
  }, [singleInventoryID,type]);

  const formMethodsCreate = useForm<ISeguimiento>({
    resolver: yupResolver(validationCreateFollow),
  });

  const formMethodsUpdate = useForm<Partial<ISingleReplacement>>({
    resolver: yupResolver(validationUpdateInventoryStock),
  });

  useEffect(() => {
    if (inventoryForUpdate?._id) {
      formMethodsUpdate.reset({
        ...inventoryForUpdate,
        existencia: inventoryForUpdate.existencia.toString(),
      });
    }

    return () => {
      formMethodsUpdate.reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inventoryForUpdate, isUpdateStocksModal]);

  const handleUpdateStock = async (data: Partial<ISingleReplacement>) => {
    //TODO: hacer servicio de actualización
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    // console.log({data});
    return await managementApi
      .put('/admin/inventorys', {
        ...data,
        existencia: Number(data.existencia),
      })
      .then(() => {
        setTextSuccess(
          `Se han actualizado con éxito las existencias del repuesto: ${data.nombre}`,
        );
        getSingleReplacementData(singleInventoryID).then(res =>
          setSingleInventory(res),
        );
        toggleModalStocks();
        toggleSnackBarSuccess();
        return setIsLoading(false);
      })
      .catch(err => {
        console.log(err.message);
        setTextError(err.message);
        toggleSnackBarError();
        toggleModalStocks();
        return setIsLoading(false);
      });
  };

  const handleCreateFollow = async (data: Partial<ISeguimiento>) => {
    if (isLoading2) {
      return;
    }
    setIsLoading2(true);
    // console.log({data});
    // console.log(
    //   typeof data.tiempoDeFuncionamiento,
    //   typeof data.tiempoDeReparacion,
    //   typeof data.tiempoDeFalla,
    //   typeof Number(data.maquina_id_relacion),
    // );
    return await managementApi
      .post('/admin/follows', {
        ...data,
        maquina_id_relacion: Number(data.maquina_id_relacion),
      })
      .then(() => {
        setTextSuccess('Se ha creado con éxito el seguimiento');
        getSingleReplacementData(singleInventoryID).then(res =>
          setSingleInventory(res),
        );
        toggleModalFollow();
        toggleSnackBarSuccess();
        return setIsLoading2(false);
      })
      .catch(err => {
        console.log(err.message);
        setTextError(err.message);
        toggleSnackBarError();
        toggleModalFollow();
        return setIsLoading2(false);
      });
  };

  const validationImgForStock = async (
    imgReference: string,
    imgDemo: string,
  ) => {
    // console.log({imgReference, imgDemo});
    return await managementApi
      .post('/validation/img', null, {
        params: {
          imgReference: imgReference,
          imgDemo: imgDemo,
        },
      })
      .then(({data}) => {
        // console.log({data});
        return data;
      })
      .catch(err => {
        console.log(err.message);
        setTextError(err.message);
        return toggleSnackBarError();
      });
  };

  const getPhotographs = async (imgBase: string) => {
    return new Promise((resolve, reject) => {
      launchCamera(
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
            console.log({errorMessage});
            reject(errorMessage);
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
          resolve(onFilesSelected(source, imgBase));
        },
      );
    });
  };

  const onFilesSelected = async (target: Isource, imgBase: string) => {
    // console.log({target, imgBase});
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
      return validationImgForStock(imgBase, data.message);
    } catch (error: any) {
      console.log({error});
      setTextError(error.message);
      return toggleSnackBarError();
    }
  };

  const deg2rad = (deg: number) => {
    return deg * (Math.PI / 180);
  };

  const getDistanceFromLatLonInKm = (
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
    return d;
  };

  const getGeoLocation = async (lat: string, long: string) => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        position => {
          // console.log(position);
          resolve(
            getDistanceFromLatLonInKm(
              position.coords.latitude,
              position.coords.longitude,
              Number(lat),
              Number(long),
            ),
          );
        },
        error => {
          // See error code charts below.
          console.log({error});
          setTextError(error.message);
          reject(toggleSnackBarError());
        },
        optionsGPS,
      );
    });
  };

  const updateStockOrAddTracking = async (res: ISingleReplacement) => {
    if (isLoadingStockOrAddTracking) {
      return;
    }
    setIsLoadingStockOrAddTracking(true);
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
              const gpsRes = await getGeoLocation(
                res.coordenadas_gps?.split(',')[0]!,
                res.coordenadas_gps?.split(',')[1]!,
              );
              // console.log({gpsRes});
              if (typeof gpsRes !== 'number') {
                setTextError(
                  'ha ocurrido un error en la validación por GPS, por favor revisar la consola',
                );
                setIsLoadingStockOrAddTracking(false);
                return toggleSnackBarError();
              } else if (distanceCompareInKm < gpsRes) {
                //TODO: hacer que funciones snackbar error
                setTextError(
                  ' esta por fuera del rango de los 0.2Km designados por la empresa',
                );
                setIsLoadingStockOrAddTracking(false);
                return toggleSnackBarError();
              }
            }
          });
        }
        if (res.validacionPorGPS === 'si' && gpsState === 'granted') {
          const gpsRes = await getGeoLocation(
            res.coordenadas_gps?.split(',')[0]!,
            res.coordenadas_gps?.split(',')[1]!,
          );
          // console.log({gpsRes});
          if (typeof gpsRes !== 'number') {
            setTextError(
              'ha ocurrido un error en la validación por GPS, por favor revisar la consola',
            );
            setIsLoadingStockOrAddTracking(false);
            return toggleSnackBarError();
          } else if (distanceCompareInKm < gpsRes) {
            //TODO: hacer que funciones snackbar error
            setTextError(
              ' esta por fuera del rango de los 0.2Km designados por la empresa',
            );
            setIsLoadingStockOrAddTracking(false);
            return toggleSnackBarError();
          }
        }
        if (res.validacionPorIMG === 'si' && cameraState !== 'granted') {
          //aqui va la api que valida imgs
          askCameraPermissions().then(async resp => {
            if (resp === 'granted') {
              const getPhoto: any = await getPhotographs(res.imagenes[0]);
              // console.log({getPhoto});

              if (getPhoto.message === 'Validation fails') {
                //TODO: hacer que funciones snackbar error
                setTextError(
                  ' La foto tomada no coincide con la registrada en la base de datos',
                );
                setIsLoadingStockOrAddTracking(false);
                return toggleSnackBarError();
              }
            }
          });
        }
        if (res.validacionPorIMG === 'si' && cameraState === 'granted') {
          const getPhoto: any = await getPhotographs(res.imagenes[0]);
          // console.log({getPhoto});

          if (getPhoto.message === 'Validation fails') {
            //TODO: hacer que funciones snackbar error
            setTextError(
              ' La foto tomada no coincide con la registrada en la base de datos',
            );
            setIsLoadingStockOrAddTracking(false);
            return toggleSnackBarError();
          } else if (getPhoto.message === undefined) {
            //TODO: hacer que funciones snackbar error
            setTextError(
              'Ha ocurrido algo durante la validacion de la foto, por favor revisar la consola',
            );
            setIsLoadingStockOrAddTracking(false);
            return toggleSnackBarError();
          }
        }
      }
      //TODO: retornar aqui la accion que abra el modal
      changeInventoryForUpdate(res);
      setIsLoadingStockOrAddTracking(false);
      return toggleModalStocks();
    } else if (
      res.tipoInventario === 'maquina' &&
      authorizedToAdd.includes(user?.user?.rol!) &&
      user?.user?.rol! !== 'super_admin'
    ) {
      setIsLoadingStockOrAddTracking(false);
      formMethodsCreate.reset();
      toggleModalFollow();
    } else if (user?.user?.rol! === 'super_admin') {
      if (res.tipoInventario === 'maquina') {
        //TODO: openModal for follow
        setIsLoadingStockOrAddTracking(false);
        formMethodsCreate.reset();
        toggleModalFollow();
      } else if (res.tipoInventario === 'repuesto') {
        //TODO: openModal for stocks
        changeInventoryForUpdate(res);
        setIsLoadingStockOrAddTracking(false);
        return toggleModalStocks();
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
    isSnackbarSuccess,
    textError,
    textSuccess,
    isLoadingStockOrAddTracking,
    isLoading,
    isLoading2,
    //methods
    formMethodsCreate,
    formMethodsUpdate,
    //functions
    updateStockOrAddTracking,
    toggleSnackBarError,
    toggleSnackBarSuccess,
    handleUpdateStock,
    handleCreateFollow,
  };
};
