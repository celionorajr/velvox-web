const isDevelopment = import.meta.env.MODE === 'development';

export const externalUrls = {
  cadastro: isDevelopment 
    ? 'http://192.168.0.251:3000/signup' 
    : 'https://atendimento.velvox.com.br/signup',
    
  planos: isDevelopment
    ? 'http://192.168.0.251:3000/signup'
    : 'https://atendimento.velvox.com.br/signup',
    
  login: isDevelopment
    ? 'http://192.168.0.251:3000/login'
    : 'https://atendimento.velvox.com.br/login',
    
  testeGratis: isDevelopment
    ? 'http://192.168.0.251:3000/signup'
    : 'https://atendimento.velvox.com.br/teste-gratis'
}