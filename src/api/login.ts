import React from 'react';
import axios from 'axios';
import { getCookie, hasCookie, setCookie } from 'cookies-next';

export async function loginUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    const form = event.target as HTMLFormElement;
    const email = (form.elements[0] as HTMLInputElement).value;
    const password = (form.elements[1] as HTMLInputElement).value;
  
    const userData = {
      email: email,
      password: password
    };

    try {
      // Altere a URL para usar o proxy
      const response = await axios.post('/api/login/', userData);
      const tokens = response.data.tokens;
      console.log('Tokens: ', tokens);

      setCookie('login', tokens['access']);
      console.log(hasCookie('login'))

      window.location.reload();
    } catch (error) {
      console.error('Erro ao fazer login: ', error);
    }
}