import React from 'react'

export function ReplicaFormat({replicaObjectMC1, replicaObjectMC2, replicaFormat, handleReplicaMC1Change, handleReplicaMC2Change, nameMC1, nameMC2}:any) {
  return (
    <>
      {replicaFormat && <form className="tablero flex items-end gap-10 mb-[44px]">
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-1 mb-1">
            <h3 className="mr-5 text-xl font-medium">{nameMC2}</h3>
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replicaObjectMC2.patron1 == 0 ? "" : replicaObjectMC2.patron1} onChange={handleReplicaMC2Change} type="number" name="patron1" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replicaObjectMC2.patron2 == 0 ? "" : replicaObjectMC2.patron2} onChange={handleReplicaMC2Change} type="number" name="patron2" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replicaObjectMC2.patron3 == 0 ? "" : replicaObjectMC2.patron3} onChange={handleReplicaMC2Change} type="number" name="patron3" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replicaObjectMC2.patron4 == 0 ? "" : replicaObjectMC2.patron4} onChange={handleReplicaMC2Change} type="number" name="patron4" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replicaObjectMC2.patron5 == 0 ? "" : replicaObjectMC2.patron5} onChange={handleReplicaMC2Change} type="number" name="patron5" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replicaObjectMC2.patron6 == 0 ? "" : replicaObjectMC2.patron6} onChange={handleReplicaMC2Change} type="number" name="patron6" />
          </div>
          <div className="flex items-center gap-1">
            <h3 className="mr-5 text-xl font-medium">{nameMC1}</h3>
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replicaObjectMC1.patron1 == 0 ? "" : replicaObjectMC1.patron1} onChange={handleReplicaMC1Change} type="number" name="patron1" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replicaObjectMC1.patron2 == 0 ? "" : replicaObjectMC1.patron2} onChange={handleReplicaMC1Change} type="number" name="patron2" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replicaObjectMC1.patron3 == 0 ? "" : replicaObjectMC1.patron3} onChange={handleReplicaMC1Change} type="number" name="patron3" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replicaObjectMC1.patron4 == 0 ? "" : replicaObjectMC1.patron4} onChange={handleReplicaMC1Change} type="number" name="patron4" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replicaObjectMC1.patron5 == 0 ? "" : replicaObjectMC1.patron5} onChange={handleReplicaMC1Change} type="number" name="patron5" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replicaObjectMC1.patron6 == 0 ? "" : replicaObjectMC1.patron6} onChange={handleReplicaMC1Change} type="number" name="patron6" />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col items-center gap-1">
            <p className="font-medium">Técnicas</p>
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replicaObjectMC2.tecnica == 0 ? "" : replicaObjectMC2.tecnica} onChange={handleReplicaMC2Change} type="number" name="tecnica" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replicaObjectMC1.tecnica == 0 ? "" : replicaObjectMC1.tecnica} onChange={handleReplicaMC1Change} type="number" name="tecnica" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="font-medium">Flow</p>
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replicaObjectMC2.flow == 0 ? "" : replicaObjectMC2.flow} onChange={handleReplicaMC2Change} type="number" name="flow" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replicaObjectMC1.flow == 0 ? "" : replicaObjectMC1.flow} onChange={handleReplicaMC1Change} type="number" name="flow" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="font-medium">Escena</p>
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replicaObjectMC2.escena == 0 ? "" : replicaObjectMC2.escena} onChange={handleReplicaMC2Change} type="number" name="escena" />
            <input className="h-12 w-14 p-2 text-center font-medium text-2xl" value={replicaObjectMC1.escena == 0 ? "" : replicaObjectMC1.escena} onChange={handleReplicaMC1Change} type="number" name="escena" />
          </div>
          <div className="flex flex-col items-center gap-1 ml-5">
            <p className="font-semibold">Total</p>
            <input className="h-12 w-16 p-2 text-center font-medium text-2xl bg-violet-200" value={Object.values(replicaObjectMC2).reduce((a:number, b) => Number(a) + Number(b), 0) as number} />
            <input className="h-12 w-16 p-2 text-center font-medium text-2xl bg-violet-200" value={Object.values(replicaObjectMC1).reduce((a:number, b) => Number(a) + Number(b), 0) as number} />
          </div>
        </div>
      </form>}
    </>
  )
}
