import {FC, ReactNode, useEffect, useReducer} from 'react';
import {Platform, AppState} from 'react-native';
import {
  check,
  openSettings,
  PERMISSIONS,
  PermissionStatus,
  request,
} from 'react-native-permissions';
import {PermissionsContext} from './PermissionsContext';
import {PermissionsReducer} from './permissionsReducer';

export interface PermissionsState {
  cameraState: PermissionStatus;
  galleryState: PermissionStatus;
}

const PERMISSIONS_INITIAL_STATE: PermissionsState = {
  cameraState: 'unavailable',
  galleryState: 'unavailable',
};

interface Props {
  children: ReactNode;
}

export const PermissionsProvider: FC<Props> = ({children}) => {
  const [PermissionsState, dispatch] = useReducer(
    PermissionsReducer,
    PERMISSIONS_INITIAL_STATE,
  );

  const askGalleryPermissions = async () => {
    let permissionStatus: PermissionStatus;

    if (Platform.OS === 'ios') {
      //   permissionStatus = await check(PERMISSIONS.IOS.CAMERA);
      permissionStatus = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
      dispatch({
        type: '[PERMISSIONS] Get Gallery Permissions Status',
        payload: permissionStatus,
      });
    } else {
      //   permissionStatus = await check(PERMISSIONS.ANDROID.CAMERA);
      permissionStatus = await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
      dispatch({
        type: '[PERMISSIONS] Get Gallery Permissions Status',
        payload: permissionStatus,
      });
    }

    if (permissionStatus === 'blocked' || permissionStatus === 'limited') {
      openSettings();
    }
  };

  const checkGalleryPermissions = async () => {
    let permissionStatus: PermissionStatus;

    if (Platform.OS === 'ios') {
      permissionStatus = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
    } else {
      permissionStatus = await check(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
    }

    dispatch({
      type: '[PERMISSIONS] Get Gallery Permissions Status',
      payload: permissionStatus,
    });
  };

  const askCameraPermissions = async () => {
    let permissionStatus: PermissionStatus;

    if (Platform.OS === 'ios') {
      //   permissionStatus = await check(PERMISSIONS.IOS.CAMERA);
      permissionStatus = await request(PERMISSIONS.IOS.CAMERA);
      dispatch({
        type: '[PERMISSIONS] Get Camera Permissions Status',
        payload: permissionStatus,
      });
    } else {
      //   permissionStatus = await check(PERMISSIONS.ANDROID.CAMERA);
      permissionStatus = await request(PERMISSIONS.ANDROID.CAMERA);
      dispatch({
        type: '[PERMISSIONS] Get Camera Permissions Status',
        payload: permissionStatus,
      });
    }

    if (permissionStatus === 'blocked') {
      openSettings();
    }
  };

  const checkCameraPermissions = async () => {
    let permissionStatus: PermissionStatus;

    if (Platform.OS === 'ios') {
      permissionStatus = await check(PERMISSIONS.IOS.CAMERA);
    } else {
      permissionStatus = await check(PERMISSIONS.ANDROID.CAMERA);
    }

    dispatch({
      type: '[PERMISSIONS] Get Camera Permissions Status',
      payload: permissionStatus,
    });
  };

  useEffect(() => {
    AppState.addEventListener('change', state => {
      if (state !== 'active') {
        return;
      }

      checkCameraPermissions();
      checkGalleryPermissions();
    });
  }, []);

  return (
    <PermissionsContext.Provider
      value={{
        ...PermissionsState,
        //functions
        askCameraPermissions,
        checkCameraPermissions,
        askGalleryPermissions,
        checkGalleryPermissions,
      }}>
      {children}
    </PermissionsContext.Provider>
  );
};
