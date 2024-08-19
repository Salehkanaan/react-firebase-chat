import { useState } from "react";
import Button from "./button/Button";
const App = () => {
   const array = ["./img/1.jpg","./img/2.jpg"
    ,"./img/3.jpg","./img/4.jpg","./img/5.jpg"
    ,"./img/6.jpg","./img/7.jpg","./img/8.jpg"
    ,"./img/9.jpg","./img/10.jpg","./img/11.jpg"
    , "./img/12.jpg","./img/13.jpg","./img/14.jpg",
    "./img/15.jpg","./img/16.jpg","./img/17.jpg","./img/18.jpg"
   ];
  const [imgUrl,setImgUrl] = useState("");
  const [imgnb, setImgnb] = useState(0);
  let i;
  const incIMg = () => {
    if (imgnb >= 18) {
      setImgnb(1); // Reset back to 1
     
    } else {
      setImgnb((prev) => prev + 1);
        setImgUrl(array[imgnb]);
    }
  };
 
  console.log(imgnb);
  return (
    <div className="container">
      <div className="imgcont">
          <img className="image" src={imgUrl ||"./img/17.jpg"} width="25%"/>
      </div>
      {/* <button className="b1" >
        Click
      </button> */}
      <div onClick={incIMg} >
      <Button className="b1" />
    </div>
    </div>
  );
};

export default App;
