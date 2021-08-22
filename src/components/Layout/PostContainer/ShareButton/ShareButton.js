import React, { useState } from 'react'
import styles from './ShareButton.module.css'


const ShareButton = (props) => {
    const [visible, setVisible] = useState(false);
    const changeVisible = () => {
        if(window.scrollY >= 720){
            setVisible(true);
        } else {
            setVisible(false);
        }
    }
    window.addEventListener('scroll', changeVisible)
    

    function fbShare() {
        let postUrl = encodeURI(document.location.href);
        // let postTitle = encodeURI('In the middle of the night i crawl onto your chest and purr gently to help you sleep');
        const fbButton = document.querySelector('#fbBtn');
        fbButton.setAttribute('href', `https://www.facebook.com/sharer.php?u=${postUrl}`);
    }
    function twShare() {
        let postUrl = encodeURI(document.location.href);
        let postTitle = encodeURI('In the middle of the night i crawl onto your chest and purr gently to help you sleep');
        const twButton = document.querySelector('#twBtn');
        twButton.setAttribute('href', `https://twitter.com/share?url=${postUrl}&text=${postTitle}`);
    }
    function mailShare() {
        let postUrl = encodeURI(document.location.href);
        let postTitle = encodeURI('In the middle of the night i crawl onto your chest and purr gently to help you sleep');
        const mailButton = document.querySelector('#mailBtn');
        mailButton.setAttribute('href', `'mailto:?subject=' . ${postTitle} . '&body=Check out this site: '. ${postUrl} .'" title="Share by Email'`);
    }
    
    return (
        <div className={`${styles.shareButtonContainer} ${visible?styles.visible:''}`}>
            <a className={styles.fbButton} href=' ' id="fbBtn" onClick={fbShare} target="_blank">
                <i className="fab fa-facebook-f"></i>
            </a>
            <div className={`${styles.quotes} ${styles.fbQuotes}`}>Share</div>
            <a className={styles.twButton} href=' ' id="twBtn" onClick={twShare} target="_blank">
                <i className="fab fa-twitter"></i>
            </a>
            <div className={`${styles.quotes} ${styles.twQuotes}`}>Tweet</div>
            <a className={styles.mailButton} href=' ' id="mailBtn" onClick={mailShare} target="_blank">
                <i className="fa fa-envelope"></i>
            </a>
            <div className={`${styles.quotes} ${styles.mailQuotes}`}>Mail</div>
        </div>
    )
}

export default ShareButton
