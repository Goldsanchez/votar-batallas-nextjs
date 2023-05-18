import React from 'react'
import ResultsBattle from './ResultsBattle'
import LeaderBoard from './LeaderBoard'
import SaveBattle from './SaveBattle'

export default function Body() {
  return (
    <div className="BODY flex flex-col justify-between gap-5 rounded-lg">
      <SaveBattle/>
      <div className="flex flex-row gap-5">
        <ResultsBattle />
        <LeaderBoard />
      </div>
    </div>
  )
}
