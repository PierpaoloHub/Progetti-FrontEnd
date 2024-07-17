import Accedi from './Accedi'
import Carrello from './Carrello'
import ResiOrdini from './ResiOrdini'

export default function Endbar() {
    return (
        <span className="flexEnd spanEnd">
            <Accedi />
            <ResiOrdini />
            <Carrello />
        </span>

    )
}