import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';



const SignupUser = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').required('This field is required'),
    email: Yup.string().email('Invalid email').required('Required'),
});


export const RegistrForm = () => {
    const dispatch = useDispatch();

    const hendlSubmitRegistr = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <div>
            <h1>Register</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                }}
                validationSchema={SignupUser}

            >
                <Form onSubmit={hendlSubmitRegistr} autoComplete='off'>

                    <label htmlFor="name">Name</label>
                    <Field id="name" name="name" placeholder="Jane" />



                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                    />

                    <label htmlFor="password">Password</label>
                    <Field id="password" name="password" typy ="password" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}