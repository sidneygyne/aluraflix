import styles from './VidoAtivo.module.css'

function VideoAtivo() {
    return (
        <>
            <section
                className={styles.background}
                width="1442" 
                height="832" 
                style={{
                    background: `
                      url('https://i.ytimg.com/vi/CaTbfdsVydE/hqdefault.jpg') no-repeat 100%
                      `,
                      backgroundSize: 'cover',
                      opacity: 0.5,

                    //   backgroundPosition: 'center'
                }}
            >

                <section className={styles.container}>
                    <div>
                        <h1>FRONTEND</h1>
                        <h2>O que faz uma desenvolvedora front-end?</h2>
                        <p>Neste vídeo o Paulo Silveira e o @DevSoutinho batem um papo sobre as métricas que não podem ser esquecidas em um bom site. Se você tá começando a programar ou ainda não sabe quais métricas utilizar no dia a dia, confira o conteúdo e anota as dicas pra colocar em prática. E se você já tem utilizado no seu site métricas incríveis que impactam diretamente na performance, conta pra gente nos comentários, queremos saber 😉✌' </p>
                    </div>
                    <div>
                        <iframe
                            width="646" height="333" src="https://www.youtube.com/embed/ZY3-MFxVdEw?si=eSflmQqCVrGWz961" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </section>
            </section>




        </>




    )
}

export default VideoAtivo