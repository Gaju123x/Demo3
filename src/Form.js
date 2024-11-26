// const Form=()=>{
//     const handclick=()=>{
//         alert("HI");
//     }
//     const hand=()=>{
//         alert("Hiii")

//     }
//     const handleChange=(event)=>{
//         console.log(event.target.value);
//     }
//     const handleSubmit=(event)=>{
//         event.preventDefault()
//         console.log("hello")
//     }
//         const handleMouseOver = () => {
//           console.log("Mouse is over the text!");
//         };

//         const handleFocus = () => {
//             console.log("Input field is focused!");
//           };

//           const handleKeyDown = (event) => {
//             console.log(`Key pressed: ${event.key}`);
//           };
//           const handleContextMenu = (event) => {
//             event.preventDefault();
//             alert("Right-click menu disabled!");
//           };
//           const handleBlur = () => console.log("Input lost focus!");

//           const handleMouseEnter = () => console.log("Mouse entered!");

//           const handleScroll = () => console.log("Scrolling!");

//           const handleDragStart = () => console.log("Dragging started!");

//           const handleDrop = (e) => {
//             e.preventDefault();
//             console.log("Item dropped!");
//           };


//     return(
//         <div>
//             <button type="button" onClick={handclick}>click here</button>
//              <button type="button" onClick={()=>alert("hii")}>click</button> 
//              <div onDoubleClick={hand} style={{width:100,height:100,backgroundColor:"red"}}>
//              </div>
//                 <form onSubmit={handleSubmit}>
//                 <input type="text" value="" name="userName" placeholder="Enter user name" onChange={handleChange}></input>
//                 <button type="submit">submit</button>
//                 </form>
//              <p onMouseOver={handleMouseOver}>Hover over this text!</p>
//              <input type="text" onFocus={handleFocus} />
//              <input type="text" onKeyDown={handleKeyDown} />
//              <p onContextMenu={handleContextMenu}>Right-click on this text!</p>
//              <input type="text" onBlur={handleBlur} ></input>
//              <div onMouseEnter={handleMouseEnter} style={{ padding: "20px", backgroundColor: "lightblue" }}>Hover here!</div>

//     <div
//       onScroll={handleScroll}
//       style={{ height: "100px", overflowY: "scroll", border: "1px solid black" }}
//     >
//       <p>Scroll this content...</p>
//       <p>More content...</p>
//       <p>Keep scrolling...</p>
//     </div>

//     <div
//       draggable
//       onDragStart={handleDragStart}
//       style={{ width: "100px", height: "100px", backgroundColor: "lightgreen" }}
//     >
//       Drag Me
//     </div>

//     <div
//       onDrop={handleDrop}
//       style={{ height: "100px", border: "1px dashed blue", marginTop: "10px" }}
//     >
//       Drop here!
//     </div>

//         </div>
//     );

// }
// export default Form;