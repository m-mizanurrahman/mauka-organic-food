import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import OrganicFood from './components/OrganicFood/OrganicFood';
import PresentedBy from './components/PresentedBy/PresentedBy';
import Review from './components/Review/Review';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <OrganicFood />
      <PresentedBy />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
