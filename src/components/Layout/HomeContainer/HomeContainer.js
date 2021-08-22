import React from 'react'
import styles from './HomeContainer.module.css'
import HomeCover from './HomeCover'

export default function HomeContainer () {
    return (
        <div className={styles.homeContainer}>
            <HomeCover/>
        </div>
    )
}


