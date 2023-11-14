function App() {
  
  return (
    <div>
      <h1>Olá, Mundo, React!</h1>
      <MeuComponente/>
      <MeuBotao/>
    </div>
  )
}

function MeuBotao() {
  return(
    <button>Clique aqui!</button>
  )
}

function MeuComponente() {
  return (
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, aperiam ratione. Sint perferendis nihil maxime rerum odio numquam perspiciatis eligendi laudantium nesciunt, qui aut eveniet tempora animi, exercitationem eius voluptatem.</p>
  )
}




export default App
