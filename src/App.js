import React from 'react';
import Header from './Header';
import Footer from './Footer';

import emotions from './assets/emotions.png'
import flower from './assets/flower.png'
import yinyang from './assets/yin-yang.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './global.css';
import './Header.css';
import './Footer.css';

function App() {
  return(
    <>
      <Header/>

      <div className="bg-sobre">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="special">Sobre Andressa Mokesinki</h2>

              <p><strong>Nascida e criada no Brasil</strong> em uma cidadezinha  do interior do Paraná. Andressa vem de um lar conturbado e desde muito cedo enfrentou inúmeros desafios e responsabilidades.</p>

              <p>Os anos passaram, porém as dificuldades não... parecia que brilhava por um curto período e logo em seguida uma nova tempestade vinha e destruía tudo que havia sido construído com tanto esforço. foi somente<strong> após muitas experiências de dor e sofrimento</strong> que Andressa percebeu um padrão repetitivo nos acontecimentos e também nas pessoas a sua volta, e foi então que ela decidiu parar e olhar para dentro. </p>

              <p><strong>Por meio da meditação, terapia e espiritualidade,</strong> Andressa identificou programas e crenças limitante formados lá atrás durante a infância e a adolescência e que vinham impactando de forma extremamente negativa a sua vida adulta. <strong> Foi somente após identificar e eliminar</strong> esta programação que ela finalmente se libertou e acordou para uma vida plena, repleta de alegria e paz, onde foi possível criar o que ela sempre desejou. Ao buscar equílibrio para si mesma, descobriu que o Universo é incrível e sempre nos devolve tudo que emanamos. </p>

              <h6>"Não existem atalhos, a única saída é mergulhar dentro de si." </h6>

              <p>Hoje,utilizamos as mesmas ferramentas,<strong> Andressa busca ajudar as pessoas</strong> a também encontrar a paz interior, conhecerem-se intimamente e <strong> eliminarem dor e sofrimento</strong> autoinfligidos pela mente e suas crenças limitantes. libertando-se assim para viver a vida que sempre sonharam e mereceram.</p>
            </div>

            <div className="col-12 col-md-6">
              <h3>Quais são as técnicas de terapia?</h3>

              <p>A ciência sugere que<strong> 95% do comportamento humano</strong> deriva do subconsciente e que<strong> apenas 5%</strong> é escolhido conscientemente, assim a impotância da<strong> Hipnose, PNL e da técnica Deixar Ir</strong> para acessar e redefinir padrões gravados e projetados incoscientemente.</p>

              <p>Através da<strong> Hipnoterapia,</strong> padrões negativos comportamentais são rapidamente substítuidos por sugestões positivas, permitindo que o cliente obtenha consíderavel melhoria na área a ser desenvolvida.</p>

              <p>Seja através da<strong> terapia ou do coaching,</strong> para desenvolvimento pessoal e profissional, todas as sessões são detalhadamente preparadas de acordo com as necessidades do cliente.</p>

              <p>Meu objetivo como Terapeuta e Coach é eliminar crenças limitantes e guiar meus clientes as<strong> autoconhecimento e inteligência emocional,</strong> onde possam resgatar seu poder pessoal e manifestar a vida que tanto desejam.</p>

              <div className="red-box">
                <a href="#">Clique Aqui</a> <span>para saber mais sobre os tratamentos oferecidos e descobrir qual é o <a href="#">mais indicado para você.</a></span>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div className="bg-certificados">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3 text-uppercase">
              <h2 className="special">Certificados</h2>
            </div>

            <div className="col-12 col-md-4 text-icon">
              <img src={emotions} alt="" />
              <p>Hipnose, programação neurolinguística e percepção temporal pelo Instituto Robert Simic Coaching, em Dubai</p>

            </div>

            <div className="col-12 col-md-4 text-icon">
              <img src={flower} alt="" />
              <p>Credenciada em Life & spiritual - Federação Internacional de Coaches</p>

            </div>

            <div className="col-12 col-md-4 text-icon">
              <img src={yinyang} alt="" />
              <p>Credenciada em Life spiritual & Coaching pelo International Coaching Federation - ICF (Federação Internacional de Coaches)</p>

            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>Viajar é uma grande paixão e ela já visitou 38 países, morou em três continentes e atualmente</p>

              <p>divide seu tempo entre Dubay, nos Emirados Árabes Unidos, e Brasil,</p>

              <p>oferecendo consultas pessoais e <i>via Skype.</i></p>
                
            </div>
          </div>
        </div>
      </div>

      <div className="bg-missao">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h2>Missão</h2>
                        </div>

                        <div className="col-12 col-md-6">
                            <p><i>Awakening Minds Coaching & Therapy</i> tem a missão de expandir o nível de consciência das pessoas, impactando positivamente suas vidas para que encontrem um caminho <strong>livre de dor e sofrimento.</strong></p>
                        </div>
                    </div>
                </div>
            </div>

      <Footer/>
    </>
  )
  
}

export default App;
