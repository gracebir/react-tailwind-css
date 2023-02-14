import React from 'react'

type searchProp = {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

function Search({setSearch, search}:searchProp) {
  return (
    <form>
      <input value={search} onChange={(e)=> setSearch(e.target.value)} name="movie" className='outline-none py-2 px-2 border-b-lime-600 border-b w-full' type="text" placeholder='search movie' />
    </form>
  )
}

export default Search
