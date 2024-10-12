import Kamis from '../Resset/Icone/Narbar_icone/Kamis.svg'; 

import loop from '../Resset/Icone/Narbar_icone/loop.svg'; 

import panier from '../Resset/Icone/Narbar_icone/panier.svg'; 
import quite from '../Resset/Icone/Narbar_icone/quite.svg'; 

import {useState} from "react"
import {home , beat, cadeau, moi, contact,chat} from '../bodyPage/Import'





export default function Nav_Bar(){


    const [controleur,setcontrol]=useState(false)

    const [search,setsearch]=useState(false)

    const Controleur = () => {
        setcontrol(!controleur)
    }

    const ControleurSearch = () => {
        setsearch(!search)
    }
    return (
        
        <div className='content-nav'>
            <nav className="navBar">
                <div className="firstP">

                    <Hamburger Controleur = {Controleur}/>

                    <span className="line-divise"></span>

                    <img className="logo" src={Kamis}/>

                </div>

                <div className="secondeP">
                    <img className="loop" src={loop} onClick={ControleurSearch}/>

                    <img className="panier" src={panier}/>

                    <Button/>

                </div>

                <div className=
                    {`search ${ search ? "toggle-bar-search" : ""}`}>

                    <img className="loop search-loop" src={loop}/>
                    <input type="search" className="search-bar" name="q"
                    placeholder='recherche' />
                    <img className="loop search-quite" src={quite} onClick={ControleurSearch}/>
                </div>

            
            </nav>

            <div className={`toggle-bar-down ${controleur ? "toggle-bar-back" : ""}`}>
                    
                    <ul className="menu">
                        <li className="menu1">
                            <img src={home}className='iconeT' alt="" />
                            <span className="home">Home</span>
                        </li>
                        <li className="menu2">
                            <img src={beat}className='iconeT' alt="" />
                            <span className="beat">Beat</span>
                        </li>
                        <li className="menu3">
                            <img src={cadeau}className='iconeT' alt="" />
                            <span className="cadeau">
                                recevoir mon cadeau
                            </span>
                        </li>
                        <li className="menu4">
                            <img src={moi} className='iconeT' alt="" />
                            <span className="moi">
                                Qui suis-je
                            </span>
                        </li>
                        <li className="menu5">
                            <img src={contact} className='iconeT' alt="" />
                            <span className="contact">
                                contactez-nous
                            </span>
                        </li>
                        <li className="menu6">
                            <img src={chat} className='iconeT' alt="" />
                            <span className="chat">
                                laissez-nous un commentaire
                            </span>
                        </li>
                    </ul>
            </div>
        </div>
    );
}


export function Hamburger({Controleur}){

    return(
        <button className="Hamburger" onClick={Controleur}>
            <div className="content-Hamb">
                <span className="line l1"></span>
                <span className="line l2"></span>
                <span className="line l3"></span>
            </div>
        </button>
    );
}

export function Button(){

    return(
        <button className="connexion">
            connexion
        </button>
    );
}