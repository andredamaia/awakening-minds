import React from 'react';

import '../styles/DeixarIr.css';

import hearts from '../assets/hearts.png'
import spirit from '../assets/spirit.png'

export default function Deixair() {
    return(
        <>
            <div className="bg-beach">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 offset-md-7 text-right">
                            <span className="text-highlight">"Nós mudamos o mundo não pelo que falamos ou fazemos, mas sim por consequência do que nos tornamos."
                            
                            <span>– Dr. David R. Hawkins</span></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-heart">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <p>Os mecanismos usados para lidar com emoções são Supressão, Expressão e Fuga e todas elas causam um impacto emocional e físico. </p>

                            <p>De fato, emoções que não são expressadas e tratadas completamente serão energeticamente armazenadas no corpo físico, esperando uma próxima oportunidade para serem liberadas.</p>
                        </div>

                        <div className="col-12 col-md-4">
                            <img src={hearts} style={{ maxWidth: '100%' }} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-spirit">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p>	Dr. Hawkins, um renomado psiquiatra e físico, autor de vários livros e teorias que interligam a psicologia e espiritualidade, é o criador desta fabulosa ferramenta de cura, a Técnica de Deixar ir, na qual o cliente consegue acessar emoções profundamente bloqueadas e expressá-las.</p>
                        </div>

                        <div className="col-12 col-md-4 left">
                            <p>	Portanto, ao liberar as emoções, a pessoa se liberta
                            de comportamentos compulsórios, pensamentos
                            e sentimentos negativos uma vez associados a
                            fardos energéticos negativos.
                            </p>
                        </div>

                        <div className="col-12 col-md-4">
                            <img src={spirit} alt="" />
                        </div>

                        <div className="col-12 col-md-4 right">
                            <p> Enquanto a psicoterapia luta para ajustar o Ego
                            (personalidade) para um equilíbrio mais saudável,
                            substituindo programas mentais insatisfatórios por
                            outros satisfatórios, a ferramenta Deixar Ir foca na
                            eliminação destes programas e na transcendência da
                            própria mente em níveis mais elevados de consciência de amor e paz.
                            </p>
                        </div>

                        <div className="col-12 text-center">
                            <h3 style={{ border: 'none' }}>Você gostaria de liberar uma vida de bagagem emocional em uma única sessão, não gostaria? </h3>

                            <p>Imagine o alívio físico e emocional e o sentimento de bem estar depois de curar completamente seu passado. Utilizando a técnica de Percepção Temporal, eliminamos completamente qualquer emoção negativa presente em todas as memórias de eventos vividos até o presente. Isto significa mudança completa do condicionamento individual para um nível extremamente positivo que te auxiliará a focar no que se deseja construir e não ao contrário, além de melhorar extremamente relacionamentos nos ambientes profissional e pessoal, devido a uma forma mais otimista de ver a vida. </p>
                        </div>

                        <div className="col-12 text-center">
                            <h3 style={{ border: 'none', marginTop: 60, fontSize: 36 }}>A eficiência em combinar Hipnoterapia e a técnica Deixar Ir é surpreendente,</h3>
                        </div>

                        <div className="col-12 col-md-10 offset-md-1">
                            <p>o cliente não somente será capaz de eliminar emoções negativas, entendendo a origem das mesmas e suas influências em seu comportamento e personalidade, como também se tornará extremamente resiliente para lidar com novos desafios da vida. Ao aprender aplicar a técnica em si mesmo, em qualquer lugar e em qualquer momento, ele evita que novos bloqueios de negatividade sejam criados.</p>
                        </div>

                        <div className="col-12 col-md-4 offset-md-4">
                            <p className="box-yellow">Agora que você está pronto para mudar, entre em contato e agende seus 15 minutos de <strong>avaliação free</strong>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}







