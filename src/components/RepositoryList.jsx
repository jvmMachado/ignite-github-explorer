import { Repositoryitem } from "./RepositoryItem";
import {useState} from 'react';

const repository = {
  name: 'simon-game',
  description: 'simon game on jquery',
  link: 'https://github.com'
}

export function RepositoryList() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <Repositoryitem repository={repository} />
        <Repositoryitem repository={repository} />
        <Repositoryitem repository={repository} />
        <Repositoryitem repository={repository} />
      </ul>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
    </section>
  );
}