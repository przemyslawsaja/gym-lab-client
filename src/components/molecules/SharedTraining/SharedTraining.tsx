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
import { communityStore, trainingStore } from '../../../stores';
import { toast } from 'react-toastify';

interface ISharedTrainingProps {
  training: ISharedTraining,
}

export const SharedTraining: FC<ISharedTrainingProps> = observer(({ training: sharedTraining }) => {
  const [isLiked, setLike] = useState<boolean>(false);
  const [isCommentModeEnabled, setCommentMode] = useState<boolean>(false);
  const [isCommentsVisible, setCommentsVisibility] = useState<boolean>(false)
  const [initialLikes, setInitialLikes] = useState<number>(0);
  const [initialBookMark, setInitialBookMark] = useState<boolean>(false);

  useEffect(() => {
    setInitialLikes(sharedTraining.likes.length)
    if (communityStore.isLikedByUser(sharedTraining.likes)) {
      setLike(true)
    }

    trainingStore.fetchUserTrainings().then(() => {
      if (isTrainingAssigned()) {
        setInitialBookMark(true)
      }
    })


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

  const isTrainingAssigned = (): boolean => {
    return trainingStore.trainings.some(accountTraining => accountTraining.parent === sharedTraining.training.id)
  }

  const assignTrainingToAccountHandler = async (): Promise<void> => {
    setInitialBookMark(true)
    communityStore.assignSharedTrainingToUser(sharedTraining.training.id)
      .then(() => {
        toast.success('Pomyślnie zapisano trening na twoim koncie')
      })
  }

  const renderLikesLabel = (): string => {
    switch (true) {
      case initialLikes === 1:
        return "Polubienie";
      case (initialLikes > 1 && initialLikes <= 4):
        return "Polubienia";
      case (initialLikes > 4 || initialLikes === 0):
        return "Polubień"
      default: return ""
    }
  }

  return <Styled.SharedTrainingWrapper>
    <Styled.SharedTrainingAuthorWrapper>
      <ProfileImage src={ ProfileImageSrc } size="30px" alt=""/>
      <Styled.SharedTrainingAuthorDetails>
        <Styled.SharedTrainingAuthorName>
          { sharedTraining.author }
        </Styled.SharedTrainingAuthorName>
        <Styled.SharedTrainingAuthorLabel>Autor</Styled.SharedTrainingAuthorLabel>
      </Styled.SharedTrainingAuthorDetails>
    </Styled.SharedTrainingAuthorWrapper>

    <Styled.SharedBackgroundImageWrapper>
      <Styled.SharedBackgroundImage/>
      <Styled.SharedTrainingTitle>
        { sharedTraining.training.name }
      </Styled.SharedTrainingTitle>

    </Styled.SharedBackgroundImageWrapper>

    <Styled.SharedTrainingTile>
      <Styled.SharedTrainingSettings>
        <Paragraph color={ theme.colors.brand.quaternary300 } fontSize={ '2rem' } bold>  { sharedTraining.training.duration } min</Paragraph>
        <Paragraph color={ theme.colors.brand.text400 } fontSize={ '1.2rem' }> Czas trwania</Paragraph>
      </Styled.SharedTrainingSettings>

      <Styled.SharedTrainingSettings>
        <Paragraph fontSize={ '2rem' } color={ '#fff' } bold>  { sharedTraining.training.break } s</Paragraph>
        <Paragraph color={ theme.colors.brand.text400 } fontSize={ '1.2rem' }> Czas trwania</Paragraph>
      </Styled.SharedTrainingSettings>

      <Styled.SharedTrainingSettings>
        <Paragraph fontSize={ '2rem' } color={ '#fff' } bold>  { sharedTraining.training.exercises.length } </Paragraph>
        <Paragraph color={ theme.colors.brand.text400 } fontSize={ '1.2rem' }> Ćwiczeń </Paragraph>
      </Styled.SharedTrainingSettings>
    </Styled.SharedTrainingTile>

    <Styled.SharedTrainingIcons>
      <Styled.SharedTrainingLeftIcons>
        { isLiked
          ? <AiFillHeart size={ '3rem' } color={ theme.colors.action.error100 } cursor={ 'pointer' } onClick={ () => onDislikeHandler(sharedTraining.training.id) }/>
          : <AiOutlineHeart size={ '3rem' } cursor={ 'pointer' } onClick={ () => onLikeHandler(sharedTraining.training.id) }/>
        }
        { isCommentModeEnabled
          ? <FaComment size={ '2.8rem' } cursor={ 'pointer' } color={ theme.colors.brand.text400 } onClick={ toggleCommentModeHandler }/>
          : <FaRegComment size={ '2.8rem' } cursor={ 'pointer' } onClick={ toggleCommentModeHandler }/>
        }
      </Styled.SharedTrainingLeftIcons>
      { initialBookMark
        ? <Styled.CheckedBookmark>
          <Paragraph inline> Zapisany </Paragraph>
          <BsBookmarkCheck size={ '2.8rem' }/>
        </Styled.CheckedBookmark>
        : <BsBookmark size={ '2.8rem' } cursor={ 'pointer' } onClick={ assignTrainingToAccountHandler }/> }

    </Styled.SharedTrainingIcons>
    <Paragraph bold color={ '#fff' } fontSize={ '1.3rem' }>{ initialLikes } { renderLikesLabel() }</Paragraph>
    <Paragraph fontSize={ '1.3rem' } inline color={ theme.colors.brand.text200 } bold> { sharedTraining.author } </Paragraph>
    <Paragraph fontSize={ '1.3rem' } inline> { sharedTraining.description }</Paragraph>
    <SharedTrainingComments comments={ sharedTraining.comments }
                            isCommentModeEnabled={ isCommentModeEnabled }
                            onCommentHandler={ () => onCommentHandler(sharedTraining.training.id) }
                            training={ sharedTraining.training.id }
                            isCommentsVisible={ isCommentsVisible }
                            enableComments={ enableCommentsHandler }
    />
    <Paragraph fontSize={ '1.3rem' } color={ theme.colors.brand.text600 }> { new Date(sharedTraining.createdAt).toDateString() } </Paragraph>

  </Styled.SharedTrainingWrapper>
})