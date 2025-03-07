import { useState, useEffect } from 'react';
import './App.css';

function App() {
  document.title = "simple quiz page";
  const [question, setQuestion] = useState('Are You Gay?');
  const [buttonPosition, setButtonPosition] = useState({ top: '0px', left: '900px' });

  useEffect(() => {
    // Handler for mouseover event
    const handleMouseOver = () => {
      // Generate random position within the container
      const container = document.querySelector(".buttonContainer");
      const containerRect = container.getBoundingClientRect();
      const maxTop = containerRect.height - 50; // Assuming button height is 50px
      const maxLeft = containerRect.width - 100; // Assuming button width is 100px

      const randomTop = Math.floor(Math.random() * maxTop);
      const randomLeft = Math.floor(Math.random() * maxLeft);

      setButtonPosition({ top: `${randomTop}px`, left: `${randomLeft}px` });
    };

    const $noBtn = document.querySelector(".no");
    $noBtn.addEventListener('mouseover', handleMouseOver);

    // Clean up the event listener
    return () => {
      $noBtn.removeEventListener('mouseover', handleMouseOver);
    };
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <>
      <div className="centerContainer">
        <span className="question">{question}</span>

        <div className="buttonContainer">
          <button className='btn yes' onClick={() => setQuestion("It's so dirty!!")}>yes</button>
          <button
            className='btn no'
            style={{ position: 'absolute', top: buttonPosition.top, left: buttonPosition.left }}
          >
            no
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
