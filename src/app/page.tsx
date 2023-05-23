'use client';

import Body from './components/Body';
import Header from './components/Header'
import { useEffect, useState } from 'react';

export default function Home() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setIsAuth(true);
    }
  }, [isAuth]);

  return (
    <main className="flex flex-row items-center justify-center bg-[#e8ecf1] p-5">
      <div className="flex flex-col gap-4 w-[375px sm:w-[850px]"> {/* sm:w-[1200px] */}
        <Header isAuth={isAuth} setIsAuth={setIsAuth}/>
        <Body   isAuth={isAuth} setIsAuth={setIsAuth}/>
      </div>
    </main>
  )
}
