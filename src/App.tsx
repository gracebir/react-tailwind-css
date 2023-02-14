import React, { useEffect, useState } from 'react';
import Movielist from './components/Movielist';
import Search from './components/Search';

export type movie = {
  name: string
  ratings: number
  duration: string
}

let movies: Array<movie> = [
  {
    name:'Wednesday',
    ratings: 90,
    duration:'3hrs'
  },
  {
    name:'Thor',
    ratings: 50,
    duration: '2hrs'
  },
  {
    name:'Avengers',
    ratings: 80,
    duration: '2.8hrs'
  },
  {
    name:'Justice league',
    ratings: 90,
    duration: '2.5hrs'
  },
  {
    name:'Aladin',
    ratings: 80,
    duration: '2.8hrs'
  },
  {
    name:'Fast and furious',
    ratings: 90,
    duration: '2.5hrs'
  }
]

function App() {
  const [smovies, setSmovies] = React.useState<movie[]>([])
  const [search , setSearch] = React.useState("")
  const searchFunc = (value: string) => {
    const movie = movies.filter(
      items => items.name.substring(0, value.length).toLocaleLowerCase() === value.toLocaleLowerCase())
    return movie
  }

  useEffect(()=>{
    const newMovie = searchFunc(search)
    setSmovies(newMovie)
  },[search])

  return (
    <div className='h-[100vh] bg-gray-900 flex items-center'>
      <div className='container bg-white mx-auto w-[50vw]  rounded-md p-4'>
        <h2 className='text-2xl text-center font-semibold mb-16'>Movie List</h2>
        <div className='w-[80%] mx-auto flex flex-col gap-4'>
          <Search setSearch={setSearch} search={search}/>
          {smovies.length === 0 && search.length === 0 ? (
            <Movielist movies={movies}/>
          ): (
            <Movielist movies={smovies}/>
          )}
        </div>
        
      </div>
    </div>
  );
}

export default App;
