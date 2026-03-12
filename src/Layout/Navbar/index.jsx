import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../Components/Input'
import useDebounce from '../../hooks/useDebounce'
import { MovieContext } from '../../context/MovieContext'
import './index.css'

const Index = () => {

  const { search, setSearch } = React.useContext(MovieContext)
  
  const [value, setValue] = useState(search)

  const debouncedSearch = useDebounce(value, 2000)

  useEffect(() => {
    setSearch(debouncedSearch)
  }, [debouncedSearch, setSearch])

  return (
    <div className='Navbar'>
      <div className='nav-left'>Aaha</div>

      <div className='nav-right'>
        <ul className='nav-list'>
          <li>
            <Input
              value={value}
              onchange={(e) => setValue(e.target.value)}
              placeholder="Search Movies"
            />
          </li>

          <Link style={{ color: 'white', textDecoration: 'none' }} to={'/'}>
            <li>Home</li>
          </Link>

          <Link style={{ color: 'white', textDecoration: 'none' }} to={'/about'}>
            <li>About</li>
          </Link>

          <Link style={{ color: 'white', textDecoration: 'none' }} to={'/contact'}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Index