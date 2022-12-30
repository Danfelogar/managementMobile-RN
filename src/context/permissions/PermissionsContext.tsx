import {createContext} from 'react';
import {PermissionStatus} from 'react-native-permissions';

interface ContextProps {
  //state
  cameraState: PermissionStatus;
  galleryState: PermissionStatus;
  gpsState: PermissionStatus;
  //methods
  //functions
  askCameraPermissions: () => Promise<PermissionStatus>;
  checkCameraPermissions: () => Promise<void>;
  askGalleryPermissions: () => Promise<PermissionStatus>;
  checkGalleryPermissions: () => Promise<void>;
  askGPSPermissions: () => Promise<PermissionStatus>;
  checkGPSPermissions: () => Promise<void>;
}

export const PermissionsContext = createContext({} as ContextProps);
