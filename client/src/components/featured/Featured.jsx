import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import "./featured.scss"

const Featured = ({type}) => {
    return (
        <div className='featured'>
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="">Adevnture</option>
                        <option value="">Comedy</option>
                        <option value="">Crime</option>
                        <option value="">Fantasy</option>
                        <option value="">Historical</option>
                        <option value="">Horror</option>
                        <option value="">Romance</option>
                        <option value="">Drama</option>
                        <option value="">Documentary</option>
                        <option value="">Animation</option>
                    </select>
                </div>
            )}
            <img src="https://images.pexels.com/photos/8717532/pexels-photo-8717532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            <div className="info">
                <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" alt="" />
                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure voluptates excepturi. Qui excepturi nulla hic similique tenetur, voluptas molestias quaerat. Distinctio vitae dolorem ea recusandae, incidunt nihil! Ea, deserunt?
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
