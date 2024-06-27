import CampoFormulario from 'componentes/CampoFormulario'
import styles from './Formulario.module.css'
import { useState } from 'react'
import ListaSuspensa from 'componentes/ListaSuspensa'
import Textarea from 'componentes/Textarea'
import { BotaoFormulario } from 'componentes/Botao'


function Formulario({ aoCadastrar, categorias }) {

    const [titulo, setTitulo] = useState('')
    const [imagem, setImagem] = useState('')
    const [video, setVideo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [descricao, setDescricao] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        // console.log('Form foi submetido! => ', titulo, imagem, video, categoria)
        aoCadastrar({
            titulo,
            imagem,
            video,
            categoria,
            descricao
        })
        //limpar o formulario apos envio de dados
        setTitulo('')
        setImagem('')
        setVideo('')
        setCategoria('')
        setDescricao('')
    }

    return (
        <form onSubmit={aoSalvar} className={styles.formulario} >
            <div className={styles.cabecalho}>
                <h1>Novo vídeo</h1>
                <p>Complete o formulário para criar um novo card de vídeo.</p>
            </div>

            <div className={styles.sessaoCampos}>
                <h2>Criar Card</h2>
                <div className={styles.campos}>
                    <CampoFormulario
                        obrigatorio={true}
                        label="Título"
                        placeholder="Insira o título"
                        valor={titulo}
                        aoAlterado={valor => setTitulo(valor)}
                    />

                    <ListaSuspensa
                        obrigatorio={true}
                        label="Categoría"
                        placeholder="Selecione uma categoía..."
                        itens={categorias}
                        valor={categoria}
                        aoAlterado={valor => setCategoria(valor)}
                    />

                    <CampoFormulario
                        obrigatorio={true}
                        label="Imagem"
                        placeholder="URL da imagem"
                        valor={imagem}
                        aoAlterado={valor => setImagem(valor)}
                    />

                    <CampoFormulario
                        obrigatorio={true}
                        label="Vídeo"
                        placeholder="URL do vídeo"
                        valor={video}
                        aoAlterado={valor => setVideo(valor)}
                    />

                    <Textarea
                        obrigatorio={true}
                        label="Descrição"
                        placeholder="Sobre o que é esse vídeo?"
                        valor={descricao}
                        aoAlterado={valor => setDescricao(valor)}
                    />

                </div>
                <div className={styles.botoes}>
                    <BotaoFormulario
                        children="Guardar"
                        type='submit'
                    />
                    <BotaoFormulario
                        children="Limpar"
                        type='reset'
                    />
                </div>
            </div>
        </form>
    )
}

export default Formulario