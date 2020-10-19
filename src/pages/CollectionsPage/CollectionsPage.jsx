import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CollectionsPage.module.css'



function CollectionsPage(props) {
    return (
        <div className={styles.gridparent}>
            <h1 className={styles.title}>Collections</h1>
            <div className={styles.card}>
                <h2>Women's Tri Tops</h2>
                <Link to="/collections/womens-tri-tops">
                    <img className={styles.topimg} src="https://cdn.shopify.com/s/files/1/0077/4874/7341/products/the-sweat-aesthetic-triathlon-short-sleeve-top-women-s-triathlon-top-battle-paint-extra-small-11156133314637_540x.jpg?v=1559746604" alt="product"/>
                </Link>
            </div>
            <div className={styles.card}>
                <h2>Men's Tri Tops</h2>
                <Link to="/collections/mens-tri-tops">
                    <img className={styles.topimg} src="https://cdn.shopify.com/s/files/1/0077/4874/7341/products/the-sweat-aesthetic-triathlon-short-sleeve-top-men-s-triathlon-top-coconuts-extra-small-10983418757197_540x.jpg?v=1559745581" alt="product"/>
                </Link>
            </div>
            <div className={styles.card}>
                <h2>Women's Tri Shorts</h2>
                <Link to="/collections/womens-tri-shorts">
                    <img className={styles.shortimg} src="https://cdn.shopify.com/s/files/1/0077/4874/7341/products/the-sweat-aesthetic-triathlon-short-women-s-triathlon-short-battle-paint-extra-small-11156141867085_720x.jpg?v=1559746095" alt="product"/>
                </Link>
            </div>
            <div className={styles.card}>
                <h2>Men's Tri Shorts</h2>
                <Link to="/collections/mens-tri-shorts">
                    <img className={styles.shortimg} src="https://cdn.shopify.com/s/files/1/0077/4874/7341/products/the-sweat-aesthetic-triathlon-short-men-s-triathlon-short-coconuts-extra-small-10983660716109_720x.jpg?v=1559745113" alt="product"/>
                </Link>
            </div>
        </div>
    )
}

export default CollectionsPage;