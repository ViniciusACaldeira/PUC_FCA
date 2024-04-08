//TDD - Teste Driven Development
var novoMapa = new Map();

class HistoryMap{

}

novoMapa.set( '11/11/11/2011 - 23:30', { title: 'Titulo do site' } );
novoMapa.set( '11/11/11/2011 - 23:31', {} );



var resultado = novoMapa.get('11/11/11/2011 - 23:30');

console.log(resultado)