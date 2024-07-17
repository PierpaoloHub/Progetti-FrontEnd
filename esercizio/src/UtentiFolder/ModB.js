export default function ModB(props) {
    return (
        < button className="modB" onClick={(e) => {
            e.preventDefault();
            props.makeEditable(edit => !edit)
            props.modUser(users => { users[props.formOn] = { nome: props.nome, cognome: props.cognome }; return users })
            props.setForm(indice => indice ? null : props.i)
        }
        }>
            Modifica
        </button >
    )
}