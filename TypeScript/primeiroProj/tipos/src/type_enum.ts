

// Type enum nao tem no JS mas existe em TS

// serve para enumerar tipos de dados.

enum DesignColors {
  white = '#FFFFFF',
  black = '#000000'
}

console.log(DesignColors.white);


// vai enumerando comecando de 0 ate mais infinito,isso se nao passarmos um valor.
enum StatusPermission {
  ADMIN,
  USER
}

console.log(StatusPermission.ADMIN);
console.log(StatusPermission.USER);
