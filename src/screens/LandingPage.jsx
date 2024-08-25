import OpenLink from '../components/OpenLink';
import Header from './LandingPage/_components/Header';


const Default = () => {
    return (
        <>
            <header className="App-header">
                <Header />

                <OpenLink
                    title="Learn React"
                    url="https://react.dev/"
                />

                <OpenLink
                    title="Mi proyecto react (Github)"
                    url="https://github.com/DanyelCas/desarrollo-frontend-react"
                />

            </header>
        </>
    )
}

export default Default;