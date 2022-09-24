


import { useForm } from '../../../hooks/useForm'

export const Login = () => {
  const { formState, onInputChange, onResetForm } = useForm({
    email: "",
    password: "",
  })

  

  return (
    <div className='SignIn-container'>
      <div className="nes-container with-title">
        <p className="title">Login</p>
        
        <form>
          
          <section className='SignIn-Section'>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name='email'
              autoComplete='email'
              className="nes-input"
              onChange={ onInputChange }
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
            ></input>
          </section>

          <button type="submit" className="nes-btn is-primary">Login</button>

        </form>

        <small>Haven't you sign up yet? <a href="#">Do it now!</a></small>

      </div>
    </div>
  )
}
