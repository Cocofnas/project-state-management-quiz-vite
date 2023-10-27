import "./buttons.css";

export const Restart = ({ onRestart }) => {
  return <div class="restart-button">
    <button onClick={onRestart}>Restart Quiz</button></div>;
};
