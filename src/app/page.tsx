'use client';
import { useState } from 'react';
import styles from './page.module.css'

// -------> Import 
import { Turnstile } from '@marsidev/react-turnstile';

const Home = () => {

  const [canSubmit, setCanSubmit] = useState(false);

  const handleSubmit = async () => {
    console.log('submitted!');
  }

  return (
    <div className={styles.pageCenter}>
      <form onSubmit={handleSubmit}>
        <div><input type="text" placeholder="username" /></div>
        <div><input type="password" placeholder="password" /></div>
        <div><button type='submit' disabled={!canSubmit}>Login</button></div>
        <br />
        {/* <Turnstile siteKey='YOR_SITE_KEY' /> */}
        <Turnstile
          id='turnstile-1'
          siteKey='0x4AAAAAAALvq89KRwrAjqSU'
          onSuccess={() => setCanSubmit(true)}
        />
      </form>
    </div>
  )
}

export default Home;