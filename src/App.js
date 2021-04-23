import Banner from "./Components/Banner";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import FreshRecommendations from "./Components/FreshRecommendations";
import Header from "./Components/Header";
import LatestSearch from "./Components/LatestSearch";

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Banner />
      <LatestSearch />
      <FreshRecommendations />
      <Footer />
    </div>
  );
}

export default App;
