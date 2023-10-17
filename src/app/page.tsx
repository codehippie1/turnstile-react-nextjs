'use client';
import Image from 'next/image'
import styles from './page.module.css'

// -------> Import 
import { Turnstile } from '@marsidev/react-turnstile';

const Home = () => {

  const handleSubmit = async () => {
    console.log('submitted!');
  }

  return (
    <div className={styles.pageCenter}>
      <form onSubmit={handleSubmit}>
        <div><input type="text" placeholder="username" /></div>
        <div><input type="password" placeholder="password" /></div>
        <div><button type='submit'>Login</button></div>
        <br />
        <Turnstile siteKey='0x4AAAAAAALvq89KRwrAjqSU' />
      </form>
    </div>
  )
}

export default Home;