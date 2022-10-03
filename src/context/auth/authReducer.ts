import {IUser} from '../../helpers';
import {AuthState} from './AuthProvider';

type AuthActionType =
  | {type: '[Auth] - Login'; payload: IUser}
  | {type: '[Auth] - Logout'}
  | {type: '[Auth] - Blocked Onboarding'; payload: boolean}
  | {type: '[Auth] - Block Login'};

export const authReducer = (
  state: AuthState,
  action: AuthActionType,
): AuthState => {
  switch (action.type) {
    case '[Auth] - Login':
      return {
        ...state,
        isLoggedIn: 'login',
        user: action.payload,
      };
    case '[Auth] - Logout':
      return {
        ...state,
        isLoggedIn: 'logout',
        user: undefined,
      };
    case '[Auth] - Blocked Onboarding':
      return {
        ...state,
        isBlockedOnboard: action.payload,
      };
    case '[Auth] - Block Login':
      return {
        ...state,
        isLoggedIn: 'logout',
      };

    default:
      return state;
  }
};
