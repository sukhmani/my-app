import  React from 'react'
//function Greet(){
  //  <return><h1> Hello Sukhmani</h1></return>
//}

//export const Greet = () => <h1>Hello Sukhmani</h1>

const Greet = (props)  => {
console.log(props)
return <h1> Hello {props.name } </h1>


}
export default Greet