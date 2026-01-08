'use client';

import { Dialog, DialogContent, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextBox from '../Components/TextBox';
import { Form, Formik } from 'formik';
import { ResetPasswordSchema } from '../utils/validations/auth.validation';
import { ResetPasswordService } from '../Services/auth.service';
import { toast } from 'react-toastify';
import { IAppError } from '../Models/common.model';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  openOTPHandler: () => void;
  openLoginHandler: () => void;
  token: string;
}

const ResetModal: React.FC<AuthModalProps> = ({
  open,
  onClose,
  openOTPHandler,
  openLoginHandler,
  token,
}) => {
  const submitHandler = async (values: {
    password: string;
    confirmPassword: string;
  }) => {
    const { confirmPassword, password } = values;
    try {
      const result = await ResetPasswordService(password, token);
      if (result.statusCode === 200 || 201) {
        openLoginHandler();
        toast.success(result.message);
      }
    } catch (error) {
      const err = error as IAppError;
      toast.error(err.message);
    }
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
            onClick={openOTPHandler}
            sx={{ position: 'absolute', top: 12, left: 12 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <img src="/logo.png" alt="Logo" className="auth-modal-logo" />

          <h1 className="text-3xl font-bold mb-6 text-center">
            Reset password
          </h1>

          <Formik
            initialValues={{ password: '', confirmPassword: '' }}
            validationSchema={ResetPasswordSchema}
            onSubmit={submitHandler}
          >
            {({ values, errors, touched, handleChange, handleBlur }) => (
              <Form className="w-full">
                <TextBox
                  name="password"
                  label="password"
                  type="password"
                  placeholder="New password"
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
                  placeholder="Confirm password"
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
                  Reset Password
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResetModal;
