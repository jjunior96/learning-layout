// import React from 'react';

// const Form = () => (
//   <S.FormWrapper>
//     <h1>Formulario</h1>
//   </S.FormWrapper>
// );

// export default Form;

import React from 'react';
import * as S from './styled';

import Header from '../../Header';

class Form extends React.Component {
  // state = {
  //   nome: '',
  //   sobrenome: '',
  // };

  handleInputChange = event => {
    const { target } = event;
    const { value } = target;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <Header />
        <S.FormWrapper>
          <form name="form" action="#">
            <label htmlFor="form">
              Nome
              <input
                type="text"
                name="nome"
                // value={this.state.nome}
                onChange={this.handleInputChange}
              />
            </label>

            <label htmlFor="form">
              Data de Nascimento
              <input
                type="date"
                name="date"
                // value={this.state.sobrenome}
                onChange={this.handleInputChange}
              />
            </label>

            <label htmlFor="form">
              CRN
              <input
                type="number"
                name="crn"
                // value={this.state.sobrenome}
                onChange={this.handleInputChange}
              />
            </label>

            <label htmlFor="form">
              Email
              <input
                type="email"
                name="email"
                // value={this.state.sobrenome}
                onChange={this.handleInputChange}
              />
            </label>

            <label htmlFor="form">
              Senha
              <input
                type="password"
                name="password"
                // value={this.state.sobrenome}
                onChange={this.handleInputChange}
              />
            </label>
            <button type="submit">Enviar</button>
          </form>
        </S.FormWrapper>
      </>
    );
  }
}

export default Form;
