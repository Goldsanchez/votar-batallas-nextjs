'use client';

import Body from './components/Body';
import Header from './components/Header'

export default function Home() {

  return (
    <main className="flex flex-row items-center justify-center bg-[#e8ecf1] p-5">
      <div className="flex flex-col gap-4 w-[1200px]"> {/* sm:w-[1200px] */}
        <Header/>
        <Body/>
      </div>
    </main>
  )
}
