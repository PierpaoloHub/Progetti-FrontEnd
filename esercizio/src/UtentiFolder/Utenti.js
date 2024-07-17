import { useState } from 'react'
import THeaders from './THeaders.js'
import UtentiTab from "./UtentiTab.js"

function Utenti(props) {

    const [editable, makeEditable] = useState('false')

    if (props.section === 2) {
        if (props.users.length) {
            return (
                <table>
                    <thead>
                        <THeaders />
                    </thead>
                    <tbody>
                        {props.users.map((ut, i) => {
                            return (
                                <UtentiTab key={i} nome={ut.nome}
                                    cognome={ut.cognome} modUser={props.modUser}
                                    i={i} users={props.users}
                                    editable={editable} makeEditable={makeEditable} />
                            )
                        })}
                    </tbody>
                </table>
            )
        }
        else return (<span className="infoSpan">Ancora nessun utente registrato</span>)

    }
    else return undefined
}


export default Utenti