import React from 'react';
import { Helmet } from "react-helmet";

import '../styles/Hipnoterapia.css';

import hipimg1 from '../assets/hip-img-1.png';
import imgbox from '../assets/img-box.png'
import iceberg from '../assets/iceberg.png'
import icebergMobile from '../assets/iceberg-mobile.png'

export default function Hipnoterapia() {
    return (
        <>
            <Helmet>
                <title>Hypnotherapy - Awakening Minds</title>
                <meta name="description" content="Subconscious Mind & Hypnotherapy in a simple way" />
            </Helmet>

            <div className="hip-blue">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>
                                Subconscious Mind & <br />
                                Hypnotherapy <br />
                                in a simple way
                            </h1>
                        </div>
                    </div>
                </div>    
            </div>

            <div className="hip-rock">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-12 col-md-9">
                            <p>Hypnotherapy made popular during the 20th century by Franz Mesmer, a German physician, is used to create a state of focused attention and increased suggestibility during which positive  suggestions and guided imagery are used to help individuals deal with a variety of concerns and issues.</p>
                        </div> 

                        <div className="col-12 col-md-3">
                            <img src={hipimg1} style={{ maxWidth: '100%' }} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="hip-box">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-9"> 
                            <p>Imagine you have a box and inside of it you place all your emotions, thoughts, habits, beliefs and impressions. Imagine that everything you consider right or wrong, good or bad, fair or unfair is placed right there inside that box. Everything you experience through your five senses creates an impression, those impressions when experienced frequently become a belief and those beliefs will be installed in your subconscious mind as a programming which you can’t see but it is there ruling your life.</p>

                            <p>That “little box” which is your subconscious mind containing all the things you believe to be You, will now project itself out and make sure that every thought you have, every word you say and every action you take brings more similar impressions to reinforce the current operating programming, regardless if they are beneficial or not for you. It is like you are inside a maze unable to get out walking in circles, always returning back to the starting point.</p>

                            <p>Let’s say for instance when growing up you were constantly neglect by one or both of your parents, that little drawing you made was diminished and classified as poor, not good enough; that you were told that you are not smart as you can’t finish your maths home work alone (even though you were quite good at biology). At School you got bullied and your teachers would remind you often how slow you are and how behind you are compared to your colleagues. In this regard your box will be fulfilled with a limiting belief about your self- worth</p>

                            <div className="col-12 text-right">
                                <span className="text-red"><i>which then will create strong imaginary boundaries determining what you can or can NOT achieve in life.</i></span>
                            </div>
                        </div>

                        <div className="col-12 col-md-3 d-none d-md-block">
                            <img src={imgbox} style={{ maxWidth: '100%' }} alt="" />
                        </div>
                    </div>
                </div>    
            </div>

            <div className="hip-yellow">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p>How could one have a successful career, be well paid, be a public speaker or simply stand up for themselves when inside their “little box” all the things gathered show how incapable and undeserving they are ? The programming has been already installed and it will dictate the experiences where one “believes” I can’t do better than that...This belief is not conscious therefore the person might just classify himself as unlucky, unfortunate, not presented with enough opportunities.</p>

                            <p>He or she may also blame it on people or life circumstances because since one is identified with the belief it can NOT be seen.</p> 
                        </div>
                    </div>
                </div>    
            </div>

            <div className="hip-iceberg">
                <img src={iceberg} className="img-iceberg d-none d-md-block" alt="" />

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>Hypnotherapy is a fantastic door that allows you to access “the box” and identify those limiting beliefs replacing them with positive ones.</h4>

                            <div className="col-12 col-md-8 offset-md-1">

                                <p className="text-iceberg">During a hypnotherapy session you will be guided to a deeper state of relaxation where the subconscious mind can be accessed. You will then receive instructions to look for specific memories, feeling and images. The professional will then flood the subconscious with positive suggestions to break and replace the old patters.
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-md-8 before-red-box">
                            <p>Hypnotherapy can be used to treat stress, cigarettes addiction, improve relationships, increase self-esteem, help create financial abundance through self worth and an I can do it attitude. It is also beneficial to create a healthier life style, weight loss, desire to exercise. It radically improves public speaking and also treats anger, shame, guilt and regret- heavy emotions which usually are a burden to carry through life.</p>
                        </div>

                        <div className="col-12 d-md-none">
                            <img src={icebergMobile} style={{ maxWidth: '100%', marginBottom: 20 }} alt="" />
                        </div>

                        <div className="col-12 col-md-5 box-left">
                            <h2>How do I know I have a limiting belief?</h2>

                            <p>That’s very simple, look with honesty to all aspects of your life:</p>
                        </div>

                        <div className="col-12 col-md-7 box-right">
                            <p>Work, relationships, health, financial abundance, hobbies and how joyful you are. Now rate each one of them from 0-10, 0 being absolutely terrible and 10 being totally amazing. If you constantly see yourself getting in one or more categories a score lower than 8 then you definitely have a limiting belief determining your experience that is not serving you.</p>
                        </div>
                    </div>
                </div>    
            </div>

            <div className="bg-eye">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <span>Everyone can be hypnotized, there is no loss of consciousness or Will and the client is actively interacting during the session. It is safe and transformative!</span>
                        </div>
                    </div>
                </div>    
            </div>

            <div className="hip-white">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center"> 
                            <h2>Be ready to become the best version of yourself, once you change the inner world the outer world will follow the transformation.</h2>
                        </div>
                    </div>
                </div>    
            </div>
        </>
    )
}