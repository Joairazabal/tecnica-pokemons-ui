import Pokemon from "./pokemon.model";

export default interface DetailPokemon extends Pokemon {
    moves: string[] | never[];
    description: string;
}