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
