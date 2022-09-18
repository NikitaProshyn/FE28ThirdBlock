import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//@ts-ignore
import styles from './SignUp.module.css';
import { validateEmailPropsType } from './types';
import classNames from 'classnames';

import Button, { ButtonType } from '../../components/Button';
import Label from '../../components/Label';
import Title from '../../components/Title';
import Input from '../../components/Input';
import { useThemeContext, Theme } from '../../Context/ThemeContext/Context';
import { PathNames } from '../Router/Router';

const validateEmail = (email: any) => {
   return String(email)
      .toLowerCase()
      .match(
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

const SignUp = () => {
   const [name, setName] = useState('');

   const [email, setEmail] = useState('');
   const [emailError, setEmailError] = useState('');
   const [emailTouched, setEmailTouched] = useState(false);

   const [password, setPassword] = useState('');
   const [passwordError, setPasswordError] = useState('');
   const [passwordTouched, setPasswordTouched] = useState(false);

   const [confirmPassword, setConfirmPassword] = useState('');
   const [confirmPasswordError, setConfirmPasswordError] = useState('');
   const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

   const { theme } = useThemeContext();

   useEffect(() => {
      if (emailTouched && !validateEmail(email)) {
         setEmailError('Set correct email');
      } else {
         setEmailError('');
      }
   }, [emailTouched, email]);

   useEffect(() => {
      if (passwordTouched && password.length < 8) {
         setPasswordError('Password must be at least 8 characters long');
      } else {
         setPasswordError('');
      }
   }, [passwordTouched, password]);

   useEffect(() => {
      if (
         confirmPasswordTouched &&
         confirmPassword.length < 8 &&
         confirmPassword != password
      ) {
         setConfirmPasswordError('Enter correct password');
      } else {
         setConfirmPassword('');
      }
   }, [confirmPasswordTouched, confirmPassword, password]);

   const onBlurEmail = () => {
      setEmailTouched(true);
   };

   const onBlurPassword = () => {
      setPasswordTouched(true);
   };

   const onBlurPasswordConfirm = () => {
      setConfirmPasswordTouched(true);
   };

   return (
      <div
         className={classNames(styles.container, {
            [styles.darkTheme]: theme === Theme.Dark,
         })}
      >
         <div className={styles.headForm}>
            <div className={styles.backToHome}>Back to Home</div>
            <Title title={'Sign Up'}></Title>
         </div>
         <div className={styles.formContainer}>
            <div className={styles.inputContainer}>
               <Label title={'Name'} />
               <Input
                  placeholder={'Your name'}
                  onChange={setName}
                  value={name}
               />
            </div>

            <div className={styles.inputContainer}>
               <Label title={'Email'} />
               <Input
                  placeholder={'Your email'}
                  onChange={setEmail}
                  onBlur={onBlurEmail}
                  value={email}
                  error={!!emailError}
               />
               {emailTouched && emailError && <div>{emailError}</div>}
            </div>

            <div className={styles.inputContainer}>
               <Label title={'Password'} />
               <Input
                  placeholder={'Your password'}
                  onChange={setPassword}
                  onBlur={onBlurPassword}
                  value={password}
                  error={!!passwordError}
               />
               {passwordTouched && passwordError && <div>{passwordError}</div>}
            </div>

            <div className={styles.inputContainer}>
               <Label title={'Confirm password'} />
               <Input
                  placeholder={'Confirm password'}
                  onChange={setConfirmPassword}
                  onBlur={onBlurPasswordConfirm}
                  value={confirmPassword}
                  error={!!confirmPasswordError}
               />
               {confirmPasswordTouched && confirmPasswordError && (
                  <div>{confirmPasswordError}</div>
               )}
            </div>
            <div>
               <Button
                  type={ButtonType.Primary}
                  title={'Sign Up'}
                  click={() => {
                     console.log('primary');
                  }}
                  className={styles.signUpBtn}
                  disabled={false}
               />
            </div>

            <div className={styles.haveAccount}>
               Already have an account?{' '}
               <Link to={PathNames.SignIn}>Sign In</Link>
            </div>
         </div>
      </div>
   );
};

export default SignUp;
