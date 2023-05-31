import React from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link';

const Blog = () => {
  return  <div className={styles.container}>
    <main className={styles.main}>
      <div className={styles.blogItemh1}/>  
    <div>
        <Link href={'/blogpost/learn javascript'}></Link>
        <h3> Learning Javascript</h3>
            <p>Javascript is programming language used to design logic for the web </p>
           </div>
           <div className='blogItem'>
            <h3> Learning Javascript</h3>
            <p>Javascript is programming language used to design logic for the web </p>
           </div>
           <div className='blogItem'>
            <h3> Learning Javascript</h3>
            <p>Javascript is programming language used to design logic for the web </p>
           </div>
           </main>
          </div>
};
 export default Blog