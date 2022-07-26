import './App.css';
import { useState } from 'react';
import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'
import { MyCalendar } from './CoffeeCalendar';
import { Login } from './Login';
const queryClient = new QueryClient()


async function fetchMeme() {
  const res = await fetch('https://api.imgflip.com/get_memes')
  return res.json();
}

function Meme() {
  const {data, status, error} = useQuery(['memes'], fetchMeme);
  if (status === 'loading') {
    return <p>loading...</p>
  }

  if (status === 'error') {
    console.log(error)
    return <p>ERROR!</p>
    
  }

  const rand = parseInt(Math.random()*100)

  return (<img src={data.data.memes[rand].url}></img>)
}

function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  const onAuth = (user) => {
    setUser(user)
    setAuth(true)
  }
  return (
    <QueryClientProvider client={queryClient}>
      {!auth && <Login onAuth={onAuth}/>}
      {auth && <p>welcome {user}</p>}
    </QueryClientProvider>
  );
}

export default App;
