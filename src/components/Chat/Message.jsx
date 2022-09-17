

export const Message = ({ type, user, content, sender }) => {
  return (
    <div className={`message ${!sender?"-left":"-right"}`}>
      <div className={`nes-balloon ${!sender?"from-left":"from-right"}`}>
        <h1>{user}</h1>
        <p>{content}</p>
      </div>
    </div>
  )
}
