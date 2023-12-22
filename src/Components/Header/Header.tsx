import React from 'react';
// @ts-ignore
import Logo from '../../Assets/Icons/logo.svg'
// @ts-ignore
import UserIcon from '../../Assets/Icons/user.svg'
// @ts-ignore
import SearchIcon from '../../Assets/Icons/search.svg'
import './Header.scss'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <header className={'header'}>
            <div className={'container header-wrapper'}>
                <img src={Logo} alt=""/>
                <nav className={'header-nav'}>
                    <ul className={'header-nav-list'}>
                        <li className={'header-nav-item'}>
                            <Link to={'/'} className={'header-nav-link'}>Destination</Link>
                        </li>
                        <li className={'header-nav-item'}>
                            <Link to={'/'} className={'header-nav-link'}>Offer</Link>
                        </li>
                        <li className={'header-nav-item'}>
                            <Link to={'/'} className={'header-nav-link'}>Tour</Link>
                        </li>
                        <li className={'header-nav-item'}>
                            <Link to={'/'} className={'header-nav-link'}>Blog</Link>
                        </li>
                    </ul>
                </nav>
                <div className={'header-action'}>
                    <button className={'header-action-button'}>
                        <img src={UserIcon} alt="User"/>
                    </button>
                    <button className={'header-action-button'}>
                        <img src={SearchIcon} alt="Search"/>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;