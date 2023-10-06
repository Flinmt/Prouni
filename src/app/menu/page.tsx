import Mec from '@/assets/mec.svg'
import Image from 'next/image'
import { HeaderOne } from '@/components/Header'
import Link from 'next/link'

export default function Menu() {
  return (
    <main>
      <HeaderOne/>
      <div className='w-full fixed inset-0 flex flex-col justify-center items-center'>
        <div className='w-36 h-36 rounded-md mb-7'>
          <Image className='w-full h-full rounded-md'
            src={Mec}
            alt="Mec"
          />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <Link href="menu/analises" className='bg-[#D9D9D9] rounded-lg shadow-md shadow-[#07070763] w-72 h-11 mb-5
            hover:shadow-inner flex justify-center items-center text-center'>Análise Exploratória de Dados</Link>
          <Link href="menu/iamodel" className='bg-[#D9D9D9] rounded-lg shadow-md shadow-[#07070763] w-72 h-11 
            hover:shadow-inner flex justify-center items-center text-center'>Modelo de IA</Link>
        </div>
      </div>
    </main>
  )
}

