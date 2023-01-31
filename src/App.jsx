import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form'
import NovaTarefa from './components/NovaTarefa'
import RequisicaoGETAxios from './components/RequisicaoGETAxios'
import PostAxios from './components/PostAxios'
function App() {
  return (
    <div className="App">
      <div>
        <img src={reactLogo} width="120px" />
      </div>
      <h2>Primeiro Projeto React com Vite</h2>
      <Form/>
      <NovaTarefa/>
      <RequisicaoGETAxios/>
      <PostAxios/>
    </div>
  )
}
export default App