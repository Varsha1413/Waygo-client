'use client';

import { useRef, useState } from 'react';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { toast } from 'react-toastify';
import { IAppError } from '../Models/common.model';
import { OtpService } from '../Services/auth.service';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  openForgotHandler: () => void;
  openResetHandler: () => void;
  token:string;
  setOtpToken:(token:string)=>void;
}

const OTP_LENGTH = 6;

const OTPModal: React.FC<AuthModalProps> = ({
  open,
  onClose,
  openForgotHandler,
  openResetHandler,
  token,setOtpToken
}) => {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
  const [error, setError] = useState<string>('');
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
    setError('');

    if (value && index < OTP_LENGTH - 1) {
      refs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      refs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const otpValue = otp.join('');

    if (!otpValue) {
      setError('OTP is required');
      return;
    }
    
    if (otpValue.length !== OTP_LENGTH) {
      setError('OTP must be 6 digits');
      return;
    }
    if (!/^\d+$/.test(otpValue)) {
      setError('Only digits are allowed');
      return;
    }

    try {
      const result = await OtpService(parseInt(otpValue),token);
      if (result.statusCode === 200 || 201) {
        setOtpToken(result.data)
        openResetHandler();
        // openOTPHandler();
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
            onClick={openForgotHandler}
            sx={{ position: 'absolute', top: 12, left: 12 }}
          >
            <ArrowBackIcon />
          </IconButton>

          <img src="/logo.png" alt="Logo" className="auth-modal-logo" />

          <h1 className="text-3xl font-bold mb-6 text-center">Verify Code</h1>

          <div
            className="mb-7"
            style={{
              display: 'flex',
              gap: 5,
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            {otp.map((digit, i) => (
              <input
                key={i}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                value={digit}
                maxLength={1}
                inputMode="numeric"
                className={`otp-input theme-border ${
                  error ? 'border-red-500' : ''
                }`}
                onChange={(e) => handleChange(e.target.value, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
              />
            ))}
          </div>

          {error && (
            <p className="otp-error text-sm mb-4 text-center">{error}</p>
          )}

          <button
            onClick={handleVerify}
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
