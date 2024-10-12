import { afro, rap, trap, sound, Arrow, Arrown, Send, Send_com , download ,Play, ArrowB , Arrow_B, Pause, Croix, share, pub} from '../bodyPage/Import'

export function Acceuil(){

    
    return (

        <div className="Body">

            <section className="Pub">
                {/* <img src={pub} className="pb"  alt="" /> */}
                pub
            </section>


            <section className="recommande">
                {/* <h1 className="reh1 h1">Recommandé</h1> */}

                <div className="conteneur-rec">

                    <img src={Arrow} className='Arrow' alt="" />

                    <div className="conteneur-Aff">

                        <div className="lueur">
                        </div>
                        
                        <div className="secondaire1">
                            <img src={rap} className='second-1' alt="" />
                        </div>

                        <div className="Aff-main">

                            

                            <img src={trap} className='Main-Aff' alt="" />

                            <div className="title">
                                <h1>Faux coeur</h1>
                                <h2>140 BPM . trap ragga</h2>
                                <div >
                                    <img src={sound} className="sound" alt="" />
                                </div>
                            </div>


                        </div>

                        
                        <div className="secondaire2">

                            <img src={afro} className='second-2' alt="" />
                        </div>
                    </div>
                    <img src={Arrown} className='Arrow'  alt="" />
                </div>
            
            </section>


            <section className="instrumental">
                <h1 className="reh1">Instrumental</h1>

                <div className="header">

                    <div className="all">
                        All
                    </div>

                    <div className="catégorie">
                        Catégorie
                    </div>

                    <div className="payant">
                        Instru payantes
                    </div>

                    <div className="free">
                        Instru gratuite
                    </div>

                </div>

                <div className="content-instru">

                    <div className="titre">
                        <span className="T">Titre</span>
                        <span className="Te">Temps</span>
                        <span className="B">Bpm</span>
                        <span className="Ty">Type</span>
                    </div>

                    <ul className="content-il">

                        <il className=" vue place1">

                            <img src={trap} width="50px" height="50px" className="image" alt="" />

                            <div className="content-t">
                                <span className="t-i">Faux coeur</span>
                                <span className="t-t">02:45</span>
                                <span className="t-b">145</span>
                                <span className="t-ty">trap rap</span>

                                <span className="icone" width="40px">
                                <img src={Play} width="30px" height="30px" alt="" srcset="" />
                                <img src={download} width="20px" height="20px" alt="" className='biff' srcset="" />
                                </span>
                            </div>

                        </il>

                        <span className="bar"></span>

                        <il className="vue place2">

                            <img src={rap} width="50px" height="50px" className="image" alt="" />

                            <div className="content-t">
                                <span className="t-i">Fauc coeur</span>
                                <span className="t-t">02:45</span>
                                <span className="t-b">145</span>
                                <span className="t-ty">trap rap</span>

                                <span className="icone" width="40px">
                                <img src={Play} width="30px" height="30px" alt="" srcset="" />
                                <img src={download} width="20px" height="20px" alt="" className='biff' srcset="" />
                                </span>
                            </div>

                           
                        </il>

                        <span className="bar"></span>

                        <il className="vue place3">
                            <img src={afro} width="50px" height="50px" className="image" alt="" />

                            <div className="content-t">
                                <span className="t-i">Faux coeur</span>
                                <span className="t-t">02:45</span>
                                <span className="t-b">145</span>
                                <span className="t-ty">trap rap</span>

                                <span className="icone" width="40px">
                                <img src={Play} width="30px" height="30px" alt="" srcset="" />
                                <img src={download} width="20px" height="20px" alt="" className='biff' srcset="" />
                                </span>
                            </div>

                            
                        </il>

                        <span className="bar"></span>

                        <il className="vue place4">
                            <img src={trap} width="50px" height="50px" className="image" alt="" />

                            <div className="content-t">
                                <span className="t-i">Faux coeur</span>
                                <span className="t-t">02:45</span>
                                <span className="t-b">145</span>
                                <span className="t-ty">trap rap</span>

                                <span className="icone" width="40px">
                                <img src={Play} width="30px" height="30px" alt="" srcset="" />
                                <img src={download} width="20px" height="20px" alt="" className='biff' srcset="" />
                                </span>
                            </div>

                            
                        </il>

                        <span className="bar"></span>
                    </ul>
                </div>

                <div className="content-PS">
                    <Btn_Précedent/>
                    <Btn_Suivant/>
                </div>

                

                {/* <btnPlayer/> */}
            </section>

            
            <section className="message">

                <h1 className='title-mess'>Contactez-nous</h1>
                <form action="#" className="contactez">

                    <div className='namemail'>
                        <input type="text" className="input name" placeholder="Nom"/>
                        <input type="text" className="input email"  placeholder="Email"/>
                    </div>

                    <input type="text" className="input"  placeholder="Sujet"/>
                    <input type="text" className="input"  placeholder="Message"/>
                    
                    <Button/>
                </form>
            </section>


            <section className="commentaire">
                <h1 className="title-com">Commentaire</h1>

                <form action="#" className='form_com'>
                    <input type="text" placeholder='Laissez-nous un commentaire' className='input-com'/>
                    <img src={Send_com} className="Send_com" alt="" />
                </form>
                <div className="Box-com">

                </div>
                
            </section>

            <section className="toggle">

                <div className="partieToggle1">

                    <img src={trap} alt="" style={{ width: '40px'}} />
                    <div className="title info">
                        <h1>Faux coeur</h1>
                        <h2>140 BPM . trap ragga</h2>
                        <img src={sound} className="sound" style={{ width: '25px', height:'30px'}} alt="" />
                    
                    </div>

                </div>

                <div className="partieToggle2">
                    <Bnt_Playertoggle/>

                    <div className="option">
                        <img src={download} style={{ width: '20px'}} alt="" />
                        <img src={share} style={{ width: '20px'}} alt="" />
                    </div>
                </div>

                <img src={Croix}  className='quite' alt="" style={{ width: '15px'}}/>
            </section>


            
        </div>
    );
}


export function btnPlayer(){

    return (
            <div className="btnplayer">
                        
            </div>
    );
}

export function Bnt_Playertoggle(){

    return (

        <div className="content-btn_Pt">
            <img src={Arrow_B} alt="" style={{ width: '12px'}} />
            <img src={Pause} alt="" style={{ width: '50px', transform:'translateY(3px)'}} />
            <img src={Arrow_B} style={{transform: 'rotate(180deg)' , width: '12px'}} alt="" />
        </div>
    )
}

export function Button(){

    return(
        <button type="submit" className="connexion send">
            <h1>Envoyer</h1>
            <img src={Send}  className='IconeSend' alt="" />
        </button>
    );
}

export function Btn_Précedent(){

    return(
        <button type="submit" style={{ backgroundColor: 'rgba(191,191,191,0.61)'}} className="connexion send">

            {/* <img src={ArrowB}  style={{ width: '25px'}}className='IconeSend' alt="" /> */}
            <h1>Précedent</h1>
            
        </button>
    );
}

export function Btn_Suivant(){

    return(
        <button type="submit" className="connexion send">
            
            <h1>Suivant</h1>
            {/* <img src={ArrowB} className='IconeSend' alt="" style={{ width: '25px', transform: 'rotate(180deg)'}}/> */}
            
        </button>
    );
}