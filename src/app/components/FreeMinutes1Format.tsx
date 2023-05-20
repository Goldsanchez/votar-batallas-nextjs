import React from 'react'

export function FreeMinutes1Format({minutoLibre1ObjectMC1, minutoLibre1ObjectMC2, freeMinutesFormat1, handleMinutoLibre1MC1Change, handleMinutoLibre1MC2Change, nameMC1, nameMC2, checkboxValuesMC2, handleCheckboxChangeMC2}:any) {
  return (
    <>
            {freeMinutesFormat1 && <form className="tablero flex gap-10 mb-[20px]">
          <div className="flex flex-col items-end mt-7">
            <div className="mb-1 flex items-center gap-1">
              <h3 className="mr-5 text-xl font-medium">{nameMC1}</h3>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre1ObjectMC1.patron1 == 0 ? "" : minutoLibre1ObjectMC1.patron1} onChange={handleMinutoLibre1MC1Change} type="number" name="patron1" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre1ObjectMC1.patron2 == 0 ? "" : minutoLibre1ObjectMC1.patron2} onChange={handleMinutoLibre1MC1Change} type="number" name="patron2" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre1ObjectMC1.patron3 == 0 ? "" : minutoLibre1ObjectMC1.patron3} onChange={handleMinutoLibre1MC1Change} type="number" name="patron3" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre1ObjectMC1.patron4 == 0 ? "" : minutoLibre1ObjectMC1.patron4} onChange={handleMinutoLibre1MC1Change} type="number" name="patron4" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre1ObjectMC1.patron5 == 0 ? "" : minutoLibre1ObjectMC1.patron5} onChange={handleMinutoLibre1MC1Change} type="number" name="patron5" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre1ObjectMC1.patron6 == 0 ? "" : minutoLibre1ObjectMC1.patron6} onChange={handleMinutoLibre1MC1Change} type="number" name="patron6" />
            </div>
            <div className="flex items-center gap-1">
              <h3 className="mr-5 text-xl font-medium">{nameMC2}</h3>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre1ObjectMC2.patron1 == 0 ? "" : minutoLibre1ObjectMC2.patron1} onChange={handleMinutoLibre1MC2Change} type="number" name="patron1" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre1ObjectMC2.patron2 == 0 ? "" : minutoLibre1ObjectMC2.patron2} onChange={handleMinutoLibre1MC2Change} type="number" name="patron2" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre1ObjectMC2.patron3 == 0 ? "" : minutoLibre1ObjectMC2.patron3} onChange={handleMinutoLibre1MC2Change} type="number" name="patron3" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre1ObjectMC2.patron4 == 0 ? "" : minutoLibre1ObjectMC2.patron4} onChange={handleMinutoLibre1MC2Change} type="number" name="patron4" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre1ObjectMC2.patron5 == 0 ? "" : minutoLibre1ObjectMC2.patron5} onChange={handleMinutoLibre1MC2Change} type="number" name="patron5" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre1ObjectMC2.patron6 == 0 ? "" : minutoLibre1ObjectMC2.patron6} onChange={handleMinutoLibre1MC2Change} type="number" name="patron6" />
            </div>
            <div className="flex pr-4 pt-2 gap-11">
              <input type="checkbox" checked={checkboxValuesMC2.respuesta1}  onChange={handleCheckboxChangeMC2} name="respuesta1"/>
              <input type="checkbox" checked={checkboxValuesMC2.respuesta2}  onChange={handleCheckboxChangeMC2} name="respuesta2"/>
              <input type="checkbox" checked={checkboxValuesMC2.respuesta3}  onChange={handleCheckboxChangeMC2} name="respuesta3"/>
              <input type="checkbox" checked={checkboxValuesMC2.respuesta4}  onChange={handleCheckboxChangeMC2} name="respuesta4"/>
              <input type="checkbox" checked={checkboxValuesMC2.respuesta5}  onChange={handleCheckboxChangeMC2} name="respuesta5"/>
              <input type="checkbox" checked={checkboxValuesMC2.respuesta6}  onChange={handleCheckboxChangeMC2} name="respuesta6"/>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Técnicas</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre1ObjectMC1.tecnica == 0 ? "" : minutoLibre1ObjectMC1.tecnica} onChange={handleMinutoLibre1MC1Change} type="number" name="tecnica" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre1ObjectMC2.tecnica == 0 ? "" : minutoLibre1ObjectMC2.tecnica} onChange={handleMinutoLibre1MC2Change} type="number" name="tecnica" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Flow</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre1ObjectMC1.flow == 0 ? "" : minutoLibre1ObjectMC1.flow} onChange={handleMinutoLibre1MC1Change} type="number" name="flow" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre1ObjectMC2.flow == 0 ? "" : minutoLibre1ObjectMC2.flow} onChange={handleMinutoLibre1MC2Change} type="number" name="flow" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">Escena</p>
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre1ObjectMC1.escena == 0 ? "" : minutoLibre1ObjectMC1.escena} onChange={handleMinutoLibre1MC1Change} type="number" name="escena" />
              <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre1ObjectMC2.escena == 0 ? "" : minutoLibre1ObjectMC2.escena} onChange={handleMinutoLibre1MC2Change} type="number" name="escena" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-semibold">Total</p>
              <input className="h-12 w-16 p-2 text-center font-medium text-2xl bg-violet-200" value={Object.values(minutoLibre1ObjectMC1).reduce((a, b) => Number(a) + Number(b), 0) as number} type="number" />
              <input className="h-12 w-16 p-2 text-center font-medium text-2xl bg-violet-200" value={Object.values(minutoLibre1ObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) as number + Object.values(checkboxValuesMC2).reduce((total:number, value) => total + (value ? 1 : 0), 0) as number} type="number" />
            </div>
          </div>
        </form>}
    </>
  )
}
