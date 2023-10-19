import { HeaderIa } from "@/components/HeaderIa";
import Link from "next/link";

export default function IaModel() {
    return (
        <main>
            <HeaderIa/>
            <div className="relative flex flex-col justify-center items-center h-[81vh]">
                <span className="mb-3 font-bold text-lg">Descrição do Candidato</span>
                <form className="rounded-xl shadow-lg shadow-[#00000059] w-96 pb-3 pt-3 max-sm:w-screen max-sm:shadow-none 
                flex flex-col justify-center items-center text-center">
                    <div className="flex border-b border-black w-full">
                        <span className="p-1 mt-5 ml-3 text-sm font-semibold">Nome: </span>
                        <input type="text" name="" id="" className="outline-none rounded-md w-full pr-3 mt-5" />
                    </div>
                    <div className="flex border-b border-black w-full">
                        <span className="p-1 mt-5 ml-3 text-sm font-semibold">Sexo: </span>
                        <input type="text" name="" id="" className="outline-none rounded-md w-full pr-3 mt-5" />
                    </div>
                    <div className="flex border-b border-black w-full">
                        <span className="p-1 mt-5 ml-3 text-sm font-semibold">Raça: </span>
                        <input type="text" name="" id="" className="outline-none rounded-md w-full pr-3 mt-5" />
                    </div>
                    <div className="flex border-b border-black w-full">
                        <span className="p-1 mt-5 ml-3 text-sm font-semibold">Curso: </span>
                        <input type="text" name="" id="" className="outline-none rounded-md w-full pr-3 mt-5" />
                    </div>
                    <div className="flex border-b border-black w-full">
                        <span className="p-1 mt-5 ml-3 text-sm font-semibold">Lugar: </span>
                        <input type="text" name="" id="" className="outline-none rounded-md w-full pr-3 mt-5" />
                    </div>
                    <Link href={"iamodel/resultado"} className="mt-5 mb-3 border border-[#17882C] p-2 px-8 rounded-xl bg-[#17882C] 
                    text-white shadow-md hover:bg-[#ffffff] hover:text-black duration-300 ">
                        Resultado
                    </Link>
                </form>
            </div>
        </main>
    )
}