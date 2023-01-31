import axios from 'axios'

function RequisicaoGETAxios() {

    var options = { method: 'GET', url: 'https://projeto-individual-sdst.onrender.com/' };

    axios
    .get('https://projeto-individual-sdst.onrender.com/')
    .then((response)=>{console.log(response.data[0].titulo)})
    .catch((error)=>{console.error(error)})
    return (
        <div>RequisicaoGETAxios</div>
    )
}

export default RequisicaoGETAxios