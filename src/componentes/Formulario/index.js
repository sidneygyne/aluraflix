import CampoFormulario from 'componentes/CampoFormulario'
import styles from './Formulario.module.css'
import { useState } from 'react'
import ListaSuspensa from 'componentes/ListaSuspensa'
import Textarea from 'componentes/Textarea'
import { BotaoFormulario } from 'componentes/Botao'
import videos from '../../json/db.json'
import fetch from 'cross-fetch'


function Formulario({ aoCadastrar, categorias }) {

    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    const [link, setLink] = useState('')
    const [categoria, setCategoria] = useState('')


    const limparFormulario = () => {
        setTitulo('')
        setImagem('')
        setLink('')
        setCategoria('')
        setDescricao('')
    }

    const aoSalvar = async (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido! => ',titulo, imagem, link, categoria)
        try {
            const response = await fetch('https://json-server-rho-lovat.vercel.app/aluraflix', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                titulo,
                imagem,
                link,
                categoria,
                descricao,
              }),
            })
        
            if (response.ok) {
              console.log('Vídeo cadastrado com sucesso!')
              limparFormulario()
              aoCadastrar({
                titulo,
                imagem,
                link,
                categoria,
                descricao,
              })
            } else {
              console.error('Erro ao cadastrar o vídeo:', response.status);
            }
          } catch (error) {
            console.error('Erro na requisição:', error);
          }
        }

    return (
        <form onSubmit={aoSalvar} onReset={limparFormulario} className={styles.formulario} >
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
    )
}

export default Formulario