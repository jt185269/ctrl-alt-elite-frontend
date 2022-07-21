import './App.css';
import { useState } from 'react';
import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'
import { MyCalendar } from './CoffeeCalendar';
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
  return (
    <QueryClientProvider client={queryClient}>
      <MyCalendar/>
      <Meme/>
    </QueryClientProvider>
  );
}

export default App;
