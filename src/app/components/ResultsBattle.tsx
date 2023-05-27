import { getBattles, getTokens } from "../api/battles.api"
import { useEffect, useState } from "react"
import OneResultBattle from "./OneResultBattle"
import { getToken } from "../api/battles.api"

export default function ResultsBattle() {
  const tokenLocal = getToken()
  const [battles, setBattles] = useState([])
  const [token, setToken] = useState([])
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(6)
  const user = tokenLocal == undefined ? 3 : token?.filter((item:any) => item.key === tokenLocal).map((x:any) => x.user)[0]

  useEffect(() => {

    const loadBattles = async () => {
      const res = await getBattles()
      setBattles(res.data)

      const resToken = await getTokens()
      setToken(resToken.data)
    }
    loadBattles()
  }, [])

  const prevClick = () => {
    if (start == 0) return
    setStart(start - 6)
    setEnd(end - 6)
  }
  
  const nextClick = () => {

    if (end >= battles.filter((battle:any) => battle.judge.id === user).length) return
    setStart(start + 6)
    setEnd(end + 6)
  }

  return (
    <article className="RESULTADO-BATALLAS rounded-lg basis-1/2 bg-white px-5 pt-5">
      <div className="mb-6 flex flex-col items-center justify-between rounded-md bg-violet-200 px-5 py-2">
        <h3 className="text-xl font-semibold text-violet-700">Últimas Batallas Votadas</h3>
        <p className="text-xs">* Ganador por replica</p>
      </div>

      {battles.filter((battle:any) => battle.judge.id === user).map((battle: any) => <OneResultBattle key={battle.id}
        competition={battle.competition.name}
        freestyler1={battle.freestyler_1.aka}
        freestyler2={battle.freestyler_2.aka}
        score1={battle.score_freestyler_1}
        score2={battle.score_freestyler_2}
        winner_replica={battle.winner_replica.aka}

      />).slice(start, end)}

      <div className=" flex justify-between px-5 py-2 my-3 text-violet-700 font-semibold">
        <button onClick={prevClick}>Prev</button>
        <button onClick={nextClick}>Next</button>
      </div>
    </article>
  )
}
