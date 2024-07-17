import React, { useState, useEffect } from 'react'
import AddrFrame from './Firstbar/AddrFrame'
import AddrButton from './Firstbar/AddrButton'
import Searchbar from './Searchbar/Searchbar'
import Endbar from './Endbar/Endbar'
import Home from './Home'

function Navbar() {
    const [addrOn, setAddrOn] = useState(false)
    const [div, setDiv] = useState({})

    return (
        <>
            <AddrFrame addrOn={addrOn} onDivClick={setAddrOn} />
            <span className="flex ">
                <span className="flex">
                    <Home />
                    <AddrButton onClick={() => setAddrOn(!addrOn)} />
                </span>
                <Searchbar onSubmit={setDiv} />
                <Endbar />
            </span>
            <div>
                <h1>{div.input}{div.option}</h1>
            </div>

        </>
    )
}


export default Navbar