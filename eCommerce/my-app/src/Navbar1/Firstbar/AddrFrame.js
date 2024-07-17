function AddrFrame(props) {

    const disableFrame = () => props.addrOn ? props.onDivClick(!props.addrOn) : null


    return (props.addrOn ?
        <div className="frameDiv fullHeight fullWidth absolute" onClick={disableFrame}>
            <iframe className="absolute" src="/login.html" height="250px" width="300px">
            </iframe>
        </div>
        : null)
}

export default AddrFrame