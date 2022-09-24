
import './SignUp.css'
import { useForm } from '../../../hooks/useForm'

import { signUpUser } from '../../../firebase'

export const SignUp = ({ setSignUpFlag }) => {
  const { formState, onInputChange } = useForm({
    user: "",
    email: "",
    password: "",
    cPassword: "",
    birthDay: ""
  })

  const onFormSubmit = (e) => {
    e.preventDefault();
    
    const { email, password } = formState;

    signUpUser(email, password);

    setSignUpFlag(false)
  }

  return (
    <div className='SignIn-container'>
      <div className="nes-container with-title">
        <p className="title">SigUp</p>
        
        <form onSubmit={ onFormSubmit }>

          <section className='SignIn-Section'>
            <label htmlFor="usuario">User</label>
            <input 
              type="text" 
              id="usuario" 
              name="user"
              autoComplete='user'
              className="nes-input"
              onChange={ onInputChange }
              required
              autoFocus
            ></input>
          </section>
          
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
              minLength={6}
              required
            ></input>
          </section>
          
          <section className='SignIn-Section SignIn-PasswordNormalText'>
            <label htmlFor="c-password">Confirm password</label>
            <input 
              type="password" 
              id="c-password" 
              className="nes-input"
              name='cPassword'
              onChange={ onInputChange }
              minLength={6}
              required
            ></input>
          </section>

          <section className='SignIn-Section SignIn-PasswordNormalText'>
            <label htmlFor="birthDay">Birth day</label>
            <input
              type="date" 
              id="birthDay" 
              className="nes-input"
              name='birthDay'
              onChange={ onInputChange }
              required
            ></input>
          </section>

          <button type="submit" className="nes-btn is-primary">SignUp</button>

        </form>

      </div>
    </div>
  )
}
