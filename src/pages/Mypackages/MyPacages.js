import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { useForm } from "react-hook-form";
// my pacage desgine
import useAuth from "../../hooks/useAuth";
import { NavLink } from "react-router-dom";
import MyDestinations from "../Mydestination/MyDestinations";
import axios from "axios";

const MyPacages = () => {
  const { id } = useParams();
  const [spot, setSpot] = useState({});
  const [userSpots, setUserSpots] = useState({});
  const [userDetails, setuserDetails] = useState({});
  const history = useHistory();
  const { user } = useAuth();
  const { uid } = user;
  const { _id, name, location, price, desc, img } = spot;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`https://mysterious-tundra-67340.herokuapp.com/packeges/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data._id) {
          setSpot(data);
        } else {
          alert("spot didn't find");
        }
      });
  }, []);
  const onSubmit = (data) => {
    axios.post(`https://mysterious-tundra-67340.herokuapp.com/userdata`, data).then((res) => {
      if (res.data.insertedId) {
        alert("data inserted");
        reset();
      }
    });
  };
  const handlespotaddDB = () => {
    fetch(`https://mysterious-tundra-67340.herokuapp.com/Spots/userAdded`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(spot),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setUserSpots(data);
        }
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <h1 className="text-center"> Choose your next destination </h1>
          <Card style={{ width: "18rem" }}>
            <Card.Img className="rounded" variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{desc}</Card.Text>
              {/* <NavLink  to={`/packeges/${_id}`}>
      Go somewhere
      </NavLink> */}
              <button
              className="btn btn-success"
                onClick={() => {
                  if (user.email) {
                    delete spot._id;
                    spot.uid = uid;
                    spot.status = "pending";
                    handlespotaddDB();
                    alert(`Your Destination next is ${name}. Go to my destination page for Confim.`)
                  } else {
                    history.push("/login");
                  }
                }}
              >
                select
              </button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input value={user?.displayName} {...register("name")} />
            <br />
            <br />
            <input value={user?.email} {...register("email")} />
            <br />
            <br />

            <input
              type="text"
              placeholder="your address"
              {...register("address", { required: true })}
            />
            <br />
            <br />

            <input
              type="number"
              placeholder="age"
              {...register("age", { required: true })}
            />
            <br />
            <br />
            <input
              type="number"
              placeholder="Quantity of person"
              {...register("personQuan", { required: true })}
            />
            <br />
            <br />

            {errors.exampleRequired && <span>This field is required</span>}
            <input className="btn btn-danger" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyPacages;
