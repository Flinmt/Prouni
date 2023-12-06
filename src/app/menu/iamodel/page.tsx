'use client'

import Image from "next/image";
import { HeaderIa } from "@/components/HeaderIa";
import axios from "axios";
import { getCookie, hasCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import spinner from "@/assets/Spinner-1s-200px.gif"

export default function Resultado() {
    const router = useRouter();
  if (!hasCookie('login')) {
    router.push("/.")
  }

  interface MyTokenPayload {
    user_id: number;
    // inclua aqui outras propriedades do seu token
  }

  const token = getCookie('login');
  const decoded = jwtDecode(token as string) as MyTokenPayload;

  const getResultado = async () => {

    try {
        const response = await axios.post('/user/user/create/resultado/' + decoded.user_id, null, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

        console.log(response)
        return response.data
    } catch (error){
        console.log(error)
    }

  }

  const getUser = async () => {

    try {
      const response = await axios.get('/user/user/' + decoded.user_id, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      var userData = response.data.data;
      return userData

    } catch (error) {
      console.error('Erro ao fazer encontrar usuario', error);
    }
  }

  const [userData, setUserData] = useState(null);
  const [userResult, setUserResult] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUser();
      const result = await getResultado();


      setUserData(data);
      setUserResult(result);
    }

    fetchUserData();
  }, []);

  if (!userData) {
    return <div className="absolute -translate-x-2/4 -translate-y-2/4 top-2/4
     left-2/4">
      <Image src={spinner} alt={"spinner"}></Image>
    </div>;
  }

    return (
        <main>
            <HeaderIa/>
            <div className="relative flex flex-col justify-center items-start h-[81vh] w-[75vw]
            mx-auto">
                <div className="flex flex-col mb-14">
                    <span className="mb-3 font-semibold text-xl">Resultado da IA</span>
                    <span className="text-sm">Baseado nos resultados Prouni 2017</span>
                </div>
                <div className="w-full shadow-md shadow-[#07070763] rounded-lg p-8 flex flex-col">
                    <span className="text-sm mb-2"><b>Nome:</b> {userData
                    ['nome']}</span>
                    <span className="text-sm mb-2"><b>Curso:</b> {userData['nome_curso']}</span>
                    <br />
                    {userResult ? (
                    <span className="mb-3 font-semibold text-xl">{userResult['resultado']}</span>
                ) : (
                    <span className="mb-3 font-semibold text-xl">Resultado não disponível</span>
                )}
                </div>
            </div>
        </main>
    )
}