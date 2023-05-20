import React from 'react'

export function FreeMinutes2Format({ minutoLibre2ObjectMC1, minutoLibre2ObjectMC2, freeMinutesFormat2, handleMinutoLibre2MC1Change, handleMinutoLibre2MC2Change, nameMC1, nameMC2,  checkboxValuesMC1, handleCheckboxChangeMC1 }:any) {
  return (
    <>
      {freeMinutesFormat2 && <form className="tablero flex gap-10 mb-[20px]">
        <div className="flex flex-col items-end mt-7">
          <div className="flex items-center gap-1 mb-1 ">
            <h3 className="mr-5 text-xl font-medium">{nameMC2}</h3>
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre2ObjectMC2.patron1 == 0 ? "" : minutoLibre2ObjectMC2.patron1} onChange={handleMinutoLibre2MC2Change} type="number" name="patron1" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre2ObjectMC2.patron2 == 0 ? "" : minutoLibre2ObjectMC2.patron2} onChange={handleMinutoLibre2MC2Change} type="number" name="patron2" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre2ObjectMC2.patron3 == 0 ? "" : minutoLibre2ObjectMC2.patron3} onChange={handleMinutoLibre2MC2Change} type="number" name="patron3" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre2ObjectMC2.patron4 == 0 ? "" : minutoLibre2ObjectMC2.patron4} onChange={handleMinutoLibre2MC2Change} type="number" name="patron4" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre2ObjectMC2.patron5 == 0 ? "" : minutoLibre2ObjectMC2.patron5} onChange={handleMinutoLibre2MC2Change} type="number" name="patron5" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre2ObjectMC2.patron6 == 0 ? "" : minutoLibre2ObjectMC2.patron6} onChange={handleMinutoLibre2MC2Change} type="number" name="patron6" />
          </div>
          <div className="flex items-center gap-1">
            <h3 className="mr-5 text-xl font-medium">{nameMC1}</h3>
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre2ObjectMC1.patron1 == 0 ? "" : minutoLibre2ObjectMC1.patron1} onChange={handleMinutoLibre2MC1Change} type="number" name="patron1" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre2ObjectMC1.patron2 == 0 ? "" : minutoLibre2ObjectMC1.patron2} onChange={handleMinutoLibre2MC1Change} type="number" name="patron2" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre2ObjectMC1.patron3 == 0 ? "" : minutoLibre2ObjectMC1.patron3} onChange={handleMinutoLibre2MC1Change} type="number" name="patron3" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre2ObjectMC1.patron4 == 0 ? "" : minutoLibre2ObjectMC1.patron4} onChange={handleMinutoLibre2MC1Change} type="number" name="patron4" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre2ObjectMC1.patron5 == 0 ? "" : minutoLibre2ObjectMC1.patron5} onChange={handleMinutoLibre2MC1Change} type="number" name="patron5" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre2ObjectMC1.patron6 == 0 ? "" : minutoLibre2ObjectMC1.patron6} onChange={handleMinutoLibre2MC1Change} type="number" name="patron6" />
          </div>
          <div className="flex pr-4 pt-2 gap-11">
              <input type="checkbox" checked={checkboxValuesMC1.respuesta1}  onChange={handleCheckboxChangeMC1} name="respuesta1"/>
              <input type="checkbox" checked={checkboxValuesMC1.respuesta2}  onChange={handleCheckboxChangeMC1} name="respuesta2"/>
              <input type="checkbox" checked={checkboxValuesMC1.respuesta3}  onChange={handleCheckboxChangeMC1} name="respuesta3"/>
              <input type="checkbox" checked={checkboxValuesMC1.respuesta4}  onChange={handleCheckboxChangeMC1} name="respuesta4"/>
              <input type="checkbox" checked={checkboxValuesMC1.respuesta5}  onChange={handleCheckboxChangeMC1} name="respuesta5"/>
              <input type="checkbox" checked={checkboxValuesMC1.respuesta6}  onChange={handleCheckboxChangeMC1} name="respuesta6"/>
          </div>
        </div>
        <div className="flex gap-3 items-start">
          <div className="flex flex-col items-center gap-1">
            <p className="font-medium">Técnicas</p>
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre2ObjectMC2.tecnica == 0 ? "" : minutoLibre2ObjectMC2.tecnica} onChange={handleMinutoLibre2MC2Change} type="number" name="tecnica" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre2ObjectMC1.tecnica == 0 ? "" : minutoLibre2ObjectMC1.tecnica} onChange={handleMinutoLibre2MC1Change} type="number" name="tecnica" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="font-medium">Flow</p>
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre2ObjectMC2.flow == 0 ? "" : minutoLibre2ObjectMC2.flow} onChange={handleMinutoLibre2MC2Change} type="number" name="flow" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre2ObjectMC1.flow == 0 ? "" : minutoLibre2ObjectMC1.flow} onChange={handleMinutoLibre2MC1Change} type="number" name="flow" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="font-medium">Escena</p>
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre2ObjectMC2.escena == 0 ? "" : minutoLibre2ObjectMC2.escena} onChange={handleMinutoLibre2MC2Change} type="number" name="escena" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={minutoLibre2ObjectMC1.escena == 0 ? "" : minutoLibre2ObjectMC1.escena} onChange={handleMinutoLibre2MC1Change} type="number" name="escena" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="font-semibold">Total</p>
            <input className="h-12 w-16 p-2 text-center font-medium text-2xl bg-violet-200" value={Object.values(minutoLibre2ObjectMC2).reduce((a, b) => Number(a) + Number(b), 0) as number} type="number" />
            <input className="h-12 w-16 p-2 text-center font-medium text-2xl bg-violet-200" value={Object.values(minutoLibre2ObjectMC1).reduce((a:number, b) => Number(a) + Number(b), 0) + Object.values(checkboxValuesMC1).reduce((total:number, value) => total + (value ? 1 : 0), 0)} type="number" />
          </div>
        </div>
      </form>}
    </>
  )
}
