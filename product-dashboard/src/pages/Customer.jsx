import React from "react";
import { Link } from "react-router-dom";

export const Customer = () => {
  return (
    <div className="text-center">
      <h1>customer page</h1>
      <Link to="/" className="text-red-500 mr-4 underline">
        go back to dashboard
      </Link>
    </div>
  );
};
