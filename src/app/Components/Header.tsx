'use client';

import { Button, IconButton } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from 'next/link';
import { useState } from 'react';

import LoginModal from '../Auth/LoginModal';
import RegisterModal from '../Auth/RegisterModal';
import ForgotModal from '../Auth/ForgotModal';
import OTPModal from '../Auth/OTPModal';
import ResetModal from '../Auth/ResetModal';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
type ModalType = 'login' | 'register' | 'forgot' | 'otp' | 'reset' | null;

const Header = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  return (
    <>
      <div className="header-context">
        <img
          height={60}
          width={170}
          alt="logo"
          className="header-logo"
          src="/logo1.png"
        />

        <div className="header-btns-context">
          <Button
            variant="text"
            className="text-white fw-bold btn-transperent"
            style={{ gap: 2 }}
            onClick={() => console.log('hello')}
          >
            <PublicIcon />
            <span className="d-none">Help</span>
          </Button>
          <Button
            variant="text"
            className="text-white fw-bold btn-transperent"
            style={{ gap: 2 }}
            onClick={() => setActiveModal('login')}
          >
            <AccountCircleIcon />
            <span className="d-none">Login</span>
          </Button>
          <Button
            variant="text"
            className="text-white fw-bold btn-transperent"
            style={{ gap: 2 }}
            onClick={() => setActiveModal('register')}
          >
            <PersonAddIcon style={{ transform: 'rotateY(180deg)' }} />
            <span className="d-none">Sign Up</span>
          </Button>
        </div>
      </div>

      <LoginModal
        open={activeModal === 'login'}
        onClose={() => setActiveModal(null)}
        openSignUpHandler={() => setActiveModal('register')}
        openForgotHandler={() => setActiveModal('forgot')}
      />

      <RegisterModal
        open={activeModal === 'register'}
        onClose={() => setActiveModal(null)}
        openLoginHandler={() => setActiveModal('login')}
      />

      <ForgotModal
        open={activeModal === 'forgot'}
        onClose={() => setActiveModal(null)}
        openOTPHandler={() => setActiveModal('otp')}
        openLoginHandler={() => setActiveModal('login')}
      />

      <OTPModal
        open={activeModal === 'otp'}
        onClose={() => setActiveModal(null)}
        openForgotHandler={() => setActiveModal('forgot')}
        openResetHandler={() => setActiveModal('reset')}
      />

      <ResetModal
        open={activeModal === 'reset'}
        onClose={() => setActiveModal(null)}
        openOTPHandler={() => setActiveModal('otp')}
        openLoginHandler={() => setActiveModal('login')}
      />
    </>
  );
};

export default Header;
