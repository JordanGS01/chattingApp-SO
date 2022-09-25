


import { useState } from 'react'

import { useForm } from '../../../hooks/useForm'
import { SignUp } from '../Signup/SignUp';

//FUNCIONES DE FIREBASE CREADAS POR NOSOTROS
import { signInUser } from '../../../firebase'

export const Login = () => {
  const [singUpFlag, setSingUpFlag] = useState(false);

  const { formState, onInputChange } = useForm({
    email: "",
    password: "",
  })

  
  if(singUpFlag){return <SignUp setSignUpFlag={setSingUpFlag}/>}

  const onFormSubmit = (e) => {
    e.preventDefault();
    
    const { email, password } = formState;

    signInUser( email, password );
  }

  return (
    <div className='SignIn-container'>
      <div className="nes-container with-title">
        <p className="title">Login</p>
        
        <form onSubmit={ onFormSubmit }>
          
          <section className='SignIn-Section'>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name='email'
              autoComplete='email'
              className="nes-input"
              onChange={ onInputChange }
              required
            ></input>
          </section>
          
          <section className='SignIn-Section'>
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password"
              className="nes-input"
              onChange={ onInputChange }
              required
            ></input>
          </section>

          <button type="submit" className="nes-btn is-primary">Login</button>

        </form>

        <small>Haven't you sign up yet?
          <a 
            onClick={()=>setSingUpFlag(true)}
            className="nes-badge"
          >
            <span className='is-primary'>Do it now!</span>
          </a>
        </small>

      </div>
    </div>
  )
}
