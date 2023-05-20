export type PatronType = {
  patron1: number;
  patron2: number;
  patron3: number;
  patron4: number;
  patron5: number;
  patron6: number;
  tecnica: number;
  flow: number;
  escena: number;
}

export type DeluxeType = PatronType & {
  acapela1:number;
  acapela2:number;
  acapela3:number;
}
