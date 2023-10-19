import { HeaderIa } from "@/components/HeaderIa";
import Link from "next/link";

export default function Resultado() {
    return (
        <main>
            <HeaderIa/>
            <div className="relative flex flex-col justify-center items-start h-[81vh] w-[75vw]
            mx-auto">
                <div className="flex flex-col mb-14">
                    <span className="mb-3 font-semibold text-xl">Informações do Candidato</span>
                    <span className="text-sm">Resultado do Prouni 2017</span>
                </div>
                <div className="w-full shadow-md shadow-[#07070763] rounded-lg p-8 flex flex-col">
                    <span className="text-sm mb-2">Nome: </span>
                    <span className="text-sm mb-2">Curso: </span>
                    <span className="text-sm mb-8">Lugar: </span>
                    <span className="mb-3 font-semibold text-xl">Tipo de Bolsa:</span>
                </div>
            </div>
        </main>
    )
}