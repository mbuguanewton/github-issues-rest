import React from 'react'
import AvatarComponent from '../common/avatar/Avatar'
import { FaGithub } from 'react-icons/fa'
import { SkeletonText, SkeletonCircle, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function RandomRepoCard({ repo }) {
  //repo name, issues, owner, url
  const user = {
    url: repo ? repo.owner.avatar_url : '',
    label: repo ? repo.owner.login : '',
  }
  return (
    <div className='randomcard'>
      <div className='randomcard__wrapper'>
        {repo ? (
          <Link to={{ pathname: `/repo/${repo.name}`, state: { ...repo } }}>
            <Text as='h3'>{repo.name}</Text>
          </Link>
        ) : (
          <SkeletonText height='20px' />
        )}
        <div className='randomcard__wrapper--container'>
          <AvatarComponent user={user} />

          {repo ? (
            <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
              <FaGithub className='icon' />
            </a>
          ) : (
            <SkeletonCircle size='10' />
          )}
        </div>
      </div>
    </div>
  )
}

export default RandomRepoCard
