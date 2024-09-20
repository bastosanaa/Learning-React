import Button from "./Button";
import Alert from "./Alert";
import { useState } from "react";

function App() {
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  return (
    <div>
      {showAlert && (
        <Alert handleClose={handleCloseAlert}>
          <strong>Holy guacamole!</strong> Disparando meu primeiro alert
          dinamicamente com react :D
        </Alert>
      )}
      <Button onclick={handleShowAlert}>Meu butaozinho</Button>
    </div>
  );
}

export default App;
