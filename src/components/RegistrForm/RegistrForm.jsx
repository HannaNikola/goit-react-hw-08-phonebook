import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';



const SignupUser = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').required('This field is required'),
    email: Yup.string().email('Invalid email').required('Required'),
});


export const RegistrForm = () => {
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
                <Form>
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
                    <Field id="password" name="password" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
      </div>
  )  
}