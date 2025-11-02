import http from 'k6/http' 
import { sleep, check } from 'k6' 
import { obterTokenAdmin } from '../helpers/autenticacao.js';
import { pegarBaseURL } from '../utils/variaveis.js';

export const options = {
  stages: [
    { duration: '5s', target: 10 },
    { duration: '20s', target: 10 },
    { duration: '5s', target: 0 }
  ],
  thresholds: {
    http_req_failed: ['rate<50'],
    http_req_duration: ['p(90)<3000', 'max<5000'],
  }
};

export default function () {
  const token = obterTokenAdmin()

  const url = pegarBaseURL() + '/jogadores';

  const payload = JSON.stringify({
    "nomeCompleto": "Esquiva Falcão",
    "apelido": "Falcão",
    "dataNascimento": "1981-10-26",
    "inicioContrato": "2025-01-01",
    "fimContrato": "2028-12-31",
    "multaRescisoria": 90.000,
    "clubeAtual": "Clube E",
    "caracteristicas": [
      "Ofensivo",
      "Rápido"
    ],
    "posicoes": [
      "Volante"
    ],
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