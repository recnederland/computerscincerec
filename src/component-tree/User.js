import React from 'react'
import Card from '../components/Card';


const User = () =>{

  const onClick = () => {
    alert ("Go details ulaan!");
  }

  const cardProps ={
    imageURL: "https://media.istockphoto.com/id/878942172/pt/vetorial/man-face-cartoon.jpg?s=170667a&w=0&k=20&c=yHgbYJKmxoXIf6YmhCNjPxqFX3Sipa8vYo1Xjd0c4Sk=",
    title: "User",
    description: " Ne var you? ...",
    actionName: " Go to details!",
    actionEvent: " Sonra tamamla",

  }
  return (<Card {...cardProps } />);
}

// function User() {
//   return (
//     <div>
//         <p>User</p>
//     </div>
//   )
// }



export default User