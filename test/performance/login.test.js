import http from 'k6/http' //Importação de módulo
import { sleep, check } from 'k6' //Importação de função
import { pegarBaseURL } from '../utils/variaveis.js';

export const options = {
    stages: [
        { duration: '5s', target: 10 },
        { duration: '20s', target: 10 },
        { duration: '5s', target: 0 }
    ],
    //iterations: 1,
    thresholds: {
        http_req_failed: ['rate<50'],
        http_req_duration: ['p(90)<3000', 'max<5000'],
    }
}

export default function () {
    const url = pegarBaseURL() + '/login';

    const payload = JSON.stringify({ {
        "email": "vitor@email.com",
        "senha": "123"
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params);

    check(res, {
        'Validar que o status é 200': (r) => r.status == 200,
        'Validar que o Token é string': (r) => typeof (r.json().token) == 'string'
    })

    sleep(1)
}