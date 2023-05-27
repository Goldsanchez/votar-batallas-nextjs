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
import Link from 'next/link';
import {XMarkIcon } from '@heroicons/react/24/outline'

export default function SaveBattle({isAuth, setIsAuth}:any) {

  const [showModal, setShowModal] = useState(false);
  const [positionNameFreestyler, setPositionNameFreestyler] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setIsAuth(true);
    }
  }, [isAuth]);

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
    patron1: "",
    patron2: "",
    patron3: "",
    patron4: "",
    patron5: "",
    patron6: "",
    tecnica: "",
    flow: "",
    escena: "",
  })

  const [incrementalObjectMC2, setIncrementalObjectMC2] = useState<PatronType>({
    patron1: "",
    patron2: "",
    patron3: "",
    patron4: "",
    patron5: "",
    patron6: "",
    tecnica: "",
    flow: "",
    escena: "",
  })

  const [randomObjectMC1, setRandomObjectMC1] = useState<PatronType>({
    patron1: "",
    patron2: "",
    patron3: "",
    patron4: "",
    patron5: "",
    patron6: "",
    tecnica: "",
    flow: "",
    escena: "",
  })

  const [randomObjectMC2, setRandomObjectMC2] = useState<PatronType>({
    patron1: "",
    patron2: "",
    patron3: "",
    patron4: "",
    patron5: "",
    patron6: "",
    tecnica: "",
    flow: "",
    escena: "",
  })

  const [minutoLibre1ObjectMC1, setMinutoLibre1ObjectMC1] = useState<PatronType>({
    patron1: "",
    patron2: "",
    patron3: "",
    patron4: "",
    patron5: "",
    patron6: "",
    tecnica: "",
    flow: "",
    escena: "",
  })

  const [minutoLibre1ObjectMC2, setMinutoLibre1ObjectMC2] = useState<PatronType>({
    patron1: "",
    patron2: "",
    patron3: "",
    patron4: "",
    patron5: "",
    patron6: "",
    tecnica: "",
    flow: "",
    escena: "",
  })

  const [minutoLibre2ObjectMC1, setMinutoLibre2ObjectMC1] = useState<PatronType>({
    patron1: "",
    patron2: "",
    patron3: "",
    patron4: "",
    patron5: "",
    patron6: "",
    tecnica: "",
    flow: "",
    escena: "",
  })

  const [minutoLibre2ObjectMC2, setMinutoLibre2ObjectMC2] = useState<PatronType>({
    patron1: "",
    patron2: "",
    patron3: "",
    patron4: "",
    patron5: "",
    patron6: "",
    tecnica: "",
    flow: "",
    escena: "",
  })

  const [deluxeObjectMC1, setDeluxeObjectMC1] = useState<DeluxeType>({
    acapela1: "",
    acapela2: "",
    acapela3: "",
    patron1: "",
    patron2: "",
    patron3: "",
    patron4: "",
    patron5: "",
    patron6: "",
    tecnica: "",
    flow: "",
    escena: "",
  })

  const [deluxeObjectMC2, setDeluxeObjectMC2] = useState<DeluxeType>({
    acapela1: "",
    acapela2: "",
    acapela3: "",
    patron1: "",
    patron2: "",
    patron3: "",
    patron4: "",
    patron5: "",
    patron6: "",
    tecnica: "",
    flow: "",
    escena: "",
  })

  const [replicaObjectMC1, setReplicaObjectMC1] = useState<PatronType>({
    patron1: "",
    patron2: "",
    patron3: "",
    patron4: "",
    patron5: "",
    patron6: "",
    tecnica: "",
    flow: "",
    escena: "",
  })

  const [replicaObjectMC2, setReplicaObjectMC2] = useState<PatronType>({
    patron1: "",
    patron2: "",
    patron3: "",
    patron4: "",
    patron5: "",
    patron6: "",
    tecnica: "",
    flow: "",
    escena: "",
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

  const handleSubmit = async (e: any) => {
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

  useEffect(() => {
    setResultadoFinalMC1(Object.values(incrementalObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) +
      Object.values(randomObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) +
      Object.values(minutoLibre1ObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) +
      Object.values(minutoLibre2ObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) +
      Object.values(deluxeObjectMC1).reduce((a, b) => Number(a) + Number(b), 0))
  }, [incrementalObjectMC1, randomObjectMC1, minutoLibre1ObjectMC1, minutoLibre2ObjectMC1, deluxeObjectMC1])

  useEffect(() => {
    setResultadoFinalMC2(Object.values(incrementalObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) +
      Object.values(randomObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) +
      Object.values(minutoLibre1ObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) +
      Object.values(minutoLibre2ObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) +
      Object.values(deluxeObjectMC2).reduce((a, b) => Number(a) + Number(b), 0))
  }, [incrementalObjectMC2, randomObjectMC2, minutoLibre1ObjectMC2, minutoLibre2ObjectMC2, deluxeObjectMC2])



  const clickIncremental = () => {
    setFormatoTitle("Incremental")
    setIncrementalFormat(true)
    setRandomModeFormat(false)
    setFreeMinutesFormat1(false)
    setFreeMinutesFormat2(false)
    setDeluxeFormat(false)
    setGanadorFormat(false)
    setReplicaFormat(false)
    setPositionNameFreestyler(true)
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
    setPositionNameFreestyler(false)
  }
  const clickFreeMinutes1 = () => {
    setFormatoTitle("Minutos 1")
    setIncrementalFormat(false)
    setRandomModeFormat(false)
    setFreeMinutesFormat1(true)
    setFreeMinutesFormat2(false)
    setDeluxeFormat(false)
    setGanadorFormat(false)
    setReplicaFormat(false)
    setPositionNameFreestyler(true)
  }
  const clickFreeMinutes2 = () => {
    setFormatoTitle("Minutos 2")
    setIncrementalFormat(false)
    setRandomModeFormat(false)
    setFreeMinutesFormat1(false)
    setFreeMinutesFormat2(true)
    setDeluxeFormat(false)
    setGanadorFormat(false)
    setReplicaFormat(false)
    setPositionNameFreestyler(false)
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
    setPositionNameFreestyler(true)
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

    if ( (resultadoFinalMC1 - resultadoFinalMC2 >= 0 &&  resultadoFinalMC1 - resultadoFinalMC2 < 2) || (resultadoFinalMC2 - resultadoFinalMC1 >= 0 && resultadoFinalMC2 - resultadoFinalMC1 < 2)) {
      setFormatoTitle("Replica")
      setIncrementalFormat(false)
      setRandomModeFormat(false)
      setFreeMinutesFormat1(false)
      setFreeMinutesFormat2(false)
      setDeluxeFormat(false)
      setGanadorFormat(false)
      setReplicaFormat(true)
      setPositionNameFreestyler(false)
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

  const closeModal = () => {
    setShowModal(false)
  }


  return (
    <section className="save-battle grid gap-5 bg-violet-200 p-6 rounded-lg ">
      <div className="0 flex flex-row justify-center sm:col-span-12"> {/* Votar Batalla */}
        <h2 className="text-xl text-violet-700 font-semibold" >Votar Batalla</h2>
      </div>
      <div className="1 flex flex-row justify-between gap-1 sm:col-span-2 sm:row-start-2 sm:flex-col"> {/* FMS Argentina */}
        <p className="hidden sm:invisible sm:block">-</p>
        <select ref={competitionRef} className="basis-2/4 rounded-[4px] px-3 py-1 sm:basis-1/4" name="" id="">
          {competition?.map((item) => <option key={item.id} >{item.name}</option>)}
        </select>
        <select ref={seasonRef} className="basis-1/4 rounded-[4px] px-3 py-1 sm:basis-1/4" name="" id="">
          {season?.map((item) => <option key={item.id}>{item.name}</option>)}
        </select>
        <select ref={groupRef} className="basis-1/4 rounded-[4px] px-3 py-1 sm:basis-1/4" name="" id="">
          {group?.map((item) => <option key={item.id}>{item.name}</option>)}
        </select>
      </div>
      <div className="2 flex flex-row justify-between gap-1 sm:col-span-2 sm:row-start-2 sm:flex-col"> {/* Freestyle */}
        <p className="hidden sm:invisible sm:block sm-order-1">-</p>
        
        <div className={`basis-1/2 ${positionNameFreestyler? "order-2 sm:order-2": "order-3 sm:order-3"} sm:basis-1/3`}>
          <input onChange={(i) => setNameMC1(i.target.value)} className={`w-full border rounded-[4px] px-3 py-1 pl-2 sm:w-50 ${nameMC1 === nameMC2 ? "border-red-600" : "a"}`} list="freestyler1" type="search" placeholder="Freestyler 1" />
          <datalist id="freestyler1">
            {freestyler?.map((item) => <option key={item.id} value={item.aka} />)}
          </datalist>
        </div>
        <p className="hidden order-2 text-sm sm:h-full sm:basis-1/3 sm:invisible sm:block sm:order-4">Incremental</p>
        <div className={`basis-1/2 ${positionNameFreestyler? "order-3 sm:order-3": "order-2 sm:order-2"} sm:h-full sm:basis-1/3`}>
          <input onChange={(e) => setNameMC2(e.target.value)} className={`w-full border rounded-[4px] px-3 py-1 pl-2 sm:w-50 ${nameMC1 === nameMC2 ?"border-red-600" : "b"}`} list="freestyler2" type="search" placeholder="Freestyler 2" />
          <datalist id="freestyler2">
            {freestyler?.map((item) => <option key={item.id} value={item.aka} />)}
          </datalist>
        </div>
      </div>
      {incrementalFormat && <div className="3 flex flex-col gap-1 sm:col-span-8 sm:row-start-2 sm:flex sm:flex-row"> {/* Incremental */}
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P1</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={incrementalObjectMC1.patron1} onChange={handleIncrementalMC1Change} name="patron1" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={incrementalObjectMC2.patron1} onChange={handleIncrementalMC2Change} name="patron1" />
          <input className="hidden"  value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P2</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={incrementalObjectMC1.patron2} onChange={handleIncrementalMC1Change} name="patron2" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={incrementalObjectMC2.patron2} onChange={handleIncrementalMC2Change} name="patron2" />
          <input className="hidden " value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P3</p>
          <input className="w-full basis-5/12 text-center sm:w-8  sm:basis-1/4" type="number" value={incrementalObjectMC1.patron3} onChange={handleIncrementalMC1Change} name="patron3" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={incrementalObjectMC2.patron3} onChange={handleIncrementalMC2Change} name="patron3" />
          <input className="hidden " value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs mb-2">P4</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={incrementalObjectMC1.patron4} onChange={handleIncrementalMC1Change} name="patron4" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={incrementalObjectMC2.patron4} onChange={handleIncrementalMC2Change} name="patron4" />
          <input className="hidden " value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P5</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={incrementalObjectMC1.patron5} onChange={handleIncrementalMC1Change} name="patron5" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={incrementalObjectMC2.patron5} onChange={handleIncrementalMC2Change} name="patron5" />
          <input className="hidden " value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P6</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={incrementalObjectMC1.patron6} onChange={handleIncrementalMC1Change} name="patron6" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={incrementalObjectMC2.patron6} onChange={handleIncrementalMC2Change} name="patron6" />
          <input className="hidden " value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">T</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={incrementalObjectMC1.tecnica} onChange={handleIncrementalMC1Change} name="tecnica" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={incrementalObjectMC2.tecnica} onChange={handleIncrementalMC2Change} name="tecnica" />
          <input className="hidden " value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">F</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={incrementalObjectMC1.flow} onChange={handleIncrementalMC1Change} name="flow" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={incrementalObjectMC2.flow} onChange={handleIncrementalMC2Change} name="flow" />
          <input className="hidden " value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">E</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={incrementalObjectMC1.escena} onChange={handleIncrementalMC1Change} name="escena" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={incrementalObjectMC2.escena} onChange={handleIncrementalMC2Change} name="escena" />
          <input className="hidden " value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2 font-medium">Total</p>
          <input className=" w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={Object.values(incrementalObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) as number} />
          <input className=" w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={Object.values(incrementalObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) as number} />
          <input className="hidden " value="5" type="checkbox" name="" id="" />
        </div>
      </div>}
      {randomModeFormat && <div className="3 flex flex-col gap-1 sm:col-span-8 sm:row-start-2 sm:row-end-3 sm:flex sm:flex-row"> {/* Random */}
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P1</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={randomObjectMC2.patron1} onChange={handleRandomMC2Change} name="patron1" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={randomObjectMC1.patron1} onChange={handleRandomMC1Change} name="patron1" />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2 ">P2</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={randomObjectMC2.patron2} onChange={handleRandomMC2Change} name="patron2" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={randomObjectMC1.patron2} onChange={handleRandomMC1Change} name="patron2" />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P3</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={randomObjectMC2.patron3} onChange={handleRandomMC2Change} name="patron3" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={randomObjectMC1.patron3} onChange={handleRandomMC1Change} name="patron3" />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P4</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={randomObjectMC2.patron4} onChange={handleRandomMC2Change} name="patron4" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={randomObjectMC1.patron4} onChange={handleRandomMC1Change} name="patron4" />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P5</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={randomObjectMC2.patron5} onChange={handleRandomMC2Change} name="patron5" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={randomObjectMC1.patron5} onChange={handleRandomMC1Change} name="patron5" />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P6</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={randomObjectMC2.patron6} onChange={handleRandomMC2Change} name="patron6" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={randomObjectMC1.patron6} onChange={handleRandomMC1Change} name="patron6" />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">T</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={randomObjectMC2.tecnica} onChange={handleRandomMC2Change} name="tecnica" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={randomObjectMC1.tecnica} onChange={handleRandomMC1Change} name="tecnica" />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">F</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={randomObjectMC2.flow} onChange={handleRandomMC2Change} name="flow" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={randomObjectMC1.flow} onChange={handleRandomMC1Change} name="flow" />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">E</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={randomObjectMC2.escena} onChange={handleRandomMC2Change} name="escena" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={randomObjectMC1.escena} onChange={handleRandomMC1Change} name="escena" />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2 font-medium">Total</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={Object.values(randomObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) as number} />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={Object.values(randomObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) as number} />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
      </div>}
      {freeMinutesFormat1 && <div className="3 flex flex-col gap-1 sm:col-span-8 sm:row-start-2 sm:row-end-3 sm:flex sm:flex-row"> {/* Minuto 1 */}
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P1</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre1ObjectMC1.patron1} onChange={handleMinutoLibre1MC1Change} name="patron1" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre1ObjectMC2.patron1} onChange={handleMinutoLibre1MC2Change} name="patron1" />
          <input className="hidden sm:visible sm:block" type="checkbox" checked={checkboxValuesMC2.respuesta1} onChange={handleCheckboxChangeMC2} name="respuesta1" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P2</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre1ObjectMC1.patron2} onChange={handleMinutoLibre1MC1Change} name="patron2" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre1ObjectMC2.patron2} onChange={handleMinutoLibre1MC2Change} name="patron2" />
          <input className="hidden sm:visible sm:block" type="checkbox" checked={checkboxValuesMC2.respuesta2} onChange={handleCheckboxChangeMC2} name="respuesta2" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P3</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre1ObjectMC1.patron3} onChange={handleMinutoLibre1MC1Change} name="patron3" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre1ObjectMC2.patron3} onChange={handleMinutoLibre1MC2Change} name="patron3" />
          <input className="hidden sm:visible sm:block" type="checkbox" checked={checkboxValuesMC2.respuesta3} onChange={handleCheckboxChangeMC2} name="respuesta3" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P4</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre1ObjectMC1.patron4} onChange={handleMinutoLibre1MC1Change} name="patron4" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre1ObjectMC2.patron4} onChange={handleMinutoLibre1MC2Change} name="patron4" />
          <input className="hidden sm:visible sm:block" type="checkbox" checked={checkboxValuesMC2.respuesta4} onChange={handleCheckboxChangeMC2} name="respuesta4" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P5</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre1ObjectMC1.patron5} onChange={handleMinutoLibre1MC1Change} name="patron5" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre1ObjectMC2.patron5} onChange={handleMinutoLibre1MC2Change} name="patron5" />
          <input className="hidden sm:visible sm:block" type="checkbox" checked={checkboxValuesMC2.respuesta5} onChange={handleCheckboxChangeMC2} name="respuesta5" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P6</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre1ObjectMC1.patron6} onChange={handleMinutoLibre1MC1Change} name="patron6" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre1ObjectMC2.patron6} onChange={handleMinutoLibre1MC2Change} name="patron6" />
          <input className="hidden sm:visible sm:block" type="checkbox" checked={checkboxValuesMC2.respuesta6} onChange={handleCheckboxChangeMC2} name="respuesta6" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">T</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre1ObjectMC1.tecnica} onChange={handleMinutoLibre1MC1Change} name="tecnica" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre1ObjectMC2.tecnica} onChange={handleMinutoLibre1MC2Change} name="tecnica" />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">F</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre1ObjectMC1.flow} onChange={handleMinutoLibre1MC1Change} name="flow" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre1ObjectMC2.flow} onChange={handleMinutoLibre1MC2Change} name="flow" />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">E</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre1ObjectMC1.escena} onChange={handleMinutoLibre1MC1Change} name="escena" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre1ObjectMC2.escena} onChange={handleMinutoLibre1MC2Change} name="escena" />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2 font-medium">Total</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={Object.values(minutoLibre1ObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) as number} />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={Object.values(minutoLibre1ObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) as number + Object.values(checkboxValuesMC2).reduce((total: number, value) => total + (value ? 1 : 0), 0) as number} />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
      </div>}
      {freeMinutesFormat2 && <div className="3 flex flex-col gap-1 sm:col-span-8 sm:row-start-2 sm:row-end-3 sm:flex sm:flex-row"> {/* Minuto 2 */}
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P1</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre2ObjectMC2.patron1} onChange={handleMinutoLibre2MC2Change} name="patron1" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre2ObjectMC1.patron1} onChange={handleMinutoLibre2MC1Change} name="patron1" />
          <input className="hidden sm:visible sm:block" type="checkbox" checked={checkboxValuesMC1.respuesta1} onChange={handleCheckboxChangeMC1} name="respuesta1" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P2</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre2ObjectMC2.patron2} onChange={handleMinutoLibre2MC2Change} name="patron2" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre2ObjectMC1.patron2} onChange={handleMinutoLibre2MC1Change} name="patron2" />
          <input className="hidden sm:visible sm:block" type="checkbox" checked={checkboxValuesMC1.respuesta2} onChange={handleCheckboxChangeMC1} name="respuesta2" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P3</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre2ObjectMC2.patron3} onChange={handleMinutoLibre2MC2Change} name="patron3" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre2ObjectMC1.patron3} onChange={handleMinutoLibre2MC1Change} name="patron3" />
          <input className="hidden sm:visible sm:block" type="checkbox" checked={checkboxValuesMC1.respuesta3} onChange={handleCheckboxChangeMC1} name="respuesta3" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P4</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre2ObjectMC2.patron4} onChange={handleMinutoLibre2MC2Change} name="patron4" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre2ObjectMC1.patron4} onChange={handleMinutoLibre2MC1Change} name="patron4" />
          <input className="hidden sm:visible sm:block" type="checkbox" checked={checkboxValuesMC1.respuesta4} onChange={handleCheckboxChangeMC1} name="respuesta4" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P5</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre2ObjectMC2.patron5} onChange={handleMinutoLibre2MC2Change} name="patron5" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre2ObjectMC1.patron5} onChange={handleMinutoLibre2MC1Change} name="patron5" />
          <input className="hidden sm:visible sm:block" type="checkbox" checked={checkboxValuesMC1.respuesta5} onChange={handleCheckboxChangeMC1} name="respuesta5" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P6</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre2ObjectMC2.patron6} onChange={handleMinutoLibre2MC2Change} name="patron6" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre2ObjectMC1.patron6} onChange={handleMinutoLibre2MC1Change} name="patron6" />
          <input className="hidden sm:visible sm:block" type="checkbox" checked={checkboxValuesMC1.respuesta6} onChange={handleCheckboxChangeMC1} name="respuesta6" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">T</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre2ObjectMC2.tecnica} onChange={handleMinutoLibre2MC2Change} name="tecnica" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre2ObjectMC1.tecnica} onChange={handleMinutoLibre2MC1Change} name="tecnica" />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">F</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre2ObjectMC2.flow} onChange={handleMinutoLibre2MC2Change} name="flow" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre2ObjectMC1.flow} onChange={handleMinutoLibre2MC1Change} name="flow" />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">E</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre2ObjectMC2.escena} onChange={handleMinutoLibre2MC2Change} name="escena" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={minutoLibre2ObjectMC1.escena} onChange={handleMinutoLibre2MC1Change} name="escena" />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2 font-medium">Total</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={Object.values(minutoLibre2ObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) as number} />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={Object.values(minutoLibre2ObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) as number + Object.values(checkboxValuesMC1).reduce((total: number, value) => total + (value ? 1 : 0), 0) as number} />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
      </div>}
      {deluxeFormat && <div className="3 flex flex-col gap-1 sm:col-span-8 sm:row-start-2 sm:row-end-3 sm:flex sm:flex-row"> {/* Deluxe 2 */}
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">A1</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={deluxeObjectMC1.acapela1} onChange={handleDeluxeMC1Change} name="acapela1" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={deluxeObjectMC2.acapela1} onChange={handleDeluxeMC2Change} name="acapela1" />
          <input className="hidden" type="checkbox" checked={checkboxValuesMC1.respuesta1} onChange={handleCheckboxChangeMC2} name="respuesta1" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">A2</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={deluxeObjectMC1.acapela2} onChange={handleDeluxeMC1Change} name="acapela2" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={deluxeObjectMC2.acapela2} onChange={handleDeluxeMC2Change} name="acapela2" />
          <input className="hidden" type="checkbox" checked={checkboxValuesMC1.respuesta1} onChange={handleCheckboxChangeMC2} name="respuesta1" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">A3</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={deluxeObjectMC1.acapela3} onChange={handleDeluxeMC1Change} name="acapela3" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={deluxeObjectMC2.acapela3} onChange={handleDeluxeMC2Change} name="acapela3" />
          <input className="hidden" type="checkbox" checked={checkboxValuesMC1.respuesta1} onChange={handleCheckboxChangeMC2} name="respuesta1" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P1</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={deluxeObjectMC1.patron1} onChange={handleDeluxeMC1Change} name="patron1" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={deluxeObjectMC2.patron1} onChange={handleDeluxeMC2Change} name="patron1" />
          <input className="hidden" type="checkbox" checked={checkboxValuesMC1.respuesta1} onChange={handleCheckboxChangeMC2} name="respuesta1" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P2</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={deluxeObjectMC1.patron2} onChange={handleDeluxeMC1Change} name="patron2" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={deluxeObjectMC2.patron2} onChange={handleDeluxeMC2Change} name="patron2" />
          <input className="hidden" type="checkbox" checked={checkboxValuesMC1.respuesta2} onChange={handleCheckboxChangeMC2} name="respuesta2" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P3</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={deluxeObjectMC1.patron3} onChange={handleDeluxeMC1Change} name="patron3" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={deluxeObjectMC2.patron3} onChange={handleDeluxeMC2Change} name="patron3" />
          <input className="hidden" type="checkbox" checked={checkboxValuesMC1.respuesta3} onChange={handleCheckboxChangeMC2} name="respuesta3" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P4</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={deluxeObjectMC1.patron4} onChange={handleDeluxeMC1Change} name="patron4" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={deluxeObjectMC2.patron4} onChange={handleDeluxeMC2Change} name="patron4" />
          <input className="hidden" type="checkbox" checked={checkboxValuesMC1.respuesta4} onChange={handleCheckboxChangeMC2} name="respuesta4" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P5</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={deluxeObjectMC1.patron5} onChange={handleDeluxeMC1Change} name="patron5" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={deluxeObjectMC2.patron5} onChange={handleDeluxeMC2Change} name="patron5" />
          <input className="hidden" type="checkbox" checked={checkboxValuesMC1.respuesta5} onChange={handleCheckboxChangeMC2} name="respuesta5" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P6</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={deluxeObjectMC1.patron6} onChange={handleDeluxeMC1Change} name="patron6" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={deluxeObjectMC2.patron6} onChange={handleDeluxeMC2Change} name="patron6" />
          <input className="hidden" type="checkbox" checked={checkboxValuesMC1.respuesta6} onChange={handleCheckboxChangeMC2} name="respuesta6" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">T</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={deluxeObjectMC1.tecnica} onChange={handleDeluxeMC1Change} name="tecnica" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={deluxeObjectMC2.tecnica} onChange={handleDeluxeMC2Change} name="tecnica" />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">F</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={deluxeObjectMC1.flow} onChange={handleDeluxeMC1Change} name="flow" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={deluxeObjectMC2.flow} onChange={handleDeluxeMC2Change} name="flow" />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">E</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={deluxeObjectMC1.escena} onChange={handleDeluxeMC1Change} name="escena" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={deluxeObjectMC2.escena} onChange={handleDeluxeMC2Change} name="escena" />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2 font-medium">Total</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={Object.values(deluxeObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) as number} />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={Object.values(deluxeObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) as number} />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
      </div>}
      {ganadorFormat && <div className="3 flex flex-col gap-1 sm:col-span-8 sm:row-start-2 sm:row-end-3 sm:flex sm:flex-row sm:gap-4 sm:text-center"> {/* Replica */}
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">I</p>
          <input className="w-full basis-5/12 text-center sm:w-12 sm:basis-1/4" type="number" value={Object.values(incrementalObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) as number} />
          <input className="w-full basis-5/12 text-center sm:w-12 sm:basis-1/4" type="number" value={Object.values(incrementalObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) as number} />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">R</p>
          <input className="w-full basis-5/12 text-center sm:w-12 sm:basis-1/4" type="number" value={Object.values(randomObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) as number} />
          <input className="w-full basis-5/12 text-center sm:w-12 sm:basis-1/4" type="number" value={Object.values(randomObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) as number} />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">M1</p>
          <input className="w-full basis-5/12 text-center sm:w-12 sm:basis-1/4" type="number" value={Object.values(minutoLibre1ObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) as number} />
          <input className="w-full basis-5/12 text-center sm:w-12 sm:basis-1/4" type="number" value={Object.values(minutoLibre1ObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) as number} />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">M2</p>
          <input className="w-full basis-5/12 text-center sm:w-12 sm:basis-1/4" type="number" value={Object.values(minutoLibre2ObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) as number} />
          <input className="w-full basis-5/12 text-center sm:w-12 sm:basis-1/4" type="number" value={Object.values(minutoLibre2ObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) as number} />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">D</p>
          <input className="w-full basis-5/12 text-center sm:w-12 sm:basis-1/4" type="number" value={Object.values(deluxeObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) as number} />
          <input className="w-full basis-5/12 text-center sm:w-12 sm:basis-1/4" type="number" value={Object.values(deluxeObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) as number} />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2 font-medium">Total</p>
          <input className="w-full basis-5/12 text-center sm:w-12 sm:basis-1/4" type="number" value={resultadoFinalMC1} />
          <input className="w-full basis-5/12 text-center sm:w-12 sm:basis-1/4" type="number" value={resultadoFinalMC2} />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
      </div>}
      {replicaFormat && <div className="3 flex flex-col gap-1 sm:col-span-8 sm:row-start-2 sm:row-end-3 sm:flex sm:flex-row"> {/* Replica */}
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P1</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={replicaObjectMC2.patron1} onChange={handleReplicaMC2Change} name="patron1" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={replicaObjectMC1.patron1} onChange={handleReplicaMC1Change} name="patron1" />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P2</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={replicaObjectMC2.patron2} onChange={handleReplicaMC2Change} name="patron2" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={replicaObjectMC1.patron2} onChange={handleReplicaMC1Change} name="patron2" />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P3</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={replicaObjectMC2.patron3} onChange={handleReplicaMC2Change} name="patron3" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={replicaObjectMC1.patron3} onChange={handleReplicaMC1Change} name="patron3" />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P4</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={replicaObjectMC2.patron4} onChange={handleReplicaMC2Change} name="patron4" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={replicaObjectMC1.patron4} onChange={handleReplicaMC1Change} name="patron4" />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P5</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={replicaObjectMC2.patron5} onChange={handleReplicaMC2Change} name="patron5" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={replicaObjectMC1.patron5} onChange={handleReplicaMC1Change} name="patron5" />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">P6</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={replicaObjectMC2.patron6} onChange={handleReplicaMC2Change} name="patron6" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={replicaObjectMC1.patron6} onChange={handleReplicaMC1Change} name="patron6" />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">T</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={replicaObjectMC2.tecnica} onChange={handleReplicaMC2Change} name="tecnica" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={replicaObjectMC1.tecnica} onChange={handleReplicaMC1Change} name="tecnica" />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">F</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={replicaObjectMC2.flow} onChange={handleReplicaMC2Change} name="flow" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={replicaObjectMC1.flow} onChange={handleReplicaMC1Change} name="flow" />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2">E</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={replicaObjectMC2.escena} onChange={handleReplicaMC2Change} name="escena" />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={replicaObjectMC1.escena} onChange={handleReplicaMC1Change} name="escena" />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
        <div className="1 flex flex-row justify-between items-center gap-5 sm:flex sm:flex-col sm:gap-1 sm:justify-start">
          <p className="basis-[12%] text-xs sm:mb-2 font-medium">Total</p>
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={Object.values(replicaObjectMC2).reduce((a: number, b) => Number(a) + Number(b), 0) as number} />
          <input className="w-full basis-5/12 text-center sm:w-8 sm:basis-1/4" type="number" value={Object.values(replicaObjectMC1).reduce((a: number, b) => Number(a) + Number(b), 0) as number} />
          <input className="hidden" value="5" type="checkbox" name="" id="" />
        </div>
      </div>}
      <div className="4 flex flex-row  gap-0.5 sm:col-span-8 sm:col-start-5 sm:row-start-3 sm:row-end-4"> {/* Formatos */}
        <button className={`w-full py-1 rounded-md border  ${incrementalFormat ? "bg-violet-400" : "bg-white"}`} onClick={clickIncremental}>I</button>
        <button className={`w-full py-1 rounded-md border  ${randomModeFormat ? "bg-violet-400" : "bg-white"}`} onClick={clickRandomMode}>R</button>
        <button className={`w-full py-1 rounded-md border  ${freeMinutesFormat1 ? "bg-violet-400" : "bg-white"}`} onClick={clickFreeMinutes1}>M1</button>
        <button className={`w-full py-1 rounded-md border  ${freeMinutesFormat2 ? "bg-violet-400" : "bg-white"}`} onClick={clickFreeMinutes2}>M2</button>
        <button className={`w-full py-1 rounded-md border ${deluxeFormat ? "bg-violet-400" : "bg-white"}`} onClick={clickDeluxe}>D</button>
        <button className={`w-full py-1 rounded-md border px-3 ${ganadorFormat ? "bg-violet-400" : "bg-white"}`} onClick={clickGanador}>Ganador</button>
        <button className={`w-full py-1 rounded-md border ${replicaFormat ? "bg-violet-400" : "bg-white"}`} onClick={clickReplica}>R</button>
      </div>
      <div className="5 flex flex-row justify-between items-center sm:col-span-12 sm:justify-end sm:gap-32">
        <p>{formatoTitle}</p>
        <button onClick={handleSubmit} className="h-9 rounded-md bg-violet-700 px-3 text-white">Guardar Batalla</button>
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                {isAuth ? <div className="flex items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <p className="text font-semibold">
                    ¿Estás seguro de guardar la batalla?
                  </p>
                </div> : <div className="flex items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <p className="text font-semibold text-violet-700 ">
                    Inicia sesión o registrate
                  </p><XMarkIcon onClick={closeModal} className="h-5 w-5 ml-4 cursor-pointer text-red-600 font-semibold" />
                </div>}
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  {isAuth ? <><button
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
                  </button></> 
                  : <><button
                  className="bg-violet-600 text-white font-bold text-sm px-4 py-2 rounded shadow hover:bg-violet-800 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  <Link href="/login"><button className="font-medium">Iniciar Sesión</button></Link>
                </button>
                <button
                  className="bg-violet-600 text-white font-bold text-sm px-4 py-2 rounded shadow hover:bg-violet-800 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={saveBattle}
                >
                  <Link href="/signup"><button className="font-medium">Registrarse</button></Link>
                </button></> }

                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null} {/*End Modal*/}
    </section>
  )
}


