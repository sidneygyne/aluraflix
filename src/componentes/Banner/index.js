import styles from './Banner.module.css'

function Banner({ categoria }) {

    const imagem = "https://i.ytimg.com/vi/MGIs7DSQ-0A/maxresdefault.jpg"

    console.log(categoria)
    return (
        <>
            <section
                className={styles.background}
                width="1442"
                height="832"
                style={{
                    background: `
                    linear-gradient(to bottom,
                        rgba(0, 0, 0, 0.56),
                        rgba(0, 0, 0, 0.56)),
                      url('${imagem}') no-repeat 100%
                      `,
                    backgroundSize: 'cover',
                    

                    //   backgroundPosition: 'center'
                }}
            >

                <section className={styles.container}>
                    <div>
                        <h1 style={{ backgroundColor: '#E53935' }} >FRONTEND</h1>
                        <h2>O que faz uma desenvolvedora front-end?</h2>
                        <p>Neste vídeo o Paulo Silveira e o @DevSoutinho batem um papo sobre as métricas que não podem ser esquecidas em um bom site. Se você tá começando a programar ou ainda não sabe quais métricas utilizar no dia a dia, confira o conteúdo e anota as dicas pra colocar em prática. E se você já tem utilizado no seu site métricas incríveis que impactam diretamente na performance, conta pra gente nos comentários, queremos saber 😉✌' </p>
                    </div>
                    <div className={styles.minibanner}>
                        <img alt='' src={imagem} width="646" height="333" ></img>
                        {/* <iframe
                            width="646" height="333" src="https://www.youtube.com/embed/ZY3-MFxVdEw?si=eSflmQqCVrGWz961" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    </div>
                </section>
            </section>
        </>
    )
}

export default Banner