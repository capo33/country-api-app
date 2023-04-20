import React, { useContext } from 'react'
import Input from '@material-ui/core/Input'
import SearchIcon from '@material-ui/icons/Search'
import { SearchContainer, SearchWrapper } from './searchStyle'
import { SearchProps } from '../../types/searchType'
import { context } from '../../contexts/context'

const Search = ({
  handleSearch,
  handleClickSearch,
  click,
  search,
}: SearchProps) => {
  const { state } = useContext(context)

  const handleChange = (e: any) => {
    handleSearch(e.target.value)
  }

  const handleClick = () => {
    handleClickSearch(click)
  }

  return (
    <SearchContainer>
      <SearchWrapper>
        <Input
          placeholder="Search"
          disableUnderline={true}
          onChange={handleChange}
          value={search}
        />
        <SearchIcon
          onClick={handleClick}
          style={{ cursor: 'pointer', color: state.ui }}
        />
      </SearchWrapper>
    </SearchContainer>
  )
}

export default Search
