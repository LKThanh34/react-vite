//  () => {} 
// React components are regular JavaScript functions, but their names must start with a capital letter or won't work!
//  component = htm + css + js

// fragment

import './style.css';

const MyComponent = () => {
    return (
      <>
      <div>le kim thanh update</div>
      <div className="child" style={
        {borderRadius:"10px"}
      } >child</div>

      </>
    );
  }

  export default MyComponent;