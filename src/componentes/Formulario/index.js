import "./Formulario.css";
import CampoTexto from "../CampoTexto"
import DropDownLista from "../DropDownLista"
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {

const [nome, setNome] = useState('');
const [cargo, setCargo] = useState('');
const [imagem, setImagem] = useState('');
const [time, setTime] = useState('');

const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaborador({
        nome: nome,
        cargo: cargo,
        imagem, //mesma coisa dos outros, sintaxe diferente
        time: time
    })
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
}

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados: </h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"
                    valor={nome} funcAlterado={valor => setNome(valor)}
                />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"
                    valor={cargo} funcAlterado={valor => setCargo(valor)}
                />
                <CampoTexto label="Imagem" placeholder="Insira a URL da imagem"
                    valor={imagem} funcAlterado={valor => setImagem(valor)}
                />
                <DropDownLista obrigatorio={true} label="Times" itens={props.times}
                valor={time} funcAlterado={valor =>setTime(valor)}
                >
                </DropDownLista>
                <Botao>
                    Criar Algo   
                </Botao>                
                
            </form>
        </section>
    )
};

export default Formulario;