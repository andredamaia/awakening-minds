import React from 'react';
import Helmet from 'react-helmet';

import emotions from '../assets/emotions.png';
import flower from '../assets/flower.png';
import yinyang from '../assets/yin-yang.png';
import andressa from '../assets/andressa.png';
import faces from '../assets/faces.png';

import '../styles/Home.css';

export default function Home() {
  return (
    <>
        <Helmet>
            <title>Awakening Minds</title>
            <meta name="description" content="Hello my fellow Human Beings, welcome to my website!" />
        </Helmet>

        <div className="bg-sobre">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-6">
                <h2 className="special">About Andressa Mokesinki</h2>

                <img src={andressa} className="img-left" alt="" />

                <p>Born and raised in Brazil in a small town in the countryside, Andressa comes from a troubled home and from a very early age she faced countless challenges and heavy responsibilities.</p>

                <p>The years passed by but the difficulties didn’t...it seemed like the sun would shine for a short period of time and soon enough another storm would hit and destroy everything that was once built with so much effort. It was only after so many experiences of pain and suffering that Andressa noticed a repeating pattern in events and also in people around her, it was only then that she decided to stop and look inside.</p>

                <p>Through Meditation, Therapy and Spirituality, Andressa identified limiting programming and beliefs formed back there during her child and teenage- hood which had been impacting her adult life in many negative ways. It was only after identifying and eliminating those programming that she broke free and woke up to a joyful life, filled with peace and love which allowed her to create everything she ever wanted. Seeking balance for herself, she discovered that the Universe is amazing and always gives us back what we emanate from within.</p>

                <h6>There is no short cut...”The only way out is in”.</h6>

                <p>Today utilizing the same tools, Andressa seeks to help people find their inner peace and power, to get really to know themselves intimately and eliminate the pain and suffering auto inflicted by the mind and it’s limiting beliefs. In this way they are free to create and live the life they have always dreamed and deserved.</p>

                {/* <p>Andressa is certified in Hypnoses, Neurolinguistics Programming and Time Paradigm by Robert Simic Coaching Institute in Dubai, accredited by Federation of NLP Coaching Professionals - FNLPCP. She is also a certified Life and Spiritual Coach accredited by the International Coach Federation – ICF.</p> */}
            </div>

            <div className="col-12 col-md-6">
              <h3 className="add-top">Welcome!</h3>

              <p><strong>Hello my fellow Human Beings, welcome to my website!</strong></p>

              <img src={faces} className="img-right" alt="" />

              <p>If you are reading this page, congratulations, you are ready to change! While many don't know their real potential and waste the chances that life gives to live fully, you have proved you do believe and that's enough to start your transformation. If instead of spending months or years going for therapy without knowing for sure the real benefits you may or may not achieve, your intention is to obtain real results in a short period of time, you are in the right place!</p>

              <p>What if you could heal your past completely, forgive and be forgiven? What would happen if you could leave old habits and install new ones that will support your dreams? How would you feel after transforming your self image where you see yourself as the miracle of life that you are: confident, smart, a being who deserves unconditional love? Do you want to be your best version now, don't you? </p>

              <p>I'm here to help you side by side learn to live a <strong>Happy life</strong>!</p>

              {/* <div className="red-box">
                <a href="/">Click here</a>  to know more about the treatments offered and find out which of them is the best for you.
              </div> */}
              
            </div>
          </div>
        </div>
      </div>

      <div className="bg-certificados">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 text-center">
              <h3>Which are the Emotional Interventional techniques?</h3>

              <p>Science suggests that 95% of human behavior comes from our Subconscious mind and only 5% is shaped consciously, thus the importance of Hypnosis, NLP and the Letting Go Technique to access and reset patterns recorded and projected unconsciously. Through the Hypnotherapy, negative behavioral programming is quickly replaced by positive suggestions that allow the patient to obtain significative results in the area to be developed.</p>

              <p>Whether through Emotional Intervention or Coaching, for personal or professional development, all sessions are customized in details to match the client's needs. My goal as a Coach is to eliminate limiting beliefs and guide my clients to self knowledge and Emotional intelligence where they can regain their inner power and manifest the life they desire.</p>
            </div>

            <div className="col-12 col-md-6 offset-md-3 text-uppercase">
              <h2 className="special">Certificates</h2>
            </div>

            <div className="col-12 col-md-10 offset-md-1">
              <div className="row">
                <div className="col-12 col-md-4 text-icon">
                  <img src={emotions} alt="" />
                  <p>Hypnoses, Neurolinguistics Programming and Time Paradigm by Robert Simic Coaching Institute in Dubai</p>
                </div>

                <div className="col-12 col-md-4 text-icon">
                  <img src={flower} alt="" />
                  <p>Accredited by Federation of NLP Coaching Professionals - FNLPCP</p>

                </div>

                <div className="col-12 col-md-4 text-icon">
                  <img src={yinyang} alt="" />
                  <p>Acredited in Life & Spiritual Coaching by The Continuing Coach Education - ICF</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 text-center">
              <p>Travelling is a big passion and she has visited 38 countries, lived in three Continents and today she spends her time between Dubai in the United Arab Emirates and Brazil offering face-to-face and Skype sessions to her clients.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-missao">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1">
              <div className="row">
                <div className="col-12 col-md-3">
                  <h2>Mission</h2>
                </div>

                <div className="col-12 col-md-9">
                  <p>Awakening Minds Coaching & Emotional Health mission is to expand people’s consciousness level, impacting positively their lives so they find a path where happiness is the most natural state of living.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}