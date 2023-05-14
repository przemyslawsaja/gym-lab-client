import React, { FC } from 'react'
import { LevelCircle, ScaleWrapper } from './styles'

interface IDifficultyScale {
  level: string;
}

const DifficultyScale: FC<IDifficultyScale> = ({ level }) => {
  return (
    <>
      { level === 'beginner' && <ScaleWrapper>
        <LevelCircle filled/>
        <LevelCircle/>
        <LevelCircle/>
      </ScaleWrapper> }
      { level === 'intermediate' && <ScaleWrapper>
        <LevelCircle filled/>
        <LevelCircle filled/>
        <LevelCircle/>
      </ScaleWrapper> }
      { level === 'expert' && <ScaleWrapper>
        <LevelCircle filled/>
        <LevelCircle filled/>
        <LevelCircle filled/>
      </ScaleWrapper> }
    </>

  )
}

export default DifficultyScale
