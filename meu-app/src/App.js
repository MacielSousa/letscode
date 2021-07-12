import React from 'react'

class App extends React.Component{
  render(){
    return (
      <>
        <p>
            Meu Primeiro parágrafo!
          </p>
          <p>
            {new Date().toLocaleDateString('pt-BR')}
        </p>
      </>
    );
  }
}

export default App;
