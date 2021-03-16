import buildNav from '../components/navBuilder';
import waresButton from '../components/souvenirButton';
import foodButton from '../components/foodButton';
import domEvents from './domEvents';
import navEvents from './navEvents';
import domBuilder from './views/domBuilder';
import headerTitle from '../components/headerTitle';
import staffButton from '../components/staffButton';
import showsButton from '../components/showsButton';

const startApp = () => {
  domEvents();
  domBuilder();
  foodButton();
  staffButton();
  buildNav();
  navEvents();
  waresButton();
  headerTitle('Welcome to ye ol\' site');
  showsButton();
};

export default startApp;
