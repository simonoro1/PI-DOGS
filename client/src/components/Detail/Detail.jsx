import React  from 'react'
import { useSelector } from 'react-redux'
import './detail.css'

function Detail() {
    
    const dog = useSelector(state => state.detailDog[0])
    return (
        dog ?
        <div className="details-modal">
        <div className="details-modal-close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
              fill="black"
              />
          </svg>
        </div>
        <div className="details-modal-content">
          <div className="imgContainerDetail">
            <img src={dog.image.url} alt="" className="imgDetail"/>
          </div>
          <div className="border">
            <div className="details-modal-title">
              <h1>{dog.name}</h1>
            </div>
            {/* <div className="box">
              <h3>Type</h3>
              <p className="p breed">{dog.breed_group}</p>
            </div> */}
            <div className="box">
              <h3>Weight</h3>
              <p className="p weight">{dog.weight.imperial} lb</p>
            </div>
            <div className="box">
              <h3>Height</h3>
              <p className="p height">{dog.height.imperial}"</p>
            </div>
            {/* <div className="box">
              <h3>Bred For</h3>
              <p className="p bred">{dog.bred_for}</p>
            </div> */}
            <div className="box">
              <h3>Life Span</h3>
              <p className="p lifeSpan">{dog.life_span}</p>
            </div>
            <div className="box">
              <h3>Temperament</h3>
              <p className="p temperament">{dog.temperament}</p>
            </div>
          </div>
        </div>
      </div>
      : <p> </p>
    )
}

export default Detail
