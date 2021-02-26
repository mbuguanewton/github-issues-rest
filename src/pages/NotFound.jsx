import { Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='notfound'>
      <div className='notfound__wrapper'>
        <Stack direction='row' alignItems='center'>
          <Text as='h1'>404 |</Text>
          <span>Not Found</span>
        </Stack>
        <Link to='/' className='backhome'>
          Back home &rarr;
        </Link>
      </div>
    </div>
  )
}

export default NotFound
