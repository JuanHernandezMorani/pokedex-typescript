import data from './list.json';

export function fetchPokemons (){
    
    return data.map(pokemon => ({
        "sprites": pokemon.sprites,
        "name": pokemon.name,
        "national_number": pokemon.national_number,
        "type": pokemon.type
    }));
}