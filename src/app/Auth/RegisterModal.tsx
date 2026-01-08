'use client';

import { Dialog, DialogContent, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Form, Formik } from 'formik';
import { RegisterSchema } from '../utils/validations/auth.validation';
import TextBox from '../Components/TextBox';
import { IRegisterFormData, IRegisterPayload } from '../Models/auth.model';
import { RegisterUser } from '../Services/auth.service';
import { IAppError } from '../Models/common.model';
import { Routes } from '../utils/constants';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  openLoginHandler: () => void;
}

const RegisterModal: React.FC<AuthModalProps> = ({
  open,
  onClose,
  openLoginHandler,
}) => {
  const router = useRouter();
  const SubmitHandler = async (values: IRegisterFormData) => {
    try {
      const { confirmPassword, ...rest } = values;
      const result = await RegisterUser(rest);
      if (result.statusCode === 200 ||201) {
        openLoginHandler();
        toast.success(result.message);
      }
    } catch (error) {
      const err = error as IAppError;
      toast.error(err.message);
    }
  };

  const initialValues: IRegisterFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  };
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      PaperProps={{ sx: { borderRadius: '20px' } }}
    >
      <DialogContent sx={{ p: 0, display: 'flex', justifyContent: 'center' }}>
        <div className="auth-modal relative">
          <IconButton
            onClick={onClose}
            sx={{ position: 'absolute', top: 12, left: 12 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <img src="/logo.png" alt="Logo" className="auth-modal-logo" />

          <h1 className="text-3xl font-bold mb-8 text-center">
            Create account
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={RegisterSchema}
            onSubmit={SubmitHandler}
          >
            {({ values, errors, touched, handleChange, handleBlur }) => (
              <Form className="w-full">
                <TextBox
                  name="firstName"
                  label="firstName"
                  placeholder="First Name"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />

                <TextBox
                  name="lastName"
                  label="lastName"
                  placeholder="Last Name"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />

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
                  name="phone"
                  label="phone"
                  placeholder="Phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
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

                <TextBox
                  name="confirmPassword"
                  label="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.confirmPassword && Boolean(errors.confirmPassword)
                  }
                  helperText={touched.confirmPassword && errors.confirmPassword}
                />

                <button
                  type="submit"
                  className="auth-primary-btn theme-bg w-full"
                >
                  Sign Up
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
