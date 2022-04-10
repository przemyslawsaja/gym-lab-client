import { observer } from 'mobx-react';
import React, { FC, useEffect, useState } from 'react';
import * as Styled from './SharedTrainingStyle'
import { ISharedTraining } from '../../../useCases/community/listCommunityTrainingsUseCase';
import ProfileImageSrc from '../../../assets/img/user.png';
import ProfileImage from '../../atoms/ProfileImage/ProfileImage';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { theme } from '../../../theme/MainTheme';
import { AiFillHeart, AiOutlineHeart, BsBookmark, BsBookmarkCheck, FaComment, FaRegComment } from 'react-icons/all';
import { SharedTrainingComments } from './SharedTrainingComments';
import { communityStore } from '../../../stores';

interface ISharedTrainingProps {
  training: ISharedTraining,
}

export const SharedTraining: FC<ISharedTrainingProps> = observer(({ training }) => {
  const [isLiked, setLike] = useState<boolean>(false);
  const [isCommentModeEnabled, setCommentMode] = useState<boolean>(false);
  const [isCommentsVisible, setCommentsVisibility] = useState<boolean>(false)
  const [initialLikes, setInitialLikes] = useState<number>(0);

  useEffect(() => {
    setInitialLikes(training.likes.length)
    if (communityStore.isLikedByUser(training.likes)) {
      setLike(true)
    }

  }, [])

  const enableCommentsHandler = (): void => {
    setCommentsVisibility(true)
  }

  const onLikeHandler = async (training: string): Promise<void> => {
    setLike(true)
    setInitialLikes(initialLikes + 1);
    await communityStore.likeCommunityTraining(training)
  }

  const onDislikeHandler = async (training: string): Promise<void> => {
    setLike(false)
    setInitialLikes(initialLikes - 1);
    await communityStore.dislikeCommunityTraining(training)
  }

  const onCommentHandler = async (training: string): Promise<void> => {
    await communityStore.commentCommunityTraining(training);
    setCommentMode(false);
  }

  const toggleCommentModeHandler = (): void => {
    setCommentMode(!isCommentModeEnabled);
    setCommentsVisibility(false);
    communityStore.clearTrainingComment();
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
          ? <AiFillHeart size={ '3rem' } cursor={ 'pointer' } onClick={ () => onDislikeHandler(training.training.id) }/>
          : <AiOutlineHeart size={ '3rem' } cursor={ 'pointer' } onClick={ () => onLikeHandler(training.training.id) }/>
        }
        { isCommentModeEnabled
          ? <FaComment size={ '2.8rem' } cursor={ 'pointer' } color={ theme.colors.brand.text400 } onClick={ toggleCommentModeHandler }/>
          : <FaRegComment size={ '2.8rem' } cursor={ 'pointer' } onClick={ toggleCommentModeHandler }/>
        }
      </Styled.SharedTrainingLeftIcons>
      { false ? <BsBookmarkCheck size={ '2.8rem' } cursor={ 'pointer' }/> : <BsBookmark size={ '2.8rem' } cursor={ 'pointer' }/> }

    </Styled.SharedTrainingIcons>
    <Paragraph bold color={ '#fff' } fontSize={ '1.3rem' }>{ initialLikes } Likes</Paragraph>
    <Paragraph fontSize={ '1.3rem' } inline color={ theme.colors.brand.text200 } bold> { training.author } </Paragraph>
    <Paragraph fontSize={ '1.3rem' } inline> sprawdzcie ten trening cardio! Spalisz aż 700 kcal w niecałą godzine</Paragraph>
    <SharedTrainingComments comments={ training.comments }
                            isCommentModeEnabled={ isCommentModeEnabled }
                            onCommentHandler={ () => onCommentHandler(training.training.id) }
                            training={ training.training.id }
                            isCommentsVisible={ isCommentsVisible }
                            enableComments={ enableCommentsHandler }
    />
    <Paragraph fontSize={ '1.3rem' } color={ theme.colors.brand.text600 }> { new Date(training.createdAt).toDateString() } </Paragraph>

  </Styled.SharedTrainingWrapper>
})