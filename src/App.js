import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      searchValue: '',
      productsLoading: true
    }



  }
  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data =>
        this.setState(
          () => {
            return { products: data, productsLoading: false }
          }
        ))
  }
  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchValue = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchValue }
    })


  }
  render() {
    const { products, productsLoading, searchValue } = this.state;
    const { onSearchChange } = this;
    const filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(searchValue)
    });
    return (
      <div className="App">
        <SearchBox onChangeHandler={onSearchChange} placeholder='Search products' className='search-box' />
        <CardList products={filteredProducts} loadingState={productsLoading} />
      </div>
    );
  }

}

export default App;
