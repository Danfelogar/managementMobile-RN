//AuthContext

export interface IUser {
  token: string;
  user: {
    email: string;
    rol: string;
    nombre: string;
  };
}

export interface ICredencial {
  email: string;
  contrasena: string;
}
