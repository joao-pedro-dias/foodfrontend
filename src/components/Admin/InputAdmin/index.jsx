import { Container } from "./styles";
import upload from "../../../assets/upload.svg";
import { Tag } from "../../../admin pages/Tag";
import { useState } from "react";

export function InputAdmin() {

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    return (
        <Container>
            <form action="">
                <div className="items">
                    
                    <label>Imagem do prato</label>
                    <div className="upload">
                        <img src={upload} alt="" />
                        <button className="button">Selecione uma imagem</button>
                    </div>
                </div>

                <div className="items">
                    <label>Nome</label>
                    <input className="input" type="text" placeholder="Ex: Salada Ceasar" />
                </div>

                <div className="items">
                    <label>Categoria</label>
                    <select name="" id="">
                        <option>-- Selecione --</option>
                        <option>Refeição</option>
                        <option>Pratos principais</option>
                    </select>
                </div>

                <div className="items">
                    <label>Ingredientes</label>
                    <div className='tags'>
                        {
                            tags.map((tag, index) => (
                                <Tag
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                />
                            ))
                        }

                        <Tag
                            isNew
                            placeholder="Adicionar"
                            onChange={e => setNewTag(e.target.value)}
                            value={newTag}
                            onClick={handleAddTag}
                        />
                    </div>
                </div>
                
                <div className="items">
                    <label>Preço</label>
                    <input className="input" type="number" placeholder="R$ 00,00" />
                </div>

                <div className="items">
                    <label>Descrição</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"></textarea>
                </div>
            </form>
        </Container>
    );
}
