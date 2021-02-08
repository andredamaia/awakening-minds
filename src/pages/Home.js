import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import OnlineSessions from '../components/OnlineSessions/OnlineSessions';

import emotions from '../assets/emotions.png';
import flower from '../assets/flower.png';
import yinyang from '../assets/yin-yang.png';
import andressa from '../assets/andressa.png';
import faces from '../assets/faces.png';
import checkindicacoes from '../assets/check-indicacoes.png';

import '../styles/Home.css';

export default function Home() {
  return (
    <>
        <Helmet>
            <title>Awakening Minds</title>
            <meta name="description" content="Mude sua vida AGORA! Sessões online de Hipnose, PNL e Life & Espiritual Coaching" />
        </Helmet>

        <div className="andressa-sobre">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-3"></div>

              <div className="col-12 col-md-9">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <h2>Andressa Mokesinski</h2>

                    <ul>
                      <li>Terapia Cognitiva Comportamental</li>
                      <li>Reprogramação Mental</li>
                      <li>Cura Emocional</li>
                      <li>Life Coaching</li>
                      <li>Parcerias Corporativas: Convênios,<br/> Palestras e Workshops</li>
                      <li>Atendimentos Online & Presencial</li>
                    </ul>

                    <h4 className="special-blue">Técnicas exclusivas e inovadoras que proporcionam resultados reais e imediatos </h4>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="indicacoes">
                      <h4>Indicações</h4>

                      <ul>
                        <li><img src={checkindicacoes} alt="" /> Ansiedade</li>
                        <li><img src={checkindicacoes} alt="" /> Depressão</li>
                        <li><img src={checkindicacoes} alt="" /> Vicios</li>
                        <li><img src={checkindicacoes} alt="" /> Traumas</li>
                        <li><img src={checkindicacoes} alt="" /> Medos e Fobias</li>
                        <li><img src={checkindicacoes} alt="" /> Desenvolvimento Pessoal </li>
                        <li><img src={checkindicacoes} alt="" /> Desenvolvimento Profissional</li>
                        <li><img src={checkindicacoes} alt="" /> Relacionamentos</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-dubai">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 offset-md-1">
                <h2>Conheça o poder do Time Paradigm, a minha técnica trazida de Dubai e exclusiva no Brasil</h2>

                <p>200 vezes mais eficaz que a Hipnose clássica e sem necessidade de trance induzido, com o Time Paradigm acessamos diretamente a causa raiz do problema a nível de Subconsciente e o substituimos por padrões que vão te ajudar a construír o que deseja e a começar a viver uma vida Feliz.</p>

                <p>O Time Paradigm possibilita mudança de um Padrão Mental, seus comportamentos e sentimentos em poucos minutos, como se o mesmo nunca houvesse existido!</p>

                <p>Você pode literalmente ir de Tímido à Extrovertido, de Inseguro à Auto-confiante, de desorganizado à Focado, de Insensivel à Romântico, ou o que você deseja </p>

                <h4>Com clientes ao redor do Mundo, independente da sua localização ou do seu problema, aqui no Awakening Minds – Saúde Emocional & Coaching você muda de  verdade!</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="andressa-terapia">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 offset-md-1">
                <h2>Cansado de fazer Terapia e não ver resultados?</h2>

                <div className="box-red">
                  <p>Com meu Programa Inovador, o Breaking-through que consiste em 16 horas de Terapia Intensiva + Coaching você:</p>
                </div>
              </div>

              <div className="col-12 col-md-6 offset-md-1">
                <ul>
                  <li>Libera emoções negativas reprimidas sem sofrimento</li>

                  <li>Elimina Ansiedade e pensamentos negativos</li>

                  <li>Se livra de Traumas, Medos e Fobias</li>

                  <li>Desenvolve sua Autoestima e Poder Pessoal</li>

                  <li>Resolve conflitos internos para tomada de decisões importantes</li>

                  <li>Reprograma Padrões negativos e crenças que estão te limitando a atingir níveis elevados de contentamento, felicidade e abundância financeira ou mesmo de conquistar e viver relacionamentos saudáveis</li>

                  <li>Adiciona suas metas como memórias futuras no seu Subconsciente e diz bye, bye para a procrastinação, preguiça e desculpas</li>
                </ul>

                <h2>Vem mudar comigo!</h2>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-sobre">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-6">
                <h2 className="special">Sobre Andressa Mokesinski</h2>

                <img src={andressa} className="img-left" alt="" />

                <p><strong>Nascida e criada no Brasil</strong> em uma cidadezinha do interior do Paraná, Andressa vem de um lar conturbado e desde muito cedo enfrentou inúmeros desafios e responsabilidades. </p>

                <p>Os anos passaram, porém as dificuldades não… parecia que o sol brilhava por um curto período e logo em seguida uma nova tempestade vinha e destruía tudo que havia sido construído com tanto esforço. Foi somente <strong>após muitas experiências de dor e sofrimento</strong> que Andressa percebeu um padrão repetitivo nos acontecimentos e também nas pessoas a sua volta, e foi então que ela decidiu parar e olhar para dentro.</p>

                <p><strong>Por meio da Meditação, Terapia e Espiritualidade</strong>, Andressa identificou programas e crenças limitantes formados la atrás durante a infância e a adolescência e que vinham impactando de forma extremamente negativa a sua vida adulta. <strong>Foi somente após identificar e eliminar</strong> esta programação que ela finalmente se libertou e acordou para uma vida plena, repleta de alegria e paz, onde foi possível criar o que ela sempre desejou. Ao buscar equilíbrio para si mesma, descobriu que o Universo é incrível e sempre nos devolve tudo que emanamos. </p>

                <h6>"Não existem atalhos, a única saída é mergulhar dentro de si." </h6>

                <p>Hoje, utilizando as mesmas ferramentas, <strong>Andressa busca ajudar as pessoas</strong> a também encontrarem a paz interior, conhecerem-se intimamente e <strong>eliminarem dor e sofrimento</strong> autoinfligidos pela mente e suas crenças limitantes, libertando-se assim para viver a vida que sempre sonharam e mereceram.</p>
            </div>

            <div className="col-12 col-md-6">
              {/* <h3 className="add-top">Seja bem-vindo!</h3>

              <p><strong>Olá meu querido Ser Humano, seja bem-vindo ao meu website! </strong></p> */}

              <img src={faces} className="img-right" alt="" />

              <p>Se você está lendo esta página, parabéns, você está pronto para mudar! Enquanto muitos não sabem o seu real potencial e desperdiçam as chances que a vida lhes dá para viver plenamente, você provou que acredita e isso já é suficiente para iniciar sua transformação. Se em vez de passar meses ou anos fazendo terapia sem saber ao certo os benefícios que isso lhe trará, se sua intenção é obter resultados reais em curto período de tempo, você está no lugar certo!</p>

              <p>E se você pudesse curar todo seu passado, perdoar e ser perdoado por tudo que já aconteceu? O que aconteceria se você pudesse deixar os hábitos que não te beneficiam e programar outros que suportam seus sonhos? Como você se sentiria ao transformar sua auto imagem, na qual se vê como o milagre que é, confiante, inteligente e um ser que merece amor incondicional? Você quer ser sua melhor versão, não quer? </p>

              <p>Estou aqui para te ajudar lado a lado a aprender a  viver uma <strong>vida feliz!</strong></p>

              {/* <div className="red-box">
                <a href="/">Clique Aqui</a> para saber mais sobre os tratamentos oferecidos e descobrir qual é o <a href="/">mais indicado para você.</a>
              </div> */}
              
            </div>
          </div>
        </div>
      </div>

      <div className="bg-certificados">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 text-center">
              <h3>Quais são as técnicas de intervenção emocional?</h3>

              <p>A ciência sugere que <strong>95% do comportamento humano</strong> deriva do subconsciente e que <strong>apenas 5%</strong> é escolhido conscientemente, assim a importância da <strong><Link to="/hipnoterapia">Hipnose</Link>, <Link to="/pnl">PNL</Link>, Time Paradigm</strong> e da técnica <strong><Link to="/deixar-ir">Deixar ir</Link></strong> para acessar e redefinir padrões gravados e projetados inconscientemente.  Através do <strong>Time Paradigm</strong>, padrões negativos comportamentais são rapidamente substituidos por sugestões positivas, permitindo que o cliente obtenha rápida transformação na área a ser desenvolvida.</p>

              <p>Seja através de técnicas de <strong><Link to="/coaching">Intervenção Emocional ou do Coaching</Link></strong>,  para desenvolvimento pessoal ou profissional, todas as sessões são detalhadamente preparadas de acordo com as necessidades do cliente. Meu objetivo como Coach é eliminar crenças limitantes e guiar meus clientes ao <strong>autoconhecimento e inteligência emocional</strong>, onde possam resgatar seu poder pessoal e manifestar a vida que tanto desejam.</p>
            </div>

            <div className="col-12 col-md-6 offset-md-3 text-uppercase">
              <h2 className="special">Certificados</h2>
            </div>

            <div className="col-12 col-md-10 offset-md-1">
              <div className="row">
                <div className="col-12 col-md-4 text-icon">
                  <img src={emotions} alt="" />
                  <p>Hipnose, Programação Neurolinguística e Percepção Temporal pelo Instituto Robert Simic Coaching, em Dubai</p>
                </div>

                <div className="col-12 col-md-4 text-icon">
                  <img src={flower} alt="" />
                  <p>Credenciada pela Federação of NLP Coaching Professionals – FNLPC (Federação de Profissionais de Coaching da PNL)</p>

                </div>

                <div className="col-12 col-md-4 text-icon">
                  <img src={yinyang} alt="" />
                  <p>Credenciada em Life & Espiritual Coaching pelo Continuing Coach Education - ICF (Federação Internacional de Coaches)</p>

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
              <p>Viajar é uma grande paixão e ela já visitou 38 paises, morou em três continentes e atualmente divide seu tempo entre Dubai, nos Emirados Árabes Unidos, e Brasil, oferecendo consultas pessoais e via Skype.</p>
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
                        <h2>Missão</h2>
                      </div>

                      <div className="col-12 col-md-9">
                        <p><i>Awakening Minds Emotional Health & Coaching</i> tem a missão de expandir o nível de consciência das pessoas, impactando positivamente suas vidas para que encontrem um caminho onde a <strong>felicidade seja o estado mais natural de viver.</strong></p>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>

      <OnlineSessions />
    </>
  );
}
