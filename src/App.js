import TheHeader from './components/TheHeader'
import TheCart from './components/TheCart'
import ProductCard from './components/ProductCard'

function App() {
  return (
    <div className="wrapper">
      {/* <TheCart /> */}

      <TheHeader />

      <div className="px-11 py-10">
        <div className="mb-10 flex justify-between items-center">
          <h2 className="text-3xl font-bold">Все кроссовки</h2>

          <div className="relative flex items-center">
            <img
              src="/svg/search.svg"
              className="absolute left-5"
              alt="Поиск"
            />
            <input
              type="text"
              className="border border-gray-100 rounded-xl pl-12 pr-5 py-3 focus:border-gray-300 placeholder:text-gray-200 focus:outline-none text-gray-300"
              placeholder="Поиск..."
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-10">
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default App;
