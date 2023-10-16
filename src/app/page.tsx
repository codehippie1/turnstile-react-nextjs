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
    <main className={styles.main} style={{backgroundColor: 'white'}}>
      <div className={styles.center} style={{marginTop: '300px'}}>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button type='submit'>Login</button>
          <br />
          <Turnstile siteKey='0x4AAAAAAALvq89KRwrAjqSU' />
        </form>
      </div>
    </main>
  )
}
export default Home;
