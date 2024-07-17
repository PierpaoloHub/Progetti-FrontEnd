export default function Search(props) {

    const handleChange = (e) => {
        e.preventDefault()
        props.onInputChange(e.target.value)
    }
    return (
        <input className="noSpace grow1 srcInput" value={props.input} onChange={handleChange} type="text" />
    )
}