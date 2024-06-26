import React from "react";
import UseCart from "../../Hooks/useCart";
import { FaTrash } from "react-icons/fa";
import UseAxiosSecure from "../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Cart = () => {
  const [cart, refetch] = UseCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = UseAxiosSecure();
  const handleDeleteItem = (id) => {
    axiosSecure.delete(`/carts/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
    refetch();
  };
  return (
    <div>
      <Helmet>
        <title>Amazing Restudent | My Cart</title>
      </Helmet>
      <div className="flex justify-evenly">
        <h2 className="text-4xl">Items : {cart.length}</h2>
        <h2 className="text-4xl">TotalPrice : {totalPrice}</h2>
        <button className="btn btn-primary">Pay</button>
      </div>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>

              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td> $ {item.price}</td>
                <th>
                  <button
                    onClick={() => handleDeleteItem(item._id)}
                    className="btn btn-error btn-xm"
                  >
                    <FaTrash />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
