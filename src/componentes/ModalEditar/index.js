import Video from 'componentes/Video'
import styles from './ModalEditar.module.css'
import CampoFormulario from 'componentes/CampoFormulario'
import Textarea from 'componentes/Textarea'
import { BotaoFormulario } from 'componentes/Botao'
import ListaSuspensa from 'componentes/ListaSuspensa'
import { useEffect, useState } from 'react'

// categoria, descricao, id, imagem, link

function ModalEditar({ video, onClose, onSalvar, categorias }) {

    // console.log(video)

    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [link, setLink] = useState('')
    const [imagem, setImagem] = useState('')
    const [categoria, setCategoria] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
        if (video) {
            setTitulo(video.titulo)
            setDescricao(video.descricao)
            setLink(video.link)
            setImagem(video.imagem)
            setCategoria(video.categoria)
        }  else {
            setTitulo('');
            setDescricao('');
            setLink('');
            setImagem('');
            setCategoria('');
        }
    }, [video])

    const submit = (event) => {
        event.preventDefault();
        const videoAtualizado = {
            id: video.id,
            titulo,
            descricao,
            link,
            imagem,
            categoria
        };
        onSalvar(videoAtualizado)
        onClose()
    }



    return (
        <dialog open={!!video} className={styles.modal}>
            <h1>Editar card</h1>
            <form onSubmit={submit} method="dialog">
                <div className={styles.sessaoCampos}>
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
                            valor={link}
                            aoAlterado={valor => setLink(valor)}
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
        </dialog>
    );
}


export default ModalEditar