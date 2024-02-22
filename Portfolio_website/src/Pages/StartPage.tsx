import React from "react";

const ListPage: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume_2023.pdf";
    link.download = "Jigyas_Sharma.pdf";
    link.click();
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "100vh", fontSize: "48px" }}
    >
      <div>Jigyas Sharma</div>
      <button className="btn btn-primary mt-4" onClick={handleDownload}>
        Download Resume
      </button>
    </div>
  );
};

export default ListPage;
