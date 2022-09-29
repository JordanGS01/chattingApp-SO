

export const TextMessage = ({ user, content, sender, hour }) => {
  return (
    <div className={`message ${!sender?"-left":"-right"}`} style = {{marginRight : sender ? 0 : "auto",marginLeft : sender ? "auto":0}}>
      <div className={`balloon ${!sender?"from-left":"from-right"}`} style ={{backgroundColor : sender ? "lightgreen":"lightcoral",marginRight : sender ? 0 : "auto"}}>
          <h3 style={{fontSize:"medium"}}>{user}</h3> 
          
        <p style={{fontSize : "x-small"}}>{content}</p>
        <p style = {{fontSize : "xx-small",textAlign : "right"}}>{hour}</p>
      </div>
    </div>
  )
}
