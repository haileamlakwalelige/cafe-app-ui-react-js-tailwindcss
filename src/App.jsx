import Deliver from './components/Deliver';
import Enjoy from './components/Enjoy';
import Navbar from './components/Navbar';
import Offer from './components/Offer';
import Reviews from './components/Reviews';
import Welcome from './components/Welcome';
import YouLove from './components/YouLove';

export default function App() {
  return (
    <div className="pb-20">
      <Navbar />
      <Welcome />
      <YouLove />
      <Reviews />
      <Enjoy />
      <Deliver />
      <Offer />
    </div>
  );
}
