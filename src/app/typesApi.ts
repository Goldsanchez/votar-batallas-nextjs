export type PatronType = {
  patron1: string;
  patron2: string;
  patron3: string;
  patron4: string;
  patron5: string;
  patron6: string;
  tecnica: string;
  flow: string;
  escena: string;
}

export type DeluxeType = PatronType & {
  acapela1:string;
  acapela2:string;
  acapela3:string;
}
