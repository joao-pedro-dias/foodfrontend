import { useState } from "react";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";

import { api } from "../../services/api";

export function SignUp(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp(){
        if(!name){
            return alert("Preencha o campo nome!")
        }

        if(!email){
            return alert("Preencha o campo e-mail!")
        }

        if(!password){
            return alert("Preencha o campo senha!")
        }

        if(password.length >= 6 ){
            api.post("/users", { name, email, password, isAdmin: 0 })
            .then(() => {
                alert("Usuário cadastrado com sucesso!")
                navigate("/")
            })
            .catch( error => {
                if(error.response){
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível cadastrar");
                }
            });
        } else if(password.length < 6){
            alert("Digite uma senha maior ou igual a 6 caracteres!")
        }
        
    }

    return(
        <Container>
            <Form>
                <div className="logo">
                    <img src={logo} alt="logo em formato de polígono" />
                    <h1>food explorer</h1>
                </div>

                <label>Seu nome</label>
                <Input
                    placeholder="Exemplo: Maria da Silva"
                    type="text"
                    onChange={e => setName(e.target.value)}
                />

                <label>Email</label>
                <Input
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="text"
                    onChange={e => setEmail(e.target.value)}
                />
                
                <label>Senha</label>
                <Input
                    placeholder="No mínimo 6 caracteres"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />

                <Button
                    title="Criar conta"
                    onClick={handleSignUp}
                />

                <Link to="/">
                    Já tenho uma conta
                </Link>
            </Form>
        </Container>
    );

}