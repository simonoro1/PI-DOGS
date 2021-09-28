import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import React from 'react'
import './listItem.scss'

function ListItem() {
    return (
        <div className="listItem">
            
            <img src="https://moviehdapkapp.com/wp-content/uploads/2017/12/Dunkirk-Movie.jpg" alt="" />
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow/>
                    <Add/>
                    <ThumbUpAltOutlined/>
                    <ThumbDownAltOutlined/>
                </div>
                <div className="itemInfoTop">
                    <span>1 hour 14 mins</span>
                    <span className='limit'> + 16 </span>
                    <span>2010</span>

                </div>
            </div>
        </div>
    )
}

export default ListItem
