import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./createForm.module.css";
import profile from "../../images.png";
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
      setDog({ ...dog, ['temperament']: dog.temperament});

  }

  const postData = async (data) => {
    console.log(data)
    const response = await fetch('/dogs', {
      method : 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    postData(dog)
    .then(data => {console.log(data)})
  }
  // action="/dogs" enctype="application/x-www-form-urlencoded" method="post"
  return (
    <div className={styles.container}>
      <div className={styles.createContainer}>
        <form className={styles.createForm} onChange={(e) => handleOnchange(e)}  onSubmit={(e) => handleOnSubmit(e)}>
          <h1>CREATE A NEW DOG</h1>
          {/* <div className={styles.profile}>
          <img src={profile} alt="" />
        </div> */}
          <div className={styles.weightContainer}>
            <div className={styles.iConteiner}>
              <i class="fas fa-image"></i>
            </div>
            <div className={styles.weight}>
              <input
                type="text"
                id="url"
                placeholder="Image url"
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.weightContainer}>
            <div className={styles.iConteiner}>
              <i class="fas fa-dog"></i>
            </div>
            <div className={styles.weight}>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className={styles.input}
                required
              />
            </div>
          </div>
          <div className={styles.weightContainer}>
            <div className={styles.iConteiner}>
              <i class="fas fa-weight"></i>
            </div>
            <div className={styles.weight}>
              <input
                type="text"
                id="minWeight"
                placeholder="Min Weight"
                className={styles.input}
                required
              />
              <input
                type="text"
                id="maxWeight"
                placeholder="Max Weight"
                className={styles.input}
                required
              />
            </div>
          </div>
          <div className={styles.weightContainer}>
            <div className={styles.iConteiner}>
              <i class="fas fa-ruler-vertical"></i>
            </div>
            <div className={styles.weight}>
              <input
                type="text"
                id="minHeight"
                placeholder="Min Height"
                className={styles.input}
                required
              />
              <input
                type="text"
                id="maxHeight"
                placeholder="Max Height"
                className={styles.input}
                required
              />
            </div>
          </div>
          <div className={styles.weightContainer}>
            <div className={styles.iConteiner}>
              <i class="fas fa-heartbeat"></i>
            </div>
            <div className={styles.weight}>
              <input
                type="text"
                id="minLifespan"
                placeholder="Min Lifespan"
                className={styles.input}
                required
              />
              <input
                type="text"
                id="maxLifespan"
                placeholder="Max Lifespan"
                className={styles.input}
                required
              />
            </div>
          </div>
          <div className={styles.weightContainer}>
            <div className={styles.iConteiner}>
              <i class="fas fa-theater-masks"></i>
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
