import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./createForm.module.css";
import hug from "../../hug.jpg";

import Preview from "../Preview/Preview";

function CreateForm() {
  const temperaments = useSelector((state) => state.temperaments);
  const [dog, setDog] = useState({
    name: "",
    minWeight: "",
    maxWeight: "",
    minHeight: "",
    maxHeight: "",
    minLifespan: "",
    maxLifespan: "",
    temperament: [],
    url: "",
  });

  const handleOnchange = (e) => {
    e.preventDefault()
    let prop = e.target.id;
    if (prop === "temperament") {
      let flag = false
      dog.temperament.forEach(temperament => {
        if(temperament === e.target.value) {
          flag =  true
          return
        }
      })
      if(flag) return alert('Ya ha añadido ese temperemento!!')
      if (dog.temperament.length > 6)
        alert("Ya ha ingresado demasiados temperamentos");
      else {
        setDog({ ...dog, [prop]: dog.temperament.concat(e.target.value) });
      }
    } else {
      setDog({ ...dog, [prop]: e.target.value });
    }
  };

  let id = -1

  const handleClick = (e) => {
      dog.temperament.splice(e.target.id,1)
      setDog({ ...dog, temperament: dog.temperament});

  }

  const postData = async (data) => {
    console.log(data)
    await fetch('/dogs', {
      method : 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  const handleOnSubmit = async (e) => {
    // e.preventDefault()
    postData(dog)
    .then(data => {console.log(data)})
    alert('Dog created successfully!!🐶')
  }
  // action="/dogs" enctype="application/x-www-form-urlencoded" method="post"
  return (
    <div className={styles.container}>
      <div className={styles.createContainer}>
        <form className={styles.createForm} onChange={(e) => handleOnchange(e)}  onSubmit={(e) => handleOnSubmit(e)}>
          <div className={styles.title}>
            <img src={hug} alt="" />
         </div>
          <div className={styles.weightContainer}>
            <div className={styles.iConteiner}>
              <i className="fas fa-image"></i>
            </div>
            <div className={styles.weight}>
              <input
                type="url"
                id="url"
                placeholder="Image url"
                className={styles.input}
                required
              />
            </div>
          </div>
          <div className={styles.weightContainer}>
            <div className={styles.iConteiner}>
              <i className="fas fa-dog"></i>
            </div>
            <div className={styles.weight}>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className={styles.input}
                required
                maxLength='25'
              />
            </div>
          </div>
          <div className={styles.weightContainer}>
            <div className={styles.iConteiner}>
              <i className="fas fa-weight"></i>
            </div>
            <div className={styles.weight}>
              <input
                type="number"
                id="minWeight"
                placeholder="Min Weight"
                
                className={styles.input}
                required
                min='3'
                max='100'
              />
              <input
                type="number"
                id="maxWeight"
                placeholder="Max Weight"
                className={styles.input}
                required
                min='6'
                max='200'

              />
            </div>
          </div>
          <div className={styles.weightContainer}>
            <div className={styles.iConteiner}>
              <i className="fas fa-ruler-vertical"></i>
            </div>
            <div className={styles.weight}>
              <input
                type="number"
                id="minHeight"
                placeholder="Min Height"
                className={styles.input}
                required
                min='8'
                max='40'

              />
              <input
                type="number"
                id="maxHeight"
                placeholder="Max Height"
                className={styles.input}
                required
                min='10'
                max='50'

              />
            </div>
          </div>
          <div className={styles.weightContainer}>
            <div className={styles.iConteiner}>
              <i className="fas fa-heartbeat"></i>
            </div>
            <div className={styles.weight}>
              <input
                type="number"
                id="minLifespan"
                placeholder="Min Lifespan"
                className={styles.input}
                required
                maxLength='2'
                min='5'
                max='15'
              />
              <input
                type="number"
                id="maxLifespan"
                placeholder="Max Lifespan"
                className={styles.input}
                required
                maxLength='2'
                min='15'
                max='30'
              />
            </div>
          </div>
          <div className={styles.weightContainer}>
            <div className={styles.iConteiner}>
              <i className="fas fa-theater-masks"></i>
            </div>
            <div className={styles.weight}>
              <select
                name=""
                id="temperament"
                className={styles.input}
                required
              >
                {temperaments.map((temperament) => {
                  return <option value={temperament}>{temperament}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="temperamets">
            <div className={styles.temperaments}>
              {
              dog.temperament.map((temperament) => {
                id ++
                return <p className={styles.temperament} id={id} onClick= {handleClick} >  #{temperament}</p>;
              })}
            </div>
          </div>
          <button className={styles.create}>Create!</button>
        </form>
      </div>
      <Preview
        name={dog.name}
        minWeight={dog.minWeight}
        maxWeight={dog.maxWeight}
        minHeight={dog.minHeight}
        maxHeight={dog.maxHeight}
        minLifespan={dog.minLifespan}
        maxLifespan={dog.maxLifespan}
        temperament={dog.temperament}
        img = {dog.url}
      />
    </div>
  );
}

export default CreateForm;
