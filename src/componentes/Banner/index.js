import styles from './Banner.module.css'
import video from '../../json/destaques.json'
import { useEffect, useState } from 'react'
import { FcPrevious } from "react-icons/fc"
import { FcNext } from "react-icons/fc"


function Banner({ categoria }) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const sortearVideo = video.sort(() => Math.random() - 0.5)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sortearVideo.length);
        }, 5000)

        return () => clearInterval(interval)
    }, [sortearVideo])

    const nextItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % video.length);
    }

    const prevItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + video.length) % video.length);
    }

    const currentItem = video[currentIndex];

    return (
        <section className={styles.container}>
            <div
                className={styles.fundo}
                // width="1442"
                // height="832"
                style={{
  
                 
                    backgroundImage: `linear-gradient(to bottom,
                        rgba(0, 0, 0, 0.56),
                        rgba(0, 0, 0, 0.56)),
                      url('${currentItem.imagem}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100%',
                    width: '100%',
                    maxHeight: 'auto',
                }}
            >
                <div className={styles.previosAndNex}>
                    <FcPrevious onClick={prevItem} className={styles.icone}/>
                    <FcNext onClick={nextItem} className={styles.icone} />
                </div>

                <div className={styles.item}>
                    <div>
                        <h1 style={{ backgroundColor: currentItem.cor }} >{currentItem.categoria}</h1>
                        <h2>{currentItem.titulo}</h2>
                        <p>{currentItem.descricao}</p>
                    </div>
                    <div className={styles.minibanner} style={{color: currentItem.cor}}>
                        <img className={styles.imagem} alt={currentItem.titulo} src={currentItem.imagem} ></img>
                        <div className={styles.divImg} style={{ color: currentItem.cor }}></div>
                        {/* <iframe
                            width="646" height="333" src="https://www.youtube.com/embed/ZY3-MFxVdEw?si=eSflmQqCVrGWz961" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner