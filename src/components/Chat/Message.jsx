

export const Message = ({ type, user, content, sender }) => {
  return (
    <div className={`message ${!sender?"-left":"-right"}`}>
      <div className={`nes-balloon ${!sender?"from-left":"from-right"}`}>
        <h3>{user}</h3>
        <p>{content}</p>
      </div>
    </div>
  )
}
