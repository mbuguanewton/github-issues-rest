import { Text } from '@chakra-ui/react'
import React, { useState, useEffect, useCallback } from 'react'
import { FaGithub } from 'react-icons/fa'
import AvatarComponent from '../common/avatar/Avatar'
import axios from 'axios'
import Languages from '../languages/Languages'

function RepoDetail({ repo }) {
  const [languages, setLanguages] = useState([])
  const user = {
    url: repo ? repo.owner.avatar_url : '',
    label: repo ? repo.owner.login : '',
  }

  const fetchLanguages = useCallback(async () => {
    const config = {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        'content-type': 'application/json',
      },
    }
    const { data } = await axios.get(repo.languages_url, config)
    setLanguages(data)
  }, [repo.languages_url])

  useEffect(() => {
    if (repo) {
      fetchLanguages()
    }
  }, [repo, fetchLanguages])

  return (
    <div className='repodetail'>
      <div className='repodetail__wrapper'>
        <div className='repodetail__wrapper--header'>
          <AvatarComponent user={user} />
          <a href={repo && repo.url} className='btn btn__repo'>
            <FaGithub className='icon' />
            <Text as='span'>Visit github</Text>
          </a>
        </div>
        <Languages languages={languages} />
        <div className='repodetail__wrapper--description'>
          <Text as='h2'>Description</Text>
          <Text as='p'>{repo && repo.description}</Text>
        </div>
      </div>
    </div>
  )
}

export default RepoDetail
