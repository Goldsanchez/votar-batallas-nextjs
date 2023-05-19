export interface ICompetition {
  id:   number;
  name: string;
}

export interface ISeason {
  id: number
  name: string
}

export interface IGroup {
  id: number
  name: string
}

export interface IFreestyler {
  id: number
  aka: string
  name: string
  lastname: string
  country: number
}

export interface ICountry {
  id: number
  name: string
}

export interface IUser {
  id: number
  username: string
  email: string
}

export interface IToken {
  key: string
  created: string
  user: number
}

export interface IBattle {
  id: number
  score_freestyler_1: number
  score_freestyler_2: number
  created_at: string
  incremental1MC1: number
  incremental2MC1: number
  incremental3MC1: number
  incremental4MC1: number
  incremental5MC1: number
  incremental6MC1: number
  incrementalTecnicaMC1: number
  incrementalFlowMC1: number
  incrementalEscenaMC1: number
  incrementalTotalMC1: number
  incremental1MC2: number
  incremental2MC2: number
  incremental3MC2: number
  incremental4MC2: number
  incremental5MC2: number
  incremental6MC2: number
  incrementalTecnicaMC2: number
  incrementalFlowMC2: number
  incrementalEscenaMC2: number
  incrementalTotalMC2: number
  random1MC1: number
  random2MC1: number
  random3MC1: number
  random4MC1: number
  random5MC1: number
  random6MC1: number
  randomTecnicaMC1: number
  randomFlowMC1: number
  randomEscenaMC1: number
  randomTotalMC1: number
  random1MC2: number
  random2MC2: number
  random3MC2: number
  random4MC2: number
  random5MC2: number
  random6MC2: number
  randomTecnicaMC2: number
  randomFlowMC2: number
  randomEscenaMC2: number
  randomTotalMC2: number
  minuto1IdaMC1: number
  minuto2IdaMC1: number
  minuto3IdaMC1: number
  minuto4IdaMC1: number
  minuto5IdaMC1: number
  minuto6IdaMC1: number
  minutoTecnicaIdaMC1: number
  minutoFlowIdaMC1: number
  minutoEscenaIdaMC1: number
  minutoTotalIdaMC1: number
  minuto1IdaMC2: number
  minuto2IdaMC2: number
  minuto3IdaMC2: number
  minuto4IdaMC2: number
  minuto5IdaMC2: number
  minuto6IdaMC2: number
  minutoTecnicaIdaMC2: number
  minutoFlowIdaMC2: number
  minutoEscenaIdaMC2: number
  minutoRespuesta1MC2: number
  minutoRespuesta2MC2: number
  minutoRespuesta3MC2: number
  minutoRespuesta4MC2: number
  minutoRespuesta5MC2: number
  minutoRespuesta6MC2: number
  minutoTotalIdaMC2: number
  minuto1VueltaMC1: number
  minuto2VueltaMC1: number
  minuto3VueltaMC1: number
  minuto4VueltaMC1: number
  minuto5VueltaMC1: number
  minuto6VueltaMC1: number
  minutoTecnicaVueltaMC1: number
  minutoFlowVueltaMC1: number
  minutoEscenaVueltaMC1: number
  minutoRespuesta1MC1: number
  minutoRespuesta2MC1: number
  minutoRespuesta3MC1: number
  minutoRespuesta4MC1: number
  minutoRespuesta5MC1: number
  minutoRespuesta6MC1: number
  minutoTotalVueltaMC1: number
  minuto1VueltaMC2: number
  minuto2VueltaMC2: number
  minuto3VueltaMC2: number
  minuto4VueltaMC2: number
  minuto5VueltaMC2: number
  minuto6VueltaMC2: number
  minutoTecnicaVueltaMC2: number
  minutoFlowVueltaMC2: number
  minutoEscenaVueltaMC2: number
  minutoTotalVueltaMC2: number
  deluxeEntrada1MC1: number
  deluxeEntrada2MC1: number
  deluxeEntrada3MC1: number
  deluxe1MC1: number
  deluxe2MC1: number
  deluxe3MC1: number
  deluxe4MC1: number
  deluxe5MC1: number
  deluxe6MC1: number
  deluxeTecnicaMC1: number
  deluxeFlowMC1: number
  deluxeEscenaMC1: number
  deluxeTotalMC1: number
  deluxeEntrada1MC2: number
  deluxeEntrada2MC2: number
  deluxeEntrada3MC2: number
  deluxe1MC2: number
  deluxe2MC2: number
  deluxe3MC2: number
  deluxe4MC2: number
  deluxe5MC2: number
  deluxe6MC2: number
  deluxeTecnicaMC2: number
  deluxeFlowMC2: number
  deluxeEscenaMC2: number
  deluxeTotalMC2: number
  replica1MC1: number
  replica2MC1: number
  replica3MC1: number
  replica4MC1: number
  replica5MC1: number
  replica6MC1: number
  replicaTecnicaMC1: number
  replicaFlowMC1: number
  replicaEscenaMC1: number
  replicaTotalMC1: number
  replica1MC2: number
  replica2MC2: number
  replica3MC2: number
  replica4MC2: number
  replica5MC2: number
  replica6MC2: number
  replicaTecnicaMC2: number
  replicaFlowMC2: number
  replicaEscenaMC2: number
  replicaTotalMC2: number
  judge: IUser
  freestyler_1: IFreestyler
  freestyler_2: IFreestyler
  winner_replica: IFreestyler
  competition: ICompetition
  season: ISeason
  group: IGroup
}


