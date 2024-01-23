
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';
import { useFormik } from 'formik';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


const SignupUser = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').required('This field is required'),
    email: Yup.string().email('Invalid email').required('This field is required'),
});



export const RegistrForm = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const dispatch = useDispatch();


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: SignupUser,
        onSubmit: (values) => {
            dispatch(register(values));
            // formik.resetForm();
        },
    });




    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };



    return (
        <div>

            <form onSubmit={formik.handleSubmit} autoComplete="off" >

                <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />


                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />


                <FormControl variant="outlined" fullWidth margin="normal">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div>{formik.errors.password}</div>
                    )}
                </FormControl>

                <Button type="submit" variant="contained" endIcon={<SendIcon />} fullWidth>
                    Submit
                </Button>
            </form>
        </div>

    )

}







// export const RegistrForm = () => {
//     const dispatch = useDispatch();

//     const hendlSubmitRegistr = e => {
//         e.preventDefault();
//         const form = e.currentTarget;
//         dispatch(
//             register({
//                 name: form.elements.name.value,
//                 email: form.elements.email.value,
//                 password: form.elements.password.value,
//             })
//         );
//         form.reset();
//     };

//     return (
//         <div>
//             <h1>Register</h1>
//             <Formik
//                 initialValues={{
//                     name: '',
//                     email: '',
//                     password: '',
//                 }}
//                 validationSchema={SignupUser}

//             >
//                 <Form onSubmit={hendlSubmitRegistr} autoComplete='off'>

//                     <label htmlFor="name">Name</label>
//                     <Field id="name" name="name" placeholder="Jane" />



//                     <label htmlFor="email">Email</label>
//                     <Field
//                         id="email"
//                         name="email"
//                         placeholder="jane@acme.com"
//                         type="email"
//                     />

//                     <label htmlFor="password">Password</label>
//                     <Field id="password" name="password" typy ="password" />

//                     <button type="submit">Submit</button>
//                 </Form>
//             </Formik>
//         </div>
//     )
// }