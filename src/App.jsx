
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FindProducts from './components/FindProducts';
import SearchBar from './components/SearchBar';
import Content from './components/Content';
import Footer from './components/Footer';
import Shop from './components/routes/Shop';
import Explore from './components/routes/Explore';
import Cart from './components/routes/Cart';
import Account from './components/routes/Account';
import Favourite from './components/routes/Favourite';




const App = () => {
  return (
    <div className="relative min-h-screen pb-24 bg-white">
      <Header />
      <FindProducts />
      <SearchBar />
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/account" element={<Account />} />
        <Route path="/" element={<Content />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
