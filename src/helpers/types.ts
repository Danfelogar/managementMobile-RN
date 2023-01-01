//AuthContext

export interface IUser {
  token: string;
  user: {
    email: string;
    rol: 'super_admin' | 'admin_bodega' | 'bodega' | 'admin_mtto' | 'mtto';
    nombre: string;
  };
}

export interface ICredencial {
  email: string;
  contrasena: string;
}
