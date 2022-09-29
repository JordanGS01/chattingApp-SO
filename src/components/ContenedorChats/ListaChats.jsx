
import Chat from './Chat'



const ListaChats = ({activeChats,CurrentUserInfo}) => {

  if(activeChats.length === 0){
    return(
      <div>
        No hay chats activos
      </div>
    )
  }
  const getChatName = (object) =>{
      if (CurrentUserInfo.user === object.members[1] ){
        return object.members[0]
      }else{
        return object.members[1]
      }
  }
  return (
    <div className='ListaChats'>

      {activeChats.map((chatElement) =>{
          return (
            <Chat   nombre = {getChatName(chatElement)} 
            id = {chatElement.id}
            CurrentUserInfo = {CurrentUserInfo}
            messages = {chatElement.messages}
            />
          )
        })
        }
       

   
    </div>
    )
}

export default ListaChats