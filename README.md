### Manejo de errores

######ERROR  Invariant Violation: requireNativeComponent: "BVLinearGradient" was not found in the UIManager.

- para este tipo de errores y otro que habra mas adelante se necesita ejecutar los siguiente

- buscar: node_modules/react-native/index.js

- todo sea para compatibilidad del: para compatibilidad del snap-carousel

-dentro del archivo index buscar: // Deprecated Prop Types
y reemplazarlo con lo siguiente:

-// Deprecated Prop Types
  get ColorPropType(): $FlowFixMe {
    return require('deprecated-react-native-prop-types').ColorPropType;
  },
  get EdgeInsetsPropType(): $FlowFixMe {
    return require('deprecated-react-native-prop-types').EdgeInsetsPropType;
  },
  get PointPropType(): $FlowFixMe {
    return require('deprecated-react-native-prop-types').PointPropType;
  },
  get ViewPropTypes(): $FlowFixMe {
    return require('deprecated-react-native-prop-types').ViewPropTypes;
  },
};

- luego ejecutar: npx patch-package react-native

- ######Error de compatibilidad de reactnative-permission

-comentar una de las lineas de los logs que te salen en pantalla

- tanto este error como el otro se muestran cuando se hace yarn install por primera vez o se instala una librería es necesario hacer estos pasos todas las veces

para compatibilidad del snap-carousel
npx patch-package react-native
node_modules/react-native/index.js 


##Link de la play store
https://play.google.com/store/apps/details?id=com.danfelogar.managementapp

## Link del video en youtube
[![Alt text](https://img.youtube.com/vi/STUuUnjB5Y0/0.jpg)](https://www.youtube.com/watch?v=STUuUnjB5Y0)

## Credenciales:
user: bodega@bodega.com
password: secret
