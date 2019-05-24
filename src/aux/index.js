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