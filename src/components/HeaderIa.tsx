import Image from "next/image";
import Link from "next/link";
import arrow from "@/assets/arrow-back.svg"

export function HeaderIa() {
    return (
        <header className="w-full h-16 bg-[#17882C] flex justify-center items-center 
            text-center text-white">
                <div className='w-7 ml-3'>
                    <Link href={'./'}>
                        <Image className='w-full h-full rounded-md cursor-pointer'
                            src={arrow}
                            alt="menu"
                        />
                    </Link>
                </div>
                <span className='mr-auto ml-auto'>Modelo de IA</span>
            </header>
    )
}