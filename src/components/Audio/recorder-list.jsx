
import useRecordingsList from "./hooks/use-recordings-list";
export default function RecordingsList({ audio }) {
  const { recordings, deleteAudio } = useRecordingsList(audio);

  return (
    <div className="recordings-container" style={{display: "flex"}}>
      {recordings.length > 0 ? (
        <>
          <h6>Your recordings</h6>
          <div className="recordings-list">
            {recordings.map((record) => (
              <div className="record" key={record.key}>
                <audio controls src={record.audio} />
                <div className="delete-button-container">
                  <button
                    class="nes-btn is-warning"
                    title="Delete this audio"
                    onClick={() => deleteAudio(record.key)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="no-records">

        </div>
      )}
    </div>
  );
}
