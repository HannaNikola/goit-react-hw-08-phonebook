import { Formik,  Form } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { logIn } from '../../redux/auth/operations';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import * as React from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


const LoginUser = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').required('This field is required'),

});


export const LoginForm = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const dispatch = useDispatch();
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
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
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <div>

            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={LoginUser}

            >
                <Form onSubmit={handleSubmitLogin} autoComplete="off" >
         
                    {/* <label htmlFor="email">Email</label>
                    <Field id="email" name="email" /> */}

                        <TextField 
                            label="email"
                            id="outlined-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">email</InputAdornment>,
                            }}
                        />
                        


                    {/* <label htmlFor="password">Password</label>
                    <Field id="password" name="password" /> */}
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" >
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
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
                    </FormControl>



                        <Button variant="contained" endIcon={<SendIcon />}>
                            Submit  </Button>
                       
                    {/* <button type="submit">Submit</button> */}
                </Form>
            </Formik>
            </div>
        </Box>
    )
}