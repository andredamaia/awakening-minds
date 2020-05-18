import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import '../styles/Blog.css';

import blog1 from '../assets/ego.jpg';
import calendar from '../assets/calendar.png';
import folder from '../assets/folder.png';

export default function BlogPost() {
    return (
        <>
            <Helmet>
                <title>Spiritual Awakening & Ego death</title>
                <meta name="description" content="Thinking about your little self, the separated one that you created when you were around 07-09 years old, the little Me. After identifying to that character who has a name, an address, plays specific sport at Scholl and has a toy that he/she loves, that little you (Ego) has grow out of control and now rules the real you!" />
            </Helmet>

            <div className="bg-blog">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2 text-center">
                            <h2>Spiritual Awakening & Ego death</h2>
                        </div>

                        <div className="col-12 col-md-8 offset-md-2">
                            <div className="box-blog">
                                <img src={blog1} style={{ marginBottom: 40, maxWidth: '100%' }} alt="" />

                                <div className="row d-flex align-items-center" style={{ marginBottom: 40 }}>
                                    <div className="col-12 text-center">
                                        <span className="blog-info"><img src={calendar} alt="" /> 14/03/2020</span>
                                        <span className="blog-info" style={{ color: '#ddbf78' }}><img src={folder} alt="" /> #kundalini</span>
                                    </div>
                                </div>

                                <p>Thinking about your little self, the separated one that you created when you were around 07-09 years old, the "little Me". After identifying to that character who has a name, an address, plays specific sport at Scholl and has a toy that he/she loves, that little you (Ego) has grow out of control and now rules the real you!</p>

                                <p>When going through a Spiritual Awakening, if you are persistent enough, strong enough and mature enough to embrace the process, that little self will end up dead. That's right! The fundamental truth will be revealed when your Ego dissolves, is annihilated, excruciated, terminated so the shiny, pure, loving and wise Self will awake from it's slumber and take the place has always belonged to him.</p>

                                <p>Going through an Ego death can be terrifying. You see day by day it loosing its illusionary power and clinging deeper in your mind. It is desperate, doesn't want to give up control, it actually feeds on control, worry and fear. It will make your head spin, will tell you crazy stories, will grab your attention on things it knows you care the most about. Don't listen to it, you got to open space to the real you to be born again.</p>

                                <p>As you start purging emotional baggage and find various programming and limiting beliefs about yourself and the World, the Ego starts fading away. It can be scary to wake up one morning and notice that you barely have any thoughts. Why is mind so clear? Where is "me" in my mind? OMG, I must be losing it, where is my little me?</p>

                                <p>If you are feeling this way, congratulations my friend, you are on the fast speed motorway to Freedom! Embrace it, cherish it, dive in the clean waters of stillness. Rejoice in the infinite power of silence, that is where the real you is and is coming to give you back the peace, love and joy that is yours by right!</p>

                                <p>In the beginning there may be panic, confusion, disillusion as you see everything you believed you were was only an illusion. That perhaps you don't like your job at all and feel compelled to leave it. Maybe you realized that the relationship you are currently in is everything you never dreamed about so it falls apart. When suddenly you feel the need to cut toxic people and situations from your life as they haven't brought you joy and now you know, oh now you have discovered that you do deserve all the joy in the World and you are not settling for less.</p>

                                <p>As one is thrown in the abysm to find a little cave to hide and purge out all their darkness, he will also be put in test. More situations or people will come to distract you. If you notice you are constantly thinking about it, which is an Ego issue, don't hesitate to return to your lovely, empty space and send those people away.</p>

                                <p>You need peace, you need to break through so enforce your boundaries and don't get caught up on drama and forget again what you here to do. You are here to find your way back home and the way is through the high speed motorway surrounded by stillness and emptiness which involve your higher Self.</p>

                                <p>You need to be strong as Maia will tempt you but you are not your mind so be focused in the present moment without getting lost in the past or wandering in the future. </p>

                                <p>Your life is happening now so do yourself a favor and be the master of your mind! As Eckart Tolle says "The most vital thing in spiritual life is to be able to watch your mind, to be the observer of your mind, so that the mind is not controlling you" so Meditate, Meditate, Meditate!</p>

                                <p>With practice, meditation will become your natural state, you will realize that thoughts are getting rarer and rarer and oh boy, that feels so good!! The more in the present you are the more you shake the foundations of the Ego. While you still may be going through a complete inner and outer transformation, you have already found the cool, peaceful and still spot where you can hang out. Being in the present will eliminate anxiety and will give you the courage and strength you need to continue to dig deeper and deeper.</p>

                                <p>At this stage you might also be going through shifts in consciousness. The World is opening up for you brighter and brighter as never before. You see things vividly, the colors, the shapes, everything is unfolding in front of your eyes. You are asking yourself, how had you never paid attention to these details, how could you be so blind and you never really noticed life, the sky, the flowers, your real reflection in the mirror. You found out that you are a miracle, that Everything is a real, live miracle!</p>

                                <p>With your mind quieter all your senses are enhanced so you listen to the rain outside, the birds chirping, people laughing, you feel the soft touch of the sweet breeze on your face, around your arms, on your hands. You wonder if you are becoming a super human lol. In certain ways you are indeed, you are learning how to live again, like a little child rediscovering the beauty of the World.</p>

                                <p>After the initial hurricane that you went through, now you are able to sustain longer the inner space. You no longer fear not finding your little self in the morning. Now you are determined to help the process and make sure you achieve real Freedom.</p>

                                <p>For support during your awakening, specially during the Ego Death phase, please contact me on: <a href="mailto:am@andressa-awakeningminds.com">am@andressa-awakeningminds.com</a></p>

                                <Link to="/blog" className="link-back">Back</Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
