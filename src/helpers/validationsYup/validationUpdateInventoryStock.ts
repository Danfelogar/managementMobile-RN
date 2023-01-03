import * as yup from 'yup';

export const validationUpdateInventoryStock = yup.object().shape({
  existencia: yup
    .number()
    .required('necesitas llenar el campo')
    .typeError('necesitas llenar el campo')
    .min(0, 'El numero de existencias no puede ser menor a cero.'),
});
