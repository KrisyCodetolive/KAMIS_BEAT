
import Kamis from '../Resset/Icone/Narbar_icone/Kamis.svg';
import Youtub from '../Resset/Icone/Footer_icone/Youtub.svg';
import Tiktok from '../Resset/Icone/Footer_icone/Tiktok.svg';
import Instagram from '../Resset/Icone/Footer_icone/Instagram.svg';

export default function Footer(){

    return (
        <div>
            <footer className='footer'>
                
                <div className='footer-logo'>
                    <img src={Kamis} className= "logo" alt="logo" />
                </div>

                <div className="footer-menu1">
                    <ul className="menu-1">
                        <li className="menu1">Acceuil</li>
                        <li className="menu2">Recevoir mon cadeau</li>
                        <li className="menu3">Contacter nous</li>
                        <li className="menu4">Qui suis-je</li>
                    </ul>
                    <div className="link-contact">
                            <img src={Youtub} className='logo-footer' alt="" />
                            <img src={Tiktok} className='logo-footer' alt="" />
                            <img src={Instagram} className='logo-footer' alt="" />
                    </div>
                </div>

                <div className="footer-menu2">
                    <ul className="menu-2">
                        <li className="menu2-1">Privacy policy</li>
                        <li className="menu2-2">Licence</li>
                    </ul>
                </div>
                
            </footer>
        </div>    
        )
}