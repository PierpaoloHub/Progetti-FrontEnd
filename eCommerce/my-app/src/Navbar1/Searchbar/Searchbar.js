import { useState } from 'react'
import Select from './Select'
import Input from './Input'
import Search from './Search'
export default function SearchBar(props) {
    const [option, setOption] = useState("")
    const [input, setInput] = useState("")
    const submit = (e) => {
        e.preventDefault()
        props.onSubmit({
            input: input ? <>Hai cercato {input}</> : null,
            option: option ? <> in {option} </> : null

        })
    }

    return (
        <span className="flex grow1">
            <Select onOptChange={setOption} />
            <Input onInputChange={setInput} />
            <Search onSubmit={submit} />
        </span>
    )
}