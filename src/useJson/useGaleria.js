import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useVideos from '../useJson/useVideos.js'

const useGaleria = () => {
    
  const [categorias, setCategorias] = useState([
        {
            id: uuidv4(),
            nome: 'FRONT END',
            cor: '#6BD1FF',
        },
        {
            id: uuidv4(),
            nome: 'BACK END',
            cor: '#00C86F',
        },
        {
            id: uuidv4(),
            nome: 'INOVAÇÃO',
            cor: '#FFBA05',
        },
        {
            id: uuidv4(),
            nome: 'GESTÃO',
            cor: '#F96DC3',
        }
    ])
  const videos = useVideos()
  const [videosDaGaleria, setVideosDaGaleria] = useState(videos)
  const [videoSelecionado, setVideoSelecionado] = useState(null)

  const editarVideo = (video) => {
    setVideoSelecionado(video)
  }

  return {
    categorias,
    videosDaGaleria,
    videoSelecionado,
    editarVideo,
    setVideoSelecionado,
    videos,
  }
}

export default useGaleria;