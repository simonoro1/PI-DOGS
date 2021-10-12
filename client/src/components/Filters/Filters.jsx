import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {orderA, orderZ, orderWeight, getCreated,findTemperament, deleteFilter} from "../../actions/actions";


import styles from './filters.module.css'
import './icons.css'

function Filters() {
    const dispatch = useDispatch()
    const [update, setUpdate] = useState('')
    let page = useSelector(state => state.page)
    let temperaments = useSelector(state => state.temperaments)
    let tempFilter = useSelector(state => state.tempFilter)

    const handleOnchange = (e) => {
          if (tempFilter.length > 3)
            alert("Ya ha ingresado demasiados temperamentos");
          else {
              dispatch(findTemperament(e.target.value))
          }
      };

    const handleClick = (e) => {

       dispatch(deleteFilter(e))
        setUpdate('Updated')
    }
    
    let id = -1;
    return (
        <div className={styles.filters}>
            <div className={styles.filter}>
                <select name="" id="" className={styles.select} onChange={handleOnchange}>
                    <option value='' selected disabled hidden>Choose here</option>
                    {temperaments.map(temperament => {

                        return <option value={temperament} className={styles.option}>{temperament}</option>
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
                return <p className={styles.temperament} id={id} onClick= {handleClick} >#{temperament}</p>;
              })}
            </div>
          </div>
            <div className={styles.order}>
            <i class="fas fa-sort-alpha-down order" onClick= {() => dispatch(orderA(page))}></i>
            <i class="fas fa-sort-alpha-down-alt order" onClick= {() => dispatch(orderZ(page))}></i>
            <i class="fas fa-feather order" onClick= {() => dispatch(orderWeight(page,'light'))}></i>
            <i class="fas fa-weight-hanging order" onClick= {() => dispatch(orderWeight(page, 'heavy'))}></i>
            </div>
        </div>
    )
}

export default Filters
