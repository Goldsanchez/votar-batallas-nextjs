import React from 'react'

export function DeluxeFormat({ deluxeObjectMC1, deluxeObjectMC2, deluxeFormat, handleDeluxeMC1Change, handleDeluxeMC2Change, nameMC1, nameMC2 }:any) {
  return (
    <>
      {deluxeFormat && <form className="tablero flex items-end gap-10 mb-[44px]">
        <div className="flex flex-col items-end">
          <div className="mb-1 flex items-center gap-1">
            <h3 className="mr-5 text-xl font-medium">{nameMC1}</h3>
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeObjectMC1.acapela1} onChange={handleDeluxeMC1Change} name="acapela1" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeObjectMC1.acapela2} onChange={handleDeluxeMC1Change} name="acapela2" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeObjectMC1.acapela3} onChange={handleDeluxeMC1Change} name="acapela3" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeObjectMC1.patron1} onChange={handleDeluxeMC1Change} name="patron1" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeObjectMC1.patron2} onChange={handleDeluxeMC1Change} name="patron2" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeObjectMC1.patron3} onChange={handleDeluxeMC1Change} name="patron3" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeObjectMC1.patron4} onChange={handleDeluxeMC1Change} name="patron4" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeObjectMC1.patron5} onChange={handleDeluxeMC1Change} name="patron5" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeObjectMC1.patron6} onChange={handleDeluxeMC1Change} name="patron6" />
          </div>
          <div className="flex items-center gap-1">
            <h3 className="mr-5 text-xl font-medium">{nameMC2}</h3>
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeObjectMC2.acapela1} onChange={handleDeluxeMC2Change} name="acapela1" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeObjectMC2.acapela2} onChange={handleDeluxeMC2Change} name="acapela2" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeObjectMC2.acapela3} onChange={handleDeluxeMC2Change} name="acapela3" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeObjectMC2.patron1} onChange={handleDeluxeMC2Change} name="patron1" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeObjectMC2.patron2} onChange={handleDeluxeMC2Change} name="patron2" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeObjectMC2.patron3} onChange={handleDeluxeMC2Change} name="patron3" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeObjectMC2.patron4} onChange={handleDeluxeMC2Change} name="patron4" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeObjectMC2.patron5} onChange={handleDeluxeMC2Change} name="patron5" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeObjectMC2.patron6} onChange={handleDeluxeMC2Change} name="patron6"/>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col items-center gap-1">
            <p className="font-medium">Técnicas</p>
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeObjectMC1.tecnica} onChange={handleDeluxeMC1Change} type="number" name="tecnica" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeObjectMC2.tecnica} onChange={handleDeluxeMC2Change} type="number" name="tecnica" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="font-medium">Flow</p>
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeObjectMC1.flow} onChange={handleDeluxeMC1Change} type="number" name="flow" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeObjectMC2.flow} onChange={handleDeluxeMC2Change} type="number" name="flow" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="font-medium">Escena</p>
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeObjectMC1.escena} onChange={handleDeluxeMC1Change} type="number" name="escena" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={deluxeObjectMC2.escena} onChange={handleDeluxeMC2Change} type="number" name="escena" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="font-semibold">Total</p>
            <input className="h-12 w-16 p-2 text-center font-medium text-2xl bg-violet-200" value={Object.values(deluxeObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) as number} type="number" />
            <input className="h-12 w-16 p-2 text-center font-medium text-2xl bg-violet-200" value={Object.values(deluxeObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) as number} type="number" />
          </div>
        </div>
      </form>}
    </>
  )
}
