import React from 'react'
import { Link } from 'react-router-dom'
import CoverTitle from './CoverTitle/CoverTitle'
import styles from './PostContainer.module.css'
import ShareButton from './ShareButton/ShareButton'
// import image from '../../../images/posts/DSCF0367.jpg'

const PostContainer = () => {
    return (
        <div className={styles.postContainer}>
            <CoverTitle/>
            <div className={styles.containerArticle} itemScope itemType={'http://schema.org/Article'}>
                <div className={styles.articleWrapper}>
                    <div className={styles.articleText}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id obcaecati placeat quibusdam architecto sequi corrupti impedit eaque ut soluta consectetur. Dolores mollitia vero porro vel sed. Explicabo possimus enim cum!
                        </p>
                        <figure className={styles.articlePhotoBlock}>
                            <div className={styles.articlePhotoPlaceholder}>
                                <img src='/images/posts/DSCF0367.jpg' alt="Lorem ipsum dolor sit amet, consectetur adipisicing elit." className={styles.photoLoaded}/>
                            </div>
                            <figcaption className={styles.caption}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id obcaecati placeat quibusdam architecto sequi corrupti impedit eaque ut soluta consectetur. Dolores mollitia vero porro vel sed. Explicabo possimus enim cum!</figcaption>
                        </figure>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id obcaecati placeat quibusdam architecto sequi corrupti impedit eaque ut soluta consectetur. Dolores mollitia vero porro vel sed. Explicabo possimus enim cum!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iure unde delectus voluptatum molestiae, cumque quasi modi ullam illum quam nisi odit autem earum temporibus harum ut alias animi porro?
                        </p>
                        <figure className={styles.articlePhotoBlock}>
                            <div className={styles.articlePhotoPlaceholder}>
                                <img src='/images/posts/DSCF0485.jpg' alt="Lorem ipsum dolor sit amet, consectetur adipisicing elit." className={styles.photoLoaded}/>
                            </div>
                            <figcaption className={styles.caption}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</figcaption>
                        </figure>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id obcaecati placeat quibusdam architecto sequi corrupti impedit eaque ut soluta consectetur. Dolores mollitia vero porro vel sed. Explicabo possimus enim cum!
                        </p>
                        <figure className={styles.articlePhotoBlock}>
                            <div className={styles.articlePhotoPlaceholder}>
                                <img src='/images/posts/DSCF0573.jpg' alt="Lorem ipsum dolor sit amet, consectetur adipisicing elit." className={styles.photoLoaded}/>
                            </div>
                            <figcaption className={styles.caption}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</figcaption>
                        </figure>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id obcaecati placeat quibusdam architecto sequi corrupti impedit eaque ut soluta consectetur. Dolores mollitia vero porro vel sed. Explicabo possimus enim cum!
                        </p>
                        <figure className={styles.articlePhotoBlock}>
                            <div className={styles.articlePhotoPlaceholder}>
                                <img src='/images/posts/DSCF0621.jpg' alt="Lorem ipsum dolor sit amet, consectetur adipisicing elit." className={styles.photoLoaded}/>
                            </div>
                            <figcaption className={styles.caption}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</figcaption>
                        </figure>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id obcaecati placeat quibusdam architecto sequi corrupti impedit eaque ut soluta consectetur. Dolores mollitia vero porro vel sed. Explicabo possimus enim cum!
                        </p>
                        <figure className={styles.articlePhotoBlock}>
                            <div className={styles.articlePhotoPlaceholder}>
                                <img src='/images/posts/DSCF0639.jpg' alt="Lorem ipsum dolor sit amet, consectetur adipisicing elit." className={styles.photoLoaded}/>
                            </div>
                            <figcaption className={styles.caption}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</figcaption>
                        </figure>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id obcaecati placeat quibusdam architecto sequi corrupti impedit eaque ut soluta consectetur. Dolores mollitia vero porro vel sed. Explicabo possimus enim cum!
                        </p>
                        <figure className={styles.articlePhotoBlock}>
                            <div className={styles.articlePhotoPlaceholder}>
                                <img src='/images/posts/DSCF0650.jpg' alt="Lorem ipsum dolor sit amet, consectetur adipisicing elit." className={styles.photoLoaded}/>
                            </div>
                            <figcaption className={styles.caption}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</figcaption>
                        </figure>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id obcaecati placeat quibusdam architecto sequi corrupti impedit eaque ut soluta consectetur. Dolores mollitia vero porro vel sed. Explicabo possimus enim cum!
                        </p>
                    </div>
                </div>
                <div className={styles.articleWrapper}>
                    <div className={styles.authorContainer}>
                        <div className={styles.authorSocial}>
                            <Link target="_blank" to="/about">
                                <img src='/images/avatar/sss-avatar.jpg' className={styles.authorAvatar} alt="SangTranPhucavatar"/>
                            </Link>
                            <h2 className={styles.authorName}>
                                <Link target="_blank" to="/about">
                                    Sang Tran Phuc
                                </Link>
                            </h2>
                            <div className={styles.viewProfile}>
                                <Link target="_blank" to="/about">
                                    View Profile
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ShareButton/>
        </div>
    )
}

export default PostContainer
