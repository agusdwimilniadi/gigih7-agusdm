import generateCodeChallenge from './generateCode';
import generateRandomString from './generateRandomString';

export async function redirectToAuthCodeFlow(clientId) {
  const verifier = generateRandomString(128);
  const challenge = await generateCodeChallenge(verifier);

  localStorage.setItem('verifier', verifier);

  const params = new URLSearchParams();
  params.append('client_id', clientId);
  params.append('response_type', 'code');
  params.append('redirect_uri', 'http://localhost:5173/');
  params.append('scope', 'user-read-private user-read-email');
  params.append('code_challenge_method', 'S256');
  params.append('code_challenge', challenge);

  const url = `https://accounts.spotify.com/authorize?${params.toString()}`;
  document.location = url;
}
