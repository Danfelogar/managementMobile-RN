import {createContext} from 'react';
import {PermissionStatus} from 'react-native-permissions';

interface ContextProps {
  //state
  cameraState: PermissionStatus;
  galleryState: PermissionStatus;
  //methods
  //functions
  askCameraPermissions: () => Promise<void>;
  checkCameraPermissions: () => Promise<void>;
  askGalleryPermissions: () => Promise<void>;
  checkGalleryPermissions: () => Promise<void>;
}

export const PermissionsContext = createContext({} as ContextProps);
