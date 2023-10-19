'use client';
import { useRef, useState } from 'react';
import styles from './page.module.css'
import { Turnstile, TurnstileInstance } from '@marsidev/react-turnstile'; // <------------- Importing Turnstile component

const Home = () => {

  const [canSubmit, setCanSubmit] = useState(false); // <------------- State to enable/disable submit button. We will rely on Turnstile to set this state.
  const refTurnstile = useRef<TurnstileInstance>(null); // <------------- Ref to Turnstile component. We will use this to reset Turnstile after each submit.

  const handleSubmit = async () => {
    refTurnstile.current?.reset(); // <------------- After each submit, recycling turnstile for next usage.
    console.log('submitted!');
  }

  return (
    <div className={styles.pageCenter}>
      <form onSubmit={handleSubmit}>
        <div><input type="text" placeholder="username" /></div>
        <div><input type="password" placeholder="password" /></div>
        <div><button type='submit' disabled={!canSubmit}>Login</button></div>
        <br />
        <Turnstile
          id='turnstile-1'
          ref={refTurnstile}
          siteKey='0x4AAAAAAALvq89KRwrAjqSU'
          onSuccess={() => setCanSubmit(true)}
        />
        {/* <Turnstile siteKey='1x00000000000000000000AA'
          id='turnstile-2'
          options={{
            theme: 'dark',
            size: 'compact',
            language: 'fr',
          }}
        /> */}
      </form>
    </div>
  )
}

export default Home;