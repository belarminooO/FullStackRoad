import { connection, statusConnection } from "./database/connection" // com chavetas - sem default -> o nome E o mesmo que no ficheiro pai, pode se ter mais de 1 export normal no mesmo arquivo.
import getStatus, { resetarBanco } from "./database/aplicativo" // sem chavetas - com default -> aqui podemos trocar o nome da funcao original, em 1 arquivo nao se pode ter 2 export default, mas podemos ter 1 default e 1 ou mais exports normais.


// Buscar o meu arquivo que conecta no banco de dados.
function acessarSistema(){
  connection({ip: "192.165.42.10", name: "MySQL"})
}

acessarSistema();

statusConnection();

getStatus();

resetarBanco();
