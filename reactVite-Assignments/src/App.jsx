import React, { useState, useEffect } from 'react';

function FavoriteColorComponent() {
  const [favoriteColor, setFavoriteColor] = useState('blue');

  useEffect(() => {
    const timer = setTimeout(() => {
      setFavoriteColor('green');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h1>My favorite color is {favoriteColor}</h1>
      <div id="colorDisplayDiv"></div>
    </>
  );
}

export default FavoriteColorComponent;

