'use client'
import { useEffect, useState } from 'react'
import { getBattles } from "../api/battles.api"
import Select from 'react-select'

export default function page() {

  const [battles, setBattles] = useState([])

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  useEffect(() => {
    console.log("Hola");

    const loadBattles = async () =>{
      const res = await getBattles()
      setBattles(res.data)
      console.log(res.data);
    }

    loadBattles

  },[])

  return (
    <div className='flex flex-col items-center pt-10'>
      {/* {battles.map((b) => <p key={b.id}>{b.freestyler_1.aka + "vs" + b.freestyler_2.aka}</p> )} */}
      <p>LIsta</p>
      <Select options={options} />
    </div>
  )
}

