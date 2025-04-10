import React from 'react';
import styles from '../styles/header.module.css';

type HeaderProps = {
    query: string;
    setQuery: (query: string) => void;
}

const Header = ({query, setQuery}: HeaderProps) => {
    

    const handleChange = (e: any) => {
        setQuery(e.target.value);
    }
    
    return (
        <>
            <header className={styles.header}>
                <input onChange={e => handleChange(e)} value={query} id='search-bar' placeholder='Search a pokemon by name...' type='text' className={styles.input}/>
            </header>
        </>
    )
}

export default Header;