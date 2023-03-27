

const buttonData = [
    { label: 'Happy', icon: 'sentiment_satisfied', backgroundColor: "#CCF6EF", color: "#21BCA0"},
    { label: 'Angry', icon: 'sentiment_extremely_dissatisfied', backgroundColor: "#F8D8D8", color: "#E15555"},
    { label: 'Scared', icon: 'mood_bad', backgroundColor: "#FFE3CA", color: "#FF810D"},
    { label: 'Sad', icon: 'sentiment_dissatisfied', backgroundColor: "#B8CCF4", color: "#5585E1" },
    { label: 'Excited', icon: 'sentiment_very_satisfied', backgroundColor: "#FFEF99", color: "#B09400"},
    { label: 'Neutral', icon: 'sentiment_neutral', backgroundColor: "#D2ECCE", color: "#4B9F3E"},
  
  ];
  function buttonClicked(label) {
        console.log("button clicked" + label)
  }
  
  function EmotionButton(props) {
    return (
      <div>
  
  {buttonData.map((button) => (
              <button 
              key = {button.label}
              style={{
            padding: "8px",
            margin: "8px",
            backgroundColor: button.backgroundColor,
            color: button.color,
            borderStyle: "none",
            borderRadius: "8px",
            width: "90px",
            height: "80px"
          }}
          onClick={() => buttonClicked(button.label)}
              >
              <div style={{display: "flex", flexDirection: "column"}}>
              <span className="material-symbols-outlined">{button.icon}</span>
              {button.label}
              </div>
              </button>
            )
  
            )}
      </div>
    );
  }
  export default EmotionButton;