import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {orderA, orderZ, orderWeight, getCreated,findTemperament, deleteFilter} from "../../actions/actions";


import styles from './filters.module.css'
import './icons.css'

function Filters() {
    const dispatch = useDispatch()
    // const [update, setUpdate] = useState('')
    const [value, setVlaue] = useState('')
    let page = useSelector(state => state.page)
    let temperaments = useSelector(state => state.temperaments)
    let tempFilter = useSelector(state => state.tempFilter)

    const handleOnchange = (e) => {

          setVlaue(e.target.value)
          let flag = false
          tempFilter.forEach(temperament => {
            if(temperament === e.target.value) {
              flag =  true
              return
            } 
          })
          if(flag) return alert('Ya ha añadido ese temperemento!!')
          if (tempFilter.length > 3)
            alert("Ya ha ingresado demasiados temperamentos");
          else {
              dispatch(findTemperament(e.target.value))
          }
      };

    const handleClick = (e) => {

       dispatch(deleteFilter(e))
      //  setUpdate({})
       
    }
    
    let id = -1;
    return (
        <div className={styles.filters}>
            <div className={styles.filter}>
                <select name="" id="" className={styles.select} value={value}  onChange={handleOnchange}>
                    <option value=''  disabled hidden>Choose here</option>
                    {temperaments.map(temperament => {

                        return <option key={temperament} value={temperament} className={styles.option}>{temperament}</option>
                    }
                    )}
                </select>
                <div className="">
                    <button onClick={(e) => dispatch(getCreated(e))} id='existing' className={styles.create}>Existing</button>
                    <button onClick={(e) => dispatch(getCreated(e))} id='created' className={styles.create}>Created</button>
                </div>
            </div>
            <div className="temperamets">
            <div className={styles.temperaments}>
              {
              tempFilter.map((temperament) => {
                id ++
                return <p className={styles.temperament} key={id} onClick= {handleClick} >#{temperament}</p>;
              })}
            </div>
          </div>
            <div className={styles.order}>
            <i className="fas fa-sort-alpha-down order" onClick= {() => dispatch(orderA(page))}></i>
            <i className="fas fa-sort-alpha-down-alt order" onClick= {() => dispatch(orderZ(page))}></i>
            <i className="fas fa-feather order" onClick= {() => dispatch(orderWeight(page,'light'))}></i>
            <i className="fas fa-weight-hanging order" onClick= {() => dispatch(orderWeight(page, 'heavy'))}></i>
            </div>
        </div>
    )
}

export default Filters
