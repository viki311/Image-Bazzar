import React, { useState } from "react";
import SearchImages from "./Components/SearchImages";
import DisplayImages from "./Components/DisplayImages";
const App = () => {
  const [images, setImages] = useState([]);
  return (
    <div>
      <SearchImages addImages={setImages} />
      <DisplayImages Images={images} />
    </div>
  );
};
export default App;
