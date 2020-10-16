import React from 'react';
import { Link } from 'react-router-dom'
import styles from './SplashPage.module.css'

function SplashPage(props) {
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>The Sweat Aesthetic</h1>
            <h1 className={styles.about}>Athletic apparel that makes you look awesome while you sweat. Because when you feel good about what you're wearing, fitness truly becomes a lifestyle worth sticking with.</h1>
            <Link to='/collections'>
                <button className={styles.button}>Shop Now</button>
            </Link>
        </div>
    )
}

export default SplashPage;