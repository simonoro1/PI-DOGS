import React from "react";
import styles from "./search.module.css";
import doggys from "../../doggys.png"
import search from "../../search.png"


function Search() {
  return (
    <div className={styles.container}>
      {/* <h2 className={styles.searchTitle}>Find A Dog</h2> */}
      <div className={styles.searchBox}>
        <input type="text" placeholder="By name" className={styles.search} />
        <span >
            {/* <i class="fas fa-search"></i> */}
            <img src={search} alt="" className={styles.searchButton}/>
        </span>
      </div>
      <img src={doggys} alt=""  className={styles.doggys}/>
    </div>
  );
}

export default Search;
