"use client";
import { Button, IconButton } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
const Header = () => {
  return (
    <div className="header-context">
      <img height={60} width={170} alt="image" className="header-logo" src="/logo1.png"></img>
      <div className="header-btns-context">
        <Link href={"/"} className="link text-white d-none">
          Help
        </Link>
        <IconButton className="text-white btn-transperent">
          <PublicIcon></PublicIcon>
        </IconButton>
        <Button
          variant="text"
          className="text-white fw-bold btn-transperent g-4"
        >
          <AccountCircleIcon className=""></AccountCircleIcon>
          <span className="d-none">Login</span>
        </Button>
      </div>
    </div>
  );
};
export default Header;
