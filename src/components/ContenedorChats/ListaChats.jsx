
import Chat from './Chat'

// Imagenes de prueba
import src from "./Bulbasaur.png"
import src1 from "./charmander.png"
import src2 from "./squirtle.png"

const ListaChats = ({activeChats,CurrentUserInfo}) => {
  
  if(activeChats.length === 0){
    return(
      <div>
        No hay chats activos
      </div>
    )
  }

  return (
    <div className='ListaChats'>

      {activeChats.map((chatElement) =>{
          return (
            <Chat   nombre = {chatElement.members[0]} 
            id = {chatElement.id}
            CurrentUserInfo = {CurrentUserInfo}
            messages = {chatElement.messages}/>
          )
        })
        } 
    </div>
    )
}

export default ListaChats