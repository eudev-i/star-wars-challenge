// Estrutura de condição para inserir a imagem de filmes de acordo com o titulo trago pela API

export function imgFilms(title) {

    switch(title){

        case 'A New Hope':
        return require('../img/hope.jpeg');

        case 'Attack of the Clones':
        return require('../img/clones.jpg');

        case 'The Phantom Menace':
        return require('../img/menace.jpeg');

        case 'Revenge of the Sith':
        return require('../img/sith.jpg');

        case 'Return of the Jedi':
        return require('../img/jedi.jpg')

        case 'The Empire Strikes Back':
        return require('../img/back.jpg');

        case 'The Force Awakens':
        return require('../img/awakens.png')
        
    }
}

// Estrutura de condição para inserir a imagem de personagens de acordo com o nome trago pela API

export function imgCharacter(name) {

    switch(name){

        case 'Luke Skywalker':
        return require('../img/luke.jpeg');

        case 'C-3PO':
        return require('../img/c3po.jpg');

        case 'R2-D2':
        return require('../img/r2d2.jpg');

        case 'Darth Vader':
        return require('../img/darth.jpeg');

        case 'Leia Organa':
        return require('../img/leia.jpeg')

        case 'Owen Lars':
        return require('../img/owen.jpeg');

        case 'Beru Whitesun lars':
        return require('../img/beru.jpg');

        case 'R5-D4':
        return require('../img/r5d4.jpg');

        case 'Biggs Darklighter':
        return require('../img/biggs.jpeg');

        case 'Obi-Wan Kenobi':
        return require('../img/obi.jpeg')
        
    }
}