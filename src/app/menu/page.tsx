'use client'

import Mec from '@/assets/mec.svg'
import Image from 'next/image'
import { HeaderOne } from '@/components/Header'
import Link from 'next/link'
import { deleteCookie, hasCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'

export default function Menu() {

  function logout() {
    deleteCookie('login');
  }

  const router = useRouter();

  if (hasCookie('login') == false) {
    router.push("/.")
  }

  return (
    <main>
      <HeaderOne />
      <div className='w-full fixed inset-0 flex flex-col justify-center items-center' >
        <div className='w-36 h-36 rounded-md mb-7'>
          <Image className='w-full h-full rounded-md'
            src={Mec}
            alt="Mec"
          />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <Link href="menu/perfil" className='bg-[#D9D9D9] rounded-lg shadow-md shadow-[#07070763] w-72 h-11 mb-5
            hover:shadow-inner flex justify-center items-center text-center'>Perfil de Usuario</Link>
          <Link href="menu/analises" className='bg-[#D9D9D9] rounded-lg shadow-md shadow-[#07070763] w-72 h-11 mb-5
            hover:shadow-inner flex justify-center items-center text-center'>Análise Exploratória de Dados</Link>
          <Link href="menu/iamodel" className='bg-[#D9D9D9] rounded-lg shadow-md shadow-[#07070763] w-72 h-11 mb-5
            hover:shadow-inner flex justify-center items-center text-center'>Gerar Resuldade da IA</Link>
          <Link type='button' onClick={logout} href=".." className='bg-[#D9D9D9] rounded-lg shadow-md shadow-[#07070763] w-72 h-11 
            hover:shadow-inner flex justify-center items-center text-center'>Logout</Link>
        </div>
      </div>
    </main>
  )
}

