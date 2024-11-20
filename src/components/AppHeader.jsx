import reactLogo from '../assets/react.svg'

export default function () {

    const appTitle = 'Il mio Blog'


    return (
        <header>
            <div className="container">
                <img src={reactLogo} alt="" />
                <h1>
                    {appTitle}
                </h1>
            </div>
        </header>
    )
}