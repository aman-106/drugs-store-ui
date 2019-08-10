import React, { useState, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import './App.scss';

const fbLoginUrl = `https://scontent.fblr2-1.fna.fbcdn.net/v/t39.2365-6/18928641_251957295286418_4362086450741641216_n.png?_nc_cat=111&_nc_oc=AQm0IyrIlFUipiwu1xm7PRZk6IHiDDooDvm7E5WfR23FTG7ABQpxEcjRTAe24IkmUYw&_nc_ht=scontent.fblr2-1.fna&oh=6c2f638c7ea01bb09cfbc49c4a1720ec&oe=5DDD2305`;

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(1),
  },
  textField: {
    flexGrow: 1,
    flexBasis: '100%',
  },
  userPassLogin: {
    display: 'flex',
    flexDirection: 'column',
  },
  loginBtn: {
    textTransform: 'uppercase',
  }
}));

function useFormHook(initialFormState) {
  const [formState, setFormState] = useState(initialFormState);
  function handleChange(fieldname) {
    return (event) => setFormState(Object.assign({}, formState, { [fieldname]: event.target.value }));
  };
  return [formState, handleChange];
}

function UserPassLogin() {
  const classes = useStyles();
  const [values, handleChange] = useFormHook({
    password: '',
    username: ''
  });
  // function handleChange() {
  //   return () => { };
  // }
  return (
    <div className={classes.userPassLogin}>
      <TextField
        id="username"
        label="Name"
        className={classes.textField}
        value={values.username}
        onChange={handleChange('username')}
        margin="normal"
      />
      <TextField
        id="password"
        type="password"
        label="Password"
        className={classes.textField}
        value={values.password}
        onChange={handleChange('password')}
        margin="normal"
      />
      <Button className={classes.loginBtn} variant="contained" color="primary" className={classes.button}>
        Log in
      </Button>
    </div>
  )

}


function LoginDivider() {
  return (
    <div className="divider">
      <Divider className="break" />
      <div className="or">or</div>
      <Divider className="break" />
    </div>
  )
}

function Login() {
  const authFbUser = useCallback(() => {

  });

  return (
    <div className="login-section">
      <div className="login-details">
        <div className="header">To continue, log in to StomeD.</div>
        <div className="fb-login">
          <div onClick={authFbUser}>
            <img src={fbLoginUrl} alt={`Continue with Facebook`}></img>
          </div>
        </div>
        <LoginDivider />
        <div className="user-pass-login">
          <UserPassLogin />
        </div>
      </div>
    </div>
  );
}

export default Login;
