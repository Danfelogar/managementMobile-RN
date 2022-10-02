import {FC, ReactNode, useEffect, useReducer} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {ICredencial, IUser} from '../../helpers';

import {AuthContext, authReducer} from './';
import {managementApi} from '../../services';

export interface AuthState {
  isLoggedIn: boolean;
  user?: IUser;
}

const AUTH_INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  user: undefined,
};

interface Props {
  children: ReactNode;
}

export const AuthProvider: FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

  const validatedIsLogin = async () => {
    const user = await AsyncStorage.getItem('@userCredentials');
    if (user !== null) {
      login(JSON.parse(user), true);
    }
  };

  const login = async (user: IUser, validate: boolean = false) => {
    if (!validate) {
      await AsyncStorage.setItem('@userCredentials', JSON.stringify(user));
    }
    dispatch({type: '[Auth] - Login', payload: user});
  };

  const logout = async () => {
    await AsyncStorage.removeItem('@userCredentials');
    dispatch({type: '[Auth] - Logout'});
  };

  useEffect(() => {
    validatedIsLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = async (val: ICredencial) => {
    return await managementApi
      .post('/user/login', {...val})
      .then(({data}) => {
        console.log({data});
        login(data as IUser);
      })
      .catch(err => {
        console.log({err});
      });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        //methods
        logout,
        //functions
        handleLogin,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
