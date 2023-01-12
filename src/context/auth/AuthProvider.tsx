import {FC, ReactNode, useEffect, useReducer} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {ICredencial, IUser} from '../../helpers';

import {AuthContext, authReducer} from './';
import {managementApi} from '../../services';

export interface AuthState {
  isLoggedIn: 'login' | 'logout' | 'pending';
  isBlockedOnboard: boolean;
  user?: IUser;
}

const AUTH_INITIAL_STATE: AuthState = {
  isLoggedIn: 'pending',
  isBlockedOnboard: false,
  user: undefined,
};

interface Props {
  children: ReactNode;
}

export const AuthProvider: FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

  const validatedIsLoginAndOnboard = async () => {
    const user = await AsyncStorage.getItem('@userCredentials');
    const isBlockedOnboarding = await AsyncStorage.getItem('@blockedOnboard');
    if (user !== null) {
      login(JSON.parse(user), true);
    }
    if (user === null) {
      dispatch({type: '[Auth] - Block Login'});
    }
    if (isBlockedOnboarding === 'locked') {
      dispatch({type: '[Auth] - Blocked Onboarding', payload: true});
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
    validatedIsLoginAndOnboard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = async (val: ICredencial) => {
    return await managementApi
      .post('/user/login', {...val})
      .then(({data}) => {
        // console.log({data});
        login(data as IUser);
        return data;
      })
      .catch(err => {
        console.log({err});
        return err;
      });
  };

  const changeBlockedOnboard = async () => {
    await AsyncStorage.setItem('@blockedOnboard', 'locked');
    dispatch({type: '[Auth] - Blocked Onboarding', payload: true});
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        //methods
        logout,
        //functions
        handleLogin,
        changeBlockedOnboard,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
