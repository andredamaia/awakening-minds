import React from 'react';

import '../styles/LifeCoaching.css';

import bgandressa from '../assets/bg-text.png';

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

              <p className="end"><strong>Por isso, me dediquei ao saber:</strong></p>
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
      
      <div className="bg-projetar">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 style={{ marginBottom: 40 }}>E se você pudesse projetar a vida dos seus sonhos, como ela seria? Quem você se tornaria?</h2>

              <p>Meu programa de Coaching é para você se você: </p>

              <p>
                - Quer aprender uma abordagem significativa de vida que realmente te capacita, desbloqueia seu real potencial e permite que você crie, conquiste e se torne o que quer na vida. <br />
                - Quer garantia de que vai resolver sua carga e bagagem emocional do passado, substituir crenças limitantes por outras mais desejadas, entender profundamente quem você realmente é e como chegou onde está agora, resolver qualquer conflito interno e se tornar o master da sua própria mente e destino. <br />
                - Quer ser tratado com amor, respeito e cuidado, recebendo incomparável suporte e consistência antes, durante e depois das sessões de coaching.
              </p>

              <p>Minha abordagem para esta transformação é simples, prática e efetiva. É formada por técnicas e ferramentas testadas e comprovadas, derivadas do refinamento dos últimos estudos de Ciência Neural e Comportamental, PNL (Programacao Neurolinguística), Hipnose, Física Quântica e diversos modelos de Life Coaching e gerenciamento de mudanças.</p>

              <p>Para a ativar a função soneca no seu alarme de manhã ou até curar um coração partido,  ser capaz de ficar na frente de pessoas e fazer um discurso ou até deixar o trabalho das 9 às 17h que você odeia e abrir seu próprio negócio; ser capaz de se tornar um líder melhor ou melhorar sua vida amorosa, que tal colocar metas que você não somente acredita que vão se concretizar, mas já se concretizaram? Tudo é possível e se você acredita que VOCÊ PODE, eu estou aqui para te ajudar!</p>

              <p>Enquanto a maioria dos Life Coaches tentam alterar diretamente  comportamentos, mesmo sabendo que eles derivam do condicionamento individual, minha tática para mudança é trabalhar na realidade interna individual, onde todas as emoções, crenças, valores e limitações estão. Sabendo que projeção é percepção, nos focamos em alinhar o mundo interno para que o mundo externo reflita as mudanças. </p>

              <p>Viver a vida de uma maneira positiva e feliz é um direito seu, então dê um passo à frente e inicie sua transformação AGORA!</p>
            </div>
          </div>
        </div>
      </div>

      <img src={bgandressa} className="d-none d-md-block" alt="" />

      <div className="bg-projetar">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3">
              <div className="border-box">
                Para sair do lado de efeito da sua vida e retomar o controle e poder pessoal entre em contato para uma avaliação, nós temos diferentes pacotes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
