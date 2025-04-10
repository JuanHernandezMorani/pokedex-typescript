import { Header, Footer } from '../components';
import { useState } from 'react';
import styles from '../styles/pokemons.module.css';
import '../styles/listItemText.css';
import { Link } from 'react-router-dom';
import { fetchPokemons } from '../api/fetchPokemons';
import {
    Steel, Water, Bug, Dragon, Electric, Ghost, Fire,
    Fairy, Ice, Fighting, Normal, Grass, Psychic, Rock,
    Dark, Ground, Poison, Flying
} from '../assets/types/index';

const Pokemons = () => {
    const [pokemon, setPokemon] = useState('');
    const pokemons = fetchPokemons();

    const typeMap: { [key: string]: string } = {
        steel: "Steel",
        water: "Water",
        bug: "Bug",
        dragon: "Dragon",
        electric: "Electric",
        ghost: "Ghost",
        fire: "Fire",
        fairy: "Fairy",
        ice: "Ice",
        fighting: "Fighting",
        normal: "Normal",
        grass: "Grass",
        psychic: "Psychic",
        rock: "Rock",
        dark: "Dark",
        ground: "Ground",
        poison: "Poison",
        flying: "Flying",
    };

    const iconMap: { [key: string]: string } = {
        steel: Steel,
        water: Water,
        bug: Bug,
        dragon: Dragon,
        electric: Electric,
        ghost: Ghost,
        fire: Fire,
        fairy: Fairy,
        ice: Ice,
        fighting: Fighting,
        normal: Normal,
        grass: Grass,
        psychic: Psychic,
        rock: Rock,
        dark: Dark,
        ground: Ground,
        poison: Poison,
        flying: Flying
    };

    const allTypes = [
        "Steel", "Water", "Bug", "Dragon", "Electric", "Ghost", "Fire",
        "Fairy", "Ice", "Fighting", "Normal", "Grass", "Psychic", "Rock",
        "Dark", "Ground", "Poison", "Flying"
    ];

    function getTypeClass(types: string[]): string {
        const mapped = types.map(t => typeMap[t.toLowerCase()] ?? t);
        const data = [...mapped].sort();
        const sorted = data.filter((item, index) => data.indexOf(item) === index);

        const index = allTypes.findIndex(t => t === sorted[0]);
        if (sorted.length === 1 && index !== -1) {
            return `listItemText${index + 1}`;
        }

        let combinationIndex = 18;
        for (let i = 0; i < allTypes.length; i++) {
            for (let j = i + 1; j < allTypes.length; j++) {
                combinationIndex++;
                if ((allTypes[i] === sorted[0] && allTypes[j] === sorted[1]) ||
                    (allTypes[i] === sorted[1] && allTypes[j] === sorted[0])) {
                    return `listItemText${combinationIndex}`;
                }
            }
        }

        return "";
    }

    function getName(pokemon: any) {
        if (pokemon.name === "nidoran-f" || pokemon.name === "nidoran-m") {
            return pokemon.name === "nidoran-f" ? "nidoran ♀" : "nidoran ♂";
        }
        else return (pokemon.name).replace("-", " ");
    }

    function renderTypeIcons(types: string[]) {
        return (
            <div className={styles.typeIcons}>
                {types.map((type, index) => {
                    const normalized = type.toLowerCase();
                    const iconSrc = iconMap[normalized];

                    return iconSrc ? (
                        <img
                            key={normalized + index}
                            src={iconSrc}
                            alt={normalized}
                            className={styles.listTypeIcon}
                        />
                    ) : null;
                })}
            </div>
        );
    }

    function show(pokemon: any) {
        const types = pokemon.type;
        return (
            <Link to="/" className={styles.listItem} key={pokemon.name + "//" + pokemon.national_number}>
                <div className={`${styles.cardFrame} ${getTypeClass(types)}`}>
                    <div className={styles.holoEffect}></div>
                    <img className={styles.listItemIcon} src={pokemon.sprites.front_default} alt={pokemon.name + "pic"} />
                </div>
                <div className={styles.listItemText}>
                    <span className={getTypeClass(types)}>{getName(pokemon)}</span>
                    <span>#{pokemon.national_number}</span>
                </div>
                {renderTypeIcons(types)}
            </Link>
        );
    }

    return (
        <div className={styles.pokemons}>
            <Header query={pokemon} setQuery={setPokemon} />
            <main>
                {pokemons.map(pokemon => show(pokemon))}
            </main>
            <Footer />
        </div>
    )
}

export default Pokemons;