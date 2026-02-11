import React from "react";
import ReactDom from "react-dom/client";
import "./Header.css";
import HighlightIcon from '@mui/icons-material/Highlight';

function Header() {
  return (
    <header>
      <h1><HighlightIcon /> Keeper App</h1>
    </header>
  );
}

export default Header;