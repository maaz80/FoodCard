import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import userContext from './ContextAPI/useContext'

const RootApp = () => {
  const [cardData, setCardData] = useState([]); 

  return (
    <StrictMode>
      <userContext.Provider value={{ cardData, setCardData }}>
        <App />
      </userContext.Provider>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<RootApp />);
