
// vamos supor que temos um jogo e este jogo pode ter una DLC

interface JogoProps {
  readonly id: string;
  nome: string;
  descricao: string;
  plataforma: string[];
}



const left4dead: JogoProps = {
  id: "123",
  nome: "left 4 dead 2",
  descricao: "jogo de tiro",
  plataforma: ["ps5", "pc"]
}

// // console.log(left4dead);

interface DLC extends JogoProps{
  jogoOriginal: JogoProps;
  novoConteudo: string[];
}

const left4DeadDLC: DLC = {
  id: "90",
  nome: "left 4 dead - novos mapas",
  descricao: "4 novos mapas adicionados",
  plataforma: ["ps5", "pc"],
  novoConteudo: ["modo coop", "mais 5 horas de jogo", "medalhas"],
  jogoOriginal: left4dead // podemos passar esta varivel pois respeita a tipagem do JogoProps
}

console.log(left4DeadDLC);


