import axios from 'axios';
import {BASE_URL} from '../helpers/constant';

const managementApi = axios.create({baseURL: BASE_URL});

export default managementApi;

//EXAMPLE
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const baseURL = 'http://192.168.50.70:8080/api';

// const cafeApi = axios.create({ baseURL });

// cafeApi.interceptors.request.use(
//     async(config) => {
//         const token = await AsyncStorage.getItem('token');
//         if ( token ) {
//             config.headers['x-token'] = token;
//         }
//         return config;
//     }
// );

// export default cafeApi;
