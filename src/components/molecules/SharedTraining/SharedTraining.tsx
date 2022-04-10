import { observer } from 'mobx-react';
import React, { FC, useEffect, useState } from 'react';
import * as Styled from './SharedTrainingStyle'
import { ISharedTraining } from '../../../useCases/community/listCommunityTrainingsUseCase';
import ProfileImageSrc from '../../../assets/img/user.png';
import ProfileImage from '../../atoms/ProfileImage/ProfileImage';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { theme } from '../../../theme/MainTheme';
import { AiFillHeart, AiOutlineHeart, BsBookmark, FaRegComment } from 'react-icons/all';
import { SharedTrainingComments } from './SharedTrainingComments';
import { communityStore } from '../../../stores';

interface ISharedTrainingProps {
  training: ISharedTraining,
}

export const SharedTraining: FC<ISharedTrainingProps> = observer(({ training }) => {
  const [isLiked, setLike] = useState<boolean>(false);
  const [initialLikes, setInitialLikes] = useState<number>(0);

  useEffect(() => {
    setInitialLikes(training.likes.length)
    if(communityStore.isLikedByUser(training.likes)){
      setLike(true)
    }

  }, [])

  const onLikeHandler = async (training: string) => {
    setLike(true)
    setInitialLikes(initialLikes + 1);
    await communityStore.likeCommunityTraining(training)
  }

  const onDislikeHandler = async (training: string) => {
    setLike(false)
    setInitialLikes(initialLikes - 1);
    await communityStore.dislikeCommunityTraining(training)
  }

  return <Styled.SharedTrainingWrapper>
    <Styled.SharedTrainingAuthorWrapper>
      <ProfileImage src={ ProfileImageSrc } size="30px" alt=""/>
      <Styled.SharedTrainingAuthorDetails>
        <Styled.SharedTrainingAuthorName>
          { training.author }
        </Styled.SharedTrainingAuthorName>
        <Styled.SharedTrainingAuthorLabel>Autor</Styled.SharedTrainingAuthorLabel>
      </Styled.SharedTrainingAuthorDetails>
    </Styled.SharedTrainingAuthorWrapper>

    <Styled.SharedBackgroundImageWrapper>
      <Styled.SharedBackgroundImage/>
      <Styled.SharedTrainingTitle>
        { training.training.name }
      </Styled.SharedTrainingTitle>

    </Styled.SharedBackgroundImageWrapper>

    <Styled.SharedTrainingTile>
      <Styled.SharedTrainingSettings>
        <Paragraph color={ theme.colors.brand.quaternary300 } fontSize={ '2rem' } bold>  { training.training.duration } min</Paragraph>
        <Paragraph color={ theme.colors.brand.text400 } fontSize={ '1.2rem' }> Czas trwania</Paragraph>
      </Styled.SharedTrainingSettings>

      <Styled.SharedTrainingSettings>
        <Paragraph fontSize={ '2rem' } color={ '#fff' } bold>  { training.training.break } s</Paragraph>
        <Paragraph color={ theme.colors.brand.text400 } fontSize={ '1.2rem' }> Czas trwania</Paragraph>
      </Styled.SharedTrainingSettings>

      <Styled.SharedTrainingSettings>
        <Paragraph fontSize={ '2rem' } color={ '#fff' } bold>  { training.training.exercises.length } </Paragraph>
        <Paragraph color={ theme.colors.brand.text400 } fontSize={ '1.2rem' }> Ćwiczeń </Paragraph>
      </Styled.SharedTrainingSettings>
    </Styled.SharedTrainingTile>

    <Styled.SharedTrainingIcons>
      <Styled.SharedTrainingLeftIcons>
        { isLiked
          ? <AiFillHeart size={ '3rem' } cursor={ 'pointer' } onClick={ () => onDislikeHandler(training.training.id)} />
          : <AiOutlineHeart size={ '3rem' } cursor={ 'pointer' } onClick={  () => onLikeHandler(training.training.id)}/>
        }
        <FaRegComment size={ '2.8rem' } cursor={ 'pointer' }/>
      </Styled.SharedTrainingLeftIcons>
      <BsBookmark size={ '2.8rem' } cursor={ 'pointer' }/>
      {/*<BsBookmarkCheck />*/ }

    </Styled.SharedTrainingIcons>
    <Paragraph bold color={ '#fff' } fontSize={ '1.3rem' }>{ initialLikes } Likes</Paragraph>
    <Paragraph fontSize={ '1.3rem' } inline color={ theme.colors.brand.text200 } bold> { training.author } </Paragraph>
    <Paragraph fontSize={ '1.3rem' } inline> sprawdzcie ten trening cardio! Spalisz aż 700 kcal w niecałą godzine</Paragraph>
    <SharedTrainingComments comments={ training.comments }/>
    {/*<Input onChange={() => console.log('xd')} value={''} placeholder={"Dodaj komentarz..."} />*/ }
    <Paragraph fontSize={ '1.3rem' } color={ theme.colors.brand.text600 }> { new Date(training.createdAt).toDateString() } </Paragraph>
  </Styled.SharedTrainingWrapper>
})