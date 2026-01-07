'use client';

import { Dialog, DialogContent, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type ModalType = 'login' | 'register' | 'forgot' | 'otp' | 'reset';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  openLoginHandler: () => void;
  openOTPHandler: () => void;
}

const ForgotModal: React.FC<AuthModalProps> = ({
  open,
  onClose,
  openOTPHandler,
  openLoginHandler,
}) => {
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

          <input className="auth-input theme-border mb-6" placeholder="Email" />

          <button
            onClick={openOTPHandler}
            className="auth-primary-btn theme-bg w-full"
          >
            Send Code
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ForgotModal;
