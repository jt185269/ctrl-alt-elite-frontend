import './App.css';
import { useState } from 'react';
import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'
import { MyCalendar } from './CoffeeCalendar';
import { Login } from './Login';
const queryClient = new QueryClient()


async function fetchUser() {
  const res = await fetch('http://localhost:5000/')
  return res.json();
}

function Auth() {
  const {data, status, error} = useQuery(['memes'], fetchUser);
  console.log(data);
  if (status === 'loading') {
    return <p>loading...</p>
  }

  if (status === 'error') {
    console.log(error)
    return <p>ERROR!</p>
    
  }

  return {data}
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
      {auth && <p>welcome {user} <br/> <Auth/></p>}
    </QueryClientProvider>
  );
}

export default App;
