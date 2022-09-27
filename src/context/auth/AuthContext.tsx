import {createContext} from 'react';
import {ICredencial, IUser} from '../../helpers';

export interface ContextProps {
  isLoggedIn: boolean;
  user?: IUser;
  //methods
  handleLogin: (data: ICredencial) => void;
  // login: (user: IUser, validate?: boolean) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as ContextProps);
