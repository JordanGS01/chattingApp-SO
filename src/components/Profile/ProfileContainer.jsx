import './profile.css'
import User from '../../Images/user.png'

export const ProfileContainer = () => {
    return (
      <div>
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

        <div className='profile_containers'>
          <img src={User} className='profile_img' alt="profile_img"/> <div className="nes-container is-rounded"> Nombre de Usuario: Username</div>
        </div>

        <div className="nes-container is-rounded">
          <h5>About:</h5>
          <div> Information about the user</div>
        </div>

      </div>
    )
  }