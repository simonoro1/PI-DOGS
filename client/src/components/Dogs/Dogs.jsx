import React, { useState } from "react";
import Dog from "../Dog/Dog";
import styles from "./dogs.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { changePage, backPage } from "../../actions/actions";
import './pagination.css'
import loading from '../../Eclipse-1s-200px.gif';


function Dogs() {
  const dispatch = useDispatch()
  let page = useSelector(state => state.page)
  const dogs = useSelector(state => state.dogsLoaded)
  const loaded = useSelector(state => state.loaded)



  return (
    <div className={styles.dogs}>
        <div className={styles.filters}>
            <div className={styles.filter}></div>
            <div className={styles.order}>
              <i class="fas fa-sort-alpha-down order"></i>
              <i class="fas fa-sort-alpha-down-alt order"></i>
              <i class="fas fa-feather order"></i>
              <i class="fas fa-weight-hanging order"></i>
            </div>
        </div>
      <div className={styles.container}>
 
        {loaded ? 
        dogs.map(dog => {
          return <Dog name={dog.name} temperament={dog.temperament} img={dog.image.url} id={dog.id}/>
        }) : <div className="loading"><img src={loading} alt="" /></div>
        }
 
      </div>
      <div className="pagination">
        <i class={`fas fa-chevron-left ${page === 1 ? 'hide' : '' }`} onClick={() => dispatch(backPage(page))}></i>
        <p className={`page ${page ===1 ? 'hidepage': ''}`} onClick={() => dispatch(backPage(page))}  >{page-1}</p>
        <p className="page actual">{page}</p>
        <p className={`page ${page ===22 ? 'hidepage': ''}`} onClick={() => dispatch(changePage(page))}>{page + 1}</p>
        <i class={`fas fa-chevron-right ${page === 22 ? 'hide' : '' }`} onClick={() => dispatch(changePage(page))}></i>
      </div>
    </div>
  );
}

export default Dogs;
