'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent, IconButton, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type ModalType = 'login' | 'register' | 'forgot';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  openSignUpHandler: () => void;
  openForgotHandler: () => void;
}

const LoginModal: React.FC<AuthModalProps> = ({
  open,
  onClose,
  openSignUpHandler,
  openForgotHandler,
}) => {
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

          <h1 className="text-3xl font-bold mb-5 text-center">Welcome back!</h1>

          <input className="auth-input theme-border mb-4" placeholder="Email" />

          <input
            type="password"
            className="auth-input theme-border mb-6"
            placeholder="Password"
          />

          <button className="auth-primary-btn theme-bg w-full">Login</button>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <p className="text-sm text-center mt-4 pb-0 mb-0">
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
