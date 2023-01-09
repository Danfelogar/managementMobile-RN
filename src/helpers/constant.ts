import {Platform} from 'react-native';

export const BASE_URL =
  Platform.OS === 'android'
    ? 'https://admin-management.onrender.com/api'
    : 'https://admin-management.onrender.com/api';
// ? 'http://10.0.2.2:3000/api'
// : 'http://localhost:3000/api';
// 'https://managementpaneladmin.up.railway.app/api'
// https://management-mec-panel-admin.vercel.app/
// Platform.OS === 'android'
export const distanceCompareInKm = 0.21; //distance in Km validation
export const urlForGraphics = 'https://admin-management.onrender.com/graphics';
// https://management-mec-panel-admin.vercel.app/graphics/
