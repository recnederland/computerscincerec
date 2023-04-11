import React from "react";

const Card = ({ imageURL, title, description, actionName, actionEvent }) => {
    return(
        <div>
    <img
    style={{
        window: "250px",
        margin: "auto",
    }}
    className="card-img-top"
    src={imageURL}
    >
    </img>
    <div className="card-body">
      <h4 className="card-title"> {title} </h4>
      <p className="card-text"> {description} </p>
      <a className="btn btn-primary" onClick={actionEvent}>
        {actionName}
      </a>
    </div>
  </div>
    );
};

// function Card() {
//   return (
//     <div>
//       <p>Card</p>
//     </div>
//   );
// }

export default Card;
