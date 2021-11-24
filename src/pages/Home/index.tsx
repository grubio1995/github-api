import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <h3>Desafio Github API</h3>
      <h4>Bootcamp Spring React - DevSuperior</h4>
      <Link to="/gitprofilesearch">
        <button className="btn btn-primary btn-lg start-button">Começar</button>
      </Link>
    </div>
  );
};

export default Home;
