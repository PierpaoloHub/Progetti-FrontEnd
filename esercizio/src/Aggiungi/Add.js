import { useState } from 'react'

export default function Aggiungi(props) {
    const [nome, setNome] = useState('')
    const [cnome, setCnome] = useState('')

    if (props.section === 3) {
        return (
            <form>
                <input placeholder="Nome" onChange={(e) => { e.preventDefault(); setNome(e.target.value) }}></input>
                <input placeholder="Cognome" onChange={(e) => { e.preventDefault(); setCnome(e.target.value) }}></input>
                <button onClick={(e) => { e.preventDefault(); props.modUser((prev) => [...prev, { nome: nome, cognome: cnome }]) }}>
                    Aggiungi
                </button>
            </form>
        )
    }
    else return undefined
}