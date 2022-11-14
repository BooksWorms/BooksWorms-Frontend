import React, { useState } from "react";
import axios from "axios";

function AddCategory() {
  const [category, setCategory] = useState();
  const [message, setMessage] = useState("");

  const AddCategories = () => {
    axios
      .post(
        "https://booksworms-api.onrender.com/category",
        {
          category: category,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        setMessage("add successfully");
      })
      .catch((err) => {
        setMessage("not added");
        throw err;
      });
  };

  return (
    <div className="add-category">
      <h1 style={{ color: "#a24e12", marginLeft: "33rem", marginTop: "2rem" }}>
        Add Category
      </h1>

      <table className="categoryTable">
        <tbody>
          <tr>
            <th>Add category</th>
            <th>
              <input
                type="text"
                placeholder="category here "
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
            </th>
          </tr>
          <tr>
            <th></th>
            <th>
              <button className="category-button" onClick={AddCategories}>
                Add Category
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
}

export default AddCategory;
