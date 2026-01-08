'use client';

import { Dialog, DialogContent, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Form, Formik } from 'formik';
import { ForgotSchema } from '../utils/validations/auth.validation';
import TextBox from '../Components/TextBox';
import { toast } from 'react-toastify';
import { IAppError } from '../Models/common.model';
import { ForgotPasswordService } from '../Services/auth.service';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  openLoginHandler: () => void;
  openOTPHandler: () => void;
  setForgotToken: (token: string) => void;
}

const ForgotModal: React.FC<AuthModalProps> = ({
  open,
  onClose,
  openOTPHandler,
  openLoginHandler,
  setForgotToken
}) => {
  const submitHandler=async(values:{email:string})=>{
    try {
      const result = await ForgotPasswordService(values);
      if (result.statusCode === 200 ||201) {
        setForgotToken(result.data);
        openOTPHandler();
        toast.success(result.message);
      }
    } catch (error) {
      const err = error as IAppError;
      toast.error(err.message);
    }
  }
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
            onClick={openLoginHandler}
            sx={{ position: 'absolute', top: 12, left: 12 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <img src="/logo.png" alt="Logo" className="auth-modal-logo" />

          <h1 className="text-3xl font-bold mb-4 text-center">
            Forgot password?
          </h1>
          <Formik
            initialValues={{ email: '' }}
            validationSchema={ForgotSchema}
            onSubmit={
              submitHandler
              // openOTPHandler();
            }
          >
            {({ values, errors, touched, handleChange, handleBlur }) => (
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

                <button
                  type="submit"
                  className="auth-primary-btn theme-bg w-full"
                >
                  Send Code
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ForgotModal;
