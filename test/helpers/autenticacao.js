import http from 'k6/http' //Importação de módulo
import { sleep, check } from 'k6' //Importação de função
import { pegarBaseURL } from '../utils/variaveis.js';

export function obterTokenAdmin() {
    
    const url = pegarBaseURL() + '/login';

    const payload = JSON.stringify({
        "email": "julio@email.com",
        "senha": "123"
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params);

    return res.json('token')

}

export function obterTokenExecutivo() {
    const url = 'http://localhost:3000/login';

    const payload = JSON.stringify({
        "email": "vitor@email.com",
        "senha": "123"
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params);

    return res.json('token')

}