import axios from 'axios';

const apiKey = import.meta.env.VITE_TMDB_API_KEY?.trim();
const usaProxyDoServidor = import.meta.env.PROD;

const api = axios.create({
  baseURL: usaProxyDoServidor ? '/api/tmdb' : 'https://api.themoviedb.org/3/'
});

export const temAcessoAoTmdb = usaProxyDoServidor || Boolean(apiKey);

export function obterTmdb(caminho, configuracao = {}) {
  const params = { ...configuracao.params };

  if (usaProxyDoServidor) {
    return api.get('', {
      ...configuracao,
      params: { ...params, path: caminho }
    });
  }

  return api.get(caminho, {
    ...configuracao,
    params: { ...params, api_key: apiKey }
  });
}

export default api;

