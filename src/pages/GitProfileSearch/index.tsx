import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import img from './images/66876849.png';
import './styles.css';

type FormData = {
  user: string;
};

type GitUser = {
  perfil: string;
  seguidores: string;
  localidade: string;
  nome: string;
};

const GitProfileSearch = () => {
  const [formData, setFormData] = useState<FormData>({
    user: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="git-profile-search-container">
        <div className="search-container">
          <form>
            <div className="form-container">
              <h1>Encontre um perfil Github</h1>
              <input
                type="text"
                className="search-input"
                placeholder="Usuário Github"
                onChange={handleChange}
              />
              <button type="submit" className="btn btn-primary search-button">
                Encontrar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="git-profile-result-container">
        <div className="img-container">
          <img src={img} />
        </div>
        <div className="info-container">
          <h2>Informações</h2>
          <ResultCard title="Perfil:" description="aaa" />
          <ResultCard title="Seguidores:" description=" cc" />
          <ResultCard title="Localidade:" description=" cc" />
          <ResultCard title="Nome:" description=" cc" />
        </div>
      </div>
    </>
  );
};

export default GitProfileSearch;
