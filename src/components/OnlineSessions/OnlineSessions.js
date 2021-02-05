import React from 'react';
import { Link } from 'react-router-dom';

import bgNewMobile from '../../assets/bg-new-mobile-br.jpg';
import bgNewInterna from '../../assets/bg-new-interna-br.jpg';

import done from '../../assets/done.png';

function OnlineSessions({ interna }){

    return(
        <>
            <div className={ interna ? 'interna bg-new-mobile' : 'bg-new-mobile' }>
                <Link to="/pt/online-sessions"><img src={bgNewMobile} alt="" style={{ maxWidth: '100%' }} /></Link>
            </div>

            <div className={ interna ? 'interna bg-new' : 'bg-new' }>
                <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3"></div>

                    <div className="col-12 col-md-9">
                    <div className="row">
                        <div className="col-12">
                        <h2>Sessões Online são seguras e eficazes. <span>O que pode ser trabalhado?‍</span></h2>
                        </div>

                        <div className="col-12 col-md-6">
                        <ul className="list-default">
                            <li>Libere todas as suas emoções negativas.</li>
                            <li>Aprenda sobre sua mente, emoções e como a realidade é formada.</li>
                            <li>Transcenda maus hábitos.</li>
                            <li>Trate traumas e Fobias.</li>
                            <li>Sessões com objetivo em perder peso.</li>
                            <li>Pare de comer algo que você gosta e come demais.</li>
                            <li>Comece a gostar de comer algo que você atualmente odeia.</li>
                            <li>Você não gosta do seu chefe mas precisa vê-lo todos os dias? <span>Podemos tornar isso mais agradável para vocês dois.</span></li>
                            <li>Esta Passando por um término de relacionamento e esta doendo demais? <span>Também podemos ajudar com isso!</span></li>
                            <li>Esta atraindo o mesmo tipo de relacionamento toxico ou parceiro incompativel? <span>Você precisa trocar os padrões repetitivos que estão no seu subconsciente! Fazemos isso de form facil e segura</span></li>
                            <li>Você precisa desenvolver habilidades específicas como falar em público ou ser mais extrovertido? <span>Esta Feito</span> <img src={done} style={{ width: 15 }} alt=""/></li>
                            <li>Você precisa trabalhar sua autoestima: confiança, amor próprio, auto-imagem? <span>Isto pode ser feito mais rápido do que você imagina!</span></li>
                        </ul>
                        </div>

                        <div className="col-12 col-md-6">
                        <ul className="list-default">
                            <li>Você perdeu um ente querido e já sabe que pode parar de sofrer mas não sabe como? <span>Nós ajudamos você a manter as belas memórias sem o fardo da dor da perda e/ou culpa.</span></li>
                            <li>Você odeia se exercitar? <span>Se trabalharmos sua auto-estima corretamente, você automaticamente gostará de se exercitar e nem será por causa da aparência física (embora ela vai melhorar), mas porque você vai entender que você merece sim se SENTIR BEM! Não faz mal algum tambem darmos um empurrãozinho e fazer você ver a academia como um lugar mais acolhedor.</span></li>
                            <li>Sua situação financeira não melhora ja tem muito tempo? <span>Você definitivamente  tem crenças limitantes sobre dinheiro então venha para limpá-las e comece a criar a abundância que você merece!</span></li>
                            <li>Como esta sua vida amorosa? Você está em uma relação tóxica ou parece que continua atraindo "o mesmo tipo" de parceiros? <span>Precisamos libertá-lo  de seus padrões inconscientes para que você possa criar relacionamentos saudáveis e atrair a pessoa amorosa e comprometida que você tanto merece!</span></li>
                            <li>Planeje a Vida dos seus sonhos e inserimos os objetivos como memorias futuras em sua mente subconsciente. <span>Quão mais confiante você poderia estar em alcançar algo se sentisse como se  você já tivesse alcançado? </span></li>
                        </ul>
                        </div>

                        <div className="col-12">
                        <div className="p-new">
                            <div><span>Sessões isoladas ou o Programa de Transformação pessoal de 15 horas!</span></div>
                            <div><span className="p-new-blue">Agende Agora sua sessão de avaliação gratuita!</span></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className={ interna ? 'interna bg-new-interna' : 'bg-new-interna' }>
                <Link to="/pt"><img src={bgNewInterna} alt="" style={{ maxWidth: '100%' }} /></Link>
            </div>
        </>
    )
       
}   


export default OnlineSessions;











