import React from 'react'
import styles from './footer.module.css'
function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
            </div>
            <div className={styles.bottom}>
                <div className="rights">@2021 Simon. All rights reserved</div>
                <div className="doggys"> 
                    <span>
                        16,552,481 dogs created
                    </span> 
                    <i>dog</i>
                 </div>
            </div>
        </div>
    )
}

export default Footer
