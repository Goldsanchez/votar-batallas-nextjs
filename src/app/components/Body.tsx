import React from 'react'
import ResultsBattle from './ResultsBattle'
import LeaderBoard from './LeaderBoard'
import SaveBattle from './SaveBattle'
import Footer from './Footer'

export default function Body({isAuth, setIsAuth}:any) {
  return (
    <div className="BODY flex flex-col justify-between gap-5 rounded-lg">
      <SaveBattle isAuth={isAuth} setIsAuth={setIsAuth}/>
      <div className="sm:flex-col flex flex-col gap-5">
        <LeaderBoard />
        <ResultsBattle />
        <Footer />
      </div>
    </div>
  )
}
