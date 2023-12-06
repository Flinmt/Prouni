'use client';
import menu from "@/assets/menu.svg"
import arrow from "@/assets/arrow-back.svg"
import Image from 'next/image'
import Link from "next/link";
import bolsa from "@/assets/Bolsa.png"
import raca from "@/assets/Raça.png"
import curso from "@/assets/Curso.png"
import frequente from "@/assets/Frequentes.png"
import sexo from "@/assets/Sexo.png"
import regiao from "@/assets/Regiao.png"
import { useState } from "react";

export default function Analises() {
    var hide = true;
    const [img, setImgRealizado] = useState(bolsa);

    function textSetter() {
        var text = 'Relações entre RACA_BENEFICIARIO_BOLSA e TIPO_BOLSA:\n\n' +
            'Através de uma análise minunciosa, podemos perceber que ambas as raças Parda e Branca prevalecem a frente nas bolsa Integral e Parcial.\n\n' +
            'Para os canditados denominados de raça preta, podemos perceber que há uma discrepância em relação a quantidade de tipo de bolsa. Mesmo para integral e parcial ambos ficam absurdamente atrás em valores.';

        switch (img) {
            case bolsa:
                var text = 'Através de uma análise minunciosa, podemos perceber que ambas as raças Parda e Branca prevalecem a frente nas bolsa Integral e Parcial. ' +
                    'Para os canditados denominados de raça preta, podemos perceber que há uma discrepância em relação a quantidade de tipo de bolsa. Mesmo para integral e parcial ambos ficam absurdamente atrás em valores.';
                break;

            case raca:
                text = 'Há uma predominânia de canditados Pardos e Brancos, sendo em ordem 45.3% e 39.9%. ' + 'Para os grupos menos priveligados encontramos uma baixa de canditados. Sendo 13% para candidatos Pretos, 1.7% para Amarelos e 0.1% para Indígenas.'
                break;

            case curso:
                text = 'Neste gráfico podemos perceber que os candidatos de raça branca e parta tiveram a preferência e dominância no horário noturno. ' + 'Nos outros turnos também houve essa predominânica de pessoas de raça branca e parta porém um pouco menor comparado ao horário noturno. ' + 'Existe essa tendência visto que a maioria das vagas foram preenchidas por pessoas de raça branca e parda.'
                break;
            case frequente:
                text = 'Esse gráfico plotado tem apenas os 10 cursos mais escolhidos entre os canditados. ' + 'É possível perceber entres eles que o curso de Administração sai a frente com quase 17.500 de candidatos e que o curso de fisioterapia segue ao final com um pouco mais de 5000 candidatos.'
                break;

            case sexo:
                text = 'Nesse gráfico podemos perceber que a maior quantidade de candidatos mulheres e homens são de raça Branca e Parda. ' + 'É imprescindível notar poucos canditados homens e mulheres de raça preta passaram nesse vestibular. Isso pode ser uma questão social ou financeira, visto que poucos conseguiram essa a vaga.'
                break;
            
            case regiao:
                text = 'Há preferência para o horário Noturno, visto que 55.3% foi a escolha dos candidatos. Pode-se entender que essa canditados trabalham durante o dia. ' + 'Logo em seguida a escolha com maior valor foi o Curso a Distânica com 22.1%. ' + 'Matutino foi o terceiro maior horário escolhido com 17.9%. Entendemos que são canditatos já aconstumados com essa rotina e visam um estágio no horário Vespertino. ' + 'Para os horários Integral e Vespertino a preferência foi bem abaixo, sendo 2,5% e 2.2%.'
                break;
            default:
                break;
        }

        return text
    }

    function setImgBolsa() {
        setImgRealizado(bolsa)
        textSetter()
    }
    function setImgRaca() {
        setImgRealizado(raca)
        textSetter()
    }
    function setImgCurso() {
        setImgRealizado(curso)
        textSetter()
    }
    function setImgFrequente() {
        setImgRealizado(frequente)
        textSetter()
    }
    function setImgSexo() {
        setImgRealizado(sexo)
        textSetter()
    }
    function setImgRegiao() {
        setImgRealizado(regiao)
        textSetter()
    }

    function show() {
        const hideShow = document.getElementById('sidemenu')

        if (hide) {
            if (hideShow) {
                hideShow.style.transform = "translatex(0%)"
                hide = false
            }
        } else {
            if (hideShow) {
                hideShow.style.transform = "translatex(-100%)"
                hide = true
            }
        }
    }

    return (
        <main>
            <header className="w-full h-16 bg-[#17882C] flex justify-between items-center 
            text-center text-white">
                <div className='w-7 ml-3 z-20'>
                    <Image onClick={show} className='w-full h-full rounded-md cursor-pointer'
                        src={menu}
                        alt="menu"
                    />
                </div>
                <span className='mr-auto ml-auto'>Análise Exploratória de Dados</span>
                <div className='w-7 mr-3 z-20'>
                    <Link href={'./'}>
                        <Image className='w-full h-full rounded-md cursor-pointer'
                            src={arrow}
                            alt="menu"
                        />
                    </Link>
                </div>
            </header>
            <div className="relative flex justify-center items-center h-[88vh]">
                <div id="sidemenu" className='w-52 h-full overflow-hidden bg-[#17882C]
                -translate-x-full transition duration-300 ease-in-out absolute left-0 top-0'>
                    <ul className="w-full h-full flex flex-col">
                        <li className="w-full h-20 border-white border-t-2 flex justify-center items-center text-white cursor-pointer" onClick={setImgBolsa}>
                            {img === bolsa ? <span className=" underline">Relação: Raça e Bolsa</span> : 'Relação: Raça e Bolsa'}
                        </li>
                        <li className="w-full h-20 border-white border-t-2 flex justify-center items-center text-white cursor-pointer" onClick={setImgRaca}>
                            {img === raca ? <span className=" underline">Relação Raça (Pizza)</span> : 'Relação Raça (Pizza)'}
                        </li>
                        <li className="w-full h-20 border-white border-t-2 flex justify-center items-center text-white cursor-pointer" onClick={setImgCurso}>
                            {img === curso ? <span className=" underline">Relação: Raça e Curso</span> : 'Relação: Raça e Curso'}
                        </li>
                        <li className="w-full h-20 border-white border-t-2 flex justify-center items-center text-white cursor-pointer" onClick={setImgFrequente}>
                            {img === frequente ? <span className=" underline">Cursos Frequentes</span> : 'Cursos Frequentes'}
                        </li>
                        <li className="w-full h-20 border-white border-t-2 flex justify-center items-center text-white cursor-pointer" onClick={setImgSexo}>
                            {img === sexo ? <span className=" underline">Relação: Sexo e Raça</span> : 'Relação: Sexo e Raça'}
                        </li>
                        <li className="w-full h-20 border-white border-t-2 flex justify-center items-center text-white cursor-pointer" onClick={setImgRegiao}>
                            {img === regiao ? <span className=" underline">Categorias Por Região</span> : 'Categorias Por Região'}
                        </li>
                    </ul>
                </div>
                <div className="borde w-screen h-4/5 justify-center items-center text-center flex max-sm:flex-col">
                    <div className="max-sm:w-full max-sm:h-2/4 w-2/4 h-full flex justify-center items-center">
                        <Image src={img} alt={""} className="w-full h-full" />
                        <blockquote className=" absolute right-5 top-16 p-3 border border-collapse rounded-md shadow-md w-72">
                            {textSetter()}
                        </blockquote>
                    </div>
                </div>
            </div>
        </main>
    )
}

