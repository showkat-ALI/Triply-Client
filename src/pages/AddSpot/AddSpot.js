import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
// spot add
const AddSpot = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios.post("https://mysterious-tundra-67340.herokuapp.com/destinations", data).then((res) => {
      if (res.data.insertedId) {
        alert("data added successfully");
        reset();
      }
    });
  };

  return (
    <div className="container my-5">
      <form className="w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="number"
          className="px-4 py-2 my-3"
          placeholder="id"
          {...register("id", { required: true })}
        />
        <br />

        <input
          type="text"
          className="px-4 py-2 my-3"
          placeholder="spot name"
          {...register("name", { required: true })}
        />
        <br />
        <input
          type="text"
          className="px-4 py-2 my-3"
          placeholder="spot location"
          {...register("location", { required: true })}
        />
        <br />

        <input
          type="number"
          className="px-4 py-2 my-3"
          placeholder="price"
          {...register("price", { required: true })}
        />
        <br />

        <input
          type="number"
          className="px-4 py-2 my-3"
          placeholder="rating"
          {...register("rating", { required: true })}
        />
        <br />

        <input
          type="number"
          className="px-4 py-2 my-3"
          placeholder="staying"
          {...register("staying", { required: true })}
        />
        <br />

        <input
          type="text"
          className="px-4 py-2 my-3"
          placeholder="Description(minimum 100)"
          {...register("desc", { required: true })}
        />
        <br />

        <input
          type="number"
          className="px-4 py-2 my-3"
          placeholder="max people"
          {...register("max", { required: true })}
        />
        <br />

        <input
          type="number"
          className="px-4 py-2 my-3"
          placeholder="minage"
          {...register("minage", { required: true })}
        />
        <br />

        <input
          type="text"
          placeholder="tourtype"
          className="px-4 py-2 my-3"
          {...register("tourtype", { required: true })}
        />
        <br />

        <input
          type="text"
          className="px-4 py-2 my-3"
          placeholder="Image Url(valid)"
          {...register("img", { required: true })}
        />

        <br />

        {errors.exampleRequired && <span>This field is required</span>}
        <br />

        <input className="btn btn-success" type="submit" />
      </form>
    </div>
  );
};

export default AddSpot;
