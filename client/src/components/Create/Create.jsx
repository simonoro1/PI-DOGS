import React from 'react'
import CreateForm from '../CreateForm/CreateForm'
import Navbar from '../Navbar/Navbar'
import Preview from '../Preview/Preview'
import styles from './create.module.css'

function Create() {
    return (
        <div>
            <Navbar/>
            <div className={styles.container}>
                <CreateForm/>   
                {/* <Preview/>          */}
            </div>
        </div>
    )
}

export default Create
