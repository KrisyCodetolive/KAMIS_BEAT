import React from 'react';
import Kamis from '../Resset/Icone/Narbar_icone/Kamis.svg';

export default function Footer(){

    return (
        <div>
            <footer className='footer'>
                
                <div className='footer-logo'>
                    <img src={Kamis} alt="logo" />
                </div>

                <div className="footer-menu1">
                    <ul className="menu-1">
                        <li className="menu1"></li>
                        <li className="menu2"></li>
                        <li className="menu3"></li>
                        <li className="menu4"></li>
                    </ul>
                    <div className="link-contact">
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                    </div>
                </div>

                <div className="footer-menu2">
                    <ul className="menu-2">
                        <li className="menu2-1"></li>
                        <li className="menu2-2"></li>
                    </ul>
                </div>
                
            </footer>
        </div>    
        )
}