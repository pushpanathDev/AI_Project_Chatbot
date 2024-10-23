import React from "react";

const AIProject = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          "url(https://t4.ftcdn.net/jpg/06/15/06/81/360_F_615068142_3siXSo1TWv7ebrf7OR0XdHurjzkcpJE3.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="text-3xl font-bold text-black m-5 bg-gray-500 bg-opacity-30 text-center p-4 rounded-3xl">
        AI Project
      </h1>
      <h6 className="text-xl font-bold text-white italic bg-gray-500 bg-opacity-30 text-center p-4 rounded-3xl">
        Cric Guru - A Cricket Companion
      </h6>
      <div
        className="flex justify-center items-center relative text-center p-4 rounded-3xl"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80%",
          width: "80%",
          
        }}
      >
        <iframe
          src="https://copilotstudio.microsoft.com/environments/Default-d4963ce2-af94-4122-95a9-644e8b01624d/bots/cr29b_copilotpgFFJ7/webchat?__version__=2"
          frameBorder="0"
          style={{
            width: "600px",
            height: "500px",
            border: "none",
            overflow: "hidden",
            opacity: "0.86",
            borderRadius: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.98)",
            backgroundColor: "white",
            fontSize: "14px",
            color: "#333333",
          }}
          title="AI Project"
        ></iframe>
      </div>
    </div>
  );
};

export default AIProject;
