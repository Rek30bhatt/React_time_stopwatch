import "./Button.css";
// import { Link } from "react-router-dom";

function Button(props) {
  return (
    <div className="btnComp">
        <div className="b1">
      <button className="btn1" onClick={props.click}>
      {props.text1} 
        {/* <Link to={props.link}> {props.text1} </Link> */}
      </button>
      </div>
      <div className="b2">
      <button className="btn2" onClick={props.onclick}>
        {props.text2}
        {/* <Link to={props.link2}> {props.text2}</Link> */}
      </button>
      </div>
    </div>
  );
}
export default Button;
