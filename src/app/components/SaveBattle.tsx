'use client';
import axios from "axios"
import { useRef, useState, useEffect } from "react";
import { getCompetitions, getSeasons, getGroups, getFreestylers, getTokens } from "../api/battles.api"
import { ICompetition, ISeason, IGroup, IFreestyler, IToken } from "../interfacesApi";
import { PatronType, DeluxeType } from "../typesApi";
import { API_URL } from "../api/battles.api";
import { IncrementalFormat } from "./IncrementalFormat";
import { RandomFormat } from "./RandomFormat";
import { FreeMinutes1Format } from "./FreeMinutes1Format";
import { FreeMinutes2Format } from "./FreeMinutes2Format";
import { DeluxeFormat } from "./DeluxeFormat";
import { ReplicaFormat } from "./ReplicaFormat";
import { GanadorFormat } from "./GanadorFormat";
import { getToken } from "../api/battles.api";

export default function SaveBattle() {

  const [showModal, setShowModal] = useState(false);

  // variables para guardar lso datos del backen backend
  const [competition, setCompetition] = useState<ICompetition[] | undefined>([])
  const [season, setSeason] = useState<ISeason[] | undefined>([])
  const [group, setGroup] = useState<IGroup[] | undefined>([])
  const [freestyler, setFreestyler] = useState<IFreestyler[] | undefined>([])
  const [token, setToken] = useState<IToken[] | undefined>([])

  // Guardar Batalla
  const [formatoTitle, setFormatoTitle] = useState("Incremental")
  const [incrementalFormat, setIncrementalFormat] = useState<boolean>(true)
  const [randomModeFormat, setRandomModeFormat] = useState(false)
  const [freeMinutesFormat1, setFreeMinutesFormat1] = useState(false)
  const [freeMinutesFormat2, setFreeMinutesFormat2] = useState(false)
  const [deluxeFormat, setDeluxeFormat] = useState(false)
  const [ganadorFormat, setGanadorFormat] = useState(false)
  const [replicaFormat, setReplicaFormat] = useState(false)

  const [incrementalObjectMC1, setIncrementalObjectMC1] = useState<PatronType>({
    patron1: 0,
    patron2: 0,
    patron3: 0,
    patron4: 0,
    patron5: 0,
    patron6: 0,
    tecnica: 0,
    flow: 0,
    escena: 0,
  })

  const [incrementalObjectMC2, setIncrementalObjectMC2] = useState<PatronType>({
    patron1: 0,
    patron2: 0,
    patron3: 0,
    patron4: 0,
    patron5: 0,
    patron6: 0,
    tecnica: 0,
    flow: 0,
    escena: 0,
  })

  const [randomObjectMC1, setRandomObjectMC1] = useState<PatronType>({
    patron1: 0,
    patron2: 0,
    patron3: 0,
    patron4: 0,
    patron5: 0,
    patron6: 0,
    tecnica: 0,
    flow: 0,
    escena: 0,
  })

  const [randomObjectMC2, setRandomObjectMC2] = useState<PatronType>({
    patron1: 0,
    patron2: 0,
    patron3: 0,
    patron4: 0,
    patron5: 0,
    patron6: 0,
    tecnica: 0,
    flow: 0,
    escena: 0,
  })

  const [minutoLibre1ObjectMC1, setMinutoLibre1ObjectMC1] = useState<PatronType>({
    patron1: 0,
    patron2: 0,
    patron3: 0,
    patron4: 0,
    patron5: 0,
    patron6: 0,
    tecnica: 0,
    flow: 0,
    escena: 0,
  })

  const [minutoLibre1ObjectMC2, setMinutoLibre1ObjectMC2] = useState<PatronType>({
    patron1: 0,
    patron2: 0,
    patron3: 0,
    patron4: 0,
    patron5: 0,
    patron6: 0,
    tecnica: 0,
    flow: 0,
    escena: 0,
  })

  const [minutoLibre2ObjectMC1, setMinutoLibre2ObjectMC1] = useState<PatronType>({
    patron1: 0,
    patron2: 0,
    patron3: 0,
    patron4: 0,
    patron5: 0,
    patron6: 0,
    tecnica: 0,
    flow: 0,
    escena: 0,
  })

  const [minutoLibre2ObjectMC2, setMinutoLibre2ObjectMC2] = useState<PatronType>({
    patron1: 0,
    patron2: 0,
    patron3: 0,
    patron4: 0,
    patron5: 0,
    patron6: 0,
    tecnica: 0,
    flow: 0,
    escena: 0,
  })

  const [deluxeObjectMC1, setDeluxeObjectMC1] = useState<DeluxeType>({
    acapela1: 0,
    acapela2: 0,
    acapela3: 0,
    patron1: 0,
    patron2: 0,
    patron3: 0,
    patron4: 0,
    patron5: 0,
    patron6: 0,
    tecnica: 0,
    flow: 0,
    escena: 0,
  })

  const [deluxeObjectMC2, setDeluxeObjectMC2] = useState<DeluxeType>({
    acapela1: 0,
    acapela2: 0,
    acapela3: 0,
    patron1: 0,
    patron2: 0,
    patron3: 0,
    patron4: 0,
    patron5: 0,
    patron6: 0,
    tecnica: 0,
    flow: 0,
    escena: 0,
  })

  const [replicaObjectMC1, setReplicaObjectMC1] = useState<PatronType>({
    patron1: 0,
    patron2: 0,
    patron3: 0,
    patron4: 0,
    patron5: 0,
    patron6: 0,
    tecnica: 0,
    flow: 0,
    escena: 0,
  })

  const [replicaObjectMC2, setReplicaObjectMC2] = useState<PatronType>({
    patron1: 0,
    patron2: 0,
    patron3: 0,
    patron4: 0,
    patron5: 0,
    patron6: 0,
    tecnica: 0,
    flow: 0,
    escena: 0,
  })

  const [checkboxValuesMC2, setCheckboxValuesMC2] = useState({
    respuesta1: false,
    respuesta2: false,
    respuesta3: false,
    respuesta4: false,
    respuesta5: false,
    respuesta6: false
  });

  const [checkboxValuesMC1, setCheckboxValuesMC1] = useState({
    respuesta1: false,
    respuesta2: false,
    respuesta3: false,
    respuesta4: false,
    respuesta5: false,
    respuesta6: false
  });


  //Datos para guardar una batalla en el server
  const competitionRef = useRef<any>()
  const seasonRef = useRef<any>()
  const groupRef = useRef<any>()
  const [nameMC1, setNameMC1] = useState("MC1")
  const [nameMC2, setNameMC2] = useState("MC2")
  const [resultadoFinalMC1, setResultadoFinalMC1] = useState(0)
  const [resultadoFinalMC2, setResultadoFinalMC2] = useState(0)

  const tokenLocal = getToken()

  const data = {
    "judge": token?.filter(item => item.key === tokenLocal).map(x => x.user)[0],
    "competition": competition?.filter((item) => item.name == competitionRef.current.value).map(x => x.id)[0],
    "season": season?.filter(item => item.name == seasonRef.current.value).map(x => x.id)[0],
    "group": group?.filter(item => item.name == groupRef.current.value).map(x => x.id)[0],
    "freestyler_1": freestyler?.filter(item => item.aka == nameMC1).map(x => x.id)[0],
    "freestyler_2": freestyler?.filter(item => item.aka == nameMC2).map(x => x.id)[0],
    "score_freestyler_1": resultadoFinalMC1,
    "score_freestyler_2": resultadoFinalMC2,
    "winner_replica": Object.values(replicaObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) || 0 > Object.values(replicaObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) || 0
      ? freestyler?.filter(item => item.aka == nameMC1).map(x => x.id)[0]
      : replicaObjectMC1 < replicaObjectMC2 ? freestyler?.filter(item => item.aka == nameMC2).map(x => x.id)[0] : 13,

    "incremental1MC1": Number(incrementalObjectMC1["patron1"]),
    "incremental2MC1": Number(incrementalObjectMC1["patron2"]),
    "incremental3MC1": Number(incrementalObjectMC1["patron3"]),
    "incremental4MC1": Number(incrementalObjectMC1["patron4"]),
    "incremental5MC1": Number(incrementalObjectMC1["patron5"]),
    "incremental6MC1": Number(incrementalObjectMC1["patron6"]),
    "incrementalTecnicaMC1": Number(incrementalObjectMC1["tecnica"]),
    "incrementalFlowMC1": Number(incrementalObjectMC1["flow"]),
    "incrementalEscenaMC1": Number(incrementalObjectMC1["escena"]),
    "incrementalTotalMC1": Object.values(incrementalObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) || 0,

    "incremental1MC2": Number(incrementalObjectMC2["patron1"]),
    "incremental2MC2": Number(incrementalObjectMC2["patron2"]),
    "incremental3MC2": Number(incrementalObjectMC2["patron3"]),
    "incremental4MC2": Number(incrementalObjectMC2["patron4"]),
    "incremental5MC2": Number(incrementalObjectMC2["patron5"]),
    "incremental6MC2": Number(incrementalObjectMC2["patron6"]),
    "incrementalTecnicaMC2": Number(incrementalObjectMC2["tecnica"]),
    "incrementalFlowMC2": Number(incrementalObjectMC2["flow"]),
    "incrementalEscenaMC2": Number(incrementalObjectMC2["escena"]),
    "incrementalTotalMC2": Object.values(incrementalObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) || 0,

    "random1MC1": Number(randomObjectMC1["patron1"]),
    "random2MC1": Number(randomObjectMC1["patron2"]),
    "random3MC1": Number(randomObjectMC1["patron3"]),
    "random4MC1": Number(randomObjectMC1["patron4"]),
    "random5MC1": Number(randomObjectMC1["patron5"]),
    "random6MC1": Number(randomObjectMC1["patron6"]),
    "randomTecnicaMC1": Number(randomObjectMC1["tecnica"]),
    "randomFlowMC1": Number(randomObjectMC1["flow"]),
    "randomEscenaMC1": Number(randomObjectMC1["escena"]),
    "randomTotalMC1": Object.values(randomObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) || 0,

    "random1MC2": Number(randomObjectMC2["patron1"]),
    "random2MC2": Number(randomObjectMC2["patron2"]),
    "random3MC2": Number(randomObjectMC2["patron3"]),
    "random4MC2": Number(randomObjectMC2["patron4"]),
    "random5MC2": Number(randomObjectMC2["patron5"]),
    "random6MC2": Number(randomObjectMC2["patron6"]),
    "randomTecnicaMC2": Number(randomObjectMC2["tecnica"]),
    "randomFlowMC2": Number(randomObjectMC2["flow"]),
    "randomEscenaMC2": Number(randomObjectMC2["escena"]),
    "randomTotalMC2": Object.values(randomObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) || 0,

    "minuto1IdaMC1": Number(minutoLibre1ObjectMC1["patron1"]),
    "minuto2IdaMC1": Number(minutoLibre1ObjectMC1["patron2"]),
    "minuto3IdaMC1": Number(minutoLibre1ObjectMC1["patron3"]),
    "minuto4IdaMC1": Number(minutoLibre1ObjectMC1["patron4"]),
    "minuto5IdaMC1": Number(minutoLibre1ObjectMC1["patron5"]),
    "minuto6IdaMC1": Number(minutoLibre1ObjectMC1["patron6"]),
    "minutoTecnicaIdaMC1": Number(minutoLibre1ObjectMC1["tecnica"]),
    "minutoFlowIdaMC1": Number(minutoLibre1ObjectMC1["flow"]),
    "minutoEscenaIdaMC1": Number(minutoLibre1ObjectMC1["escena"]),
    "minutoTotalIdaMC1": Object.values(minutoLibre1ObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) || 0,

    "minuto1IdaMC2": Number(minutoLibre1ObjectMC2["patron1"]),
    "minuto2IdaMC2": Number(minutoLibre1ObjectMC2["patron2"]),
    "minuto3IdaMC2": Number(minutoLibre1ObjectMC2["patron3"]),
    "minuto4IdaMC2": Number(minutoLibre1ObjectMC2["patron4"]),
    "minuto5IdaMC2": Number(minutoLibre1ObjectMC2["patron5"]),
    "minuto6IdaMC2": Number(minutoLibre1ObjectMC2["patron6"]),
    "minutoTecnicaIdaMC2": Number(minutoLibre1ObjectMC2["tecnica"]),
    "minutoFlowIdaMC2": Number(minutoLibre1ObjectMC2["flow"]),
    "minutoEscenaIdaMC2": Number(minutoLibre1ObjectMC2["escena"]),
    "minutoRespuesta1MC2": Number(checkboxValuesMC2["respuesta1"]),
    "minutoRespuesta2MC2": Number(checkboxValuesMC2["respuesta2"]),
    "minutoRespuesta3MC2": Number(checkboxValuesMC2["respuesta3"]),
    "minutoRespuesta4MC2": Number(checkboxValuesMC2["respuesta4"]),
    "minutoRespuesta5MC2": Number(checkboxValuesMC2["respuesta5"]),
    "minutoRespuesta6MC2": Number(checkboxValuesMC2["respuesta6"]),
    "minutoTotalIdaMC2": Object.values(minutoLibre1ObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) || 0,

    "minuto1VueltaMC1": Number(minutoLibre2ObjectMC2["patron1"]),
    "minuto2VueltaMC1": Number(minutoLibre2ObjectMC2["patron2"]),
    "minuto3VueltaMC1": Number(minutoLibre2ObjectMC2["patron3"]),
    "minuto4VueltaMC1": Number(minutoLibre2ObjectMC2["patron4"]),
    "minuto5VueltaMC1": Number(minutoLibre2ObjectMC2["patron5"]),
    "minuto6VueltaMC1": Number(minutoLibre2ObjectMC2["patron6"]),
    "minutoTecnicaVueltaMC1": Number(minutoLibre2ObjectMC2["tecnica"]),
    "minutoFlowVueltaMC1": Number(minutoLibre2ObjectMC2["flow"]),
    "minutoEscenaVueltaMC1": Number(minutoLibre2ObjectMC2["escena"]),
    "minutoRespuesta1MC1": Number(checkboxValuesMC1["respuesta1"]),
    "minutoRespuesta2MC1": Number(checkboxValuesMC1["respuesta2"]),
    "minutoRespuesta3MC1": Number(checkboxValuesMC1["respuesta3"]),
    "minutoRespuesta4MC1": Number(checkboxValuesMC1["respuesta4"]),
    "minutoRespuesta5MC1": Number(checkboxValuesMC1["respuesta5"]),
    "minutoRespuesta6MC1": Number(checkboxValuesMC1["respuesta6"]),
    "minutoTotalVueltaMC1": Object.values(minutoLibre2ObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) || 0,

    "minuto1VueltaMC2": Number(minutoLibre2ObjectMC1["patron1"]),
    "minuto2VueltaMC2": Number(minutoLibre2ObjectMC1["patron2"]),
    "minuto3VueltaMC2": Number(minutoLibre2ObjectMC1["patron3"]),
    "minuto4VueltaMC2": Number(minutoLibre2ObjectMC1["patron4"]),
    "minuto5VueltaMC2": Number(minutoLibre2ObjectMC1["patron5"]),
    "minuto6VueltaMC2": Number(minutoLibre2ObjectMC1["patron6"]),
    "minutoTecnicaVueltaMC2": Number(minutoLibre2ObjectMC1["tecnica"]),
    "minutoFlowVueltaMC2": Number(minutoLibre2ObjectMC1["flow"]),
    "minutoEscenaVueltaMC2": Number(minutoLibre2ObjectMC1["escena"]),
    "minutoTotalVueltaMC2": Object.values(minutoLibre2ObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) || 0,

    "deluxeEntrada1MC1": Number(deluxeObjectMC1["acapela1"]),
    "deluxeEntrada2MC1": Number(deluxeObjectMC1["acapela2"]),
    "deluxeEntrada3MC1": Number(deluxeObjectMC1["acapela3"]),
    "deluxe1MC1": Number(deluxeObjectMC1["patron1"]),
    "deluxe2MC1": Number(deluxeObjectMC1["patron2"]),
    "deluxe3MC1": Number(deluxeObjectMC1["patron3"]),
    "deluxe4MC1": Number(deluxeObjectMC1["patron4"]),
    "deluxe5MC1": Number(deluxeObjectMC1["patron5"]),
    "deluxe6MC1": Number(deluxeObjectMC1["patron6"]),
    "deluxeTecnicaMC1": Number(deluxeObjectMC1["tecnica"]),
    "deluxeFlowMC1": Number(deluxeObjectMC1["flow"]),
    "deluxeEscenaMC1": Number(deluxeObjectMC1["escena"]),
    "deluxeTotalMC1": Object.values(deluxeObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) || 0,

    "deluxeEntrada1MC2": Number(deluxeObjectMC2["acapela1"]),
    "deluxeEntrada2MC2": Number(deluxeObjectMC2["acapela2"]),
    "deluxeEntrada3MC2": Number(deluxeObjectMC2["acapela3"]),
    "deluxe1MC2": Number(deluxeObjectMC2["patron1"]),
    "deluxe2MC2": Number(deluxeObjectMC2["patron2"]),
    "deluxe3MC2": Number(deluxeObjectMC2["patron3"]),
    "deluxe4MC2": Number(deluxeObjectMC2["patron4"]),
    "deluxe5MC2": Number(deluxeObjectMC2["patron5"]),
    "deluxe6MC2": Number(deluxeObjectMC2["patron6"]),
    "deluxeTecnicaMC2": Number(deluxeObjectMC2["tecnica"]),
    "deluxeFlowMC2": Number(deluxeObjectMC2["flow"]),
    "deluxeEscenaMC2": Number(deluxeObjectMC2["escena"]),
    "deluxeTotalMC2": Object.values(deluxeObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) || 0,

    "replica1MC1": Number(replicaObjectMC1["patron1"]),
    "replica2MC1": Number(replicaObjectMC1["patron2"]),
    "replica3MC1": Number(replicaObjectMC1["patron3"]),
    "replica4MC1": Number(replicaObjectMC1["patron4"]),
    "replica5MC1": Number(replicaObjectMC1["patron5"]),
    "replica6MC1": Number(replicaObjectMC1["patron6"]),
    "replicaTecnicaMC1": Number(replicaObjectMC1["tecnica"]),
    "replicaFlowMC1": Number(replicaObjectMC1["flow"]),
    "replicaEscenaMC1": Number(replicaObjectMC1["escena"]),
    "replicaTotalMC1": Object.values(replicaObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) || 0,

    "replica1MC2": Number(replicaObjectMC2["patron1"]),
    "replica2MC2": Number(replicaObjectMC2["patron2"]),
    "replica3MC2": Number(replicaObjectMC2["patron3"]),
    "replica4MC2": Number(replicaObjectMC2["patron4"]),
    "replica5MC2": Number(replicaObjectMC2["patron5"]),
    "replica6MC2": Number(replicaObjectMC2["patron6"]),
    "replicaTecnicaMC2": Number(replicaObjectMC2["tecnica"]),
    "replicaFlowMC2": Number(replicaObjectMC2["flow"]),
    "replicaEscenaMC2": Number(replicaObjectMC2["escena"]),
    "replicaTotalMC2": Object.values(replicaObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) || 0,
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    setShowModal(true)
  }

  const saveBattle = async (e: any) => {
    e.preventDefault()
    setShowModal(false)

    axios.post(`${API_URL}battles/`, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log(data);
  }

  useEffect(() => { // Datos API

    const loadBattles = async () => {

      const responseCompetition = await getCompetitions()
      const responseSeason = await getSeasons()
      const responseGroup = await getGroups()
      const responseFreestyler = await getFreestylers()
      const responseTokens = await getTokens()

      setCompetition(responseCompetition.data)
      setSeason(responseSeason.data)
      setGroup(responseGroup.data)
      setFreestyler(responseFreestyler.data)
      setToken(responseTokens.data)

    }

    loadBattles()

  }, [])

  useEffect(()=>{
    setResultadoFinalMC1(Object.values(incrementalObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) +
    Object.values(randomObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) +
    Object.values(minutoLibre1ObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) +
    Object.values(minutoLibre2ObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) +
    Object.values(deluxeObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) )
  },[incrementalObjectMC1, randomObjectMC1,minutoLibre1ObjectMC1, minutoLibre2ObjectMC1, deluxeObjectMC1 ])

  useEffect(()=>{
    setResultadoFinalMC2(Object.values(incrementalObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) +
    Object.values(randomObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) +
    Object.values(minutoLibre1ObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) +
    Object.values(minutoLibre2ObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) +
    Object.values(deluxeObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) )
  },[incrementalObjectMC2, randomObjectMC2,minutoLibre1ObjectMC2, minutoLibre2ObjectMC2, deluxeObjectMC2])



  const clickIncremental = () => {
    setFormatoTitle("Incremental")
    setIncrementalFormat(true)
    setRandomModeFormat(false)
    setFreeMinutesFormat1(false)
    setFreeMinutesFormat2(false)
    setDeluxeFormat(false)
    setGanadorFormat(false)
    setReplicaFormat(false)

  }
  const clickRandomMode = () => {
    setFormatoTitle("Random")
    setIncrementalFormat(false)
    setRandomModeFormat(true)
    setFreeMinutesFormat1(false)
    setFreeMinutesFormat2(false)
    setDeluxeFormat(false)
    setGanadorFormat(false)
    setReplicaFormat(false)
    7
  }
  const clickFreeMinutes1 = () => {
    setFormatoTitle("Minutos a sangre 1")
    setIncrementalFormat(false)
    setRandomModeFormat(false)
    setFreeMinutesFormat1(true)
    setFreeMinutesFormat2(false)
    setDeluxeFormat(false)
    setGanadorFormat(false)
    setReplicaFormat(false)
  }
  const clickFreeMinutes2 = () => {
    setFormatoTitle("Minutos a sangre 2")
    setIncrementalFormat(false)
    setRandomModeFormat(false)
    setFreeMinutesFormat1(false)
    setFreeMinutesFormat2(true)
    setDeluxeFormat(false)
    setGanadorFormat(false)
    setReplicaFormat(false)
  }
  const clickDeluxe = () => {
    setFormatoTitle("Deluxe")
    setIncrementalFormat(false)
    setRandomModeFormat(false)
    setFreeMinutesFormat1(false)
    setFreeMinutesFormat2(false)
    setDeluxeFormat(true)
    setGanadorFormat(false)
    setReplicaFormat(false)
  }
  const clickGanador = () => {
    setFormatoTitle("Ganador")
    setIncrementalFormat(false)
    setRandomModeFormat(false)
    setFreeMinutesFormat1(false)
    setFreeMinutesFormat2(false)
    setDeluxeFormat(false)
    setGanadorFormat(true)
    setReplicaFormat(false)
  }
  const clickReplica = () => {

    if (resultadoFinalMC1 == resultadoFinalMC2) {
      setFormatoTitle("Replica")
      setIncrementalFormat(false)
      setRandomModeFormat(false)
      setFreeMinutesFormat1(false)
      setFreeMinutesFormat2(false)
      setDeluxeFormat(false)
      setGanadorFormat(false)
      setReplicaFormat(true)
    }
  }


  const handleIncrementalMC1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e?.target

    setIncrementalObjectMC1((prevData) => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }
  const handleIncrementalMC2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e?.target

    setIncrementalObjectMC2((prevData) => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }

  const handleRandomMC1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e?.target

    setRandomObjectMC1((prevData) => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }
  const handleRandomMC2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e?.target

    setRandomObjectMC2((prevData) => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }

  const handleMinutoLibre1MC1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e?.target
    

    setMinutoLibre1ObjectMC1((prevData) => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }

  const handleCheckboxChangeMC1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckboxValuesMC1({ ...checkboxValuesMC1, [name]: checked });
  };


  const handleCheckboxChangeMC2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckboxValuesMC2({ ...checkboxValuesMC2, [name]: checked });
  };

  const handleMinutoLibre1MC2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e?.target

    console.log(value);
    setMinutoLibre1ObjectMC2((prevData) => {

      return {
        ...prevData,
        [name]: value
      }
    })
  }

  const handleMinutoLibre2MC1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e?.target

    setMinutoLibre2ObjectMC1((prevData) => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }
  const handleMinutoLibre2MC2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e?.target

    setMinutoLibre2ObjectMC2((prevData) => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }

  const handleDeluxeMC1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e?.target

    setDeluxeObjectMC1((prevData) => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }
  const handleDeluxeMC2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e?.target

    setDeluxeObjectMC2((prevData) => {

      return {
        ...prevData,
        [name]: value
      }
    })
  }

  const handleReplicaMC1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e?.target

    setReplicaObjectMC1((prevData) => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }
  const handleReplicaMC2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e?.target

    setReplicaObjectMC2((prevData) => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }


  return (
    <section className="bg-white pb-10 pt-6 flex flex-col gap-10">
      <div className="formato flex flex-col justify-center items-center" >
        <h3 className="text-3xl font-semibold self-start pl-16">{formatoTitle}</h3>
        <IncrementalFormat incrementalObjectMC1 = {incrementalObjectMC1} incrementalFormat = {incrementalFormat} incrementalObjectMC2 = {incrementalObjectMC2} 
        handleIncrementalMC1Change = {handleIncrementalMC1Change} handleIncrementalMC2Change = {handleIncrementalMC2Change} nameMC1 = {nameMC1} nameMC2 = {nameMC2}/>
        
        <RandomFormat randomObjectMC1 = {randomObjectMC1} randomModeFormat = {randomModeFormat} randomObjectMC2 = {randomObjectMC2} 
        handleRandomMC1Change = {handleRandomMC1Change} handleRandomMC2Change = {handleRandomMC2Change} nameMC1 = {nameMC1} nameMC2 = {nameMC2}/>
        
        <FreeMinutes1Format minutoLibre1ObjectMC1 = {minutoLibre1ObjectMC1} freeMinutesFormat1 = {freeMinutesFormat1} minutoLibre1ObjectMC2 = {minutoLibre1ObjectMC2} 
        handleMinutoLibre1MC1Change = {handleMinutoLibre1MC1Change} handleMinutoLibre1MC2Change = {handleMinutoLibre1MC2Change} nameMC1 = {nameMC1} nameMC2 = {nameMC2} checkboxValuesMC2={checkboxValuesMC2} handleCheckboxChangeMC2={handleCheckboxChangeMC2}/>
       
        <FreeMinutes2Format minutoLibre2ObjectMC1 = {minutoLibre2ObjectMC1} freeMinutesFormat2 = {freeMinutesFormat2} minutoLibre2ObjectMC2 = {minutoLibre2ObjectMC2} 
        handleMinutoLibre2MC1Change = {handleMinutoLibre2MC1Change} handleMinutoLibre2MC2Change = {handleMinutoLibre2MC2Change} nameMC1 = {nameMC1} nameMC2 = {nameMC2}
        checkboxValuesMC1 = {checkboxValuesMC1} handleCheckboxChangeMC1={handleCheckboxChangeMC1} />
        
        <DeluxeFormat deluxeObjectMC1 = {deluxeObjectMC1} deluxeFormat = {deluxeFormat} deluxeObjectMC2 = {deluxeObjectMC2} 
        handleDeluxeMC1Change = {handleDeluxeMC1Change} handleDeluxeMC2Change = {handleDeluxeMC2Change} nameMC1 = {nameMC1} nameMC2 = {nameMC2}/>
        
        <GanadorFormat ganadorFormat = {ganadorFormat} incrementalObjectMC1 = {incrementalObjectMC1} incrementalObjectMC2 = {incrementalObjectMC2} 
        randomObjectMC1 = {randomObjectMC1} 
        randomObjectMC2 = {randomObjectMC2} minutoLibre1ObjectMC1 = {minutoLibre1ObjectMC1} minutoLibre1ObjectMC2 = {minutoLibre1ObjectMC2}
        minutoLibre2ObjectMC1 = {minutoLibre2ObjectMC1} minutoLibre2ObjectMC2 = {minutoLibre2ObjectMC2} deluxeObjectMC1 = {deluxeObjectMC1} 
        deluxeObjectMC2 = {deluxeObjectMC2} nameMC1 = {nameMC1} nameMC2 = {nameMC2} resultadoFinalMC1={resultadoFinalMC1} resultadoFinalMC2={resultadoFinalMC2}/>

        <ReplicaFormat replicaObjectMC1 = {replicaObjectMC1} replicaFormat = {replicaFormat} replicaObjectMC2 = {replicaObjectMC2} 
        handleReplicaMC1Change = {handleReplicaMC1Change} handleReplicaMC2Change = {handleReplicaMC2Change} nameMC1 = {nameMC1} nameMC2 = {nameMC2}/>
      </div>
      <div className="seleccionar-formato flex justify-between px-16">
        <button className={`border-2 px-1 py-1 w-[18%] h-10 ${incrementalFormat ? "bg-gray-200" : ""}`} onClick={clickIncremental}>Incremental model</button>
        <button className={`border-2 px-1 py-1 w-[14%] h-10 ${randomModeFormat ? "bg-gray-200" : ""}`} onClick={clickRandomMode}>Random mode</button>
        <button className={`border-2 px-1 py-1 w-[17%] h-10 ${freeMinutesFormat1 ? "bg-gray-200" : ""}`} onClick={clickFreeMinutes1}>Minutos a sangre 1</button>
        <button className={`border-2 px-1 py-1 w-[17%] h-10 ${freeMinutesFormat2 ? "bg-gray-200" : ""}`} onClick={clickFreeMinutes2}>Minutos a sangre 2</button>
        <button className={`border-2 px-1 py-1 w-[12%] h-10 ${deluxeFormat ? "bg-gray-200" : ""}`} onClick={clickDeluxe}>Deluxe</button>
        <button className={`border-2 px-1 py-1 w-[12%] h-10 ${ganadorFormat ? "bg-gray-200" : ""}`} onClick={clickGanador}>Ganador</button>
        <button className={`border-2 px-1 py-1 w-[10%] h-10 ${replicaFormat ? "bg-gray-200" : ""}`} onClick={clickReplica}>Replica</button>
      </div>
      <div className="data flex justify-between px-16 ">
        <select ref={competitionRef} className="w-48 h-12 border border-violet-400 rounded-md bg-violet-200">
          {competition?.map((item) => <option key={item.id}>{item.name}</option>)}
        </select>
        <select ref={seasonRef} className="h-12 w-28 border border-violet-400 rounded-md bg-violet-200">
          {season?.map((item) => <option key={item.id}>{item.name}</option>)}
        </select>
        <select ref={groupRef} className="h-12 w-20 border border-violet-400 rounded-md bg-violet-200">
          {group?.map((item) => <option key={item.id}>{item.name}</option>)}
        </select>
        <input onChange={(i) => setNameMC1(i.target.value)} list="freestyler1" type="search" className="text-center h-12 border border-violet-400 rounded-md bg-violet-200" placeholder="Freestyler 1" />
        <datalist id="freestyler1">
          {freestyler?.map((item) => <option key={item.id} value={item.aka} />)}
        </datalist>
        <input onChange={(e) => setNameMC2(e.target.value)} list="freestyler2" type="search" className="text-center h-12 border border-violet-400 rounded-md bg-violet-200" placeholder="Freestyler 2" />
        <datalist id="freestyler2">
          {freestyler?.map((item) => <option key={item.id} value={item.aka} />)}
        </datalist>
        <button onClick={handleSubmit} className="h-12 bg-violet-700 text-white px-5 rounded-md">
          Guardar Batalla
        </button>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                    <p className="text-xl font-semibold">
                      ¿Estás seguro de guardar la batalla?
                    </p>
                  </div>
                  {/*body*/}
                  {/* <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div> */}
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-violet-700 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={saveBattle}
                    >
                      Guardar Batalla
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null} {/*End Modal*/}
      </div>
    </section>

  )
}
