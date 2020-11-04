import React, { useState, useEffect } from 'react';
import getData from './api/get-data';
import Card from './components/card';
import './App.css';
import Modal from './components/modal';

function App() {
  const [data, setData] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(
    sessionStorage.getItem('visited') ? false : true
  );
  // const [isModalOpen, setIsModalOpen] = useState(true);

  const modalClose = () => setIsModalOpen(false);

  useEffect(() => {
    sessionStorage.setItem('visited', true);

    getData()
      .then((res) => {
        setData(res.data.results);
      })
      .catch((e) => console.log(e));
    return () => {};
  }, []);
  return (
    <div className='App'>
      {isModalOpen && <Modal modalClose={modalClose} />}

      <header></header>
      <main>
        <div className='main-filter'></div>
        <div className='main-sidebar'></div>
        <div className='main-content'>
          {data.slice(0, 20).map((item) => (
            <Card
              key={item.id}
              name={item.name}
              imageURL={item.images.smallSrc}
              finalPrice={item.final_price}
              inStock={item.inStock}
              sku={item.sku}
            />
          ))}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
