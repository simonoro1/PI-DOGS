import React from 'react'
import styles from './search.module.css'
function Search() {
    return (
        <div className={styles.container}>
            <h2>Find A Dog</h2>
            <input type="text" placeholder='By name'/>
        </div>
    )
}

export default Search
