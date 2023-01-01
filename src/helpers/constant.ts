import {Platform} from 'react-native';

export const BASE_URL =
  Platform.OS === 'android'
    ? 'http://10.0.2.2:3000/api'
    : 'http://localhost:3000/api';
// 'https://managementpaneladmin.up.railway.app/api'
// https://management-mec-panel-admin.vercel.app/
// Platform.OS === 'android'
// ? 'https://management-mec-panel-admin.vercel.app/api'
// : 'https://management-mec-panel-admin.vercel.app/api';
export const distanceCompareInKm = 0.21;
