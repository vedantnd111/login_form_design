import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import './style.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const Home = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        name: "",
        phoneNo: ""
    });

    const { email, password, name, phoneNo } = values;

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values });
    };
    const useStyles = makeStyles((theme) => ({
        paper: {
            margin: theme.spacing(4),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(3),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        }
    }));

    const classes = useStyles();

    const signUpForm = () => (
        <div>
            <Container component="main" maxWidth="xs" className="contain" style={{ borderRadius: "10px", paddingBottom: "5px" }}>
                <CssBaseline />
                <div className={classes.paper}>
                    {/* <div className="containing"> */}
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" className="white-text" style={{ fontWeight: "700" }}>
                        Sign up
    </Typography>
                    {/* </div> */}
                    <form className={classes.form} noValidate>
                        <div className="row bg-white textfield">
                            <i className="material-icons signup-icon" style={{ padding: "9px" }}>account_circle</i>
                            <input
                                variant="outlined"
                                margin="normal"
                                className="col form-control"
                                required
                                fullWidth
                                placeholder="Name"
                                id="name"
                                value={name}
                                label="Name"
                                name="name"
                                autoComplete="name"
                                onChange={handleChange("name")}
                                autoFocus
                            />
                        </div>
                        <div className="row bg-white textfield">
                            <i className="material-icons" style={{ padding: "9px" }}>email</i>
                            <input
                                variant="outlined"
                                margin="normal"
                                className="col form-control"
                                required
                                fullWidth
                                placeholder="Email"
                                id="email"
                                value={email}
                                label="Email Address"
                                onChange={handleChange("email")}
                                name="email"
                                autoComplete="email"
                            />
                        </div>
                        <div className="row bg-white textfield">
                            <i className="material-icons" style={{ padding: "9px" }}>vpn_key</i>
                            <input name="password"
                                label="Password"
                                value={password}
                                type="password"
                                className="col form-control"
                                placeholder="Password"
                                id="password"
                                variant="outlined"
                                margin="normal"
                                onChange={handleChange("password")}
                                required
                                fullWidth
                                autoComplete="current-password" />
                        </div>
                        <div className="row bg-white textfield">
                            <i className="material-icons" style={{ padding: "9px" }}>phone_android</i>
                            <input name="phone number"
                                label="phone number"
                                value={phoneNo}
                                type="text"
                                className="col form-control"
                                placeholder="Phone number"
                                id="phone number"
                                variant="outlined"
                                margin="normal"
                                onChange={handleChange("phoneNo")}
                                required
                                fullWidth />
                        </div>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={clickSubmit}
                        >
                            Sign Up
      </Button>
                        <Grid container>
                            <Grid item xs>
                                {/* <Link href="#" variant="body2">
                                Forgot password?
          </Link> */}
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>

        </div>

    );

    const redireToreferrer = () => {
        if (name === "rohit" && email === "roo@gmail.com" && password === "1234567890" && phoneNo === "9876543210") {
            return <Redirect to="/hello" />
        }
    }


    return (
        <div>
            {signUpForm()}
            {redireToreferrer()}
        </div>
    );
};

export default Home;
