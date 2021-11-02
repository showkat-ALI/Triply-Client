import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import "./Mydestination.css"

const MyDestinations = () => {
  const { user } = useAuth();
  const { uid } = user;
  const [userdata, setUserdata] = useState({});
  const [userspot, setUserspot] = useState([]);
  const [deleted, setDeleted] = useState(null);
  useEffect(() => {
    fetch("https://mysterious-tundra-67340.herokuapp.com/userdata")
      .then((res) => res.json())
      .then((data) => setUserdata(data));
  }, []);
  useEffect(() => {
    fetch(`https://mysterious-tundra-67340.herokuapp.com/userSpot/${uid}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          setUserspot(data);
        }
      });
  }, [uid, deleted]);
  const remove = (id) => {
    const proceed = window.confirm("Do you want to delete?");
    if (proceed) {
      fetch(`https://mysterious-tundra-67340.herokuapp.com/userdata/remove/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            setDeleted(true);
            const remainingSpot = userspot.filter((spot) => spot._id !== id);
            setUserspot(remainingSpot);
            alert("Deleted Sucessfully");
          } else {
            setDeleted(false);
          }
        });
    }
  };
  return (
    <div style={{ height: "100vh" }}>
      <h1 className="text-center">My destinations are:{userspot.length}</h1>

      <Table striped bordered hover className="destination-table">
        <thead>
          <tr>
            <th>image</th>
            <th className="wiiBlock">Spot Name</th>
            <th className="wiiBlock">Price</th>
            <th>User Name</th>
            <th>Adress</th>
            <th>Status</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {userspot?.map((place) => (
            <tr key={place._id}>
              <td>
                <img width="30px" src={place.img} alt="" />
              </td>
              <td className="wiiBlock">{place?.name.slice(0, 10)}</td>
              <td className="wiiBlock">$ {place?.price}</td>
              <td>{userdata?.name}</td>
              <td>{userdata?.address}</td>
              <td>{place?.status}</td>
              <td>
                <button
                  onClick={() => {
                    remove(place._id);
                  }}
                  className="btn btn-danger"
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyDestinations;
