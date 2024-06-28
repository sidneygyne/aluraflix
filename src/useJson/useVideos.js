import { useEffect, useState } from 'react'

const useVideos = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch('https://json-server-rho-lovat.vercel.app/aluraflix')
      .then(resposta => resposta.json())
      .then(dados => {
        setVideos(dados)
      })
  }, [])

  return videos
}

export default useVideos