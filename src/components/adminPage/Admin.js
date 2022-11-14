import React from "react";
import BookPage from "./../bookPage/index";
import CategoryPage from "../Category/index";
import "../bookPage/bookPage.css";

export default function Admin() {
  return (
    <>
      <BookPage />
      <CategoryPage />
    </>
  );
}
