import { afro, rap, trap, sound, Arrow, Arrown, Send, Send_com, Play, Pause } from '../bodyPage/Import'

export function Acceuil(){

    
    return (
        <div className="Body">

            <section className="Pub">Publicité</section>


            <section className="recommande">
                {/* <h1 className="reh1">Recommandé</h1> */}

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

                        <span className="t-i">Faux coeur</span>
                        <span className="t-t">Faux coeur</span>
                        <span className="t-b">Faux coeur</span>


                        

                        </il>
                        <il className="vue place2"></il>
                        <il className="vue place3"></il>
                        <il className="vue place4"></il>
                    </ul>
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


            
        </div>
    );
}


export function btnPlayer(){

    return (
            <div className="btnplayer">
                        
            </div>
    );
}


export function Button(){

    return(
        <button type="submit" className="connexion send">
            <h1>Envoyer</h1>
            <img src={Send} className='IconeSend' alt="" />
        </button>
    );
}