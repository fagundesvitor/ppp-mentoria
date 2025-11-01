const configLocal = JSON.parse(open('../suport/configLocal.json'))

export function pegarBaseURL(){
    const baseURL = __ENV.BASE_URL || configLocal.BASE_URL;
    return baseURL;
}
