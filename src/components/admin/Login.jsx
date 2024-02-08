import axios from "axios";
import * as React from 'react';
import { observer } from "mobx-react";
import { useState } from "react";
import { TextField } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import dataStore from "../../data/stores/dataStore";

const Login = (observer(() => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }
    async function CheckLogin(name, password) {
        try {
            const isValid = await axios.post("http://localhost:8787/login", { name, password });
            if (isValid.status === 200) {
                dataStore.setIsLogin(true);
            }
        }
        catch (e) {
            if (e.response) {
                alert('user name or password not correct');
                setName("");
                setPassword("");
            }
            else {
                alert('server failed');
                setName("");
                setPassword("");
            }

        }

    }

    return (
        <>
            <div>
                <img src="/images/icon.png" alt="icon" id="icon" />
                <br />
                <TextField id="outlined-basic" label="name" variant="outlined" value={name}
                    onChange={(e) => setName(e.target.value)} />
                <br />
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                <br />
                <button onClick={() => CheckLogin(name, password)} id="button_login">Login</button></div>

        </>
    )
}))

export default Login