import InputEstados from './components/InputEstados'
import React from 'react'
import './App.css';
import InputText from './components/InputText';
// import InputRadio from './components/InputRadio';

class App extends React.Component {
  state = {
    text: '',
  }
  handleInputChange = (event) => {
    this.setState(({ text }) => ({[text]: event.target.value}))
  }
  render () {
    return (
      <div className="App">
        <h1>Formulário React</h1>
        <form>
          <fieldset>
            <legend>Formulário</legend>
            <InputText
              type="text"
              name="nome"
              maxLength={40}
              required={true}
            />
    
            <InputText
              type="text"
              name="email"
              maxLength={50}
              required={true}
            />
    
            <InputText
              type="text"
              name="cpf"
              maxLength={11}
              required={true}
            />
    
            <InputText
              type="text"
              name="endereco"
              maxLength={200}
              required={true}
            />
    
            <InputText
              type="text"
              name="cidade"
              maxLength={28}
              required={true}
            />
    
            <InputEstados
            name="estados"
            required={true}
            />        
          </fieldset>
        </form>
      </div>
    );
  }

}

export default App;
