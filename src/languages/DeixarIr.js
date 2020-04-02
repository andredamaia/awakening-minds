import React from 'react';
import { Helmet } from 'react-helmet';

import '../styles/DeixarIr.css';

import hearts from '../assets/hearts.png'
import spirit from '../assets/spirit.png'

export default function Deixair() {
    return(
        <>
            <Helmet>
                <title>Letting Go - Awakening Minds</title>
                <meta name="description" content="We change the World not by what we say or do, but as a consequence of what we have become" />
            </Helmet>

            <div className="bg-beach">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 offset-md-7 text-right">
                            <span className="text-highlight">“We change the World not by what we say or do, but as a consequence of what we have become”
                            
                            <span>– Dr. David R. Hawkins</span></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-heart">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <p>The mechanisms mind uses to handle emotions are through Suppression, Expression and Escape. All emotions have an emotional as well as a physical impact. </p>

                            <p>In fact emotions that are not fully expressed and dealt with will be stored in our physical body energetically waiting for the next opportunity to raise and be released.</p>
                        </div>

                        <div className="col-12 col-md-4">
                            <img src={hearts} style={{ maxWidth: '100%' }} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-spirit">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p>Dr. Hawkins, a renowned American Psychiatrist and physician author of many books and theories connecting psychology and spirituality, is the creator of this fabulous healing tool called Letting Go Technique in which the patient is able to access deeply stored blocks of emotions and release them.</p>
                        </div>

                        <div className="col-12 col-md-4 left">
                            <p>Thereby releasing the emotion, the person becomes free of compulsory behaviour, negative thoughts and feelings that were once associated to that negative energetic burden.</p>
                        </div>

                        <div className="col-12 col-md-4">
                            <img src={spirit} style={{ maxWidth: '100%' }} alt="" />
                        </div>

                        <div className="col-12 col-md-4 right">
                            <p> While psychotherapy strives to adjust the Ego (personality) to a healthier balance, replacing unsatisfactory mental programs with more satisfactory ones, Letting Go focus on eliminating these programming to a transcendence of the mind itself into higher states of consciousness of love and peace.</p>
                        </div>

                        <div className="col-12 text-center">
                            <h3 style={{ border: 'none' }}>Would you like to release a lifetime of emotional burden in only one session, wouldn't you? </h3>

                            <p>Imagine the physical and emotional relief and the well being feeling after healing your entire past! Utilizing the Time Paradigm technique we eliminate completely any negative emotion linked to all memories of events up till the present moment. This means a complete shift of the individual conditioning to an extreme positive level which will support the person to focus on what he/she wants to build and not the other way round, also improving professional and personal relationships due a more optimistic way of looking at life.</p>
                        </div>

                        <div className="col-12 text-center">
                            <h3 style={{ border: 'none', marginTop: 60, fontSize: 36 }}>The efficiency of combining Hypnotherapy and Letting go Technique is astonishing,</h3>
                        </div>

                        <div className="col-12 col-md-10 offset-md-1">
                            <p>The patient will not only be able to eliminate negative emotions, understanding where they come from and the influence in their behaviour and personality, but will also become extremely resilient in dealing with any new challenges in life as he/ she will be able to apply the Letting go on their own anywhere, anytime avoiding new packages of negativity to be stored in.</p>
                        </div>

                        <div className="col-12 col-md-4 offset-md-4">
                            <p className="box-yellow">Get in touch today and schedule your free 15 minutes assessment call.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}







