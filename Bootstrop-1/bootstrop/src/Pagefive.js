// import Button from "@mui/material/Button";
// import { useNavigate } from "react-router-dom";

// export default function Pagefive({handleBack,hello}) {
// const navigate = useNavigate()
// console.log(hello,"hi")
//   const navgateHandler = () => {
    

//   handleBack()
//   }

//   return (
//     <>
//       <div
//         style={{
//           marginLeft: "23rem",
//           marginTop: "4rem",
//           border: "solid silver",
//           borderRadius: "20px",
//           width: "38rem",
//           textAlign: "center",
//           backgroundColor: "#ffffff",
//           boxShadow: "3px 2px 8px 8px #888888",

//         }}
//       >
//         <h1 >please Uplode the document</h1>
//         <h4 style={{ marginRight: "1rem", color: "gray" }}>
//           Dear custemor, as a TRAI mandate we would require a proof of address
//           document for the connection be shifted.
//         </h4>

//         {/* input */}

//         {/* uplode document */}

//         <div style={{ display: "flex" }}>
//           <div>
//             <p style={{ marginLeft: "4rem" }}>Click to Select image</p>
//             <div
//               style={{
//                 marginLeft: "10rem",
//                 borderStyle: "groove",
//                 width: "15rem"
//               }}
//             >
//               <div>
//                 <p style={{ marginLeft: "-1rem" }}>Front image</p>
//                 <label for="image">
//                   <input
//                     type="file"
//                     name="image"
//                     id="image"
//                     style={{ display: "none" }}
//                   />
//                   <img
//                     alt="img"
//                     src="https://hypersonics.tamu.edu/wp-content/uploads/2020/10/no-photo.jpg"
//                     style={{
//                       borderRadius: "89px",
//                       width: "8rem",
//                       marginLeft: "-1.1rem"
//                     }}
//                   />
//                 </label>
//               </div>
//             </div>
//             <div style={{ margin: "2rem", marginLeft: "7rem" }}>
//               <Button
//                 onClick={navgateHandler}
//                 variant="outlined"
//                 style={{
//                   backgroundColor: "red",
//                   color: "white",
//                   margin: "2rem",
//                   width: "9rem",
//                   fontFamily:"sans-serif"
//                 }}
//               >
//                 BACK
//               </Button>

//               <div style={{display:"inline-block",backgroundColor:"red",padding:"0.5rem",
//                fontFamily:"sans-serif",borderRadius:"0.3rem",
//                cursor:"pointer",marginTop:"1rem",  color: "white",  width: "9rem",}}>
//                 <input type="file" id="upload" hidden />
//                 <label for="upload">Choose file</label>
//                 </div>

//             </div>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
