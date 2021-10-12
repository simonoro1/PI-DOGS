import React, { useState, useEffect } from "react";
import styles from "./search.module.css";
import doggys from "../../doggys.png"
import search from "../../search.png"
import { useDispatch, useSelector } from "react-redux";
import { fetchDogs, searchDogs } from "../../actions/actions";


function Search() {
  const dispatch = useDispatch()
  let [input, setInput] = useState('')
  // const dogsLoaded = useSelector(state => state.dogs)


  const handleChange = (e) => {
      e.preventDefault()
      setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    if(input=== '') alert('Debe ingresar texto en el campo de busqueda')
    else {
    e.preventDefault()
    dispatch(searchDogs(input))
    setInput('')
    }
  }


  return (
    <div className={styles.container}>
      
      <img src={doggys} alt=""  className={styles.doggys}/>
      <form className={styles.searchBox} onSubmit={handleSubmit}>
        <i class="fas fa-home home" onClick={() => dispatch(fetchDogs())}></i>
        <input type="text" placeholder="By name" className={styles.search} value={input}  onChange={((e) => handleChange(e))}/>
        <img src={search} alt="" className={styles.searchButton}  onClick={handleSubmit}/>
      </form>
    </div>
  );
}

export default Search;
