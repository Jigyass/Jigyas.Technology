import React, { useState } from "react";
import StartingPage from "./Pages/EmailPage";
import ListPage from "./Pages/StartPage";

const App: React.FC = () => {
  const [showListPage, setShowListPage] = useState<boolean>(false);

  const handleSkipOrSubmit = () => {
    setShowListPage(true);
  };

  return (
    <div className="App">
      {showListPage ? (
        <ListPage />
      ) : (
        <StartingPage onSkipOrSubmit={handleSkipOrSubmit} />
      )}
      {/* Rest of your components */}
    </div>
  );
};

export default App;
