// Importa a biblioteca axios
import axios from 'axios';

// Cria uma instância do axios com uma baseURL apontando para a API
const api = axios.create({
  baseURL: 'https://itunes.apple.com/search',
});

// Exporta a instância para ser utilizada em outros arquivos
export default api;
