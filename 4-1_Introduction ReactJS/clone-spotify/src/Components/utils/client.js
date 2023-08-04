import generateCodeChallenge from './generateCode';
import generateRandomString from './generateRandomString';

const clientId = '5ea33907a5754562ac98af293f342b24';
const redirectUri = 'http://localhost:5173';

let codeVerifier = generateRandomString(128);

generateCodeChallenge(codeVerifier).then((codeChallenge) => {
  let state = generateRandomString(16);
  let scope = 'user-read-private user-read-email';

  localStorage.setItem('code_verifier', codeVerifier);

  let args = new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    scope: scope,
    redirect_uri: redirectUri,
    state: state,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
  });

  window.location = 'https://accounts.spotify.com/authorize?' + args;
});
