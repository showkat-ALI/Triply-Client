import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./../Mydestination/Mydestination.css"
// dash boadred build

const DashBoared = () => {
  const [spots, setSpots] = useState([]);
  const [userdata, setUserdata] = useState({});
  const [reload, setReload] = useState(true);

  useEffect(() => {
    fetch("https://mysterious-tundra-67340.herokuapp.com/userdata")
      .then((res) => res.json())
      .then((data) => setUserdata(data));
  }, []);
  useEffect(() => {
    fetch("https://mysterious-tundra-67340.herokuapp.com/allconfirmedspot")
      .then((res) => res.json())
      .then((data) => setSpots(data));
  }, [reload]);
  const remove = (id) => {
    const proceed = window.confirm("Do youn want to delete?");
    if (proceed) {
      fetch(`https://mysterious-tundra-67340.herokuapp.com/userdata/remove/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            const remainingSpot = spots.filter((spot) => spot._id !== id);
            setSpots(remainingSpot);
            alert("Deleted Sucessfully");
          } else {
            alert("Something went wrong");
          }
        });
    }
  };
  const update = (id) => {
    const proceed = window.confirm("Do youn want to confirm?");
    if (proceed) {
      fetch(`https://mysterious-tundra-67340.herokuapp.com/userdata/remove/${id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount === 1) {
            setReload(!reload);
          }
        });
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <h1 className="text-center">Total spots are:{spots.length}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="wiiBlock">index</th>
            <th>image</th>
            <th className="wiiBlock">Spot Name</th>
            <th>User Name</th>
            <th className="wiiBlock">Adress</th>
            <th>Status</th>
            <th>Confirm</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {spots?.map((place, index) => (
            <tr key={place._id}>
              <td className="wiiBlock">{index}</td>
              <td>
                <img width="30px" src={place.img} alt="" />
              </td>
              <td className="wiiBlock">{place?.name.slice(0, 10)}</td>
              <td>{userdata?.name}</td>
              <td className="wiiBlock">{userdata?.address}</td>
              <td>{place?.status}</td>
              <td>
                <button
                  onClick={() => {
                    update(place._id);
                  }}
                  className="btn btn-primary"
                >
                  Confirm
                </button>
              </td>

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

export default DashBoared;
