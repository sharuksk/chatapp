import React from 'react'
import "./myStyles.css"
import  Sharuk from '../assets/Sharuk.jpeg';
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

function Users_Groups() {
  return (
    <div className='listcontainer'>
        <div className='ug-header'>
            <img src={Sharuk}
                style={{height: "3rem", width: "3rem", borderRadius: "50%"}}/>
            <p className='ug-title'> Online Users </p>
        </div>
        <div className='sb-search'>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <input placeholder='Search' className='search-box'></input>
        </div>
        <div className='ug-list'>
            <div className='list-item'>
                <p className='con-icon'>P</p>
                <p className='con-title'>Test List</p>
            </div>
            <div className='list-item'>
                <p className='con-icon'>P</p>
                <p className='con-title'>Test List</p>
            </div>
            <div className='list-item'>
                <p className='con-icon'>P</p>
                <p className='con-title'>Test List</p>
            </div>
            <div className='list-item'>
                <p className='con-icon'>P</p>
                <p className='con-title'>Test List</p>
            </div>
            <div className='list-item'>
                <p className='con-icon'>P</p>
                <p className='con-title'>Test List</p>
            </div>
        </div>
    </div>
  )
}

export default Users_Groups
