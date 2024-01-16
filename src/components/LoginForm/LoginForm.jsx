import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const LoginUser = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').required('This field is required'),
   
});


export const LoginForm = () => {
    return (
        <div>
            
            <Formik
                initialValues={{
                    name: '',
                    password: '',
                }}
                validationSchema={LoginUser}

            >
                <Form>
                    <label htmlFor="name">Name</label>
                    <Field id="name" name="name" placeholder="Jane" />

                    <label htmlFor="password">Password</label>
                    <Field id="password" name="password" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}