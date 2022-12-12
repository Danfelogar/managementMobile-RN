import {PermissionStatus} from 'react-native-permissions';
import {PermissionsState} from './PermissionsProvider';

type PermissionsActionsType =
  | {
      type: '[PERMISSIONS] Get Camera Permissions Status';
      payload: PermissionStatus;
    }
  | {
      type: '[PERMISSIONS] Get Gallery Permissions Status';
      payload: PermissionStatus;
    };

export const PermissionsReducer = (
  state: PermissionsState,
  action: PermissionsActionsType,
): PermissionsState => {
  switch (action.type) {
    case '[PERMISSIONS] Get Camera Permissions Status':
      return {
        ...state,
        cameraState: action.payload,
      };
    case '[PERMISSIONS] Get Gallery Permissions Status':
      return {
        ...state,
        galleryState: action.payload,
      };
    default:
      return state;
  }
};
