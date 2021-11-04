import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { attempLogin } from "../actions/AuthActions";
import { useState, useEffect } from 'react';


const Login = () => {

    const [datos, setDatos] = useState({username: '', password: ''});
    const navigation = useNavigate();
    const isLoading = useSelector((state) => state.AuthReducer.isLoading);
    const isLogged = useSelector((state) => state.AuthReducer.isLogged);
    const dispatch = useDispatch();

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    useEffect(() => {
        if (isLogged) {
            navigation('/');
        }
      }, [isLogged, navigation]);
    
    const handleChange = (e) => {
        setDatos({...datos, [e.target.name]: e.target.value});
    }
    
    const onSubmit = async (e) => {
        e.preventDefault();
        if (isLoading) return;
        console.log(datos);
        dispatch(attempLogin(datos));
        // TODO remove this
        navigation('/');
    }

    return (
        <Grid>
            <form onSubmit={onSubmit}>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <TextField onChange={handleChange} label='Username' placeholder='Enter username' fullWidth required variant="standard" />
                    <TextField onChange={handleChange} label='Password' placeholder='Enter password' type='password' fullWidth required variant="standard" />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="Remember me"
                    />
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                    <Typography>
                        <Link href="#" >
                            Forgot password ?
                    </Link>
                    </Typography>
                    <Typography > Have an account ?
                        <Link href="#" >
                            Sign Up 
                    </Link>
                    </Typography>
                </Paper>
            </form>
        </Grid>
    )
}

export default Login;