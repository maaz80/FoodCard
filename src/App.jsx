import React, { useState } from "react";
import Card from "./components/Card";
import items from "./data/data";

export default function App() {

  return (
    <div className="flex flex-col justify-center items-center min-h-screen poppins-regular ">
      {items?.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}