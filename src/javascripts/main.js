import Auth from './components/Auth/Auth';
import Birfday from './components/Birfday/Birfday';
import '../styles/main.scss';

const init = () => {
  Auth.authStringBuilder();
  Birfday.birfdayStringBuilder();
};

init();
