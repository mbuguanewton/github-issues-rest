import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Loader from 'react-spinners/ClipLoader'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from '../../store/actions/GithubActions'

function Search() {
  const dispatch = useDispatch()
  const { error, fetching } = useSelector((state) => state.github)
  const [searchTerm, setSearchTerm] = useState('')
  const [err, setErr] = useState(null)

  useEffect(() => {
    if (error) {
      setErr(error)
    }
    setTimeout(() => {
      setErr(null)
    }, 5000)
  }, [error])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch(fetchUser(searchTerm))
      setSearchTerm('')
    } catch (error) {
      setSearchTerm('')
    }
  }

  return (
    <div className='search'>
      <form onSubmit={handleSubmit}>
        <div className='formgroup'>
          <label hidden='hidden'>Search</label>
          <FaSearch className='icon' />
          <input
            type='text'
            name='search'
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            className='formgroup__control'
            placeholder='Search for github user ...'
          />
        </div>
        <button
          type='submit'
          className={fetching ? 'btn btn__submit disabled' : 'btn btn__submit'}
          disabled={fetching}>
          {fetching ? <Loader size={15} color='#fff' /> : 'Search'}
        </button>
      </form>
      {err && <small className='error'>{err}</small>}
    </div>
  )
}

export default Search
