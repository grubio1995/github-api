import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import './styles.css';
import axios from 'axios';

type FormData = {
  user: string;
};

type GitUser = {
  login: string;
  followers: string;
  location: string;
  name: string;
  avatar_url: string;
};

const GitProfileSearch = () => {
  const [gituser, setgituser] = useState<GitUser>();

  const [formData, setFormData] = useState<FormData>({
    user: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${formData.user}`)
      .then((response) => {
        setgituser(response.data);
      })
      .catch((error) => {
        setgituser(undefined);
      });
  };

  return (
    <>
      <div className="git-profile-search-container">
        <div className="search-container">
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <h1>Encontre um perfil Github</h1>
              <input
                type="text"
                name="user"
                value={formData.user}
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
      {gituser && (
        <div className="git-profile-result-container">
          <div className="img-container">
            <img src={gituser.avatar_url} />
          </div>
          <div className="info-container">
            <h2>Informações</h2>
            <ResultCard title="Perfil:" description={gituser.login} />
            <ResultCard title="Seguidores:" description={gituser.followers} />
            <ResultCard title="Localidade:" description={gituser.location} />
            <ResultCard title="Nome:" description={gituser.name} />
          </div>
        </div>
      )}
    </>
  );
};

export default GitProfileSearch;
