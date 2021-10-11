import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {orderA, orderZ, orderWeight } from "../../actions/actions";


import styles from './filters.module.css'
import './icons.css'

function Filters() {
    const dispatch = useDispatch()
    let page = useSelector(state => state.page)
    let temperaments = useSelector(state => state.temperaments)
    return (
        <div className={styles.filters}>
            <div className={styles.filter}>
            <select name="" id="" className={styles.select}>
                <option value="" selected disabled hidden>Choose here</option>
                {temperaments.map(temperament => {

                    return <option className={styles.option}>{temperament}</option>
                }
                )}
            </select>
            <select className={styles.select}>
                <option value="" selected disabled hidden>Choose here</option>
                <option value="">Existing</option>
                <option value="">Created</option>
            </select>
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
