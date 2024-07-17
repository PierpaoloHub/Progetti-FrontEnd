import { useState, useEffect } from 'react'
import ModB from "./ModB.js"
import CancB from "./CancB.js"

export default function UtentiTab(props) {


    useEffect(() => { setNome(props.nome); setCognome(props.cognome) })
    const [nome, setNome] = useState('')
    const [cognome, setCognome] = useState('')
    const [formNm, setForm] = useState(null)
    return (
        <tr>
            <td contentEditable={props.editable}> {nome}</td>
            <td contentEditable={props.editable}> {cognome} </td>
            <td>
                <ModB makeEditable={props.makeEditable} modUser={props.modUser} formNm={formNm} setForm={setForm} i={props.i} nome={nome} cognome={cognome} />
                <CancB modUser={props.modUser} i={props.i} />
            </td>
        </tr>
    )
}