import axios from 'axios'

function PostAxios() {
const dado={
    id:" ", 
    titulo:"Estudando Axios",
    status:"true"
}
    function PostarNotas(){

    

    axios
    .get('https://projeto-individual-sdst.onrender.com/', dado)
    .then((response)=>{console.log(response.data[0].titulo)})
    .catch((error)=>{console.error(error)})
}
    return (
        <button onClick={()=>PostarNotas()}>Postar</button>
    )
}

export default PostAxios