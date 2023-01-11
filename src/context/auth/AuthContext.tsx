import {createContext} from 'react';
import {ICredencial, IUser} from '../../helpers';

export interface ContextProps {
  isLoggedIn: 'login' | 'logout' | 'pending';
  isBlockedOnboard: boolean;
  user?: IUser;
  //methods
  handleLogin: (data: ICredencial) => Promise<void>;
  // login: (user: IUser, validate?: boolean) => void;
  logout: () => void;
  changeBlockedOnboard: () => void;
}

export const AuthContext = createContext({} as ContextProps);
