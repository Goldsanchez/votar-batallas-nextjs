'use client'
import { useEffect, useState } from 'react'

export default function Page() {

  const apiKey = "AI-T1Mprueba"
  const [video, setVideo] = useState([]);

  useEffect(() => {

    fetch(`https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=${apiKey}`)
      .then(response => response.json())
      .then(data => {

        const videoData = data.items;
        console.log(videoData[0].id);
        setVideo(videoData[0].id);
        // Haz algo con los videos obtenidos
      })
      .catch(error => {
        // Manejo de errores
      });

  }, [])

  return (
    <div className='flex flex-col items-center pt-10'>
      <h3>Dashboard</h3>
      <iframe width="420" height="345" src={`https://www.youtube.com/embed/${video}`}>
      </iframe>
      <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
      </iframe>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3901.000937360966!2d-77.037624!3d-12.112088!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c83eea1fdfc7%3A0xafaf6fd24e1c0264!2sC.%20Lino%20Alarco%20157%2C%20Miraflores%2015074%2C%20Peru!5e0!3m2!1sen!2sus!4v1686797225827!5m2!1sen!2sus" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

