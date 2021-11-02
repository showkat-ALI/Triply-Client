import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// each spot build
const Spot = (props) => {
  const { _id, name, location, price, desc, img } = props.spot;

  return (
    <>
      <Card>
        <Card.Img className="rounded" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name?.slice(0, 30)}</Card.Title>
          <p>{location}</p>
          <p>${price}</p>
          <Card.Text>{desc?.slice(0, 100)}</Card.Text>

          <NavLink to={`/packeges/${_id}`}>
            <button className="btn btn-secondary">Checkout</button>
          </NavLink>
        </Card.Body>
      </Card>
    </>
  );
};

export default Spot;
