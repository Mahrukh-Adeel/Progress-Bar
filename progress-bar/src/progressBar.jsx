import './App.css';
import PropTypes from 'prop-types';

function ProgressBar(props) {
  return (
    <div className="prog">
      <h1>Progress Bar</h1>
      <div className="inner" style={{ width: "100%", height: "35px", backgroundColor: "#333333", borderRadius: "4px" }}>
        <div className="outer"
          style={{
            width: `${props.progress}%`,
            backgroundColor: "#32CD32",
            height: "35px",
            borderRadius: "4px",
          }}
        ></div>
      </div>
      <p>Completion Status: {props.progress}%</p>
    </div>
  );
}
ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
