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

    function setImgBolsa() {
        setImgRealizado(bolsa)
    }
    function setImgRaca() {
        setImgRealizado(raca)
    }
    function setImgCurso() {
        setImgRealizado(curso)
    }
    function setImgFrequente() {
        setImgRealizado(frequente)
    }
    function setImgSexo() {
        setImgRealizado(sexo)
    }
    function setImgRegiao() {
        setImgRealizado(regiao)
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
                    </div>
                </div>
            </div>
        </main>
    )
}

