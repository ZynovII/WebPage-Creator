import React, { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { LoginBtn } from './LoginBtn/LoginBtn';
import { Navbar } from './Navbar/Navbar';

import './AppHeader.scss';

export function AppHeader() {

    const [smallDisplayMode, setSmallDisplayMode] = useState();
    const nodeRef = useRef(null);

    const toggleHandler = () => setSmallDisplayMode(!smallDisplayMode);

    return (
        <header className='app-header bg-indigo text-white py-2'>
            <div className='app-header_container container-fluid d-flex justify-content-between'>
                <Navbar />
                <div className='toggle'>
                    <LoginBtn />
                </div>
            <div className='navbar-toggle navbar-dark'>
                <button
                    onClick={toggleHandler} 
                    className='navbar-toggler'>
                    <span className='navbar-toggler-icon'></span>
                </button>
            </div>
            </div>
            <CSSTransition 
                in={smallDisplayMode}
                nodeRef={nodeRef}
                timeout={300}
                classNames='nav-toggle'
            >
                <div className='nav-toggle' ref={nodeRef}>
                    <Navbar smallDisplayMode cbClose={toggleHandler} />
                </div>
            </CSSTransition>
        </header>
    )
} 