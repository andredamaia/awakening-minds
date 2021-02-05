import React from 'react';
import { Link } from 'react-router-dom';

import bgNewMobile from '../../../assets/bg-new-mobile.jpeg';
import bgNewInterna from '../../../assets/bg-new-interna.jpg';

import done from '../../../assets/done.png';

function OnlineSessions({ interna }){

    return(
        <>
            <div className={ interna ? 'interna bg-new-mobile' : 'bg-new-mobile' }>
                <Link to="/online-sessions"><img src={bgNewMobile} alt="" style={{ maxWidth: '100%' }} /></Link>
            </div>

            <div className={ interna ? 'interna bg-new' : 'bg-new' }>
                <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3"></div>

                    <div className="col-12 col-md-9">
                    <div className="row">
                        <div className="col-12">
                        <h2>Online sessions are safe and efficient. <span>What can be done?</span></h2>
                        </div>

                        <div className="col-12 col-md-6">
                        <ul className="list-default">
                            <li>Sessions focused on weight loss</li>
                            <li>Release all your Negative Emotions without suffering</li>
                            <li>Treat Traumas and Phobias</li>
                            <li>Learn about your mind, emotions and how Reality is formed</li>
                            <li>Transcend bad habits</li>
                            <li>Stop eating something that you like and eat too much</li>
                            <li>Start liking eating something you hate</li>
                            <li>Don’t you like your boss but need to talk to him every day? <span>We can make this more pleasant for both of you </span></li>
                            <li>Going through a breakup that hurts a lot? <span>We can also help with that!</span></li>
                            <li>Do you need to develop specific skills like speaking in public or being extroverted when in reality you are shy? <span>Done</span> <img src={done} style={{ width: 15 }} alt=""/></li>
                            <li>Do you need to work on your self-esteem: confidence, self-love, self-image? <span>It can be done faster than you imagine!</span></li>
                            <li>Have you lost a loved one and already know that it’s okay to stop suffering? <span>We help you keep the beautiful memories without the burden of the hurt and guilt. </span></li>
                        </ul>
                        </div>

                        <div className="col-12 col-md-6">
                        <ul className="list-default">
                            <li>Do you hate exercising? <span>If we work your self-esteem properly you will automatically like exercising, not even to look good (although you will) but because you will understand that you do deserve to FEEL GOOD. Also, there is nothing wrong with giving you a little help making the Gym sound like a cozier and more appealing place!</span></li>
                            <li>Have you been stuck financially since you can remember? <span>You definitely have Limiting beliefs about money so come to clear them and start creating the abundance you deserve!</span></li>
                            <li>How is your love life? Are you in a toxic relationship or do you seem to keep attracting “the same kind” of partners? <span>We need to free yourself from your unconscious patterns so you can create healthy relationships and attract the loving and committed partner that you deserve!</span></li>
                            <li>Design the Life of your dreams and we insert the goals as future memories in your subconscious mind. <span>How much more confident could you be of achieving something if it felt like you had already achieved it? </span></li>
                        </ul>
                        </div>

                        <div className="col-12">
                        <div className="p-new">
                            <div><span>Single sessions or my 15 hours Personal Break Through program!</span></div>
                            <div><span className="p-new-blue">Book Now your free assessment call!</span></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className={ interna ? 'interna bg-new-interna' : 'bg-new-interna' }>
                <Link to="/"><img src={bgNewInterna} alt="" style={{ maxWidth: '100%' }} /></Link>
            </div>
        </>
    )
       
}   


export default OnlineSessions;











