// import ListItem from '../listItem/ListItem'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import ListItem from '../listItem/ListItem'
import { useRef, useState } from 'react'
import './list.scss'

const List = () => {
    const [slideNumber, setSlideNumber] = useState(0)
    const listref = useRef()

    const handleClick = (direction) => {
        let distance = listref.current.getBoundingClientRect().x - 50
        if(direction === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1)
            listref.current.style.transform = `translateX(${230 + distance}px)`
        }
        if(direction === 'right' && slideNumber < 5 ) {
            setSlideNumber(slideNumber + 1)

            listref.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }
    return (
        <div className="list"> 
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className='sliderArrow left' onClick={() => handleClick("left")}/>
                <div className="container" ref={listref}>
                    {/* <ListItem/> */}
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>      
                </div>
                <ArrowForwardIosOutlined className='sliderArrow right' onClick={() => handleClick("right")}/>
            </div>
        </div>
    )
}

export default List
