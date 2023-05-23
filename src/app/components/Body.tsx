import React from 'react'
import ResultsBattle from './ResultsBattle'
import LeaderBoard from './LeaderBoard'
import SaveBattle from './SaveBattle'

export default function Body() {
  return (
    <div className="BODY flex flex-col justify-between gap-5 rounded-lg">
      <SaveBattle/>
      <div className="sm:flex-col flex flex-col gap-5">
        <LeaderBoard />
        <ResultsBattle />
      </div>
    </div>
  )
}
