import { InputMessageBar } from "./InputMessageBar"
import { Message } from "./Message"


export const MessagesContainer = () => {
  return (
    <div className="nes-container is-rounded" style={{borderLeft : "0px"}}>
      <section className="message-list">
        <Message user={"Jordan"} content={"Hola Leandro, Victor"} sender={true}/>
        <Message user={"Leandro"} content={"Que mae, pura vida?"} sender={false}/>
        <Message user={"Victor"} content={"Eso mae, todo bien?"} sender={false}/>
      </section>

      <InputMessageBar />
    </div>
  )
}
