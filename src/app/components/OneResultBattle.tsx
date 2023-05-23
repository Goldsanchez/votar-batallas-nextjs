import { spawn } from 'child_process'
import React from 'react'

export default function OneResultBattle({competition, freestyler1, freestyler2, score1, score2, winner_replica}:any) {

  return (
    <div className="result flex items-center justify-between border-b-2 border-violet-300 h-[69px]">
    <div className="basis-3/12">
      <p className="">{competition}</p>
    </div>
    <div className="flex basis-9/12 justify-center items-center gap-2">
      <div className="freestyler1 basis-5/12">
        {freestyler1 == winner_replica ? <p className="text-lg font-medium text-right"><span className='text-violet-700'>* </span>{freestyler1}</p> 
                                        : <p className="text-lg font-medium text-right">{freestyler1}</p>}
      </div>
      <div className="result-battle basis-2/12 flex flex-col items-center">
        <div className="flex items-center justify-center gap-1">
          <p className="rounded-md px-3 py-1 bg-violet-200 w-16">{score1}</p>
          <p className="text-lg"> - </p>
          <p className="rounded-md px-3 py-1 bg-violet-200 w-16">{score2}</p>
        </div>
      </div>
      <div className="freestyler2 basis-5/12">
      {freestyler2 == winner_replica ? <p className="text-lg font-medium text-left "><span className='text-violet-700'>* </span>{freestyler2}</p> 
                                        : <p className="text-lg font-medium text-left">{freestyler2}</p>}
      </div>
    </div>
  </div>
  )
}
