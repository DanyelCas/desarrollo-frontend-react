import OpenLink from '../components/OpenLink';
import Header from './LandingPage/_components/Header';
import Content from './LandingPage/_components/Content';
import Subtitle from './LandingPage/_components/Subtitle';
import Table from './LandingPage/_components/Table';
import Footer from './LandingPage/_components/Footer';


const Default = () => {
    return (
        <>
            <div class="containermain">
                <Header 
                    titulo="Modulo 7: DESARROLLO FRONTEND CON REACTJS"
                />
                <Subtitle 
                    subtitulo="Bienvenido"
                />
                <Content 
                    contenido="Este módulo se centra en el uso de <b>React</b>, incluyendo la creación de <b>componentes</b>, el manejo de <b>hooks</b>, y el uso de <b>Redux</b>."
                />
                <Subtitle 
                    subtitulo="Temas cubiertos"
                />
                <Table 
                    subtitulo="Temas cubiertos"
                />
                <Subtitle 
                    subtitulo="Recursos Adicionales"
                />
                <Content 
                    contenido="Para profundizar en los temas cubiertos, consulta los siguientes recursos:"
                />
                <Footer 
                    contenido="&copy; 2024 Modulo 7. USIP."
                />
            </div>
        </>
    )
}

export default Default;