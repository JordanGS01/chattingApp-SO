import RecorderControls from "./recorder-controls";
import useRecorder from "./hooks/useRecorder";

export const AudioRecorder = ({ user, chatId }) => {
    const { recorderState, ...handlers } = useRecorder();
    const { audio } = recorderState;
  
    return (
      <section className="voice-recorder">
        <div className="recorder-container">
          <RecorderControls recorderState={recorderState} handlers={handlers} user={user} chatId={chatId} audio={audio} />
        </div>
      </section>
    );

}