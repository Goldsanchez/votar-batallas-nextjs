

export function IncrementalFormat({incrementalObjectMC1, incrementalObjectMC2, incrementalFormat, handleIncrementalMC1Change, handleIncrementalMC2Change, nameMC1, nameMC2}:any) {
  return (
<>
{incrementalFormat && <form className="tablero w-full flex flex-col gap-10 mb-[44px]">
    <div className="flex flex-row justify-center gap-1">
      <div className="mb-1 flex flex-col justify-end gap-1">
        <h3 className="text-xl font-medium">{nameMC1}</h3>
        <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incrementalObjectMC1.patron1} onChange={handleIncrementalMC1Change} name="patron1" />
        <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incrementalObjectMC1.patron2} onChange={handleIncrementalMC1Change} name="patron2" />
        <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incrementalObjectMC1.patron3} onChange={handleIncrementalMC1Change} name="patron3" />
        <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incrementalObjectMC1.patron4} onChange={handleIncrementalMC1Change} name="patron4" />
        <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incrementalObjectMC1.patron5} onChange={handleIncrementalMC1Change} name="patron5" />
        <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incrementalObjectMC1.patron6} onChange={handleIncrementalMC1Change} name="patron6" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <h3 className="text-xl font-medium">{nameMC2}</h3>
        <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incrementalObjectMC2.patron1} onChange={handleIncrementalMC2Change} name="patron1" />
        <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incrementalObjectMC2.patron2} onChange={handleIncrementalMC2Change} name="patron2" />
        <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incrementalObjectMC2.patron3} onChange={handleIncrementalMC2Change} name="patron3" />
        <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incrementalObjectMC2.patron4} onChange={handleIncrementalMC2Change} name="patron4" />
        <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incrementalObjectMC2.patron5} onChange={handleIncrementalMC2Change} name="patron5" />
        <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incrementalObjectMC2.patron6} onChange={handleIncrementalMC2Change} name="patron6" />
      </div>
    </div>
    <div className="flex flex-col items-end gap-3 pr-32">
      <div className="flex flex-row items-center gap-1">
        <p className="font-medium">Técnicas</p>
        <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incrementalObjectMC1.tecnica == 0 ? "" : incrementalObjectMC1.tecnica} onChange={handleIncrementalMC1Change} name="tecnica" />
        <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incrementalObjectMC2.tecnica == 0 ? "" : incrementalObjectMC2.tecnica} onChange={handleIncrementalMC2Change} name="tecnica" />
      </div>
      <div className="flex flex-row items-center gap-1">
        <p className="font-medium">Flow</p>
        <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incrementalObjectMC1.flow == 0 ? "" : incrementalObjectMC1.flow} onChange={handleIncrementalMC1Change} name="flow" />
        <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incrementalObjectMC2.flow == 0 ? "" : incrementalObjectMC2.flow} onChange={handleIncrementalMC2Change} name="flow" />
      </div>
      <div className="flex flex-row items-center gap-1">
        <p className="font-medium">Escena</p>
        <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incrementalObjectMC1.escena == 0 ? "" : incrementalObjectMC1.escena} onChange={handleIncrementalMC1Change} name="escena" />
        <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={incrementalObjectMC2.escena == 0 ? "" : incrementalObjectMC2.escena} onChange={handleIncrementalMC2Change} name="escena" />
      </div>
      <div className="flex flex-row items-center gap-1 ml-5">
        <p className="font-semibold">Total</p>
        <input className="h-12 w-14 p-2 text-center font-medium text-2xl bg-violet-200"  value={Object.values(incrementalObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) as number} />
        <input className="h-12 w-14 p-2 text-center font-medium text-2xl bg-violet-200"  value={Object.values(incrementalObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) as number} />
      </div>
    </div>
  </form>}
</>
  )
}
