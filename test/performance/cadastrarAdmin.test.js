import http from 'k6/http' //Importação de módulo
import { sleep, check } from 'k6' //Importação de função
import { obterToken } from '../helpers/autenticacao.js';
import { pegarBaseURL } from '../utils/variaveis.js';

export const options = {
  iterations: 1,
  duration: '30s',
};

export default function () {
  const token = obterToken()

  const url = pegarBaseURL() + '/admin';

  const payload = JSON.stringify({
  "nome": "Vitor Fagundes",
  "email": "vitor@email.com",
  "senha": "123"
})

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
  }

  const res = http.post(url, payload, params);

  check(res, {
    'status is 201': (res) => res.status == 201
  })

  sleep(1)
}