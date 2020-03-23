import React from 'react';
import { Helmet } from "react-helmet";

import '../styles/Hipnoterapia.css';

import hipimg1 from '../assets/hip-img-1.png';
import imgbox from '../assets/img-box.png'
import iceberg from '../assets/iceberg.png'

export default function Hipnoterapia() {
    return (
        <>
            <Helmet>
                <title>Hipnoterapia - Awakening Minds</title>
                <meta name="description" content="A Hipnoterapia, popularizada durante o século 20 pelo médico alemão Franz Mesmer, é utilizada para criar um estado de atenção focado e alta sugestibilidade em que sugestões positivas e imagens guiadas são usadas para ajudar indivíduos a trabalhar com uma variedade de problemas e preocupações." />
            </Helmet>

            <div className="hip-blue">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>
                                Subconsciente & <br />
                                Hipnoterapia <br />
                                de uma forma simples 
                            </h1>
                        </div>
                    </div>
                </div>    
            </div>

            <div className="hip-rock">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-12 col-md-9">
                            <p>A <strong>Hipnoterapia</strong>, popularizada durante o século 20 pelo médico alemão Franz Mesmer, é utilizada para criar um estado de atenção focado e alta sugestibilidade em que sugestões positivas e imagens guiadas são usadas para ajudar indivíduos a trabalhar com uma variedade de problemas e preocupações.</p>
                        </div> 

                        <div className="col-12 col-md-3">
                            <img src={hipimg1} style={{ maxWidth: '100%' }} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="hip-box">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-9"> 
                            <p>Imagine que você possui uma caixa, e que dentro dela você guarda todas as suas emoções, pensamentos, hábitos, crenças e sensações. Imagine que tudo que você considera certo ou errado, bom ou ruim, justo ou injusto está bem ali dentro da caixa. Tudo que você vivencia por meio dos seus cinco sentidos cria uma impressão, e tais impressões, quando experimentadas frequentemente, se transformam em crenças que serão instaladas no seu subconsciente como um programa que você não pode ver, mas que está ali dominando sua vida.</p>

                            <p>Esta “pequena caixa”, que é seu subconsciente contendo tudo que você acredita ser "você", vai se auto projetar e fazer com que cada pensamento que tenha, cada palavra que diga e cada atitude que tome traga mais impressões similares para reforçar as programações já formadas na sua mente, independente de serem benéficas ou não. É como se você estivesse dentro de um labirinto sem saída, andando em círculos e sempre retornando ao mesmo ponto de partida.</p>

                            <p>Vamos dizer que, enquanto criança, você foi constantemente negligenciado por seus pais, aquele seu pequeno desenho foi subjugado ou menosprezado, não sendo considerado bom o suficiente; que você sempre ouviu que não era inteligente porque não conseguia terminar suas tarefas de matemática sozinho (mesmo sendo muito bom em biologia). Na escola você sofreu bullying e seus professores estavam sempre te lembrando o quão lento você era, ou o quão atrasado em comparação aos seus colegas. Com este julgamento, sua caixa será preenchida apenas com crenças limitantes sobre você mesmo</p>

                            <div className="col-12 text-right">
                                <span className="text-red"><i>que irão criar fortes limites imaginários determinando o que<br/>
                                você é capaz ou não de alcançar na vida.</i></span>
                            </div>
                        </div>

                        <div className="col-12 col-md-3 d-none d-md-block">
                            <img src={imgbox} style={{ maxWidth: '100%' }} alt="" />
                        </div>
                    </div>
                </div>    
            </div>

            <div className="hip-yellow">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p>Como alguém pode ter uma carreira de sucesso, ser bem pago, falar bem em público ou simplesmente confiar em si mesmo quando, dentro daquela pequena caixa, todas as impressões e sentimentos juntos mostram o quanto ele é incapaz e desmerecedor de coisas boas? A programação já foi instalada e irá ditar as experiências que fazem a pessoa "acreditar" que ela não pode ir além ou fazer melhor nisso ou naquilo… esta crença não é consciente, portanto o indivíduo apenas se classifica como azarado, infeliz ou enxerga que não teve oportunidades suficientes.</p>

                            <p>Ele pode, inclusive, culpar as circunstâncias da vida ou outras pessoas, pois já que a pessoa é identificada com essa crença limitante, a mesma NÃO pode ser percebida.</p> 
                        </div>
                    </div>
                </div>    
            </div>

            <div className="hip-iceberg">
                <img src={iceberg} className="img-iceberg" alt="" />

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>A hipnoterapia é uma fantástica porta que permite acessar “a caixa” e identificar 
                            essas crenças limitantes, substituindo-as por crenças positivas.</h4>

                            <div className="col-12 col-md-8 offset-md-1">

                                <p className="text-iceberg">	Durante a sessão de hipnoterapia, você é guiado a um estado profundo de relaxamento, onde seu subconsciente pode ser acessado. Você recebe instruções para buscar memórias, sentimentos e imagens específicos.  O terapeuta então inunda sua
                                mente com sugestões positivas que quebram e substituem antigos padrões.
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-md-8 before-red-box">
                            <p>	A hipnoterapia pode ser usada para tratar estresse, vícios em cigarros, melhorar relacionamentos, aumentar a autoestima, ajudar a ter abundância financeira por meio da autovalorização e da atitude “eu posso”. Com este tratamento você se sente mais disposto a adotar uma vida saudável, perder peso e praticar exercícios; melhora radicalmente a habilidade de falar em público e lidar com a raiva, vergonha, culpa e arrependimento – emoções pesadas que geralmente são um fardo para carregar na vida.
                            </p>
                        </div>

                        <div className="col-12 col-md-5 box-left">
                            <h2>Como saber se tenho crenças limitantes?</h2>

                            <p>É muito simples, observe todos os aspectos<br/> da sua vida (seja sincero consigo mesmo):</p>
                        </div>

                        <div className="col-12 col-md-7 box-right">
                            <p>Trabalho, relacionamentos, saúde, abundância financeira, hobbies e o quão feliz você é. Agora dê uma nota de 0 a 10 a cada um deles, sendo 0 absolutamente terrível e 10 totalmente incrível. Se você se vê em uma ou mais categorias com notas menores que 8, definitivamente tem uma crença limitante que determina suas experiências e isso não está te ajudando.
                            </p>
                        </div>
                    </div>
                </div>    
            </div>

            <div className="bg-eye">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <span>Todo mundo pode ser hipnotizado, não há perda de consciência e o paciente está sempre interagindo ao longo da sessão. É seguro e transformador!</span>
                        </div>
                    </div>
                </div>    
            </div>

            <div className="hip-white">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center"> 
                            <h2>Esteja pronto para se tornar a sua melhor versão, uma vez que você muda seu mundo interior o seu mundo exterior seguirá essa transformação.</h2>
                        </div>
                    </div>
                </div>    
            </div>
        </>
    )
}