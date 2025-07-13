import Button from "@/components/Button";
import Home2Navbar from "@/components/Home2Navbar";
import React from "react";

const NotFoundPage = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/404.png')" }} // Replace with your actual image path
    >
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-md">
        <Home2Navbar />
      </div>
      <div className="flex items-center flex-col gap-4 mt-16 text-center">
        <h1>
          Page <br /> Not Found
        </h1>
        <p>
          The page you are looking for does not exist. It might have been moved
          or deleted.
        </p>
        <div>
          <Button text={"Back to Home"} variant="outline" />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
