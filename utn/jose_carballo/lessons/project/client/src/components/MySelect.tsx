import { ErrorMessage } from 'formik';

interface Props {
    label: string;
    name: string;
    placeholder?: string;
    [x: string]: any;
}


export const MySelect = ( { label, ...props }: Props ) => {


    return (
        <>
            <select className='select' { ...props } onChange={props.onChange} />
            <ErrorMessage name={ props.name } component="span" className="text_error" />
        </>
    )
}
