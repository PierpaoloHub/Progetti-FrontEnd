import React, { useState, useEffect } from 'react'
import Utenti from "./UtentiFolder/Utenti.js"
import Aggiungi from "./Aggiungi/Add"
import Home from "./HomeFold/Home"



function Programma() {
    const [users, modUser] = useState([])
    const [section, setSection] = useState(1)

    useEffect(() => { }, [users])

    return (
        <div className="div1">
            <div className="div2">
                <span><button onClick={(e) => { e.preventDefault(); setSection(1) }}>Home</button></span>
                <span><button onClick={(e) => { e.preventDefault(); setSection(2) }}>Visualizza/<wbr />Modifica Utenti</button></span>
                <span><button onClick={(e) => { e.preventDefault(); setSection(3) }}>Aggiungi Utenti</button></span>
            </div>
            <div className="div3">
                <Home section={section} />
                <Utenti users={users} modUser={modUser} section={section} />
                <Aggiungi modUser={modUser} section={section} />
            </div>
        </div>
    )
}

export default Programma
