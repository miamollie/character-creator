import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <CharacterEditor />
      <div
        style={{
          height: "50%",
          width: "100%",
          backgroundColor: "hsl(195deg, 20%, 86%)",
          position: "fixed",
          top: "50%",
          zIndex: -1,
        }}
      ></div>
      <Footer />
    </>
  );
}

export default App;
