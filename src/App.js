import Banner from "./Components/Banner";
import Categories from "./Components/Categories";
import Header from "./Components/Header";
import LatestSearch from "./Components/LatestSearch";

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Banner />
      <LatestSearch />
    </div>
  );
}

export default App;
