
const environment: number = 0;

let apiUrl!: string;
if (environment === 0) {
    apiUrl = 'http://localhost:9999';
} else {
    apiUrl = '';
}

export default {
    VERSION: '0.0.1.beta',
    APP_COPYRIGHT: ' ',
    API_URL: apiUrl,
    IMG_URL: '',
}
