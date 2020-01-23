import React, { useState } from 'react';
import './App.css';

const defItems = [
  {
    text: 'Item 1',
    selected: false
  },
  {
    text: 'Item 2',
    selected: false
  },
  {
    text: 'Item 3',
    selected: false
  },
  {
    text: 'Item 4',
    selected: false
  },
  {
    text: 'Item 5',
    selected: true
  },
];

function App() {
  const [items, setItems] = useState(defItems);
  const [inputValue, setInputValue] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      text: inputValue,
      selected: false,
    }
    const newItems = [ ...items, newItem];
    setInputValue('');
    setItems(newItems);
  }

  const randomize = () => {
    for(let i = 0; i < 30; i++) {
      setTimeout(pickRandomItem, 100 * i + 100);
    }
  }

  const pickRandomItem = () => {
    const randomItem = items[Math.floor(Math.random() * items.length)];
    const newItems = items.map(item => 
      item === randomItem 
        ? { ...item, selected: true } 
        : { ...item, selected: false } 
    );
    setItems(newItems);
  };

  return (
    <div className="bg-white container mx-auto shadow-lg w-2/4 sm:w-full p-10 bg-gray-300">
      <form onSubmit={handleSubmit} className="flex">
        <input 
          className="py-2 px-4 border border-gray-500 flex-1" 
          type="text" 
          placeholder="Add a new item here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value) } />
        <button 
          className="bg-blue-500 border border-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
        >Add</button>
      </form>
      <ul>
        {items.map((item, idx) => (
            <li className={`my-5 p-1  ${ item.selected ? 'bg-orange-500 text-white' : '' }`} key={idx}>
              {item.text}
            </li>
        ))}
      </ul>

      {items.length > 0 && (
        <button 
          className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4"
          onClick={randomize}
        >
          Randomize
        </button>
      )}  
      
    </div>
  );
}

export default App;
