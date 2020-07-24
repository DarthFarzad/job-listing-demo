import React from "react";
import './header.scss';

const Header = () => (<header>
    <img src="./images/bg-header-mobile.svg" alt="" className="d-md-none"/>
    <img src="./images/bg-header-desktop.svg" alt="" className="d-none d-md-block"/>
</header>);

export default Header;