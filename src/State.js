// import React, { useState } from "react";
// import './State.css';

// const State = () => {
//     const [name, setName] = useState("john");
//     const [count, setCount] = useState(0);
//     const [color, setColor] = useState("red");
//     const [bgcolor, setBgcolor] = useState("black");

//     const changeName = () => {
//         setName("Gaju");
//     };

//     const incrementCount = () => {
//         setCount(count + 1);
//     };

//     const colorChange = () => {
//         setColor("yellow");
//     };

//     const ChangeColor = () => {
//         if (bgcolor === "white") {
//             setBgcolor("black");
//         } else {
//             setBgcolor("white");
//         }
//     };

//     return (
//         <div>
//             <p>{name}</p>
//             <button onClick={changeName}>Change Name</button>
//             <p>{count}</p>
//             <button onClick={incrementCount}>Increment Count</button>
//             <div
//                 style={{
//                     background: color,
//                     height: "200px",
//                     width: "200px",
//                 }}
//             ></div>
//             <button onClick={colorChange}>Change Color</button>
//             <div
//                 style={{
//                     backgroundColor: bgcolor, 
//                     height: "200px",
//                     width: "200px",
//                 }}
//             ></div>
//             <button onClick={ChangeColor}>
//                 {bgcolor === "black" ? "Light" : "Dark"} 
//             </button>
//         </div>
//     );
// };

// export default State;
