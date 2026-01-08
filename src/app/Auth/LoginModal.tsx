'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent, IconButton, Slide } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Form, Formik } from 'formik';
import TextBox from '../Components/TextBox';
import { LoginSchema } from '../utils/validations/auth.validation';
import { ILoginPayload } from '../Models/auth.model';
import { loginUser } from '../Services/auth.service';
import { IAppError } from '../Models/common.model';
import { Routes } from '../utils/constants';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  openSignUpHandler: () => void;
  openForgotHandler: () => void;
}
interface LoginFormValues {
  email: string;
  password: string;
}
const LoginModal: React.FC<AuthModalProps> = ({
  open,
  onClose,
  openSignUpHandler,
  openForgotHandler,
}) => {
  const initialValues: LoginFormValues = {
    email: '',
    password: '',
  };
  const router = useRouter();
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const handleSubmit = async (
    values: ILoginPayload,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      const result = await loginUser(values);
      debugger;
      if (result.statusCode === 200) {
        setInvalidCredentials(false);
        localStorage.setItem('token', JSON.stringify(result.data.token));
        router.push(Routes.DASHBOARD);
        toast.success(result.message);
      }
    } catch (error) {
      const err = error as IAppError;
      toast.error(err.message);
      setInvalidCredentials(true);
    }
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      PaperProps={{
        sx: {
          borderRadius: '20px',
          overflow: 'visible',
        },
      }}
    >
      <DialogContent sx={{ p: 0, display: 'flex', justifyContent: 'center' }}>
        <div className="auth-modal relative">
          {/* Back / Close Button */}
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: 12,
              left: 12,
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <img src="/logo.png" alt="Logo" className="auth-modal-logo" />

          <h1 className="text-3xl font-bold mb-6 text-center">Welcome back!</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isSubmitting,
            }) => (
              <Form className="w-full">
                <TextBox
                  name="email"
                  label="email"
                  type="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextBox
                  name="password"
                  label="password"
                  type="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="auth-primary-btn theme-bg w-full mt-4"
                >
                  {isSubmitting ? 'Logging in...' : 'Login'}
                </button>{' '}
              </Form>
            )}
          </Formik>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <p className="text-sm text-center mt-2 pb-0 mb-0">
              Don’t have an account?{' '}
              <button
                onClick={openSignUpHandler}
                className="theme-text link-button font-semibold"
              >
                Sign up
              </button>
            </p>

            <p className="text-sm  text-center mt-2">
              <button
                onClick={openForgotHandler}
                className="theme-text link-button"
              >
                Forgot password?
              </button>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
