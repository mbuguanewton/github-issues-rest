import { Badge, Text } from '@chakra-ui/react'
import React, { useState, useEffect, useCallback } from 'react'

function Languages({ languages }) {
  const [langArray, setLangArray] = useState([])

  const changeToArray = useCallback(() => {
    const newLangs = Object.keys(languages)
    setLangArray(newLangs)
  }, [languages])

  useEffect(() => {
    changeToArray()
  }, [languages, changeToArray])

  return (
    <div className='languages'>
      <Text as='h2'>Languages</Text>
      <div className='languages__wrapper'>
        {langArray && langArray.length
          ? langArray.map((lang) => (
              <Badge
                key={lang}
                alignItems='center'
                justifyContent='center'
                display='flex'
                padding='5px'
                className='languages__wrapper--badge'>
                {lang}
              </Badge>
            ))
          : null}
      </div>
    </div>
  )
}

export default Languages
