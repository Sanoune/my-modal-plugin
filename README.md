# react-modal-notice

A custom modal component for React.

## Installation

1. **Prerequisites**:
   Make sure you have Node.js and npm installed. You can download them from [Node.js official website](https://nodejs.org/).

2. **Install the package**:
   ```bash
   npm install react-modal-notice
   ```

Usage
Here's how you can use the Modal component in your React application:

```javascript
import React, { useState } from "react";
import Modal from "./Modal";
import "./App.css"; // Styles globaux

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const customOverlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 2000,
  };

  const customContentStyle = {
    background: "lightblue",
    padding: "30px",
    borderRadius: "12px",
    maxWidth: "600px",
  };

  const customCloseButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    fontSize: "1.8rem",
    cursor: "pointer",
    color: "white",
  };

  return (
    <div className="App">
      <h1>My App</h1>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        overlayStyle={customOverlayStyle}
        contentStyle={customContentStyle}
        closeButtonStyle={customCloseButtonStyle}
      >
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
};

export default App;
```
