import React from 'react'
import LeaderBoardTable from './LeaderBoardTable'
import { useEffect, useState } from "react"
import { getBattles, getCompetitions, getTokens } from "../api/battles.api"
import { getToken } from '../api/battles.api'

export default function LeaderBoard() {

  const [battles, setBattles] = useState([])
  const [competition, setCompetition] = useState([])
  const [token, setToken] = useState([])
  const [filterCompeticion, setFilterCompetition] = useState("FMS España")

  useEffect(() => {

    const loadBattles = async () => {
      const resBattle = await getBattles()
      setBattles(resBattle.data)

      const resCompetition = await getCompetitions()
      setCompetition(resCompetition.data)

      const resToken = await getTokens()
      setToken(resToken.data)
    }

    loadBattles()

  }, [])

  const tokenLocal = getToken()


  const user = token?.filter((item:any) => item.key === tokenLocal).map((x:any) => x.user)[0]

  return (
    <article className="LEADERBOARD flex basis-1/2 flex-col gap-5 rounded-lg bg-white px-5  pt-5">
      <div className="mb-5 flex flex-row items-center justify-around">
        <p className="text-center text-2xl">Tabla de Posiciones</p>
        <select onChange={(e)=>setFilterCompetition(e.target.value)} value={filterCompeticion} className="rounded-sm bg-zinc-200 px-3 py-1 w-44" name="paises" id="paises">
        {competition?.map((item:any) => <option key={item.id}>{item.name}</option>)}
        </select>
      </div>
      <LeaderBoardTable group="Grupo A" battles={battles.filter((match:any) => match.group.name === "A" && match.competition.name === filterCompeticion && match.judge.id === user)} />
      <LeaderBoardTable group="Grupo B" battles={battles.filter((match:any) => match.group.name === "B" && match.competition.name === filterCompeticion && match.judge.id === user)} />
    </article>
  )
}
