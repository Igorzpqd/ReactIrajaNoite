import Button from "./Button"

function Form(){
    return(
        <form>
            <label>Nome: 
            <input type="text"/>
            </label>
            <br/>
            <br />
            <label>email:
            <input type="email"/>
            </label>
            <br/>
            <br />
            <label>Mensagem:
            <textarea rows="5" cols="40"/>
            </label>
            <br/>
            <br />
            <Button  cor="Rosa"/>
            <Button cor="Vermelho"/>
            <Button cor="Azul"/>
            <Button cor="Cinza"/>
            <Button cor="Verde"/>
        </form>
    )
}
export default Form