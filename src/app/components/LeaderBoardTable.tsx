import React from 'react'
import LeaderBoardTableRow from './LeaderBoardTableRow'

export default function LeaderBoardTable({battles, group}:any) {
  return (
    <table className="mb-10 w-full border-collapse">
    <caption className="w-fit caption-top rounded bg-violet-200 px-3 text-left">
      {group}
    </caption>
    <thead>
      <tr className="h-12">
        <th className="border-b-2 border-violet-700">#</th>
        <th className="border-b-2 border-violet-700">Freestyler</th>
        <th className="border-b-2 border-violet-700">Puntos</th>
        <th className="border-b-2 border-violet-700">PTB</th>
      </tr>
    </thead>
    <tbody>
      <LeaderBoardTableRow battles = {battles} />
    </tbody>
  </table>
  )
}
