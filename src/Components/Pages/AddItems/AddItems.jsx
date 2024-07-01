import React from "react";
import SectionTitle from "../../Shared/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <SectionTitle heading="add an item" subHeading="What's new" />
      <div className="py-10 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* recipe name */}
          <label className="form-control w-full my-4 ">
            <div className="label">
              <span className="label-text">Recipe Name *</span>
            </div>
            <input
              {...register("name")}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          <div className="flex gap-6">
            {/* category */}
            <label className="form-control w-full my-4 ">
              <div className="label">
                <span className="label-text">Category *</span>
              </div>
              <select
                {...register("category")}
                className="select select-bordered w-full "
              >
                <option disabled selected>
                  choose your dish
                </option>
                <option value="salad">salad</option>
                <option value="pizza">pizza</option>
                <option value="popular">popular</option>
                <option value="soup">soup</option>
                <option value="drink">drink</option>
              </select>
            </label>
            {/* price */}
            <label className="form-control w-full my-4 ">
              <div className="label">
                <span className="label-text">Price *</span>
              </div>
              <input
                {...register("price")}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* recipe details */}
          <label className="form-control w-full my-4 ">
            <div className="label">
              <span className="label-text">Recipe Details *</span>
            </div>
            <textarea
              {...register("recipe")}
              placeholder="Recipe details"
              className="textarea textarea-bordered textarea-sm w-full "
            ></textarea>
          </label>
          <div className="form-control w-full my-4 ">
            <input
              {...register("image")}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <button className="btn">
            Add Items <FaUtensils className="ml-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
