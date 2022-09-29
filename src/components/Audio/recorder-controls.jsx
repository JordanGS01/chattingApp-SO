import { formatMinutes, formatSeconds } from "./utils/format-time";
import {BiMicrophone} from 'react-icons/bi'

import useRecordingsList from "./hooks/use-recordings-list";
import { uploadAudio } from '../../firebase'
import { useEffect } from "react";

export default function RecorderControls({ recorderState, handlers, user, chatId, audio }) {
  const { recordingMinutes, recordingSeconds, initRecording } = recorderState;
  const { startRecording, saveRecording, cancelRecording } = handlers;
  const { recordings, deleteAudio } = useRecordingsList(audio);

  useEffect(() => {
    if(recordings !== undefined) { 
      if(recordings.length !== 0) {
        uploadAudio(recordings[0], user, chatId);
        deleteAudio(recordings[0].key);
      }
    }
  }, [ recordings ])
  

  return (
    <div className="controls-container" style={{display: "flex"}}>
      <div className="recorder-display" style={{display: "flex"}}>
      <button className="nes-btn is-success" title="Start recording" style={{marginRight:'10px'}} onClick={startRecording}>
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
            <button className="nes-btn is-error" title="Cancel recording" onClick={cancelRecording}>
              Cancel
            </button>
          </div>
        )}
      </div>
      <div className="start-button-container">
        {initRecording ? (
          <button
            className="nes-btn is-error"
            title="Save recording"
            disabled={recordingSeconds === 0}
            onClick={saveRecording}
          >
            Send
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
