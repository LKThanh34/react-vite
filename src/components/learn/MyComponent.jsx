//  () => {} 
// React components are regular JavaScript functions, but their names must start with a capital letter or won't work!
//  component = htm + css + js

// fragment

import './style.css';

const MyComponent = () => {
  // in ra được được sử dụng nhiều nhất
  // const name = "le kim thanh";  // String
  // const name = 25;

  // k in ra được
  // const name = true; // boolean
  // const name = undefined;
  // const name = null;

  // kiểu tham chiếu.
  const name = [1,2,3] // in ra => 123

  // const name ={
  //   firtName: "le",
  //   lastName:"Thanh"
  //  {sử dụng JSON.stringify.(name)}

  // }
    return (
      <>
      <div>{JSON.stringify(name)} update</div>
      <div>{console.log("hello")}</div>
      <div className="child" 
      style={{borderRadius:"10px"}} 
      >child</div>

      </>
    );
  }

  export default MyComponent;