import Cabecalho from "componentes/Cabecalho";
import VideoAtivo from "componentes/VideoAtivo";
import Inicio from "pages/Inicio";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function PaginaBase() {

    const [categorias, setCategorias] = useState([
        {
            id: uuidv4(),
            nome:'FRONT END',
            cor: '#6BD1FF',
        },
        {
            id: uuidv4(),
            nome:'BACK END',
            cor: '#00C86F',
        },
        {
            id: uuidv4(),
            nome:'MOBILE',
            cor: '#FFBA05',
        }

    ])

    const inicial = [
        {
            id: uuidv4(),
            titulo: 'O que faz uma desenvolvedora front-end?',
            descricao: 'O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa nesse episódio! ',
            imagem: 'https://i.ytimg.com/vi/ZY3-MFxVdEw/mqdefault.jpg',
            link:'https://www.youtube.com/embed/ZY3-MFxVdEw',
            categoria: categorias[0].nome
        },
        {
            id: uuidv4(),
            titulo: 'Como testar seu Front-end? com Mario Souto',
            descricao: 'Por onde começar a testar as habilidades em Front-end? Se você tem dúvidas na hora de testar softwares e colocar em prática técnicas modernas, esse vídeo vai te ajudar.',
            imagem: 'https://www.youtube.com/embed/CaTbfdsVydE',
            link:'https://i.ytimg.com/vi/CaTbfdsVydE/hqdefault.jpg',
            categoria: categorias[0].nome
        },
        {
            id: uuidv4(),
            titulo: 'Guia de carreira Front-end',
            descricao: 'Nesse episódio, confira o que é front-end e como seguir nessa área da tecnologia, através do Tech Guide front-end, um Guia de Estudos do iniciante ao avançado. São 3 níveis de Profundidade e 1 nível de Expansão, formando seu perfil como Dev Front-End em T.',
            imagem: 'https://i.ytimg.com/vi/fpth65ts3cw/hqdefault.jpg',
            link:'https://www.youtube.com/embed/fpth65ts3cw?',
            categoria: categorias[0].nome
        },
        {
            id: uuidv4(),
            titulo: 'Métricas para o Front End com Mario Souto',
            descricao: 'Neste vídeo o Paulo Silveira e o @DevSoutinho batem um papo sobre as métricas que não podem ser esquecidas em um bom site. Se você tá começando a programar ou ainda não sabe quais métricas utilizar no dia a dia, confira o conteúdo e anota as dicas pra colocar em prática. E se você já tem utilizado no seu site métricas incríveis que impactam diretamente na performance, conta pra gente nos comentários, queremos saber 😉✌',
            imagem: 'https://i.ytimg.com/vi/iVNR-6v8lZU/maxresdefault.jpg',
            link:'https://www.youtube.com/embed/iVNR-6v8lZU?s',
            categoria: categorias[0].nome
        },
        {
            id: uuidv4(),
            titulo: 'O que faz uma desenvolvedora Back-end? com Juliana Amoasei',
            descricao: 'O que faz uma desenvolvedora Back-end? com Juliana Amoasei',
            imagem: 'https://i.ytimg.com/vi/fiPfvylj6rk/hqdefault.jpg',
            link:'https://www.youtube.com/embed/fiPfvylj6rk',
            categoria: categorias[1].nome
        },
        {
            id: uuidv4(),
            titulo: 'Como se tornar um desenvolvedor BACKEND?',
            descricao: 'Recentemente fiz um video passo a passo sobre como se tornar um desenvolvedor Frontend e atendendo a pedidos, volto aqui com um passo a passo, um RoadMap de tudo que você precisa saber para se tornar um desenvolvedor Backend. ',
            imagem: 'https://i.ytimg.com/vi/wXMlMsDvk2M/sddefault.jpg',
            link:'https://www.youtube.com/embed/wXMlMsDvk2M',
            categoria: categorias[1].nome
        },
        {
            id: uuidv4(),
            titulo: 'Como Estudar PROGRAMAÇÃO | Guia Back-End',
            descricao: 'Fala beginners, quer ser um desenvolvedor back-end? Hoje vamos falar um pouco sobre o que é necessário estudar para você se tornar um programador back-end, apresentando os principais tópicos e te dando um guia e roteiro definitivo do que você precisa para alcançar seus resultados o mais rápido',
            imagem: 'https://i.ytimg.com/vi/LbKDxQ0jX90/maxresdefault.jpg',
            link:'https://www.youtube.com/embed/LbKDxQ0jX90',
            categoria: categorias[1].nome
        },
        {
            id: uuidv4(),
            titulo: 'Diferença entre Back-End e Front-End com Mario Souto',
            descricao: 'Qual a diferença entre Back-end e Front-end? É possível se especializar nas duas áreas? Como é a rotina desses profissionais e com quais outras áreas da tecnologia acabam se relacionando? ',
            imagem: 'https://i.ytimg.com/vi/xrRy3RI3HE4/sddefault.jpg',
            link:'https://www.youtube.com/embed/xrRy3RI3HE4',
            categoria: categorias[0, 1].nome
        },
        {
            id: uuidv4(),
            titulo: 'Desenvolvimento Android ',
            descricao: 'Um episódio focado no desenvolvimento de aplicações Android. Neste bate-papo, Paulo Silveira e Felipe Torres conversam sobre os primeiros passos para começar a desenvolver, quais as principais ferramentas do desenvolvimento mobile, como colocar sua aplicação no ar e mais! ',
            imagem: 'https://i.ytimg.com/vi/fWscDFHKgw8/maxresdefault.jpg',
            link:'https://www.youtube.com/embed/fWscDFHKgw8',
            categoria: categorias[2].nome
        },
        {
            id: uuidv4(),
            titulo: 'Desenvolvimento iOS pra iniciantes com Giovanna Moeller',
            descricao: 'Por onde começar em iOS? Qual linguagem é importante dominar? Quais ferramentas necessárias para mergulhar no desenvolvimento iOS? 🤔',
            imagem: 'https://i.ytimg.com/vi/MGIs7DSQ-0A/maxresdefault.jpg',
            link:'https://www.youtube.com/embed/MGIs7DSQ-0A',
            categoria: categorias[2].nome
        },
        {
            id: uuidv4(),
            titulo: 'Como se tornar um DESENVOLVEDOR MOBILE?',
            descricao: 'Grande parte da experiência de serviços hoje, passa pelo mobile, isso pela praticidade de estarmos o tempo todo conectados. Isso faz com que haja uma demanda crescente por profissionais capacitados para desenvolver essas aplicações.',
            imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DX-XfVvd41O8&psig=AOvVaw3UEYpNV-lQ21ZOLWXGoTrp&ust=1719158153233000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDEzKrJ74YDFQAAAAAdAAAAABAE',
            link:'https://www.youtube.com/embed/X-XfVvd41O8',
            categoria: categorias[2].nome
        },
        {
            id: uuidv4(),
            titulo: '',
            descricao: '',
            imagem: '',
            link:'',
            categoria: categorias[2].nome
        },
        {
            id: uuidv4(),
            titulo: '',
            descricao: '',
            imagem: '',
            link:'',
            categoria: categorias[2].nome
        }
    ]

    return (
        <main>
            <Cabecalho/>
            <Inicio/>
            <VideoAtivo/>

        </main>
    )
}

export default PaginaBase