import React from 'react';

import '../styles/Kundalini.css';

import chakra from '../assets/chakra.png';
import meditation from '../assets/meditation.png';
import rainbowsnake from '../assets/rainbow-snake.png';
import snake from '../assets/snake.png';
import purplekundalini from '../assets/purple-kundalini.png';
import psicodelic from '../assets/psicodelic.png';
import coloredkundalini from '../assets/colored-kundalini.png';
import vitroviano from '../assets/vitroviano.jpg';

export default function Kundalini() {
    return(
      <>

        <div className="bg-naja">
          <div className="container">
              <div className="row">
                  <div className="col-12"> 
                  </div>
              </div>
          </div>    
        </div>

        <div className="bg-chakra">
          <div className="container">
              <div className="row">
                  <div className="col-12 col-md-5"> 
                    <img src={chakra} style={{ maxWidth: '100%' }} alt="" />
                  </div>

                  <div className="col-12 col-md-7"> 
                    <span className="depoimento">“Quando você consegue despertar a Kundalini, ela começa a mover-se da sua mera potencialidade, você de fato inicia um mundo totalmente diferente do nosso mundo. Este é o mundo da eternidade." </span>

                    <span className="author">– Carl Jung</span>
                  </div>
              </div>
          </div>    
        </div>

        <div className="bg-kundalini">

          <img className="img-kundalini-1" src={meditation} alt="" />

          <img className="img-kundalini-2" src={rainbowsnake} alt="" />

          <div className="container">
              <div className="row">
                <div className="col-12 col-md-5 offset-md-1"> 

                <h3>Kundalini</h3>

                <p>como chamada nas tradições orientais, especialmente no Hinduísmo, é também conhecida como A Serpente de Fogo. Presente em todos os seres humanos, consiste em uma energia vital que  repousa  dormente na base da coluna vertebral e que, quando despertada, transforma completamente o indivíduo enquanto atua nos corpos físico, emocional, energético e intelectual.
                </p>

                </div>

                <div className="col-12 col-md-5 offset-md-3">
                  <p>Este gigante, uma vez acordado, se torna reconhecido pelo poder de sua energia, causando até mesmo uma experiência assustadora, uma vez que a compreensão do seu crescimento estimula fortemente os chakras, promovendo cura emocional.
                  </p>
                </div>

                <div className="col-12 col-md-5 offset-md-7">
                  <p>O porquê de Kundalini despertar em certas pessoas e em outras não ainda é um mistério, ao que parece cada indivíduo é escolhido independente de sua orientação espiritual, religiosa, de raça, gênero ou idade. Pessoas em todo o mundo e de diferentes origens estão "aleatoriamente" vivenciando o despertar da Kundalini de modo espontâneo, mesmo sem saber o que é; enquanto outros vêm tentando despertá-la por anos sem alcançar sucesso. </p>
                </div>

              </div>
          </div>    
        </div>

        <div className="bg-snake">

          <img className="img-snake-1" src={snake} alt="" />

          <img className="img-snake-2" src={purplekundalini} alt="" />


          <div className="container">
              <div className="row">
                  <div className="col-12 text-center"> 
                    <h3>Dito isto, é seguro acreditar que há de fato um elemento<br/>
                    de graça e inteligência que escolhe aqueles que irão<br/> 
                    vivenciar este fenômeno.
                    </h3>

                    <p className="col-12 col-md-10 offset-md-1 text-left">O objetivo da energia da Kundalini é desintegrar o Ego (eu inferior) despertando a pessoa para níveis mais altos de consciência. É a evolução da humanidade que leva a uma vida ligada à fonte, vivida de diferentes perspectivas e livre de medo ou sofrimento constantemente experienciados por indivíduos, agindo de sua consciência egoica.</p>

                    <p className="col-12 col-md-10 offset-md-1 text-left">Ela religa o sistema nervoso e realinha o cérebro, equilibrando os lados esquerdo e direito para que trabalhem harmoniosamente. Dessa maneira, o indivíduo que passa pelo despertar da Kundalini será capaz de acessar alguns dons escondidos, como intuição, clareza mental e criatividade, além de sentidos físicos aprimorados, expansão da consciência e percepção.</p>

                    <p className="col-12 col-md-6 offset-md-3 text-left">Deste modo, viverá uma vida guiada pelo coração e não pela mente e aprenderá a amar e cuidar de todos os seres vivos. Irá também adquirir um profundo sentimento de paz e bem-estar vindo de seu interior, o qual não é dependente ou relacionado a situações externas.</p> 

                    <p className="col-12 col-md-6 offset-md-3 text-left">Sua vida será alinhada com seu Eu Superior e o Universo, levando a uma experiência de não dualidade, onde o indivíduo deixa de julgar e ter preconceitos para com as pessoas, situações e eventos. Operando fora do ego, a pessoa está enraizada no  momento  presente, permitindo que faça parte do fluxo da vida sem tentar controlá-lo e isto a levará à liberdade e ao amor incondicional.</p>
                  </div>
              </div>
          </div>    
        </div>

        <div className="bg-vitroviano">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-9"> 
                <p>Com níveis mais altos de consciência e vibrando em energia positiva, é comum vivenciar sincronicidades que às vezes se parecem reais milagres. Manifestar coisas se torna mais fácil e com a maturidade espiritual adquirida a pessoa será capaz de criar a vida que deseja.</p> 

                <p>Por agir com o coração, não é  incomum que se opte por servir aos outros, ajudando-os em seu caminho espiritual ou 
                contribuindo com o mundo por meio de seus talentos e presentes adquiridos.</p>
              </div>

              <div className="col-12 col-md-3">
                <img src={coloredkundalini} style={{ maxWidth: '100%' }} alt="" />
              </div>
            </div>
          </div>    
        </div>

        <div className="bg-homem">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <span className="text-highlight">
                  Despertar da Kundalini e seus sintomas
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-vitroviano">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4">
                <p>Enquanto alguns vivenciam um despertar gentil e alegre, muitos podem passar por sintomas físicos e emocionais muito difíceis. Alguns ficam alarmados e são levados a hospitais, acreditando que estão passando por ataque cardíaco ou derrame durante a ativação, apenas para descobrir que o corpo está perfeitamente bem.</p> 

                <p>A Kundalini pode ser ativada após um Despertar Espiritual ou precedê-lo, os sintomas mais comuns da ativação são:</p>
              </div>

              <div className="col-12 col-md-4">
                <div className="vitroviano-box">
                  <p>- Correntes de energia pelo corpo;<br/>
                  - Sensação de extremo calor ou frio sem um fator externo específico;<br/>
                  - Dores nas costas e de cabeça;<br/>
                  - Pressão no peito e na cabeça, palpitações cardíacas;<br/>
                  - Sentir-se emocionalmente sobrecarregado;<br/>
                  - Corpo tremendo, vibrando ou sacudindo involuntariamente;<br/>
                  - Orelhas apitando ou zunindo como abelhas;<br/>
                  - Ouvir pessoas cantando, sons de trovões, sinos ou flautas;<br/>
                  - Habilidades psíquicas temporárias: Clarividência, Clariaudiência, Clarisensações, Reconhecimento cognitivo;<br/>
                  - Fadiga crônica;<br/>
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="vitroviano-box">
                  <p>- Mudanças constantes de humor: chorar incontrolavelmente e pouco tempo depois rir de alegria (comumente diagnosticada incorretamente como Bipolaridade por médicos que não estão cientes do fenômeno Kundalini);<br/>
                  - Insônia;<br/> 
                  - Visões, sonhos vívidos;<br/>
                  - Projeções astrais;<br/>
                  - Medo, ansiedade, ataques de pânico, desespero e/ou depressão;<br/>
                  - Desorientação, pensamento obsessivo, paranóia;<br/> 
                  - Expansão da consciência, percepção realçada;<br/> 
                  - Sentimentos de felicidade, alegria, paz, compaixão e amor;<br/>
                  - Melhoria da visão e audição;<br/>
                  - Devoção espiritual e curiosidade.<br/>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-psicodelic">

          <img className="img-psicodelic" src={psicodelic} alt="" />

          {/* <h6>Entregue-se<br/>
          e receba...
          </h6> */}

          <div className="container">
              <div className="row">
                <div className="col-12">
                  <p>Considerando minha própria experiência do Despertar da Kundalini, procurei descobrir ferramentas ou técnicas que suportassem a fase de transformação do Ego, a que acredito ter sido a mais difícil devido à carga emocional atribuída à memórias e traumas que devemos transcender para  expandir a consciência. </p>

                  <p>Após meses vivendo em uma montanha-russa de emoções, descobri a técnica de Percepção Temporal que permite, em uma única sessão, remover toda e qualquer carga emocional negativa relacionada à Raiva, Dor, Medo, Culpa e Tristeza. Em apenas alguns minutos, anos de negatividade são transcendidos, auxiliando assim a energia da Kundalini a percorrer o sistema de forma livre, reduzindo consideravelmente a ansiedade e permitindo que se sinta leveza e maior tranquilidade durante o processo.</p>

                  <p>A fase da  Noite Escura da Alma pode então não ser necessária ou, mesmo que ocorra, a carga emocional negativa não existirá mais, o que fará com que o processo aconteça de forma mais pacífica.</p>
                </div>

                <div className="col-12 col-md-7 offset-md-3 "> 
                  <p>O que quer que você esteja vivendo neste momento, é importante se entregar e confiar no processo, já que esta é uma evolução de consciência natural, e a energia trabalha com inteligência.</p>

                  <p>Você pode decidir não falar sobre isto com pessoas que não confia, pois elas podem não entender o que você está passando e interpretar que você esteja até mesmo com problemas psicológicos. Isso é compreensível, dado que a sociedade moderna é relutante em falar sobre fenômenos espirituais e energéticos e opta por ficar na ignorância quando o assunto está relacionado ao que os olhos não podem ver. </p> 

                  <p>Como já citado, este pode ser um processo difícil, porém, com o passar do tempo, vai levá-lo a atingir seu potencial completo, vivendo uma vida feliz, conectada e plena.</p>

                </div>

                <div className="col-12 col-md-8 offset-md-6">
                  <p><strong>Confira mais artigos relacionados ao Despertar Espiritual & Kundalini</strong></p>
                  <p className="col-12 col-md-6 offset-md-2"><strong>acessando o M E N U na parte superior da página.</strong></p>
                </div>

                <div className="col-12 col-md-5 offset-md-3">

                  <p className="psicodelic-box">
                  Para obter suporte durante sua ativação e agendar uma 
                  sessão online, preencha o quadro abaixo ou envie um e-mail
                  para andressa@andressa-awakeningminds.com 
                  </p>
                </div>
              </div>
          </div>    
        </div>

          <div className="bg-black">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p>Se você está passando por Emergência Espiritual ou Síndrome da Kundalini e está com dificuldades financeiras, envie também um e-mail explicando sua situação e<br/> farei o possível para te ajudar: andressa@andressa-awakeningminds.com
                        </p>
                    </div>
                </div>
            </div>
        </div> 
      </>
    )
}