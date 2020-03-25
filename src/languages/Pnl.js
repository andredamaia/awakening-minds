import React from 'react';
import { Helmet } from "react-helmet";

import '../styles/Pnl.css';

import strong from '../assets/strong.png';
import brain from '../assets/brain.png';
import manyfaces from '../assets/many-faces.png';

export default function Pnl() {
    return(
        <>
            <Helmet>
                <title>NLP - Awakening Minds</title>
                <meta name="description" content="Programming your evolution" />
            </Helmet>

            <div className="bg-brain">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <h1 style={{ fontSize: 78 }}>N.L.P</h1>
                        </div>

                        <div className="col-12 col-md-6"></div>

                        <div className="col-12 col-md-3">
                            <span className="subtitle">Programming your evolution</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-strong">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-12 col-md-7">
                            <p>Neurolinguistics Programming consists of a pseudoscience method focused in three different, yet interconnected human aspects - the neurologic processes, language (verbal and non verbal) and existing or not behavioral patters which are learned by any individual.</p>
                        </div>

                        <div className="col-12 col-md-5">
                            <img src={strong} style={{ maxWidth: '100%' }} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="color-brain">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8 ">
                            <p>Created in the 70s by Richard Brandler and John Grinder in California, United Estates, its one of the most efficient methods to develop behavioral patterns, emotions and self-awareness, directly supporting the development of personal, professional and social areas.</p>

                            <p>Believing in the evolution of the human been, since the creation until this very moment and in the future, when their mental and behavioral capabilities will be improved, NLP comes to scientifically support the path of this evolution.</p> 
                        </div>

                        <div className="col-12 col-md-4">
                            <img src={brain} style={{ maxWidth: '100%', marginBottom: 30 }} alt="" />
                        </div> 

                        <div className="col-12 col-md-4 manyfaces">
                            <img src={manyfaces} style={{ maxWidth: '100%' }} alt="" />
                        </div>

                        <div className="col-12 col-md-8">
                            <p className="p-manyfaces">In short, the Neurolinguistics Programming is based on the fact that everything we do, has and comes from an initial purpose, therefore it is focused on these sources, usually unconscious, to understand the individual and their actions thus enabling the possibility to insert new patterns that will positively influence, and if needed, overwrite the existing behaviors. By identifying programming and limiting beliefs, NLP supported by Hypnoses will then replace negative patterns with positive ones.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <span className="text-highlight">Through individual orientation, face-to-face or online, Andressa incites you to transform yourself, guiding you to apply this technique on a daily bases to improve your life in many aspects.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-body">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-12 col-md-4">
                            <h5>Benefits <br /> of NLP:</h5>
                        </div>

                        <div className="col-12 col-md-7 offset-md-1">
                            <ul>
                                <li>- Controlling of individual thoughts and emotions</li>
                                <li>- Management of one's actions and towards others</li>
                                <li>- Enhancement of individual performance</li>
                                <li>- Creation of professional and leadership identity</li>
                                <li>- Treating Phobias and Stress</li>
                                <li>- Developing self esteem and self confidence, personally and professionally</li>
                                <li>- Positive results applied in Business and when leading a professional team</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}