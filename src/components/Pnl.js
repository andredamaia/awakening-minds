import React from 'react';

import strong from '../assets/strong.png'
import brain from '../assets/brain.png'
import manyfaces from '../assets/many-faces.png'




export default function Pnl() {
    return(
        <>

            <div className="bg-brain">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h4 className="h4-pnl">Pnl</h4>
                        </div>

                        <div className="col-12 col-md-6">
                            <p>Programação para<br/> sua evolução</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-strong">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <p>	A <strong>Programação Neurolinguística</strong> consiste em um método da pseudociência concentrado em três diferentes áreas humanas que se conectam entre si – os processos neurológicos, a linguagem (verbal e não verbal) e os padrões comportamentais já existentes ou que serão aprendidos por cada indivíduo.</p>
                        </div>

                        <div className="col-12 col-md-4">
                            <img src={strong} alt="" />
                        </div>

                        
                        
                    </div>
                </div>
            </div>

            <div className="color-brain">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-md-8 ">
                            <p>	Criado nos anos 70 por Richard Bandler e John Grinder na Califórnia, Estados Unidos, é um dos métodos mais eficazes para o desenvolvimento de padrões de comportamento, emoções e autoconsciência, auxiliando diretamente na melhoria das áreas pessoal, profissional e social.</p>

                            <p className="down">Acreditando na evolução do ser humano desde sua criação até os dias atuais e futuros, quando suas capacidades serão aperfeiçoadas em mente e comportamentos, a PNL surgiu com o intuito de avançar cientificamente e de modo significativo no caminho dessa evolução.
                            </p>

                        </div>

                        <div className="col-12 col-md-4">
                            <img src={brain} alt="" />
                        </div> 

                        <div className="col-12 col-md-4 manyfaces">
                            <img src={manyfaces} alt="" />
                        </div>

                        <div className="col-12 col-md-8">
                            <p className="p-manyfaces">	Resumidamente, a Programação Neurolinguística se baseia no fato de que tudo o que é feito por nós tem e vem de um propósito inicial, assim ela se concentra nessas fontes, que são muitas vezes inconscientes, para compreender o indivíduo e suas ações e assim inserir novos padrões que irão influenciar no progresso positivo e, se necessário, alteração de comportamentos. Dessa maneira, ao identificar padrões e crenças limitantes, a PNL os substitui por programação positiva com o auxílio da hipnose.
                            </p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>

            <div className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h5>Por meio de orientação individual, online ou presencial, a profissional Andressa te incita<br/>
                            à transformação, indicando formas de aplicar tais técnicas no dia a dia, melhorando sua<br/> 
                            vida em todos os aspectos.</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-body">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-7">
                            <h5>Benefícios<br/> da PNL</h5>
                        </div>

                        <div className="col-12 col-md-5">
                            <ul>
                                <li>
                                    - Gerenciamento de pensamentos e emoções individuais
                                </li>

                                <li>
                                    - Controle de ações próprias e de relação com o outro
                                </li>

                                <li>
                                    - Alto desempenho e performance individual
                                </li>

                                <li>
                                    - Geração de identidade profissional e de liderança
                                </li>

                                <li>
                                    - Tratamento de fobias e estresse
                                </li>

                                <li>
                                    - Criação de identidade voltada à autoestima e confiança em si mesmo, na vida pessoal e profissional
                                </li>

                                <li>
                                    - Resultados positivos para o sucesso de negócios e equipes profissionais
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}