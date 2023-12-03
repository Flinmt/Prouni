'use client';

import Image from "next/image";
import Link from "next/link";
import arrow from "@/assets/arrow-back.svg"
import axios from 'axios';
import { useState } from "react";

export default function Home() {

  const [cadastroRealizado, setCadastroRealizado] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const nome = (form.elements[0] as HTMLInputElement).value;
    const email = (form.elements[1] as HTMLInputElement).value;
    const sexo = (form.elements[2] as HTMLSelectElement).value;
    const raca = (form.elements[3] as HTMLSelectElement).value;
    const regiao = (form.elements[4] as HTMLSelectElement).value;
    const ies = (form.elements[5] as HTMLInputElement).value;
    const modalidade = (form.elements[6] as HTMLInputElement).value;
    const curso = (form.elements[7] as HTMLInputElement).value;
    const turno = (form.elements[8] as HTMLInputElement).value;
    const uf = (form.elements[9] as HTMLInputElement).value;
    const municipio = (form.elements[10] as HTMLInputElement).value;
    const senha = (form.elements[11] as HTMLInputElement).value;

    const userData = {
      nome: nome,
      email: email,
      password: senha,
      sexo: sexo,
      raca: raca,
      regiao: regiao,
      nome_ies: ies,
      modalidade_ensino: modalidade,
      nome_curso: curso,
      nome_turno_curso: turno,
      sigla_uf_beneficiariouf: uf,
      municipio_beneficiario: municipio
    };

    console.log(userData)
    try {
      const response = await axios.post('/user/user/create', userData);
      console.log(response)

      setCadastroRealizado(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <header className="w-full h-16 bg-[#17882C] flex justify-center items-center 
            text-center text-white">
        <div className='w-7 ml-3 z-10'>
          <Link href={'./'}>
            <Image className='w-full h-full rounded-md cursor-pointer'
              src={arrow}
              alt="menu"
            />
          </Link>
        </div>
        <span className='mr-auto ml-auto'>{cadastroRealizado && <p>Cadastro realizado com sucesso!</p>}</span>
      </header>
      <div className='w-full fixed inset-0 flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center overflow-auto h-3/4 w-4/5'>
          <form onSubmit={handleSubmit} className='grid gap-1 grid-cols-2'>
            <input required type="text" placeholder='Nome:' className='bg-[#D9D9D9] mb-5 w-full h-11 rounded-lg shadow-mdshadow-[#07070763] border-0 py-1.5 pl-7 pr-20 text-black font-medium ring-inset ring-gray-300 placeholder:text-[#000000a1] placeholder:font-medium sm:text-sm sm:leading-6 placeholder="0.00"' />
            <input required type="text" placeholder='Email:' className='bg-[#D9D9D9] mb-5 w-full h-11 rounded-lg shadow-mdshadow-[#07070763] border-0 py-1.5 pl-7 pr-20 text-black font-medium ring-inset ring-gray-300 placeholder:text-[#000000a1] placeholder:font-medium sm:text-sm sm:leading-6 placeholder="0.00"' />
            <label htmlFor="sexo" className='bg-[#D9D9D9] mb-5 w-full h-11 rounded-lg shadow-mdshadow-[#07070763] border-0 py-2.5 pl-7 pr-20 text-black font-medium ring-inset ring-gray-300 placeholder:text-[#000000a1] placeholder:font-medium sm:text-sm sm:leading-6 placeholder="0.00" text-[#000000a1] relative'>
              Sexo:
              <select name="sexo" id="sexo" className='absolute right-5 bg-transparent rounded-md w-25 text-right'>
                <option value="F">F</option>
                <option value="M">M</option>
              </select>
            </label>
            <label htmlFor="raça" className='bg-[#D9D9D9] mb-5 w-full h-11 rounded-lg shadow-mdshadow-[#07070763] border-0 py-2.5 pl-7 pr-20 text-black font-medium ring-inset ring-gray-300 placeholder:text-[#000000a1] placeholder:font-medium sm:text-sm sm:leading-6 placeholder="0.00" text-[#000000a1] relative'>
              Raça:
              <select name="raça" id="raça" className='absolute right-5 bg-transparent rounded-md text-right'>
                <option value="Branca">Branca</option>
                <option value="Preta">Preta</option>
                <option value="Amarela">Amarela</option>
                <option value="Parda">Parda</option>
                <option value="Indígena">Indígena</option>
              </select>
            </label>
            <label htmlFor="região" className='bg-[#D9D9D9] mb-5 w-full h-11 rounded-lg shadow-mdshadow-[#07070763] border-0 py-2.5 pl-7 pr-20 text-black font-medium ring-inset ring-gray-300 placeholder:text-[#000000a1] placeholder:font-medium sm:text-sm sm:leading-6 placeholder="0.00" text-[#000000a1] relative'>
              Região:
              <select name="região" id="região" className='absolute right-5 bg-transparent rounded-md text-right'>
                <option value="Norte">Norte</option>
                <option value="Nordeste">Nordeste</option>
                <option value="Sul">Sul</option>
                <option value="Sudeste">Sudeste</option>
                <option value="Centro-Oeste">Centro-Oeste</option>
              </select>
            </label>
            <input required type="text" placeholder='IES: ' className='bg-[#D9D9D9] mb-5 w-full h-11 rounded-lg shadow-mdshadow-[#07070763] border-0 py-1.5 pl-7 pr-20 text-black font-medium ring-inset ring-gray-300 placeholder:text-[#000000a1] placeholder:font-medium sm:text-sm sm:leading-6 placeholder="0.00"' />
            <input required type="text" placeholder='Modalidade: ' className='bg-[#D9D9D9] mb-5 w-full h-11 rounded-lg shadow-mdshadow-[#07070763] border-0 py-1.5 pl-7 pr-20 text-black font-medium ring-inset ring-gray-300 placeholder:text-[#000000a1] placeholder:font-medium sm:text-sm sm:leading-6 placeholder="0.00"' />
            <input required type="text" placeholder='Curso: ' className='bg-[#D9D9D9] mb-5 w-full h-11 rounded-lg shadow-mdshadow-[#07070763] border-0 py-1.5 pl-7 pr-20 text-black font-medium ring-inset ring-gray-300 placeholder:text-[#000000a1] placeholder:font-medium sm:text-sm sm:leading-6 placeholder="0.00"' />
            <input required type="text" placeholder='Turno: ' className='bg-[#D9D9D9] mb-5 w-full h-11 rounded-lg shadow-mdshadow-[#07070763] border-0 py-1.5 pl-7 pr-20 text-black font-medium ring-inset ring-gray-300 placeholder:text-[#000000a1] placeholder:font-medium sm:text-sm sm:leading-6 placeholder="0.00"' />
            <input required type="text" placeholder='UF: ' className='bg-[#D9D9D9] mb-5 w-full h-11 rounded-lg shadow-mdshadow-[#07070763] border-0 py-1.5 pl-7 pr-20 text-black font-medium ring-inset ring-gray-300 placeholder:text-[#000000a1] placeholder:font-medium sm:text-sm sm:leading-6 placeholder="0.00"' />
            <input required type="text" placeholder='Municipio: ' className='bg-[#D9D9D9] mb-5 w-full h-11 rounded-lg shadow-mdshadow-[#07070763] border-0 py-1.5 pl-7 pr-20 text-black font-medium ring-inset ring-gray-300 placeholder:text-[#000000a1] placeholder:font-medium sm:text-sm sm:leading-6 placeholder="0.00"' />
            <input required type="password" placeholder='Senha:' className='bg-[#D9D9D9] mb-5 w-full h-11 rounded-lg shadow-mdshadow-[#07070763] border-0 py-1.5 pl-7 pr-20 text-black  font-medium ring-inset ring-gray-300 placeholder:text-[#000000a1] placeholder:font-medium sm:text-sm sm:leading-6" placeholder="0.00"' />
            <input required type="submit" value="Cadastrar" className='bg-[#D9D9D9] rounded-lg shadow-md shadow-[#07070763] flex justify-center text-center items-center w-4/5 h-11 hover:shadow-inner cursor-pointer ml-40' />
          </form>
        </div>
      </div>
    </main>
  )
}
