import http from 'k6/http';
import { sleep, check } from 'k6';
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
    const url = pegarBaseURL() + '/login';
    
    const payload = JSON.stringify({
        email: "vitor@email.com",
        senha: "123"
    });
    const params = {
        headers: { 'Content-Type': 'application/json' },
    };

    const res = http.post(url, payload, params);

    check(res, {
        'Status é 200': (r) => r.status === 200,
        'Token é string': (r) => r.status === 200 ? typeof r.json().token === 'string' : true,
    });

    sleep(1);
}