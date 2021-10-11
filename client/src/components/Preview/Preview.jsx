import React from 'react'
import styles from './preview.module.css'
import profile from "../../images.png";


function Preview(props) {
    const {name, minWeight, maxWeight, minHeight, maxHeight, minLifespan, maxLifespan, temperament, img} = props
    return (
        <div className={styles.preview}>
            <div className={styles.imgContainer}>
                {!img ? <img src={profile} alt="" /> : <img src={img}/>}
            </div>
            <div className={styles.description}>
                <h2>{name}</h2>
                <p><span>Weight: </span>{minWeight} - {maxWeight} lb</p>
                <p><span>Height: </span> {minHeight} - {maxHeight} "</p>
                <p><span>Lifespan: </span> {minLifespan} - {maxLifespan} years</p>
            </div>
                <div className={styles.temperaments}>
                {temperament.map((temperament) => {
                return <p className={styles.temperament}> #{temperament} </p>;
              })}
            </div>
        </div>
    )
}

export default Preview
