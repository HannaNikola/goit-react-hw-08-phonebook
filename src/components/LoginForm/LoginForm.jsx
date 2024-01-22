import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { logIn } from '../../redux/auth/operations';

const LoginUser = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').required('This field is required'),

});


export const LoginForm = () => {

    const dispatch = useDispatch();

    const handleSubmitLogin = event => {
        event.preventDefault();
        const form = event.currentTarget;

        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    }
    return (
        <div>

            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={LoginUser}

            >
                <Form onSubmit={handleSubmitLogin} autoComplete="off" >

                    <label htmlFor="email">Email</label>
                    <Field id="email" name="email" />

                    <label htmlFor="password">Password</label>
                    <Field id="password" name="password" />
                   
                       
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}