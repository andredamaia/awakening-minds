import React from 'react';

import '../styles/Coaching.css';

import bgandressa from '../assets/bg-andressa.jpg'

export default function Coaching() {
  return (
    <>
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
              <h2>Ir além do racional, de encontro à plena <span className="color-blue">felicidade</span> </h2>
            </div>

            <div className="col-12 col-md-6">
              <p>	Criar <strong>expectativas erradas,</strong> se deixar levar pelo tumulto causado ao seu redor, fixar-se em um cotidiano de rotina acelerada e frenética são alguns dos motivos pelos quais nos tornamos infelizes nas áreas mental e espiritual.
              </p> 

              <p className="end"> <strong>Por isso, me dediquei ao saber:</strong></p>
              
            </div>

            <div className="col-12 col-md-6">

              <div className="grid-col-2">
                <div>
                  <p><strong>Saber encontrar<br/>
                  o melhor em você</strong></p>
                </div>

                <div>
                  <p><strong>Saber transformar<br/>
                  suas expectativas</strong></p>
                </div>

              </div>

              <div className="grid-col-1">
                <div>
                  <p><strong>Saber o caminho para a sua felicidade e<br/> 
                  percorrê-lo ao seu lado</strong>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="ir-alem">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="col-12 col-md-7 left">São os propósitos buscados para o <strong>Coaching,</strong> responsável por <strong>alinhar o racional com o espiritual</strong> das outras vertentes oferecidas, motivando objetivos mais altos, te dando a oportunidade de alcançar o seu melhor e <strong>ultrapassar os seus limites.</strong>
              </p>

              <p className="col-6 offset-md-6 right" >A metodologia utilizada neste tratamento visa a <strong>definição de objetivos,</strong> sejam profissionais ou pessoais, apontando metas por um caminho que te leva ao alcance destes em <strong>um tempo até 20 vezes menor</strong> do que sem o acompanhamento profissional.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-andressa">
        <div className="container">
          <div className="row">
            <div classname="col-12">

              <img src={bgandressa} alt="" />

            </div>

            <div className="col-12 col-md-6 offset-md-3">
              
              <p>Faça já sua inscrição para o tratamento, preenchendo<br/> 
              o quadro abaixo ou enviando e-mail para:<br/> 
              andressa@andressa-awakeningminds.com</p>

            </div>

          </div>
        </div>
      </div>

            
          
        

    </>
  )
}
