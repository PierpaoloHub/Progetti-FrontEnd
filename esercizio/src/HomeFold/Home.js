export default function Home(props) {
    if (props.section === 1) {
        return (
            <span className="infoSpan">Benvenuto! Clicca sulle sezioni in alto per spostarti all'interno del sito</span>
        )
    }
    else return undefined
}