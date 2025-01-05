import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center gap-1 min-h-[calc(100vh-576px)] my-10">
      <span className="loading loading-spinner loading-lg dark:text-white"></span>
      <p className="text-2xl text-gray-800 dark:text-white">Loading...</p>
    </div>
  );
};

export default Loading;