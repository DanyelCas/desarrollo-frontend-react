import Logo from './Default/_components/Logo';
import Description from './Default/_components/Description';

import OpenLink from '../components/OpenLink';
import LessonInfo from '../components/LessonInfo';
import Contador from "./Default/_components/Contador";

const Default = () => {
    return (
        <>
            <header className="App-header">
                <Contador />
                <Logo />
                <Description />

                <OpenLink
                    title="Learn React"
                    url="https://react.dev/"
                />

                <OpenLink
                    title="Mi proyecto react (Github)"
                    url="https://github.com/DanyelCas/desarrollo-frontend-react"
                />

                <LessonInfo
                    lesson="1"
                    info="Introduccion a React y estructura del proyecto"
                />

                <LessonInfo
                    lesson="2"
                    info="Content API para la gestión del estado global en aplicaciones react"
                />

            </header>
        </>
    )
}

export default Default;