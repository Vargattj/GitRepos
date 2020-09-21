import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParams {
  repository: string;
}
const Repositories: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  console.log(useRouteMatch());

  return <h1>Repository: {params.repository}</h1>;
};

export default Repositories;
