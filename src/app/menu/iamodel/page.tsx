'use client';
import menu from "@/assets/menu.svg"
import arrow from "@/assets/arrow-back.svg"
import Image from 'next/image'
import Link from "next/link";
import exemplo from "@/assets/exemplo.svg"

export default function IaModel() {
    var hide = true;

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
                <span className='mr-auto ml-auto'>Modelo de IA</span>
                <div className='w-7 mr-3 z-20'>
                    <Link href={'../menu'}>
                        <Image className='w-full h-full rounded-md cursor-pointer'
                            src={arrow}
                            alt="menu"
                        />
                    </Link>
                </div>
            </header>
            <div className="relative flex justify-center items-center h-[81vh]">
                <div id="sidemenu" className='w-36 md:w-52 h-[90vh] overflow-hidden bg-[#17882C]
                -translate-x-full transition duration-300 ease-in-out absolute left-0 top-0'>
                    <ul className="w-full h-full flex flex-col">
                        <li className="w-full h-20 border-white border-t-2 flex justify-center items-center text-white">
                            Gráfico de Pizza
                        </li>
                        <li className="w-full h-20 border-white border-t-2 flex justify-center items-center text-white">
                            Gráfico de Pizza
                        </li>
                        <li className="w-full h-20 border-white border-t-2 flex justify-center items-center text-white">
                            Gráfico de Pizza
                        </li>
                        <li className="w-full h-20 border-white border-t-2 flex justify-center items-center text-white">
                            Gráfico de Pizza
                        </li>
                        <li className="w-full h-20 border-white border-t-2 flex justify-center items-center text-white">
                            Gráfico de Pizza
                        </li>
                        <li className="w-full h-20 border-white border-t-2 flex justify-center items-center text-white">
                            Gráfico de Pizza
                        </li>
                        <li className="w-full h-20 border-white border-t-2 flex justify-center items-center text-white">
                        </li>
                    </ul>
                </div>
                <div className="w-full h-4/5 flex justify-center items-center text-center">
                        <div className=" w-full h-full">
                            <Image src={exemplo} alt={"exemplo"} className=" w-full h-full"/>
                        </div>
                </div>
            </div>
        </main>
    )
}