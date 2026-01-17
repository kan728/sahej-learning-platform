export default function VideoPlayer({ videoId }) {
    return (
      <div style={{ marginTop: "20px" }}>
        <iframe
          width="360"
          height="215"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Tutorial Video"
          allowFullScreen
        />
      </div>
    );
  }  
  
  