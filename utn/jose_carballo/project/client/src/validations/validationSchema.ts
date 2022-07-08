import * as Yup from 'yup';


export const validationSchema = Yup.object({
    name: Yup.string()
                    .max(15, 'Debe de tener 15 caracteres o menos')
                    .required('Requerido'),
    email: Yup.string()
                    .email('El correo no tiene un formato válido')
                    .required('Requerido'),
    avatar: Yup.string()
                .max(15, 'Debe de tener 15 caracteres o menos')
                .required('Requerido'),

})