import "./CampoTexto.css";

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`;

    //const [valor, setValor] = useState(''); 
    //tenho que alterar o estado para o react renderizar na tela
    //useState retorna um array com dois elementos, o primeiro é o valor (read-only) e o segundo para escrever.
    // setValor(evento.target.value);

    const aoDigitar = (evento) => {
       props.funcAlterado(evento.target.value);
    };

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={placeholderModificada}></input>
        </div>
    )
};

export default CampoTexto;