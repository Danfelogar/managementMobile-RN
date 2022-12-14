import {useContext, useRef, useState, useEffect} from 'react';
import {Animated, FlatList} from 'react-native';
import {ThemeContext} from '../../context';

export const useOnboarding = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [idxSlides, setIdxSlides] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const slidesRef = useRef<FlatList>(null);
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const {textPrimary, textSecondary, background, primary, secondary, tertiary} =
    colors;
  let dataOnboarding = [
    {
      key: '1',
      title: 'Te damos la bienvenida a ManagementApp',
      description:
        'Esta es una aplicación de con la que podrás acceder con facilidad a los históricos de las ordenes de trabajo y tener a tiempo real las existencias de los inventarios de maquinas y repuestos, ademas de agilizar en el tramite entres los distintos departamentos como el de mantenimiento y bodega',
      imgLogo: require('../../public/onboarding1.png'),
      indexSlide: 0,
    },
    {
      key: '2',
      title: 'Tu Herramienta de trabajo',
      description:
        'Con esta aplicación podrás simplificar los extensos procesos que pueden ser agotadores como el papeleo para ejecutar una orden de trabaja o llevar el inventario de tus piezas de repuesto en el taller.',
      imgLogo: require('../../public/onboarding2.png'),
      indexSlide: 1,
    },
    {
      key: '3',
      title: 'Estas a un paso de comenzar esta travesía',
      description:
        'No te preocupes si te sientes abrumado por no entender todo al inicio siempre podrás pedir ayuda a tu superior o compañeros de trabajo que usen "ManagementApp" o si te es mas fácil y tienes las credenciales, te invito a usar la web de esta aplicación.',
      imgLogo: require('../../public/onboarding3.png'),
      indexSlide: 2,
    },
  ];

  let bgs = [primary, secondary, tertiary];

  const slidesScroll = (idx: number) => {
    setIdxSlides(idx + 1);
    setIsScrolling(true);
  };

  useEffect(() => {
    if (isScrolling) {
      slidesRef.current?.scrollToIndex({
        index: idxSlides,
        animated: true,
      });
      setIsScrolling(false);
    }
  }, [idxSlides, isScrolling]);

  return {
    //data
    dataOnboarding,
    scrollX,
    textPrimary,
    textSecondary,
    background,
    bgs,
    idxSlides,
    slidesRef,
    //methods
    //function
    slidesScroll,
  };
};
