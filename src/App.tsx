import React, { useState } from 'react';
import { CatContext } from "./Core/context/CatContext";
import Cat from "./Ui/screen/Cat";

function App() {

  const [page, setPage] = useState<number>(0);

  return <CatContext.Provider value={{ page: page, toggle: setPage }}>
    <Cat></Cat>
  </CatContext.Provider>
}

export default App;
