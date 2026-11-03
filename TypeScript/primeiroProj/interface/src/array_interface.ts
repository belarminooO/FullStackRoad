

// interface TecnologiaProps{
//   id: string;
//   nome: string;
//   slug?: (string| number)[];
// }


// let tecnologia1: TecnologiaProps = {
//   id: "1",
//   nome: "PHP",
//   slug: ["php", "php123", 123]
// }


// exemplo2:


interface TecnologiaProps{
  id: string;
  nome: string;
  descricao?: string;
}

interface NomeProps{
  tecnologia: TecnologiaProps[] // esta propriedade vai ser um array de objectos tecnologiaprops
}


let frontend: NomeProps = {
  tecnologia: [
    {id: "123", nome: "ReactJS", descricao: "biblioteca para criar interfaces"},
    {id: "124", nome: "VueJS"}
  ]
}

console.log(frontend.tecnologia)
