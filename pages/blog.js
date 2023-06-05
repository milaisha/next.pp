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
            <p>Javascript is programming language used to design logic for the web
            create dynamically updating content,Portfolio creation, animate images,Algorithm practice 
            and pretty much everything else                 
             </p>
           </div>
           <div className='blogItem'>
            <h3> How does Javascript work?</h3>
            <p>Javascript is viewed as a client-sided scripting language ,
              which means that it works on the client's program and doesn't
               work on an external device.JavaScript additionally doesn't need anything be downloaded
                to the client's gadget ,as current programs have the expected programming coordinated into them.
               This makes JavaScript significantly more easy to understand  some other languages than  can be </p>
           </div>
           <div className='blogItem'>
            <h3> Why Javascript?</h3>
            <p>Perhaps the most remarkable thing about JavaScript capability is that it incorporates every
               one of the highlights of a programming language implanted in your internet browser .
               not at all like other programming languages,where you need to download the language in your machine and establish an environment 
              ,the JS framework doesn't  require that </p>
           </div>
           </main>
          </div>
};
 export default Blog