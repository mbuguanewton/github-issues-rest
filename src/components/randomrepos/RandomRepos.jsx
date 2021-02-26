import { useEffect, Suspense, useState, lazy } from 'react'
import axios from 'axios'
import { Text } from '@chakra-ui/react'

const RandomRepoCard = lazy(() => import('./RandomRepoCard'))

function RandomRepos() {
  const [random, setRandom] = useState([])
  const [error, setError] = useState([])

  const fetchRandom = async () => {
    try {
      const config = {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          'content-type': 'application/json',
        },
      }
      const { data } = await axios.get(
        'https://api.github.com/repositories',
        config
      )

      if (data) {
        const randomRepos = data.slice(0, 3)
        setRandom(randomRepos)
      }
      //   setRandom([])
    } catch (error) {
      setError(error.message)

      return
    }
  }

  useEffect(() => {
    fetchRandom()
  }, [])

  return (
    <div className='random'>
      <Text as='h2'>Random Repositories</Text>
      <div className='random__wrapper'>
        {random &&
          random.map((repo) => (
            <Suspense key={repo.id} fallback={<h3>Loading ...</h3>}>
              <RandomRepoCard repo={repo} />
            </Suspense>
          ))}

        {!random.length && <h3>No repositories available</h3>}
      </div>
    </div>
  )
}

export default RandomRepos
