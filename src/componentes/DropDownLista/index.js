import "./DropDownLista.css"

const DropDownLista = (props) => {
    return (
        <div className="drop-down-lista">
            <label>{props.label}</label>
            <select onChange={evento => props.funcAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
            <option value=''></option>
                {props.itens.map(items => {
                    return <option key={items}>{items}</option>
                })}
            </select>
        </div>
    )
}

export default DropDownLista