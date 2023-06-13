import { useState } from "react";
import { Container, Form } from "./styles";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import logo from "../../assets/logo.svg";

import { useAuth } from "../../hooks/auth";

export function SignIn(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password });
    }

    return(
        <Container>
            <Form>
                <div className="logo">
                    <img src={logo} alt="logo em formato de polígono" />
                    <h1>food explorer</h1>
                </div>

                
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
                    title="Entrar"
                    onClick={handleSignIn}
                />

                <Link to="/register">
                    Criar conta
                </Link>

            </Form>
        </Container>
    );
}