import React from 'react';
import { Helmet } from 'react-helmet'

import '../styles/LifeCoaching.css';

import bgandressa from '../assets/life-coaching-3.jpg';
import bgandressamobile from '../assets/life-coaching-mobile-3.jpg';

export default function Coaching() {
  return (
    <>
      <Helmet>
          <title>Life Coaching - Awakening Minds</title>
          <meta name="description" content="Go beyond the racional, towards full happiness" />
      </Helmet>

      <div className="bg-egito">
        <div className="container">
          <div className="row">
            <div className="col-12">

            </div>
          </div>
        </div>
      </div>

      <div className="felicidade">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Go beyond the racional, towards full <span className="color-blue">happiness</span> </h2>
            </div>

            <div className="col-12 col-md-6">
              <p>When creating expectations, getting caught up in the turmoil around us, having a busy routine and a frenetic life style are some of the reasons why we become unhappy in the mental, emotional and spiritual areas.</p> 

              <p className="end"><strong>That’s why I dedicated myself to know:</strong></p>
            </div>

            <div className="col-12 col-md-6">
              <div className="grid-col-2">
                <div>
                  <p><strong>How to find the <br/>
                  best in yourself</strong></p>
                </div>

                <div>
                  <p><strong>How to transform<br/>
                  your expectations</strong></p>
                </div>
              </div>

              <div className="grid-col-1">
                <div>
                  <p><strong>How to help you find the path of your happiness and walk you through it side by side</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>          
      
      <div className="bg-projetar">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 style={{ marginBottom: 40, textTransform: 'uppercase' }}>And if you could design the life of your dreams, how would it look like? Who would you like to become?</h2>

              <p>My coaching is for you if you:</p>

              <p>
                - Want to learn a meaningful approach to life  that truly empowers you, unlocks your true potential and enable you to create, achieve and become what you want in life. <br />
                - Want guarantee that you will resolve your own perceived life burdens/emotional baggage from the past, replace any limiting beliefs for the desired ones, find in-depth understanding of who you are and how you got to be where you are now, resolve internal conflicts and become the master of your own mind and destiny. <br />
                - Want to be treated with love, respect and care, receiving unrivaled support and consistency before, during and after the coaching sessions.
              </p>

              <p>My approach to transformation is simple, practical and effective. It is formed by proven and tested tools and techniques/technologies such as the culmination and refinement of the latest studies in Neural and Behavioral Science, NLP (Neuro Linguistic Programming), Hypnosis, Quantum Physics and several life coaching and change management models.</p>

              <p>From stop snoozing your alarm in the morning to healing from a broken heart; from being able to stand in front of people for a public speech to leaving the 9am to 5pm job that you hate and open your own business. From becoming a better leader to improving your love life. Do you want to set up Goals and believe they are not only achievable but have already been achieved? Anything is possible, and if you believe YOU CAN I'm here to help you!</p>

              <p>While most of Life Coaches will try to change behaviors directly even knowing that they come from Conditioning, my way to change is working in the core of one's inner reality where all the emotions, beliefs, values and limitations are. Knowing that perception is projection we aim to align the inner World so the outer World follows the change.</p>

              <p><strong>Living life in a positive and joyful way is your right so step up and start changing NOW!</strong></p>
            </div>
          </div>
        </div>
      </div>

      <img src={bgandressa} className="d-none d-md-block" style={{ maxWidth: '100%' }} alt="" />
      <img src={bgandressamobile} style={{ width: '100%' }} className="d-md-none" alt="" />

      <div className="bg-projetar">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3">
              <div className="border-box">
                To stop being on the effect side of your life and take back your control and personal power contact me for an assessment call, we have different packages.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
