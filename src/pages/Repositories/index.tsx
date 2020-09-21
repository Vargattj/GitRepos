import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
interface RepositoryParams {
  repository: string;
}

const Repositories: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  console.log(useRouteMatch());

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://cdn.discordapp.com/attachments/482050007810310147/733504387468754994/109916621_1889247304551897_3961178171351926851_n.png"
            alt="Img"
          />
          <div>
            <strong>RocketSeat/unform</strong>
            <p>sdadasdasdasd</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to={`asa`}>
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>
          <FiChevronRight size={16} />
        </Link>
      </Issues>
    </>
  );
};

export default Repositories;
