
import "./Message.css"
export const Message = ({ type, user, content, sender }) => {
  return (
    <div className={`message ${!sender?"-left":"-right"}`} style = {{marginRight : sender ? 0 : "auto",marginLeft : sender ? "auto":0}}>
      <div className={`balloon ${!sender?"from-left":"from-right"}`} style ={{backgroundColor : sender ? "lightgreen":"lightcoral",marginRight : sender ? 0 : "auto"}}>
        <h3>{user}</h3>
        <p style={{fontSize : "xx-small"}}>{content}</p>
      </div>
    </div>
  )
}
