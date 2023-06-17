// https://app.quicktype.io/

export interface AllPokemons {
    count: number;
    next: null;
    previous: null;
    results: SmallPokemon[];
}

export interface SmallPokemon {
    name: string;
    url: string;
}

export interface Pokemon {
    id: string;
    name: string;
    pic: string
}
