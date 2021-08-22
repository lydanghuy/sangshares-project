import React from 'react'
import styles from '../PostContainer/CoverTitle/CoverTitle.module.css'

export default function HomeCover(props)  {
    return (
        <div className={styles.articleCover}>
            <div className={styles.coverImageGradient}></div>
            <h1 className={styles.articleCoverTitle}>
                <div className={styles.titleWrapper}>
                    <div className={styles.category}>Photography</div>
                    <div className={styles.title}>In the middle of the night i crawl onto your chest and purr gently to help you sleep</div>
                    <div className={styles.articleCoverSummary}>Lie on your belly and purr when you are asleep eat and than sleep on your face scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food flex claws on the human's belly and purr like a lawnmower</div>
                    <div className={styles.authorText}>
                        <em>
                            <p>
                                Photographs by Sang Tran Phuc
                                <br/>
                                Essay by Sang Tran Phuc
                            </p>
                        </em>
                    </div>
                </div>
            </h1>
        </div>
    )
}
