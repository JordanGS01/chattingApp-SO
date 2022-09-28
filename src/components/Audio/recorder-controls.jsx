import { formatMinutes, formatSeconds } from "./utils/format-time";
import {BiMicrophone} from 'react-icons/bi'

export default function RecorderControls({ recorderState, handlers }) {
  const { recordingMinutes, recordingSeconds, initRecording } = recorderState;
  const { startRecording, saveRecording, cancelRecording } = handlers;

  return (
    <div className="controls-container" style={{display: "flex"}}>
      <div className="recorder-display" style={{display: "flex"}}>
      <button class="nes-btn is-success" title="Start recording" style={{marginRight:'10px'}} onClick={startRecording}>
            <BiMicrophone style={{backgroundColor: "#98cc44"}}></BiMicrophone>

        </button>
        <div className="recording-time" style={{display: "flex"}}>
          {initRecording && <div className="recording-indicator"></div>}
          <span>{formatMinutes(recordingMinutes)}</span>
          <span>:</span>
          <span>{formatSeconds(recordingSeconds)}</span>
        </div>
        {initRecording && (
          <div className="cancel-button-container" style={{display: "flex"}}>
            <button class="nes-btn is-error" title="Cancel recording" onClick={cancelRecording}>
              Cancel
            </button>
          </div>
        )}
      </div>
      <div className="start-button-container">
        {initRecording ? (
          <button
            class="nes-btn is-error"
            title="Save recording"
            disabled={recordingSeconds === 0}
            onClick={saveRecording}
          >
            Save
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
