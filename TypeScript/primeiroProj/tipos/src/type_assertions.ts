

// Afirmando algum tipo.

let statusAtual: unknown = 1;

let mudaStatus: number = 0;

mudaStatus = statusAtual as number; //estamos a afirmar que o status atual E de facto um numero

//outra maneura de afirmar:
mudaStatus = <number>statusAtual;

console.log(mudaStatus);

let query: unknown = 'pizza';

let searchTerm: string = query as string;

console.log('Search TERM ', searchTerm);
