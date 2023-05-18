'use client'
import axios from "axios"
import { useEffect, useState, useRef } from 'react'
import { getCompetitions, getSeasons, getGroups, getFreestylers, getTokens  } from "../api/battles.api"


export default function createBattle() {

  const [competition, setCompetition] = useState<any[]>([])
  const [season, setSeason] = useState<any[]>([])
  const [group, setGroup] = useState<any[]>([])
  const [freestyler, setFreestyler] = useState<any[]>([])
  const [token, setToken] = useState<any[]>([])

  const tokenLocal = localStorage.getItem('token');

  useEffect(() => {

    const loadBattles = async () =>{

      const resCompetition = await getCompetitions()
      const resSeason = await getSeasons()
      const resGroup = await getGroups()
      const resFreestyler = await getFreestylers()
      const resTokens = await getTokens()

      setCompetition(resCompetition.data)
      setSeason(resSeason.data)
      setGroup(resGroup.data)
      setFreestyler(resFreestyler.data)
      setToken(resTokens.data)

    }

    loadBattles()
    
  }, [])

  const competitionRef:any = useRef()
  const seasonRef:any = useRef()
  const groupRef:any = useRef()
  const freestyler1Ref:any = useRef()
  const freestyler2Ref:any = useRef()
  const score1Ref:any = useRef()
  const score2Ref:any = useRef()
  const winnerReplicaRef:any = useRef()

  type typeData = {
    judge:string,
    competition:string,
    season:string,
    group:string,
    freestyler_1:string,
    freestyler_2:string,
    score_freestyler_1:number,
    score_freestyler_2:number,
    winner_replica:string
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault()

    const data: typeData = {
      "judge": token?.filter((item:any) => item.key === tokenLocal).map(x => x.user)[0],
      "competition": competition?.filter(item => item.name == competitionRef.current.value).map(x => x.id)[0],
      "season": season?.filter(item => item.name == seasonRef.current.value).map(x => x.id)[0],
      "group": group?.filter(item => item.name == groupRef.current.value).map(x => x.id)[0],
      "freestyler_1": freestyler?.filter(item => item.aka == freestyler1Ref.current.value).map(x => x.id)[0],
      "freestyler_2": freestyler?.filter(item => item.aka == freestyler2Ref.current.value).map(x => x.id)[0],
      "score_freestyler_1": score1Ref.current.value,
      "score_freestyler_2": score2Ref.current.value,
      "winner_replica": freestyler?.filter(item => item.aka == winnerReplicaRef.current.value).map(x => x.id)[0]
  }

    axios.post('https://votar-batallas-freestyle-django.onrender.com/api/battles/', data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <article className="CREATE-BATTLE w-full rounded-lg bg-white p-5">
      <form className="create-battle flex flex-col justify-center gap-3">
        <div className="description flex justify-evenly gap-2 border-b border-b-violet-700 pb-2">
          <select ref={competitionRef} value="Hola" className="rounded-sm bg-zinc-200 px-3 py-1 w-full" name="paises" id="paises">
          {competition?.map((item) => <option key={item.id}>{item.name}</option>)}
          </select>
          <select ref={seasonRef} className="rounded-sm bg-zinc-200 px-3 py-1 w-full" name="seasons" id="seasons">
            {season?.map((item) => <option key={item.id}>{item.name}</option>)}
          </select>
          <select autoComplete='on' ref={groupRef} className="rounded-sm bg-zinc-200 px-3 py-1 w-full" name="group" id="group">
          {group?.map((item) => <option key={item.id}>{item.name}</option>)}
          </select>
        </div>
        <div className="result mt-10 flex items-center justify-around">
          <div className="freestyler1 basis-1/3">
            <input ref={freestyler1Ref} className='border w-40 text-center mr-2' type='search' placeholder='Freestyler 1' list="freestyler1" name="freestyler_1" id="freestyler_1"/>
            <datalist className='w-5' id="freestyler1">
              {freestyler?.map((item) => <option key={item.id} value={item.aka} />)}
            </datalist>
          </div>
          <div className="result-battle flex basis-1/3 flex-col items-center">
            <div className="flex items-center justify-center gap-1">
              <input ref={score1Ref} type="text" name="" id="" placeholder="0" className="h-10 w-11 rounded-md border pl-4" />
              <p className="font-semibold">:</p>
              <input ref={score2Ref} type="text" name="" id="" placeholder="0" className="h-10 w-11 rounded-md border pl-4" />
            </div>
          </div>
          <div className="freestyler2 basis-1/3">
          <input ref={freestyler2Ref} className='border w-40 text-center ml-2' type='search' placeholder='Freestyler 2' list="freestyler2" name="freestyler_2" id="freestyler_2"/>
            <datalist className='' id="freestyler2" >
            {freestyler?.map((item) => <option key={item.id} value={item.aka} />)}
            </datalist>
          </div>
        </div>
        <div className="mb-10 flex justify-center">
        <input ref={winnerReplicaRef} rows="3" className='border rounded-md w-40 text-center text-xs mt-1' type='search' placeholder='Ganador Replica' list="winnerReplica" name="winner_replica" id="winner_replica"/>
            <datalist  className='bg-amber-300 max-h-40 overflow-y-scroll' id="winnerReplica">
            {freestyler?.map((item) => <option key={item.id} value={item.aka} />)}
            </datalist>
        </div>
        <button className="rounded-md bg-violet-700 px-4 py-2 text-white" onClick={handleSubmit}>Votar Batalla</button>
      </form>
    </article>
  )
}