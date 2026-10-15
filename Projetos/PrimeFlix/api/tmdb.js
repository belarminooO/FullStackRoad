/* global process */

const CAMINHOS_PERMITIDOS = /^(movie\/now_playing|movie\/\d+)$/;

export default async function handler(requisicao, resposta) {
  if (requisicao.method !== 'GET') {
    resposta.setHeader('Allow', 'GET');
    resposta.status(405).json({ erro: 'Método não permitido.' });
    return;
  }

  const { path, language = 'pt-BR', page = '1' } = requisicao.query;

  if (typeof path !== 'string' || !CAMINHOS_PERMITIDOS.test(path)) {
    resposta.status(400).json({ erro: 'Pedido ao TMDB inválido.' });
    return;
  }

  const apiKey = process.env.TMDB_API_KEY;

  if (!apiKey) {
    resposta.status(500).json({ erro: 'A chave do TMDB não foi configurada no servidor.' });
    return;
  }

  const url = new URL(`https://api.themoviedb.org/3/${path}`);
  url.searchParams.set('api_key', apiKey);
  url.searchParams.set('language', typeof language === 'string' ? language : 'pt-BR');

  if (path === 'movie/now_playing') {
    url.searchParams.set('page', typeof page === 'string' ? page : '1');
  }

  try {
    const respostaTmdb = await fetch(url);
    const dados = await respostaTmdb.json();

    resposta.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    resposta.status(respostaTmdb.status).json(dados);
  } catch {
    resposta.status(502).json({ erro: 'Não foi possível comunicar com o TMDB.' });
  }
}
