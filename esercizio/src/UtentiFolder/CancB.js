export default function CancB(props) {
    return (
        <button className="CancB" onClick={(e) => {
            e.preventDefault(); props.modUser(prev => prev.filter((x, ind) => ind !== props.i))
        }}>
        </button >
    )
}