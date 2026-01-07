'use client';

import { useRef, useState } from 'react';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type ModalType = 'login' | 'register' | 'forgot' | 'otp' | 'reset';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  openForgotHandler: () => void;
  openResetHandler: () => void;
}

const OTPModal: React.FC<AuthModalProps> = ({
  open,
  onClose,
  openForgotHandler,
  openResetHandler,
}) => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const refs = useRef<(HTMLInputElement | null)[]>([]);

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
            onClick={openForgotHandler}
            sx={{ position: 'absolute', top: 12, left: 12 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <img src="/logo.png" alt="Logo" className="auth-modal-logo" />

          <h1 className="text-3xl font-bold mb-6 text-center">Verify Code</h1>

          <div
            className=" mb-6"
            style={{
              display: 'flex',
              gap: 5,
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            {otp.map((_, i) => (
              <input
                key={i}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                maxLength={1}
                className="otp-input theme-border"
              />
            ))}
          </div>

          <button
            onClick={openResetHandler}
            className="auth-primary-btn theme-bg w-full"
          >
            Verify
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OTPModal;
