import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-100 m-10 flex justify-center align-center">
      {children}
    </div>
  );
};

export default Card;
