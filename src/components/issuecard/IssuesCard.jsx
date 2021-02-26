import { Badge, Text } from '@chakra-ui/react'
import React from 'react'
import AvatarComponent from '../common/avatar/Avatar'

function IssuesCard({ issue }) {
  const user = {
    url: issue ? issue.user.avatar_url : '',
    label: issue ? issue.user.login : '',
  }
  return (
    <div className='issuecard'>
      <Text as='h3'>{issue && issue.title}</Text>

      <div className='issuecard__container'>
        <AvatarComponent user={user} />

        {issue && issue.state === 'open' ? (
          <Badge className='badge badge__open'>{issue.state}</Badge>
        ) : (
          <Badge className='badge badge__close'>{issue.state}</Badge>
        )}
      </div>
    </div>
  )
}

export default IssuesCard
