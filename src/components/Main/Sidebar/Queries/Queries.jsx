import React from 'react'
import { ListItems } from './ListItems'

export const Queries = ({ queries, setCurrentQuery, toggle, setToggle }) => {
  return (
    <div className={`flex flex-col md:w-1/4 overflow-auto px-0 h-full top-0 border-r border-gray-200 
    ${(toggle === "open")?("w-full"):("w-0")}`}>
        <div className='w-full p-4 h-18'>
            <h2 className='text-xl font-semibold'>Choose Query:</h2>
        </div>
        <div className="flex flex-col border-y h-full w-full">
            {queries.map((query, index) => {
                return(
                    <ListItems key={index} query = {query} setCurrentQuery = {setCurrentQuery} toggle = {toggle} setToggle = {setToggle}/>
                );
            })}
        </div>
    </div>
  )
}
