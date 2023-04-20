import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import CountryTable from '../../components/Table/CountryTable/CountryTable'
import { fetchCountries } from '../../redux/actions/countyAction'
import { useDispatch } from 'react-redux'
import { Hero } from './homeStyle'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [click, setClick] = useState('')
  const handleSearch = (value: string) => {
    setSearch(value)
  }

  const handleClickSearch = () => {
    setClick(search)
    setSearch('')
  }
  const handleDrawerClick = (state: boolean) => {
    setIsOpen(state)
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  return (
    <>
      <Navbar
        onClick={handleDrawerClick}
        isOpen={isOpen}
        handleSearch={handleSearch}
        handleClickSearch={handleClickSearch}
        click={click}
        search={search}
      />

      <Hero>
        <Sidebar onClick={handleDrawerClick} isOpen={isOpen} />
        <CountryTable search={search} click={click} />
      </Hero>
    </>
  )
}

export default Home
