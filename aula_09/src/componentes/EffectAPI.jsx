import { useState, useEffect } from 'react';
import './EffectAPI.css'

export default function EffectAPI() {
  const [usuarios, setUsuarios] = useState();
  const [username, setUsernames] = useState([false]);
  const [city, setCity] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carregamento


    // Usamos uma função assíncrona dentro do useEffect
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); //fecth faz uma requisição HTTP utilizando o método GET
        const data = await response.json(); //await faz com que a requisição aguarde os dados chegarem. O método json converte os dados para json
        setUsuarios(data); // Atualiza o estado com os dados recebidos
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    }

    const fetchUsernames = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); //fecth faz uma requisição HTTP utilizando o método GET
        const data = await response.json(); //await faz com que a requisição aguarde os dados chegarem. O método json converte os dados para json
        setUsernames(data); // Atualiza o estado com os dados recebidos
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    }

    useEffect(() => {
      fetchUsuarios(), fetchUsernames();
    },[{usuarios}], [{username}])  
    
 // O array vazio garante que o efeito execute apenas uma vez

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <>
    <div className='container'>
      <div className='table1' >
          <h3>Usuários</h3>
          <ul>
            {usuarios.map(usuario => (
              <li key={usuario.id}>{usuario.name}</li>
            ))}
          </ul>
          <button onClick={() => setUsuarios(true)}>Resgatar</button>
        </div>

        <div className='table2'>
          <h3> Usernames</h3>
          <ul>
            {username.map(username => (
              <li key={username.id}>{username.username}</li>
            ))}
          </ul>
          <button onClick={() => setUsernames(true)}>Resgatar</button>
        </div>

        <div className='table3'>
          <h3> Cidades</h3>
          <ul>
            {usuarios.map(usuario => (
              <li key={usuario.id}>{usuario.address.city}</li>
            ))}
          </ul>
        </div>

    </div>
      
    </>
      );
}