import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
   
    <style jsx>
       {`
        .mySpan{
          color : red;
        }
        h3{
          padding: 10px;
        }
        p{
          padding: 10px;
        }
      }
      h2{
        padding: 10px;
         }
    }
    h1{
      padding: 10px;
    }
       `}
    </style>
      <Head>
        <title> next.pp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.mainnav}>
        <ul>
            <Link href='/'><li>Home</li></Link>
            <Link href='/about'><li>About</li></Link>
            <Link href='/blog'><li>Blog</li></Link>
            <Link href='/contact'><li>Contact</li></Link>
                  </ul>
                  
      </nav>
           <main className={styles.main}>
           <div className={styles.description}/>
           <mySpan className= 'mySpan'>NExT.PROJCT</mySpan>
        <div className='imagewrap'>
        <img className='myimg' src='/homeimg.jpeg' width={238} height={174}></img>
        </div>
           <h1> 
              My first Next.js Project           
                   </h1>
          <div>
           <div className='blogs'></div>
           <h2>Trial Blogs</h2>
           <div className='blogItem'> 
            <h3> Learning Javascript</h3>
           </div>
           <div className='blogItem'>
            <h3>  How does Javascript work?</h3>
           </div>
           <div className='blogItem'>
            <h3>Why Javascript?</h3>
           </div>
          
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
           
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            
          </a>
        </div>
      </main>
    </>
  )
}
