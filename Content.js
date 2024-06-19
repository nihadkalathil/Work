
import { useState } from 'react';
import './App.css';

function Content(props) {
  const handleClick2 = () => {
    // Counter state is decremented
    setCount(count+1);
};
const handleClick1 = () => {
  // Counter state is decremented
  setCount(count-1);
};
const handleClick3 = () => {
setColor("blue");
};
  const [color, setColor] = useState("red");
  const [count, setCount] = useState(1);
 
  const [json1data, setJson1] = useState({"firstname": "Nihad"});
  return (
    <div className="App">
      Content
      <br></br>{props.name}
      <br/>
      {count}
      <br/>
      {color}
      <br/>
      <Component2></Component2>
      <br/>
      {json1data.firstname}
      <button
                    style={{
                        fontSize: "60%",
                        position: "relative",
                        top: "20vh",
                        marginLeft: "5px",
                        backgroundColor: "red",
                        borderRadius: "8%",
                        color: "white",
                    }}

                    
                    onClick={handleClick2}
                >
                    Increment
                </button>
                <button
                    style={{
                        fontSize: "60%",
                        position: "relative",
                        top: "20vh",
                        marginLeft: "5px",
                        backgroundColor: "red",
                        borderRadius: "8%",
                        color: "white",
                    }}

                    
                    onClick={handleClick1}
                >
                    decrement
                </button>

                <button
                    style={{
                        fontSize: "60%",
                        position: "relative",
                        top: "20vh",
                        marginLeft: "5px",
                        backgroundColor: "red",
                        borderRadius: "8%",
                        color: "white",
                    }}

                    
                    onClick={handleClick3}
                >
                   Change color 
                </button>
                
    </div>
  );
}

function Component2() {
  const [array, setArray] = useState([1,2,3]);
  const listItems = array.map(person =>
    <li>{person}</li>
  );
  return <ul>{listItems}</ul>;

}

export default Content;
