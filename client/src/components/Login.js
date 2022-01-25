import React from 'react';
import axios from 'axios';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
// import { useHistory } from 'react-router-dom';

class Login extends React.Component{
    //DATA SECTION !
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
      };
    constructor(props){
        super(props);
        this.state = {
            credentials: {
              username: '',
              password: '',
              error: 'USERNAME & PASSWORD MUST MATCH THE REGISTER'
            }
          };
    }
    
   
    //LOGIC section!
      handleChange = e => {
        
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };
    
      login = event => {
        event.preventDefault();
        const { cookies } = this.props;

        axios.post('http://localhost:9000/api/auth/login', this.state.credentials)
          .then(res=> {
            const { password, username } = res.data;
            cookies.set("password", password);
            cookies.set("username", username); //jhere's hopeing this works lol!
            this.props.history.push('/view');
          })
          .catch(err => {
            console.log(err);
          })
      };

    render(){
        return(
<div className='login-class'>
    <h2>Please LOG-IN !</h2>
<form onSubmit={this.login}>
          <input
            id='username'
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            id='password'
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button id='submit'>Log in</button>
        </form>
</div>
        )
    }
}

export default withCookies(Login);