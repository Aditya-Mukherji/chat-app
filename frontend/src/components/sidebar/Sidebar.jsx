import React from 'react'
import Conversatios from './Conversations'
import SearchInput from './SearchInput'
import LogoutButton from './LogoutButton'
const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 slex flex-col'>
        <SearchInput />
        <div className='divider px-3'></div>
        <Conversatios />
        <LogoutButton />
    </div>
  )
}

export default Sidebar