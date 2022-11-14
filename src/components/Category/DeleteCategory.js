import React, { useState } from "react";
import axios from "axios";

const DeleteCategory = () => {
  const [category_id, setCategory_id] = useState(0);
  const [message, setMessage] = useState("");

  const DeleteCategories = () => {
    axios
      .delete(`/category/${category_id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setMessage("deleted successfully");
      })
      .catch((err) => {
        setMessage("not deleted ");
        throw err;
      });
  };

  return (
    <div className="deleteCategory">
      <h1 style={{ color: "#a24e12", marginLeft: "32rem", marginTop: "2rem" }}>
        Delete Category
      </h1>
      <table className="tableDeleteCategory">
        <tbody>
          <tr>
            <th>Category Id</th>
            <th>
              <input
                type="number"
                placeholder="Category_id here "
                onChange={(e) => {
                  setCategory_id(e.target.value);
                }}
              />
            </th>
          </tr>
          <tr>
            <th></th>
            <th>
              <button
                className=" DeleteCategoryButton"
                onClick={DeleteCategories}
              >
                Delete Category
              </button>
            </th>
          </tr>
          <tr>
            <th>{message}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DeleteCategory;
