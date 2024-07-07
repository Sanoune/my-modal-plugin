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
import { Modal } from "react-custom-modal-msg-pop";
import "./App.css";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <h1>My App</h1>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
};

export default App;
```
