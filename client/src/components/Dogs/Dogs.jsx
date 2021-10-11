import React, { useState } from "react";
import Dog from "../Dog/Dog";
import styles from "./dogs.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { changePage, backPage, orderA, orderZ, orderWeight } from "../../actions/actions";
import './pagination.css'
import loading from '../../Eclipse-1s-200px.gif';
 import Filters from "../Filters/Filters";
function Dogs() {
  const dispatch = useDispatch()
  let page = useSelector(state => state.page)
  let dogss = useSelector(state => state.dogs)
  let temperaments = useSelector(state => state.temperaments)
  const dogs = useSelector(state => state.dogsLoaded)
  const loaded = useSelector(state => state.loaded)
  
  const pages = Math.ceil(dogss.length / 8)

  return (
    <div className={styles.dogs}>
      <Filters/>
      <div className={styles.container}>
        {/* <div className={styles.filters}>
            <div className={styles.filter}>
              <select name="" id="">
                  {temperaments.map(temperament => {

                    return <option>{temperament}</option>
                  }
                )}
              </select>
            </div>
            <div className={styles.order}>
              <i class="fas fa-sort-alpha-down order" onClick= {() => dispatch(orderA(page))}></i>
              <i class="fas fa-sort-alpha-down-alt order" onClick= {() => dispatch(orderZ(page))}></i>
              <i class="fas fa-feather order" onClick= {() => dispatch(orderWeight(page,'light'))}></i>
              <i class="fas fa-weight-hanging order" onClick= {() => dispatch(orderWeight(page, 'heavy'))}></i>
            </div>
        </div> */}
        {loaded ? 
        dogs.map(dog => {
          return <Dog name={dog.name} temperament={dog.temperament} weight={dog.weight.imperial} img={dog.image.url} id={dog.id}/>
        }) : <div className="loading"><img src={loading} alt="" /></div>
        }
 
      </div>
      <div className="pagination">
        <i class={`fas fa-angle-double-left ${page === 1 ? 'hide' : '' }`} onClick={() => dispatch(backPage(2))}></i>
        <i class={`fas fa-angle-left ${page === 1 ? 'hide' : '' }`} onClick={() => dispatch(backPage(page))}></i>
        <p className={`page ${page === 1 ? 'hidepage': ''}`} onClick={() => dispatch(backPage(page))}  >{page-1}</p>
        <p className="page actual">{page}</p>
        <p className={`page ${page === pages ? 'hidepage': ''}`} onClick={() => dispatch(changePage(page))}>{page + 1}</p>
        <i class={`fas fa-angle-right ${page === pages ? 'hide' : '' }`} onClick={() => dispatch(changePage(page))}></i>
        <i class={`fas fa-angle-double-right ${page === pages ? 'hide' : '' }`} onClick={() => dispatch(changePage(21))}></i>

      </div>
    </div>
  );
}

export default Dogs;
