import React, {Component} from 'react';

class LoginForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      login: 'login',
      email: '',
      emailConfirmation: '',
      formSent: false,
      loadedInfo: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const {name, value} = event.target;
    this.setState(
      {
        [name]: value
      }
    )
  }

  handleSubmit= (event) =>{
    event.preventDefault();
    console.log(this.state);
    this.setState({
      login: '',
      email: '',
      emailConfirmation: '',
      formSent: true,
      loadedInfo: false
    })
  }

  componentWillMount() {
    console.log('componentWillMount(), Acabei de montar o LoginForm pela primeira vez');
    setTimeout(() => {
      this.setState( { loadedInfo: true })
    }, 3000)

  }

  componentDidMount(){
    console.log('componentDidMount(), Acabei de montar o LoginForm pela primeira vez');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()')
  }

  componentWillUpdate() {
    console.log('componentWillUpdate(), Acabei de atualizar o component LoginForm');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate(), Acabei de atualizar o component LoginForm');
  }

  myForm(){
    return(
      <form onSubmit={this.handleSubmit}>
      { this.state.formSent 
        ? <h1>Enviou o formulario! Parabens</h1>
        : (
          <div>
            <h1>{this.state.login} - {this.state.email}</h1>
            <strong>Preencha os dados abaixo:</strong>
          </div>
        )
      }
      <fieldset>
      <label>Login</label>
      <input type="text"
        onChange={this.handleInputChange}
        name="login"
        value={this.state.login}   
      />
      </fieldset>
      <fieldset>
      <label>E-mail</label>
      <input type="email"
        onChange={this.handleInputChange}
        name="email"
        value={this.state.email}   
      />
      </fieldset>

      <fieldset>
      <label>E-mail</label>
      <input type="email"
        onChange={this.handleInputChange}
        name="emailConfirmation"
        value={this.state.emailConfirmation}   
      />
      </fieldset>

      <button type="button" onClick={this.handleSubmit}>Enviar</button>
    </form>
    )
  }

  render() {
    console.log('Renderizou o LoginForm');
    return (<div>
      { this.state.loadedInfo
        ? this.myForm() 
        : 'carregando'
      }
      </div>
    )
  }


} 

export default LoginForm;