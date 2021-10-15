import { RepositoryItem } from './RepositoryItem'
import '../styles/repositories.scss'
import { useState, useEffect } from 'react'

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'http://github.com/unform/unform'
}

export function RepositoryList() {
  const [repositories, setRepositores] = useState<Repository[]>([]);

  //fazendo chamada na API
  useEffect(() => {
    // buscando os repositorios
    fetch('https://api.github.com/orgs/rocketseat/repos')
      // convertendo resposta da busca de repositorios para json
      .then(response => response.json())
      // por fim temos os dados na variavel data e no caso foi dado um console log
      .then(data => setRepositores(data))
  }, [])

  return (
    <section className="repository-list">
      <h1> Lista de Repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          )
        })}
      </ul>
    </section>
  )
}
