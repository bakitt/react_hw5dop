import React, { useState } from 'react';

const ColorTextChanger = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div>
      <p style={{ color: selectedColor, fontSize: '18px', fontFamily: 'Arial', fontWeight: 'bold', textAlign: 'center' }}>
        To live, you need a goal; to live without a goal is like lying in the grave.
      </p>
      <select value={selectedColor} onChange={handleColorChange} style={{ marginTop: '10px', width: '200px', padding: '5px' }}>
        <option value="" style={{ color: 'gray' }}>Выберите цвет</option>
        <option value="red">Красный</option>
        <option value="green">Зеленый</option>
        <option value="blue">Синий</option>
      </select>
    </div>
  );
};

export default ColorTextChanger;
