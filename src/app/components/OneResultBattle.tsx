import { spawn } from 'child_process'
import React from 'react'

export default function OneResultBattle({competition, freestyler1, freestyler2, score1, score2, winner_replica}:any) {

  return (
    <div className="result flex items-center justify-between border-b-2 border-violet-300 h-[69px]">
    <div className="basis-1/12 sm:basis-3/12">
      <p className="sm:hidden text-xs">{competition.slice(4,7)}</p>
      <p className="hidden sm:block">{competition}</p>
    </div>
    <div className="flex basis-11/12 sm:basis-9/12 justify-center items-center gap-2">
      <div className="freestyler1 basis-5/12">
        {freestyler1 == winner_replica ? <p className="font-medium text-right text-xs sm:text-base"><span className='text-violet-700'>* </span>{freestyler1}</p> 
                                        : <p className="font-medium text-right text-xs sm:text-base">{freestyler1}</p>}
      </div>
      <div className="result-battle basis-2/12 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-1">
          <p className="rounded-md px-3 py-1 bg-violet-200 w-16 text-sm text-center">{score1}</p>
          <p className="text-lg"> - </p>
          <p className="rounded-md px-3 py-1 bg-violet-200 w-16 text-sm text-center">{score2}</p>
        </div>
      </div>
      <div className="freestyler2 basis-5/12">
      {freestyler2 == winner_replica ? <p className="font-medium text-left text-xs sm:text-base"><span className='text-violet-700'>* </span>{freestyler2}</p> 
                                        : <p className="font-medium text-left text-xs sm:text-base">{freestyler2}</p>}
      </div>
    </div>
  </div>
  )
}
