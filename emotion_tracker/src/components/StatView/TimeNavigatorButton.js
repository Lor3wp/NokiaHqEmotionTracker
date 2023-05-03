import "../../TimeNavigator.css";

const TimeNavigatorButton = ({
  buttonLabel,
  buttonLabelLowerCase,
  buttonClass,
  groupClass,
  setTimeUnit,
}) => {
  return (
    <div className={groupClass}>
      <p className="TimeViewButtonText">{buttonLabel}</p>
      <button
        className={buttonClass}
        onClick={() => {
          setTimeUnit(buttonLabelLowerCase);
        }}
      ></button>
    </div>
  );
};
export default TimeNavigatorButton;
