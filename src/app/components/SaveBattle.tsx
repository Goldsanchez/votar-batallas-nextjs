'use client';
import axios from "axios"
import { useRef, useState, useEffect } from "react";
import { getCompetitions, getSeasons, getGroups, getFreestylers, getTokens } from "../api/battles.api"
import { ICompetition, ISeason, IGroup, IFreestyler, IToken } from "../interfacesApi";
import { API_URL } from "../api/battles.api";

export default function SaveBattle() {

  const [showModal, setShowModal] = useState(false);

  // variables para guardar lso datos del backen backend
  const [competition, setCompetition] = useState<ICompetition[] | undefined>([])
  const [season, setSeason] = useState<ISeason[] | undefined>([])
  const [group, setGroup] = useState<IGroup[] | undefined>([])
  const [freestyler, setFreestyler] = useState<IFreestyler[] | undefined>([])
  const [token, setToken] = useState<IToken[] | undefined>([])

  const [prueba, setPrueba] = useState(0)

  // Guardar Batalla
  const [formatoTitle, setFormatoTitle] = useState("Incremental")
  const [incrementalFormat, setIncrementalFormat] = useState(true)
  const [randomModeFormat, setRandomModeFormat] = useState(false)
  const [freeMinutesFormat1, setFreeMinutesFormat1] = useState(false)
  const [freeMinutesFormat2, setFreeMinutesFormat2] = useState(false)
  const [deluxeFormat, setDeluxeFormat] = useState(false)
  const [ganadorFormat, setGanadorFormat] = useState(false)
  const [replicaFormat, setReplicaFormat] = useState(false)


  const [incremental1MC1, setIncremental1MC1] = useState("")
  const [incremental2MC1, setIncremental2MC1] = useState("")
  const [incremental3MC1, setIncremental3MC1] = useState("")
  const [incremental4MC1, setIncremental4MC1] = useState("")
  const [incremental5MC1, setIncremental5MC1] = useState("")
  const [incremental6MC1, setIncremental6MC1] = useState("")
  const [incrementalTecnicaMC1, setIncrementalTecnicaMC1] = useState("")
  const [incrementalFlowMC1, setIncrementalFlowMC1] = useState("")
  const [incrementalEscenaMC1, setIncrementalEscenaMC1] = useState("")
  const [incrementalTotalMC1, setIncrementalTotalMC1] = useState(0)

  const [incremental1MC2, setIncremental1MC2] = useState("")
  const [incremental2MC2, setIncremental2MC2] = useState("")
  const [incremental3MC2, setIncremental3MC2] = useState("")
  const [incremental4MC2, setIncremental4MC2] = useState("")
  const [incremental5MC2, setIncremental5MC2] = useState("")
  const [incremental6MC2, setIncremental6MC2] = useState("")
  const [incrementalTecnicaMC2, setIncrementalTecnicaMC2] = useState("")
  const [incrementalFlowMC2, setIncrementalFlowMC2] = useState("")
  const [incrementalEscenaMC2, setIncrementalEscenaMC2] = useState("")
  const [incrementalTotalMC2, setIncrementalTotalMC2] = useState(0)

  const [random1MC1, setRandom1MC1] = useState("")
  const [random2MC1, setRandom2MC1] = useState("")
  const [random3MC1, setRandom3MC1] = useState("")
  const [random4MC1, setRandom4MC1] = useState("")
  const [random5MC1, setRandom5MC1] = useState("")
  const [random6MC1, setRandom6MC1] = useState("")
  const [randomTecnicaMC1, setRandomTecnicaMC1] = useState("")
  const [randomFlowMC1, setRandomFlowMC1] = useState("")
  const [randomEscenaMC1, setRandomEscenaMC1] = useState("")
  const [randomTotalMC1, setRandomTotalMC1] = useState(0)

  const [random1MC2, setRandom1MC2] = useState("")
  const [random2MC2, setRandom2MC2] = useState("")
  const [random3MC2, setRandom3MC2] = useState("")
  const [random4MC2, setRandom4MC2] = useState("")
  const [random5MC2, setRandom5MC2] = useState("")
  const [random6MC2, setRandom6MC2] = useState("")
  const [randomTecnicaMC2, setRandomTecnicaMC2] = useState("")
  const [randomFlowMC2, setRandomFlowMC2] = useState("")
  const [randomEscenaMC2, setRandomEscenaMC2] = useState("")
  const [randomTotalMC2, setRandomTotalMC2] = useState(0)

  const [minuto1IdaMC1, setMinuto1IdaMC1] = useState("")
  const [minuto2IdaMC1, setMinuto2IdaMC1] = useState("")
  const [minuto3IdaMC1, setMinuto3IdaMC1] = useState("")
  const [minuto4IdaMC1, setMinuto4IdaMC1] = useState("")
  const [minuto5IdaMC1, setMinuto5IdaMC1] = useState("")
  const [minuto6IdaMC1, setMinuto6IdaMC1] = useState("")
  const [minutoTecnicaIdaMC1, setMinutoTecnicaIdaMC1] = useState("")
  const [minutoFlowIdaMC1, setMinutoFlowIdaMC1] = useState("")
  const [minutoEscenaIdaMC1, setMinutoEscenaIdaMC1] = useState("")
  const [minutoTotalIdaMC1, setMinutoTotalIdaMC1] = useState(0)

  const [minuto1IdaMC2, setMinuto1IdaMC2] = useState("")
  const [minuto2IdaMC2, setMinuto2IdaMC2] = useState("")
  const [minuto3IdaMC2, setMinuto3IdaMC2] = useState("")
  const [minuto4IdaMC2, setMinuto4IdaMC2] = useState("")
  const [minuto5IdaMC2, setMinuto5IdaMC2] = useState("")
  const [minuto6IdaMC2, setMinuto6IdaMC2] = useState("")
  const [minutoTecnicaIdaMC2, setMinutoTecnicaIdaMC2] = useState("")
  const [minutoFlowIdaMC2, setMinutoFlowIdaMC2] = useState("")
  const [minutoEscenaIdaMC2, setMinutoEscenaIdaMC2] = useState("")
  const [minutoRespuesta1MC2, setMinutoRespuesta1MC2] = useState("")
  const [minutoRespuesta2MC2, setMinutoRespuesta2MC2] = useState("")
  const [minutoRespuesta3MC2, setMinutoRespuesta3MC2] = useState("")
  const [minutoRespuesta4MC2, setMinutoRespuesta4MC2] = useState("")
  const [minutoRespuesta5MC2, setMinutoRespuesta5MC2] = useState("")
  const [minutoRespuesta6MC2, setMinutoRespuesta6MC2] = useState("")
  const [minutoTotalIdaMC2, setMinutoTotalIdaMC2] = useState(0)

  const [minuto1VueltaMC1, setMinuto1VueltaMC1] = useState("")
  const [minuto2VueltaMC1, setMinuto2VueltaMC1] = useState("")
  const [minuto3VueltaMC1, setMinuto3VueltaMC1] = useState("")
  const [minuto4VueltaMC1, setMinuto4VueltaMC1] = useState("")
  const [minuto5VueltaMC1, setMinuto5VueltaMC1] = useState("")
  const [minuto6VueltaMC1, setMinuto6VueltaMC1] = useState("")
  const [minutoTecnicaVueltaMC1, setMinutoTecnicalVueltaMC1] = useState("")
  const [minutoFlowVueltaMC1, setMinutoFlowVueltaMC1] = useState("")
  const [minutoEscenaVueltaMC1, setMinutoEscenaVueltaMC1] = useState("")
  const [minutoRespuesta1MC1, setMinutoRespuesta1MC1] = useState("")
  const [minutoRespuesta2MC1, setMinutoRespuesta2MC1] = useState("")
  const [minutoRespuesta3MC1, setMinutoRespuesta3MC1] = useState("")
  const [minutoRespuesta4MC1, setMinutoRespuesta4MC1] = useState("")
  const [minutoRespuesta5MC1, setMinutoRespuesta5MC1] = useState("")
  const [minutoRespuesta6MC1, setMinutoRespuesta6MC1] = useState("")
  const [minutoTotalVueltaMC1, setMinutoTotalVueltaMC1] = useState(0)

  const [minuto1VueltaMC2, setMinuto1VueltaMC2] = useState("")
  const [minuto2VueltaMC2, setMinuto2VueltaMC2] = useState("")
  const [minuto3VueltaMC2, setMinuto3VueltaMC2] = useState("")
  const [minuto4VueltaMC2, setMinuto4VueltaMC2] = useState("")
  const [minuto5VueltaMC2, setMinuto5VueltaMC2] = useState("")
  const [minuto6VueltaMC2, setMinuto6VueltaMC2] = useState("")
  const [minutoTecnicaVueltaMC2, setMinutoTecnicalVueltaMC2] = useState("")
  const [minutoFlowVueltaMC2, setMinutoFlowVueltaMC2] = useState("")
  const [minutoEscenaVueltaMC2, setMinutoEscenaVueltaMC2] = useState("")
  const [minutoTotalVueltaMC2, setMinutoTotalVueltaMC2] = useState(0)

  const [deluxeEntrada1MC1, setDeluxeEntrada1MC1] = useState("")
  const [deluxeEntrada2MC1, setDeluxeEntrada2MC1] = useState("")
  const [deluxeEntrada3MC1, setDeluxeEntrada3MC1] = useState("")
  const [deluxe1MC1, setDeluxe1MC1] = useState("")
  const [deluxe2MC1, setDeluxe2MC1] = useState("")
  const [deluxe3MC1, setDeluxe3MC1] = useState("")
  const [deluxe4MC1, setDeluxe4MC1] = useState("")
  const [deluxe5MC1, setDeluxe5MC1] = useState("")
  const [deluxe6MC1, setDeluxe6MC1] = useState("")
  const [deluxeTecnicaMC1, setDeluxeTecnicaMC1] = useState("")
  const [deluxeFlowMC1, setDeluxeFlowMC1] = useState("")
  const [deluxeEscenaMC1, setDeluxeEscenaMC1] = useState("")
  const [deluxeTotalMC1, setDeluxeTotalMC1] = useState(0)

  const [deluxeEntrada1MC2, setDeluxeEntrada1MC2] = useState("")
  const [deluxeEntrada2MC2, setDeluxeEntrada2MC2] = useState("")
  const [deluxeEntrada3MC2, setDeluxeEntrada3MC2] = useState("")
  const [deluxe1MC2, setDeluxe1MC2] = useState("")
  const [deluxe2MC2, setDeluxe2MC2] = useState("")
  const [deluxe3MC2, setDeluxe3MC2] = useState("")
  const [deluxe4MC2, setDeluxe4MC2] = useState("")
  const [deluxe5MC2, setDeluxe5MC2] = useState("")
  const [deluxe6MC2, setDeluxe6MC2] = useState("")
  const [deluxeTecnicaMC2, setDeluxeTecnicaMC2] = useState("")
  const [deluxeFlowMC2, setDeluxeFlowMC2] = useState("")
  const [deluxeEscenaMC2, setDeluxeEscenaMC2] = useState("")
  const [deluxeTotalMC2, setDeluxeTotalMC2] = useState(0)

  const [replica1MC1, setReplica1MC1] = useState("")
  const [replica2MC1, setReplica2MC1] = useState("")
  const [replica3MC1, setReplica3MC1] = useState("")
  const [replica4MC1, setReplica4MC1] = useState("")
  const [replica5MC1, setReplica5MC1] = useState("")
  const [replica6MC1, setReplica6MC1] = useState("")
  const [replicaTecnicaMC1, setReplicaTecnicalMC1] = useState("")
  const [replicaFlowMC1, setReplicaFlowMC1] = useState("")
  const [replicaEscenaMC1, setReplicaEscenaMC1] = useState("")
  const [replicaTotalMC1, setReplicaTotalMC1] = useState(0)

  const [replica1MC2, setReplica1MC2] = useState("")
  const [replica2MC2, setReplica2MC2] = useState("")
  const [replica3MC2, setReplica3MC2] = useState("")
  const [replica4MC2, setReplica4MC2] = useState("")
  const [replica5MC2, setReplica5MC2] = useState("")
  const [replica6MC2, setReplica6MC2] = useState("")
  const [replicaTecnicaMC2, setReplicaTecnicalMC2] = useState("")
  const [replicaFlowMC2, setReplicaFlowMC2] = useState("")
  const [replicaEscenaMC2, setReplicaEscenaMC2] = useState("")
  const [replicaTotalMC2, setReplicaTotalMC2] = useState(0)

  //Datos para guardar una batalla en el server
  const competitionRef = useRef()
  const seasonRef = useRef()
  const groupRef = useRef()
  const [nameMC1, setNameMC1] = useState("MC1")
  const [nameMC2, setNameMC2] = useState("MC2")
  const [resultadoFinalMC1, setResultadoFinalMC1] = useState(0)
  const [resultadoFinalMC2, setResultadoFinalMC2] = useState(0)

  const tokenLocal = localStorage.getItem('token');

  const data = {
    "judge": token?.filter(item => item.key === tokenLocal).map(x => x.user)[0],
    "competition": competition?.filter(item => item.name == competitionRef.current.value).map(x => x.id)[0],
    "season": season?.filter(item => item.name == seasonRef.current.value).map(x => x.id)[0],
    "group": group?.filter(item => item.name == groupRef.current.value).map(x => x.id)[0],
    "freestyler_1": freestyler?.filter(item => item.aka == nameMC1).map(x => x.id)[0],
    "freestyler_2": freestyler?.filter(item => item.aka == nameMC2).map(x => x.id)[0],
    "score_freestyler_1": resultadoFinalMC1,
    "score_freestyler_2": resultadoFinalMC2,
    "winner_replica": replicaTotalMC1 > replicaTotalMC2
      ? freestyler?.filter(item => item.aka == nameMC1).map(x => x.id)[0]
      : replicaTotalMC1 < replicaTotalMC2 ? freestyler?.filter(item => item.aka == nameMC2).map(x => x.id)[0] : 13,

    "incremental1MC1": Number(incremental1MC1),
    "incremental2MC1": Number(incremental2MC1),
    "incremental3MC1": Number(incremental3MC1),
    "incremental4MC1": Number(incremental4MC1),
    "incremental5MC1": Number(incremental5MC1),
    "incremental6MC1": Number(incremental6MC1),
    "incrementalTecnicaMC1": Number(incrementalTecnicaMC1),
    "incrementalFlowMC1": Number(incrementalFlowMC1),
    "incrementalEscenaMC1": Number(incrementalEscenaMC1),
    "incrementalTotalMC1": incrementalTotalMC1,

    "incremental1MC2": Number(incremental1MC2),
    "incremental2MC2": Number(incremental2MC2),
    "incremental3MC2": Number(incremental3MC2),
    "incremental4MC2": Number(incremental4MC2),
    "incremental5MC2": Number(incremental5MC2),
    "incremental6MC2": Number(incremental6MC2),
    "incrementalTecnicaMC2": Number(incrementalTecnicaMC2),
    "incrementalFlowMC2": Number(incrementalFlowMC2),
    "incrementalEscenaMC2": Number(incrementalEscenaMC2),
    "incrementalTotalMC2": incrementalTotalMC2,

    "random1MC1": Number(random1MC1),
    "random2MC1": Number(random2MC1),
    "random3MC1": Number(random3MC1),
    "random4MC1": Number(random4MC1),
    "random5MC1": Number(random5MC1),
    "random6MC1": Number(random6MC1),
    "randomTecnicaMC1": Number(randomTecnicaMC1),
    "randomFlowMC1": Number(randomFlowMC1),
    "randomEscenaMC1": Number(randomEscenaMC1),
    "randomTotalMC1": randomTotalMC1,

    "random1MC2": Number(random1MC2),
    "random2MC2": Number(random2MC2),
    "random3MC2": Number(random3MC2),
    "random4MC2": Number(random4MC2),
    "random5MC2": Number(random5MC2),
    "random6MC2": Number(random6MC2),
    "randomTecnicaMC2": Number(randomTecnicaMC2),
    "randomFlowMC2": Number(randomFlowMC2),
    "randomEscenaMC2": Number(randomEscenaMC2),
    "randomTotalMC2": randomTotalMC2,

    "minuto1IdaMC1": Number(minuto1IdaMC1),
    "minuto2IdaMC1": Number(minuto2IdaMC1),
    "minuto3IdaMC1": Number(minuto3IdaMC1),
    "minuto4IdaMC1": Number(minuto4IdaMC1),
    "minuto5IdaMC1": Number(minuto5IdaMC1),
    "minuto6IdaMC1": Number(minuto6IdaMC1),
    "minutoTecnicaIdaMC1": Number(minutoTecnicaIdaMC1),
    "minutoFlowIdaMC1": Number(minutoFlowIdaMC1),
    "minutoEscenaIdaMC1": Number(minutoEscenaIdaMC1),
    "minutoTotalIdaMC1": minutoTotalIdaMC1,

    "minuto1IdaMC2": Number(minuto1IdaMC2),
    "minuto2IdaMC2": Number(minuto2IdaMC2),
    "minuto3IdaMC2": Number(minuto3IdaMC2),
    "minuto4IdaMC2": Number(minuto4IdaMC2),
    "minuto5IdaMC2": Number(minuto5IdaMC2),
    "minuto6IdaMC2": Number(minuto6IdaMC2),
    "minutoTecnicaIdaMC2": Number(minutoTecnicaIdaMC2),
    "minutoFlowIdaMC2": Number(minutoFlowIdaMC2),
    "minutoEscenaIdaMC2": Number(minutoEscenaIdaMC2),
    "minutoRespuesta1MC2": Number(minutoRespuesta1MC2),
    "minutoRespuesta2MC2": Number(minutoRespuesta2MC2),
    "minutoRespuesta3MC2": Number(minutoRespuesta3MC2),
    "minutoRespuesta4MC2": Number(minutoRespuesta4MC2),
    "minutoRespuesta5MC2": Number(minutoRespuesta5MC2),
    "minutoRespuesta6MC2": Number(minutoRespuesta6MC2),
    "minutoTotalIdaMC2": minutoTotalIdaMC2,

    "minuto1VueltaMC1": Number(minuto1VueltaMC1),
    "minuto2VueltaMC1": Number(minuto2VueltaMC1),
    "minuto3VueltaMC1": Number(minuto3VueltaMC1),
    "minuto4VueltaMC1": Number(minuto4VueltaMC1),
    "minuto5VueltaMC1": Number(minuto5VueltaMC1),
    "minuto6VueltaMC1": Number(minuto6VueltaMC1),
    "minutoTecnicaVueltaMC1": Number(minutoTecnicaVueltaMC1),
    "minutoFlowVueltaMC1": Number(minutoFlowVueltaMC1),
    "minutoEscenaVueltaMC1": Number(minutoEscenaVueltaMC1),
    "minutoRespuesta1MC1": Number(minutoRespuesta1MC1),
    "minutoRespuesta2MC1": Number(minutoRespuesta2MC1),
    "minutoRespuesta3MC1": Number(minutoRespuesta3MC1),
    "minutoRespuesta4MC1": Number(minutoRespuesta4MC1),
    "minutoRespuesta5MC1": Number(minutoRespuesta5MC1),
    "minutoRespuesta6MC1": Number(minutoRespuesta6MC1),
    "minutoTotalVueltaMC1": minutoTotalVueltaMC1,

    "minuto1VueltaMC2": Number(minuto1VueltaMC2),
    "minuto2VueltaMC2": Number(minuto2VueltaMC2),
    "minuto3VueltaMC2": Number(minuto3VueltaMC2),
    "minuto4VueltaMC2": Number(minuto4VueltaMC2),
    "minuto5VueltaMC2": Number(minuto5VueltaMC2),
    "minuto6VueltaMC2": Number(minuto6VueltaMC2),
    "minutoTecnicaVueltaMC2": Number(minutoTecnicaVueltaMC2),
    "minutoFlowVueltaMC2": Number(minutoFlowVueltaMC2),
    "minutoEscenaVueltaMC2": Number(minutoEscenaVueltaMC2),
    "minutoTotalVueltaMC2": minutoTotalVueltaMC2,

    "deluxeEntrada1MC1": Number(deluxeEntrada1MC1),
    "deluxeEntrada2MC1": Number(deluxeEntrada2MC1),
    "deluxeEntrada3MC1": Number(deluxeEntrada3MC1),
    "deluxe1MC1": Number(deluxe1MC1),
    "deluxe2MC1": Number(deluxe2MC1),
    "deluxe3MC1": Number(deluxe3MC1),
    "deluxe4MC1": Number(deluxe4MC1),
    "deluxe5MC1": Number(deluxe5MC1),
    "deluxe6MC1": Number(deluxe6MC1),
    "deluxeTecnicaMC1": Number(deluxeTecnicaMC1),
    "deluxeFlowMC1": Number(deluxeFlowMC1),
    "deluxeEscenaMC1": Number(deluxeEscenaMC1),
    "deluxeTotalMC1": deluxeTotalMC1,

    "deluxeEntrada1MC2": Number(deluxeEntrada1MC2),
    "deluxeEntrada2MC2": Number(deluxeEntrada2MC2),
    "deluxeEntrada3MC2": Number(deluxeEntrada3MC2),
    "deluxe1MC2": Number(deluxe1MC2),
    "deluxe2MC2": Number(deluxe2MC2),
    "deluxe3MC2": Number(deluxe3MC2),
    "deluxe4MC2": Number(deluxe4MC2),
    "deluxe5MC2": Number(deluxe5MC2),
    "deluxe6MC2": Number(deluxe6MC2),
    "deluxeTecnicaMC2": Number(deluxeTecnicaMC2),
    "deluxeFlowMC2": Number(deluxeFlowMC2),
    "deluxeEscenaMC2": Number(deluxeEscenaMC2),
    "deluxeTotalMC2": deluxeTotalMC2,

    "replica1MC1": Number(replica1MC1),
    "replica2MC1": Number(replica2MC1),
    "replica3MC1": Number(replica3MC1),
    "replica4MC1": Number(replica4MC1),
    "replica5MC1": Number(replica5MC1),
    "replica6MC1": Number(replica6MC1),
    "replicaTecnicaMC1": Number(replicaTecnicaMC1),
    "replicaFlowMC1": Number(replicaFlowMC1),
    "replicaEscenaMC1": Number(replicaEscenaMC1),
    "replicaTotalMC1": replicaTotalMC1,

    "replica1MC2": Number(replica1MC2),
    "replica2MC2": Number(replica2MC2),
    "replica3MC2": Number(replica3MC2),
    "replica4MC2": Number(replica4MC2),
    "replica5MC2": Number(replica5MC2),
    "replica6MC2": Number(replica6MC2),
    "replicaTecnicaMC2": Number(replicaTecnicaMC2),
    "replicaFlowMC2": Number(replicaFlowMC2),
    "replicaEscenaMC2": Number(replicaEscenaMC2),
    "replicaTotalMC2": Number(replicaTotalMC2)
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    setShowModal(true)

  }

  const saveBattle = async (e) => {
    
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

  useEffect(() => { // Incremental
    setIncrementalTotalMC1(Number(incremental1MC1) + Number(incremental2MC1) + Number(incremental3MC1) +
      Number(incremental4MC1) + Number(incremental5MC1) + Number(incremental6MC1) +
      Number(incrementalTecnicaMC1) + Number(incrementalFlowMC1) + Number(incrementalEscenaMC1));
  }, [incremental1MC1, incremental2MC1, incremental3MC1, incremental4MC1, incremental5MC1, incremental6MC1, incrementalTecnicaMC1, incrementalFlowMC1, incrementalEscenaMC1]);

  useEffect(() => {
    setIncrementalTotalMC2(Number(incremental1MC2) + Number(incremental2MC2) + Number(incremental3MC2) +
      Number(incremental4MC2) + Number(incremental5MC2) + Number(incremental6MC2) +
      Number(incrementalTecnicaMC2) + Number(incrementalFlowMC2) + Number(incrementalEscenaMC2));
  }, [incremental1MC2, incremental2MC2, incremental3MC2, incremental4MC2, incremental5MC2, incremental6MC2, incrementalTecnicaMC2, incrementalFlowMC2, incrementalEscenaMC2]);

  useEffect(() => { // Random
    setRandomTotalMC1(Number(random1MC1) + Number(random2MC1) + Number(random3MC1) +
      Number(random4MC1) + Number(random5MC1) + Number(random6MC1) +
      Number(randomTecnicaMC1) + Number(randomFlowMC1) + Number(randomEscenaMC1));
  }, [random1MC1, random2MC1, random3MC1, random4MC1, random5MC1, random6MC1, randomTecnicaMC1, randomFlowMC1, randomEscenaMC1]);

  useEffect(() => {
    setRandomTotalMC2(Number(random1MC2) + Number(random2MC2) + Number(random3MC2) +
      Number(random4MC2) + Number(random5MC2) + Number(random6MC2) +
      Number(randomTecnicaMC2) + Number(randomFlowMC2) + Number(randomEscenaMC2));
  }, [random1MC2, random2MC2, random3MC2, random4MC2, random5MC2, random6MC2, randomTecnicaMC2, randomFlowMC2, randomEscenaMC2]);

  useEffect(() => { // Minuto 1 Ida
    setMinutoTotalIdaMC1(Number(minuto1IdaMC1) + Number(minuto2IdaMC1) + Number(minuto3IdaMC1) +
      Number(minuto4IdaMC1) + Number(minuto5IdaMC1) + Number(minuto6IdaMC1) +
      Number(minutoTecnicaIdaMC1) + Number(minutoFlowIdaMC1) + Number(minutoEscenaIdaMC1))
  }, [minuto1IdaMC1, minuto2IdaMC1, minuto3IdaMC1, minuto4IdaMC1, minuto5IdaMC1, minuto6IdaMC1, minutoTecnicaIdaMC1, minutoFlowIdaMC1, minutoEscenaIdaMC1])

  useEffect(() => {
    setMinutoTotalIdaMC2(Number(minuto1IdaMC2) + Number(minuto2IdaMC2) + Number(minuto3IdaMC2) +
      Number(minuto4IdaMC2) + Number(minuto5IdaMC2) + Number(minuto6IdaMC2) +
      Number(minutoTecnicaIdaMC2) + Number(minutoFlowIdaMC2) + Number(minutoEscenaIdaMC2) +
      Number(minutoRespuesta1MC2) + Number(minutoRespuesta2MC2) + Number(minutoRespuesta3MC2) +
      Number(minutoRespuesta4MC2) + Number(minutoRespuesta5MC2) + Number(minutoRespuesta6MC2))
  }, [minuto1IdaMC2, minuto2IdaMC2, minuto3IdaMC2, minuto4IdaMC2, minuto5IdaMC2, minuto6IdaMC2, minutoTecnicaIdaMC2, minutoFlowIdaMC2, minutoEscenaIdaMC2,
    minutoRespuesta1MC2, minutoRespuesta2MC2, minutoRespuesta3MC2, minutoRespuesta4MC2, minutoRespuesta5MC2, minutoRespuesta6MC2])

  useEffect(() => { // Minuto 2 Vuelta
    setMinutoTotalVueltaMC1(Number(minuto1VueltaMC1) + Number(minuto2VueltaMC1) + Number(minuto3VueltaMC1) +
      Number(minuto4VueltaMC1) + Number(minuto5VueltaMC1) + Number(minuto6VueltaMC1) +
      Number(minutoTecnicaVueltaMC1) + Number(minutoFlowVueltaMC1) + Number(minutoEscenaVueltaMC1) +
      Number(minutoRespuesta1MC1) + Number(minutoRespuesta2MC1) + Number(minutoRespuesta3MC1) +
      Number(minutoRespuesta4MC1) + Number(minutoRespuesta5MC1) + Number(minutoRespuesta6MC1))
  }, [minuto1VueltaMC1, minuto2VueltaMC1, minuto3VueltaMC1, minuto4VueltaMC1, minuto5VueltaMC1, minuto6VueltaMC1, minutoTecnicaVueltaMC1, minutoFlowVueltaMC1,
    minutoEscenaVueltaMC1, minutoRespuesta1MC1, minutoRespuesta2MC1, minutoRespuesta3MC1, minutoRespuesta4MC1, minutoRespuesta5MC1, minutoRespuesta6MC1])

  useEffect(() => {
    setMinutoTotalVueltaMC2(Number(minuto1VueltaMC2) + Number(minuto2VueltaMC2) + Number(minuto3VueltaMC2) +
      Number(minuto4VueltaMC2) + Number(minuto5VueltaMC2) + Number(minuto6VueltaMC2) +
      Number(minutoTecnicaVueltaMC2) + Number(minutoFlowVueltaMC2) + Number(minutoEscenaVueltaMC2))
  }, [minuto1VueltaMC2, minuto2VueltaMC2, minuto3VueltaMC2, minuto4VueltaMC2, minuto5VueltaMC2, minuto6VueltaMC2, minutoTecnicaVueltaMC2, minutoFlowVueltaMC2, minutoEscenaVueltaMC2])

  useEffect(() => { // Deluxe
    setDeluxeTotalMC1(Number(deluxeEntrada1MC1) + Number(deluxeEntrada2MC1) + Number(deluxeEntrada3MC1) +
      Number(deluxe1MC1) + Number(deluxe2MC1) + Number(deluxe3MC1) +
      Number(deluxe4MC1) + Number(deluxe5MC1) + Number(deluxe6MC1) +
      Number(deluxeTecnicaMC1) + Number(deluxeFlowMC1) + Number(deluxeEscenaMC1))
  }, [deluxeEntrada1MC1, deluxeEntrada2MC1, deluxeEntrada3MC1, deluxe1MC1, deluxe2MC1, deluxe3MC1,
    deluxe4MC1, deluxe5MC1, deluxe6MC1, deluxeTecnicaMC1, deluxeFlowMC1, deluxeEscenaMC1])

  useEffect(() => {
    setDeluxeTotalMC2(Number(deluxeEntrada1MC2) + Number(deluxeEntrada2MC2) + Number(deluxeEntrada3MC2) +
      Number(deluxe1MC2) + Number(deluxe2MC2) + Number(deluxe3MC2) +
      Number(deluxe4MC2) + Number(deluxe5MC2) + Number(deluxe6MC2) +
      Number(deluxeTecnicaMC2) + Number(deluxeFlowMC2) + Number(deluxeEscenaMC2))
  }, [deluxeEntrada1MC2, deluxeEntrada2MC2, deluxeEntrada3MC2, deluxe1MC2, deluxe2MC2, deluxe3MC2,
    deluxe4MC2, deluxe5MC2, deluxe6MC2, deluxeTecnicaMC2, deluxeFlowMC2, deluxeEscenaMC2])

  useEffect(() => { // Replica
    setReplicaTotalMC1(Number(replica1MC1) + Number(replica2MC1) + Number(replica3MC1) +
      Number(replica4MC1) + Number(replica5MC1) + Number(replica6MC1) +
      Number(replicaTecnicaMC1) + Number(replicaFlowMC1) + Number(replicaEscenaMC1))
  }, [replica1MC1, replica2MC1, replica3MC1, replica4MC1, replica5MC1, replica6MC1, replicaTecnicaMC1, replicaFlowMC1, replicaEscenaMC1])

  useEffect(() => {
    setReplicaTotalMC2(Number(replica1MC2) + Number(replica2MC2) + Number(replica3MC2) +
      Number(replica4MC2) + Number(replica5MC2) + Number(replica6MC2) +
      Number(replicaTecnicaMC2) + Number(replicaFlowMC2) + Number(replicaEscenaMC2))
  }, [replica1MC2, replica2MC2, replica3MC2, replica4MC2, replica5MC2, replica6MC2, replicaTecnicaMC2, replicaFlowMC2, replicaEscenaMC2])

  useEffect(() => { // Resultado Final
    setResultadoFinalMC1(Number(incrementalTotalMC1) + Number(randomTotalMC1) + Number(minutoTotalIdaMC1) +
      Number(minutoTotalVueltaMC1) + Number(deluxeTotalMC1))
  })

  useEffect(() => {
    setResultadoFinalMC2(Number(incrementalTotalMC2) + Number(randomTotalMC2) + Number(minutoTotalIdaMC2) +
      Number(minutoTotalVueltaMC2) + Number(deluxeTotalMC2))
  })


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


  return (
    <section className="bg-white pb-10 pt-6 flex flex-col gap-10">
      <div className="formato flex flex-col justify-center items-center" >
        <h3 className="text-3xl font-semibold self-start pl-16">{formatoTitle}</h3>
        {incrementalFormat && <form className="tablero flex items-end gap-10 mb-[44px]">
          <div className="flex flex-col items-end">
            <div className="mb-1 flex items-center gap-1">
              <h3 className="mr-5 text-xl font-medium">{nameMC1}</h3>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incremental1MC1} onChange={(e) => setIncremental1MC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incremental2MC1} onChange={(e) => setIncremental2MC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incremental3MC1} onChange={(e) => setIncremental3MC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incremental4MC1} onChange={(e) => setIncremental4MC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incremental5MC1} onChange={(e) => setIncremental5MC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incremental6MC1} onChange={(e) => setIncremental6MC1(e.target.value)} type="number" name="" id="" />
            </div>
            <div className="flex items-center gap-1">
              <h3 className="mr-5 text-xl font-medium">{nameMC2}</h3>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incremental1MC2} onChange={(e) => setIncremental1MC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incremental2MC2} onChange={(e) => setIncremental2MC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incremental3MC2} onChange={(e) => setIncremental3MC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incremental4MC2} onChange={(e) => setIncremental4MC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incremental5MC2} onChange={(e) => setIncremental5MC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incremental6MC2} onChange={(e) => setIncremental6MC2(e.target.value)} type="number" name="" id="" />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Técnicas</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incrementalTecnicaMC1} onChange={(e) => setIncrementalTecnicaMC1(e.target.value)} type="number" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incrementalTecnicaMC2} onChange={(e) => setIncrementalTecnicaMC2(e.target.value)} type="number" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Flow</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incrementalFlowMC1} onChange={(e) => setIncrementalFlowMC1(e.target.value)} type="number" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incrementalFlowMC2} onChange={(e) => setIncrementalFlowMC2(e.target.value)} type="number" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Escena</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incrementalEscenaMC1} onChange={(e) => setIncrementalEscenaMC1(e.target.value)} type="number" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incrementalEscenaMC2} onChange={(e) => setIncrementalEscenaMC2(e.target.value)} type="number" />
            </div>
            <div className="flex flex-col items-center gap-1 ml-5">
              <p className="font-semibold">Total</p>
              <input className="h-12 w-16 p-2 text-center font-medium text-2xl bg-violet-200" value={incrementalTotalMC1} onChange={(e) => setIncrementalTotalMC1(e.target.value)} type="number" />
              <input className="h-12 w-16 p-2 text-center font-medium text-2xl bg-violet-200" value={incrementalTotalMC2} onChange={(e) => setIncrementalTotalMC2(e.target.value)} type="number" />
            </div>
          </div>
        </form>}
        {randomModeFormat && <form className="tablero flex items-end gap-10 mb-[44px]">
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1 mb-1">
              <h3 className="mr-5 text-xl font-medium">{nameMC2}</h3>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={random1MC2} onChange={(e) => setRandom1MC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={random2MC2} onChange={(e) => setRandom2MC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={random3MC2} onChange={(e) => setRandom3MC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={random4MC2} onChange={(e) => setRandom4MC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={random5MC2} onChange={(e) => setRandom5MC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={random6MC2} onChange={(e) => setRandom6MC2(e.target.value)} type="number" name="" id="" />
            </div>
            <div className="flex items-center gap-1">
              <h3 className="mr-5 text-xl font-medium">{nameMC1}</h3>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={random1MC1} onChange={(e) => setRandom1MC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={random2MC1} onChange={(e) => setRandom2MC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={random3MC1} onChange={(e) => setRandom3MC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={random4MC1} onChange={(e) => setRandom4MC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={random5MC1} onChange={(e) => setRandom5MC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={random6MC1} onChange={(e) => setRandom6MC1(e.target.value)} type="number" name="" id="" />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Técnicas</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={randomTecnicaMC2} onChange={(e) => setRandomTecnicaMC2(e.target.value)} type="number" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={randomTecnicaMC1} onChange={(e) => setRandomTecnicaMC1(e.target.value)} type="number" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Flow</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={randomFlowMC2} onChange={(e) => setRandomFlowMC2(e.target.value)} type="number" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={randomFlowMC1} onChange={(e) => setRandomFlowMC1(e.target.value)} type="number" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Escena</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={randomEscenaMC2} onChange={(e) => setRandomEscenaMC2(e.target.value)} type="number" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={randomEscenaMC1} onChange={(e) => setRandomEscenaMC1(e.target.value)} type="number" />
            </div>
            <div className="flex flex-col items-center gap-1 ml-5">
              <p className="font-semibold">Total</p>
              <input className="h-12 w-16 p-2 text-center font-medium text-2xl bg-violet-200" value={randomTotalMC2} onChange={(e) => setRandomTotalMC2(e.target.value)} type="number" />
              <input className="h-12 w-16 p-2 text-center font-medium text-2xl bg-violet-200" value={randomTotalMC1} onChange={(e) => setRandomTotalMC1(e.target.value)} type="number" />
            </div>
          </div>
        </form>}
        {freeMinutesFormat1 && <form className="tablero flex gap-10 mb-[20px]">
          <div className="flex flex-col items-end mt-7">
            <div className="mb-1 flex items-center gap-1">
              <h3 className="mr-5 text-xl font-medium">{nameMC1}</h3>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minuto1IdaMC1} onChange={(e) => setMinuto1IdaMC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minuto2IdaMC1} onChange={(e) => setMinuto2IdaMC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minuto3IdaMC1} onChange={(e) => setMinuto3IdaMC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minuto4IdaMC1} onChange={(e) => setMinuto4IdaMC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minuto5IdaMC1} onChange={(e) => setMinuto5IdaMC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minuto6IdaMC1} onChange={(e) => setMinuto6IdaMC1(e.target.value)} type="number" name="" id="" />
            </div>
            <div className="flex items-center gap-1">
              <h3 className="mr-5 text-xl font-medium">{nameMC2}</h3>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minuto1IdaMC2} onChange={(e) => setMinuto1IdaMC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minuto2IdaMC2} onChange={(e) => setMinuto2IdaMC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minuto3IdaMC2} onChange={(e) => setMinuto3IdaMC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minuto4IdaMC2} onChange={(e) => setMinuto4IdaMC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minuto5IdaMC2} onChange={(e) => setMinuto5IdaMC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minuto6IdaMC2} onChange={(e) => setMinuto6IdaMC2(e.target.value)} type="number" name="" id="" />
            </div>
            <div className="flex pr-4 pt-2 gap-11">
              <input type="checkbox" checked={minutoRespuesta1MC2} value={minutoRespuesta1MC2 ? 0 : 1} onChange={(e) => setMinutoRespuesta1MC2(!minutoRespuesta1MC2)} />
              <input type="checkbox" checked={minutoRespuesta2MC2} value={minutoRespuesta2MC2 ? 0 : 1} onChange={(e) => setMinutoRespuesta2MC2(!minutoRespuesta2MC2)} />
              <input type="checkbox" checked={minutoRespuesta3MC2} value={minutoRespuesta3MC2 ? 0 : 1} onChange={(e) => setMinutoRespuesta3MC2(!minutoRespuesta3MC2)} />
              <input type="checkbox" checked={minutoRespuesta4MC2} value={minutoRespuesta4MC2 ? 0 : 1} onChange={(e) => setMinutoRespuesta4MC2(!minutoRespuesta4MC2)} />
              <input type="checkbox" checked={minutoRespuesta5MC2} value={minutoRespuesta5MC2 ? 0 : 1} onChange={(e) => setMinutoRespuesta5MC2(!minutoRespuesta5MC2)} />
              <input type="checkbox" checked={minutoRespuesta6MC2} value={minutoRespuesta6MC2 ? 0 : 1} onChange={(e) => setMinutoRespuesta6MC2(!minutoRespuesta6MC2)} />
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Técnicas</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoTecnicaIdaMC1} onChange={(e) => setMinutoTecnicaIdaMC1(e.target.value)} type="number" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoTecnicaIdaMC2} onChange={(e) => setMinutoTecnicaIdaMC2(e.target.value)} type="number" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Flow</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoFlowIdaMC1} onChange={(e) => setMinutoFlowIdaMC1(e.target.value)} type="number" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoFlowIdaMC2} onChange={(e) => setMinutoFlowIdaMC2(e.target.value)} type="number" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Escena</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoEscenaIdaMC1} onChange={(e) => setMinutoEscenaIdaMC1(e.target.value)} type="number" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoEscenaIdaMC2} onChange={(e) => setMinutoEscenaIdaMC2(e.target.value)} type="number" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-semibold">Total</p>
              <input className="h-12 w-16 p-2 text-center font-medium text-2xl bg-violet-200" value={minutoTotalIdaMC1} onChange={(e) => setMinutoTotalIdaMC1(e.target.value)} type="number" />
              <input className="h-12 w-16 p-2 text-center font-medium text-2xl bg-violet-200" value={minutoTotalIdaMC2} onChange={(e) => setMinutoTotalIdaMC2(e.target.value)} type="number" />
            </div>
          </div>
        </form>}
        {freeMinutesFormat2 && <form className="tablero flex gap-10 mb-[20px]">
          <div className="flex flex-col items-end mt-7">
            <div className="flex items-center gap-1 mb-1 ">
              <h3 className="mr-5 text-xl font-medium">{nameMC2}</h3>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minuto1VueltaMC2} onChange={(e) => setMinuto1VueltaMC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minuto2VueltaMC2} onChange={(e) => setMinuto2VueltaMC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minuto3VueltaMC2} onChange={(e) => setMinuto3VueltaMC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minuto4VueltaMC2} onChange={(e) => setMinuto4VueltaMC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minuto5VueltaMC2} onChange={(e) => setMinuto5VueltaMC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minuto6VueltaMC2} onChange={(e) => setMinuto6VueltaMC2(e.target.value)} type="number" name="" id="" />
            </div>
            <div className="flex items-center gap-1">
              <h3 className="mr-5 text-xl font-medium">{nameMC1}</h3>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minuto1VueltaMC1} onChange={(e) => setMinuto1VueltaMC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minuto2VueltaMC1} onChange={(e) => setMinuto2VueltaMC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minuto3VueltaMC1} onChange={(e) => setMinuto3VueltaMC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minuto4VueltaMC1} onChange={(e) => setMinuto4VueltaMC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minuto5VueltaMC1} onChange={(e) => setMinuto5VueltaMC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minuto6VueltaMC1} onChange={(e) => setMinuto6VueltaMC1(e.target.value)} type="number" name="" id="" />
            </div>
            <div className="flex pr-4 pt-2 gap-11">
              <input type="checkbox" checked={minutoRespuesta1MC1} value={minutoRespuesta1MC1 ? 0 : 1} onChange={(e) => setMinutoRespuesta1MC1(!minutoRespuesta1MC1)} />
              <input type="checkbox" checked={minutoRespuesta2MC1} value={minutoRespuesta2MC1 ? 0 : 1} onChange={(e) => setMinutoRespuesta2MC1(!minutoRespuesta2MC1)} />
              <input type="checkbox" checked={minutoRespuesta3MC1} value={minutoRespuesta3MC1 ? 0 : 1} onChange={(e) => setMinutoRespuesta3MC1(!minutoRespuesta3MC1)} />
              <input type="checkbox" checked={minutoRespuesta4MC1} value={minutoRespuesta4MC1 ? 0 : 1} onChange={(e) => setMinutoRespuesta4MC1(!minutoRespuesta4MC1)} />
              <input type="checkbox" checked={minutoRespuesta5MC1} value={minutoRespuesta5MC1 ? 0 : 1} onChange={(e) => setMinutoRespuesta5MC1(!minutoRespuesta5MC1)} />
              <input type="checkbox" checked={minutoRespuesta6MC1} value={minutoRespuesta6MC1 ? 0 : 1} onChange={(e) => setMinutoRespuesta6MC1(!minutoRespuesta6MC1)} />
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Técnicas</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoTecnicaVueltaMC2} onChange={(e) => setMinutoTecnicalVueltaMC2(e.target.value)} type="number" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoTecnicaVueltaMC1} onChange={(e) => setMinutoTecnicalVueltaMC1(e.target.value)} type="number" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Flow</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoFlowVueltaMC2} onChange={(e) => setMinutoFlowVueltaMC2(e.target.value)} type="number" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoFlowVueltaMC1} onChange={(e) => setMinutoFlowVueltaMC1(e.target.value)} type="number" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Escena</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoEscenaVueltaMC2} onChange={(e) => setMinutoEscenaVueltaMC2(e.target.value)} type="number" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoEscenaVueltaMC1} onChange={(e) => setMinutoEscenaVueltaMC1(e.target.value)} type="number" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-semibold">Total</p>
              <input className="h-12 w-16 p-2 text-center font-medium text-2xl bg-violet-200" value={minutoTotalVueltaMC2} onChange={(e) => setMinutoTotalVueltaMC2(e.target.value)} type="number" />
              <input className="h-12 w-16 p-2 text-center font-medium text-2xl bg-violet-200" value={minutoTotalVueltaMC1} onChange={(e) => setMinutoTotalVueltaMC1(e.target.value)} type="number" />
            </div>
          </div>
        </form>}
        {deluxeFormat && <form className="tablero flex items-end gap-10 mb-[44px]">
          <div className="flex flex-col items-end">
            <div className="mb-1 flex items-center gap-1">
              <h3 className="mr-5 text-xl font-medium">{nameMC1}</h3>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeEntrada1MC1} onChange={(e) => setDeluxeEntrada1MC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeEntrada2MC1} onChange={(e) => setDeluxeEntrada2MC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 mr-8 text-center font-medium text-2xl" value={deluxeEntrada3MC1} onChange={(e) => setDeluxeEntrada3MC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxe1MC1} onChange={(e) => setDeluxe1MC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxe2MC1} onChange={(e) => setDeluxe2MC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxe3MC1} onChange={(e) => setDeluxe3MC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxe4MC1} onChange={(e) => setDeluxe4MC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxe5MC1} onChange={(e) => setDeluxe5MC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxe6MC1} onChange={(e) => setDeluxe6MC1(e.target.value)} type="number" name="" id="" />
            </div>
            <div className="flex items-center gap-1">
              <h3 className="mr-5 text-xl font-medium">{nameMC2}</h3>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeEntrada1MC2} onChange={(e) => setDeluxeEntrada1MC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeEntrada2MC2} onChange={(e) => setDeluxeEntrada2MC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 mr-8 text-center font-medium text-2xl" value={deluxeEntrada3MC2} onChange={(e) => setDeluxeEntrada3MC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxe1MC2} onChange={(e) => setDeluxe1MC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxe2MC2} onChange={(e) => setDeluxe2MC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxe3MC2} onChange={(e) => setDeluxe3MC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxe4MC2} onChange={(e) => setDeluxe4MC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxe5MC2} onChange={(e) => setDeluxe5MC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxe6MC2} onChange={(e) => setDeluxe6MC2(e.target.value)} type="number" name="" id="" />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Técnicas</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeTecnicaMC1} onChange={(e) => setDeluxeTecnicaMC1(e.target.value)} type="number" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeTecnicaMC2} onChange={(e) => setDeluxeTecnicaMC2(e.target.value)} type="number" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Flow</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeFlowMC1} onChange={(e) => setDeluxeFlowMC1(e.target.value)} type="number" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeFlowMC2} onChange={(e) => setDeluxeFlowMC2(e.target.value)} type="number" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Escena</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeEscenaMC1} onChange={(e) => setDeluxeEscenaMC1(e.target.value)} type="number" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeEscenaMC2} onChange={(e) => setDeluxeEscenaMC2(e.target.value)} type="number" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-semibold">Total</p>
              <input className="h-12 w-16 p-2 text-center font-medium text-2xl bg-violet-200" value={deluxeTotalMC1} onChange={(e) => setDeluxeTotalMC1(e.target.value)} type="number" />
              <input className="h-12 w-16 p-2 text-center font-medium text-2xl bg-violet-200" value={deluxeTotalMC2} onChange={(e) => setDeluxeTotalMC2(e.target.value)} type="number" />
            </div>
          </div>
        </form>}
        {ganadorFormat && <form className="tablero flex flex-col gap-3 -mb-[20px]">
          <div className="flex gap-7">
            <div className="flex flex-col items-center justify-end gap-1">
              <p className="mb-6 font-medium text-xl">{nameMC1}</p>
              <p className="mb-2 font-medium text-xl">{nameMC2}</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Incremental</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incrementalTotalMC1} type="number" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incrementalTotalMC2} type="number" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Random</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={randomTotalMC1} type="number" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={randomTotalMC2} type="number" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Sangre 1</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoTotalIdaMC1} type="number" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoTotalIdaMC2} type="number" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Sangre 2</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoTotalVueltaMC1} type="number" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoTotalVueltaMC2} type="number" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Deluxe</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeTotalMC1} type="number" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeTotalMC2} type="number" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-semibold">Total</p>
              <input className="h-12 w-16 p-2 ml-2 text-center font-medium text-2xl bg-violet-200" value={resultadoFinalMC1} onChange={(e) => setResultadoFinalMC1(e.target.value)} type="number" />
              <input className="h-12 w-16 p-2 ml-2 text-center font-medium text-2xl bg-violet-200" value={resultadoFinalMC2} onChange={(e) => setResultadoFinalMC2(e.target.value)} type="number" />
            </div>
          </div>
          <div>
            <h3 className="text-center font-semibold text-xl py-3">{resultadoFinalMC1 > resultadoFinalMC2 ? "El ganador es: " + nameMC1 : resultadoFinalMC1 < resultadoFinalMC2 ? "El ganador es: " + nameMC2 : "Replica"}</h3>
          </div>
        </form>}
        {replicaFormat && <form className="tablero flex items-end gap-10 mb-[44px]">
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1 mb-1">
              <h3 className="mr-5 text-xl font-medium">{nameMC2}</h3>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replica1MC2} onChange={(e) => setReplica1MC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replica2MC2} onChange={(e) => setReplica2MC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replica3MC2} onChange={(e) => setReplica3MC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replica4MC2} onChange={(e) => setReplica4MC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replica5MC2} onChange={(e) => setReplica5MC2(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replica6MC2} onChange={(e) => setReplica6MC2(e.target.value)} type="number" name="" id="" />
            </div>
            <div className="flex items-center gap-1">
              <h3 className="mr-5 text-xl font-medium">{nameMC1}</h3>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replica1MC1} onChange={(e) => setReplica1MC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replica2MC1} onChange={(e) => setReplica2MC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replica3MC1} onChange={(e) => setReplica3MC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replica4MC1} onChange={(e) => setReplica4MC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replica5MC1} onChange={(e) => setReplica5MC1(e.target.value)} type="number" name="" id="" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replica6MC1} onChange={(e) => setReplica6MC1(e.target.value)} type="number" name="" id="" />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Técnicas</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replicaTecnicaMC2} onChange={(e) => setReplicaTecnicalMC2(e.target.value)} type="number" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replicaTecnicaMC1} onChange={(e) => setReplicaTecnicalMC1(e.target.value)} type="number" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Flow</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replicaFlowMC2} onChange={(e) => setReplicaFlowMC2(e.target.value)} type="number" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replicaFlowMC1} onChange={(e) => setReplicaFlowMC1(e.target.value)} type="number" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Escena</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replicaEscenaMC2} onChange={(e) => setReplicaEscenaMC2(e.target.value)} type="number" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replicaEscenaMC1} onChange={(e) => setReplicaEscenaMC1(e.target.value)} type="number" />
            </div>
            <div className="flex flex-col items-center gap-1 ml-5">
              <p className="font-semibold">Total</p>
              <input className="h-12 w-16 p-2 text-center font-medium text-2xl bg-violet-200" value={replicaTotalMC2} onChange={(e) => setReplicaTotalMC2(e.target.value)} type="number" />
              <input className="h-12 w-16 p-2 text-center font-medium text-2xl bg-violet-200" value={replicaTotalMC1} onChange={(e) => setReplicaTotalMC1(e.target.value)} type="number" />
            </div>
          </div>
        </form>}
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
        <input onChange={(i) => setNameMC1(i.target.value)} list="freestyler1" className="text-center h-12 border border-violet-400 rounded-md bg-violet-200" placeholder="Freestyler 1" />
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
