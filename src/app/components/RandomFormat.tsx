

export function RandomFormat({randomObjectMC1, randomObjectMC2, randomModeFormat, handleRandomMC1Change, handleRandomMC2Change, nameMC1, nameMC2}:any) {
  return (
    <>
        {randomModeFormat && <form className="tablero flex items-end gap-10 mb-[44px]">
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1 mb-1">
              <h3 className="mr-5 text-xl font-medium">{nameMC2}</h3>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={randomObjectMC2.patron1 == 0 ? "" : randomObjectMC2.patron1} onChange={handleRandomMC2Change} name="patron1" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={randomObjectMC2.patron2 == 0 ? "" : randomObjectMC2.patron2} onChange={handleRandomMC2Change} name="patron2" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={randomObjectMC2.patron3 == 0 ? "" : randomObjectMC2.patron3} onChange={handleRandomMC2Change} name="patron3" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={randomObjectMC2.patron4 == 0 ? "" : randomObjectMC2.patron4} onChange={handleRandomMC2Change} name="patron4" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={randomObjectMC2.patron5 == 0 ? "" : randomObjectMC2.patron5} onChange={handleRandomMC2Change} name="patron5" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={randomObjectMC2.patron6 == 0 ? "" : randomObjectMC2.patron6} onChange={handleRandomMC2Change} name="patron6" />
            </div>
            <div className="flex items-center gap-1">
              <h3 className="mr-5 text-xl font-medium">{nameMC1}</h3>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={randomObjectMC1.patron1 == 0 ? "" : randomObjectMC1.patron1} onChange={handleRandomMC1Change} name="patron1" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={randomObjectMC1.patron2 == 0 ? "" : randomObjectMC1.patron2} onChange={handleRandomMC1Change} name="patron2" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={randomObjectMC1.patron3 == 0 ? "" : randomObjectMC1.patron3} onChange={handleRandomMC1Change} name="patron3" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={randomObjectMC1.patron4 == 0 ? "" : randomObjectMC1.patron4} onChange={handleRandomMC1Change} name="patron4" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={randomObjectMC1.patron5 == 0 ? "" : randomObjectMC1.patron5} onChange={handleRandomMC1Change} name="patron5" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={randomObjectMC1.patron6 == 0 ? "" : randomObjectMC1.patron6} onChange={handleRandomMC1Change} name="patron6" />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Técnicas</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={randomObjectMC2.tecnica == 0 ? "" : randomObjectMC2.tecnica} onChange={handleRandomMC2Change} name="tecnica" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={randomObjectMC1.tecnica == 0 ? "" : randomObjectMC1.tecnica} onChange={handleRandomMC1Change} name="tecnica" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Flow</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={randomObjectMC2.flow == 0 ? "" : randomObjectMC2.flow} onChange={handleRandomMC2Change} name="flow" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={randomObjectMC1.flow == 0 ? "" : randomObjectMC1.flow} onChange={handleRandomMC1Change} name="flow" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Escena</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={randomObjectMC2.escena == 0 ? "" : randomObjectMC2.escena} onChange={handleRandomMC2Change} name="escena" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={randomObjectMC1.escena == 0 ? "" : randomObjectMC1.escena} onChange={handleRandomMC1Change} name="escena" />
            </div>
            <div className="flex flex-col items-center gap-1 ml-5">
              <p className="font-semibold">Total</p>
              <input className="h-12 w-16 p-2 text-center font-medium text-2xl bg-violet-200" value={Object.values(randomObjectMC2).reduce((a:number, b) => Number(a) + Number(b), 0)} />
              <input className="h-12 w-16 p-2 text-center font-medium text-2xl bg-violet-200" value={Object.values(randomObjectMC1).reduce((a:number, b) => Number(a) + Number(b), 0)} />
            </div>
          </div>
        </form>}
    </>
  )
}
