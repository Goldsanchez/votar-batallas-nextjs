import { useState } from "react"



export function GanadorFormat({ganadorFormat, incrementalObjectMC1, incrementalObjectMC2, randomObjectMC1, randomObjectMC2, minutoLibre1ObjectMC1, minutoLibre1ObjectMC2,
  minutoLibre2ObjectMC1, minutoLibre2ObjectMC2, deluxeObjectMC1, deluxeObjectMC2, nameMC1, nameMC2, resultadoFinalMC1, resultadoFinalMC2}:any) {

  
    return (
    <>
      {ganadorFormat && <form className="tablero flex flex-col gap-3 -mb-[20px]">
        <div className="flex gap-7">
          <div className="flex flex-col items-center justify-end gap-1">
            <p className="mb-6 font-medium text-xl">{nameMC1}</p>
            <p className="mb-2 font-medium text-xl">{nameMC2}</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="font-medium">Incremental</p>
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={Object.values(incrementalObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) as number} type="number" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={Object.values(incrementalObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) as number} type="number" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="font-medium">Random</p>
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={Object.values(randomObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) as number} type="number" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={Object.values(randomObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) as number} type="number" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="font-medium">Sangre 1</p>
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={Object.values(minutoLibre1ObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) as number} type="number" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={Object.values(minutoLibre1ObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) as number} type="number" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="font-medium">Sangre 2</p>
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={Object.values(minutoLibre2ObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) as number} type="number" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={Object.values(minutoLibre2ObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) as number} type="number" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="font-medium">Deluxe</p>
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={Object.values(deluxeObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) as number} type="number" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={Object.values(deluxeObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) as number} type="number" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="font-semibold">Total</p>
            <input className="h-12 w-16 p-2 ml-2 text-center font-medium text-2xl bg-violet-200" value={resultadoFinalMC1} type="number" />
            <input className="h-12 w-16 p-2 ml-2 text-center font-medium text-2xl bg-violet-200" value={resultadoFinalMC2} type="number" />
          </div>
        </div>
        <div>
          <h3 className="text-center font-semibold text-xl py-3">{resultadoFinalMC1 > resultadoFinalMC2 ? "El ganador es: " + nameMC1 : resultadoFinalMC1 < resultadoFinalMC2 ? "El ganador es: " + nameMC2 : "Replica"}</h3>
        </div>
      </form>}
    </>
  )
}
