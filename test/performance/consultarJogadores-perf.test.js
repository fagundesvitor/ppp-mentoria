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

  const url = pegarBaseURL() + '/caracteristicas';

  const payload = JSON.stringify({
    "nome": "Atento",
  })

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
  }

  const res = http.get(url, params);

  check(res, {
    'status is 200': (res) => res.status == 200
  })

  sleep(1)
}