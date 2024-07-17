export default function Search(props) {
    function handleChange(e) {
        e.preventDefault()
        props.onOptChange(e.target.value)

    }
    return (
        <form className="flex ">
            <select className="fullHeight noSpace" onChange={handleChange}>
                <option defaultValue hidden label="Choose a category :)" />
                <option value="Cars" label="Cars" />
                <option value="Smartphones" label="Smartphones" />
            </select>

        </form>
    )
}