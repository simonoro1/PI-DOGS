import React from "react";
import styles from "./dog.module.css";
import Detail from "../Detail/Detail";
import "./details.css";
import { useDispatch } from "react-redux";
import { fetchDetail } from "../../actions/actions";

function Dog(props) {
  const dispatch = useDispatch()
  let {name, img, temperament, id} = props;
  let temperaments = temperament.split(", ").slice(0, 5);

  const dispatchScroll = () => {
    dispatch(fetchDetail(id))
    window.scrollTo({top: 0, behavior:"smooth"})
  }
  return (
    <div className={styles.dog}>
      <details>
        <summary>
          <div className={styles.imgContainer} onClick={dispatchScroll}>
            <img src={img} alt="" className={styles.img} />
            {/* <span className={styles.span}>Learn More !</span> */}
          </div>
          <div class="details-modal-overlay"></div>
        </summary>
        <Detail/>
     </details>
          <div className={styles.description}>
            <div className={styles.title}>
              <h2>{name}</h2>
            </div>
            <div className={styles.temperaments}>
              {temperaments.map((temperament) => {
                return <p className={styles.temperament}>#{temperament}</p>;
              })}
            </div>
          </div>
    </div>
  );
}

export default Dog;
