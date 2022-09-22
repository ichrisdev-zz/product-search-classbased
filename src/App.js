import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  }
  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchValue)
  });

  return (
  <div className="App">
    <SearchBox onChangeHandler={handleSearch} placeholder='Search products' className='search-box' />
    <CardList products={filteredProducts} loadingState={isLoading} />
  </div>
  );
}

export default App;


