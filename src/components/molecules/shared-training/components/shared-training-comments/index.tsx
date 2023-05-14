import Paragraph from '../../../../atoms/paragraph';
import { theme } from '../../../../../theme/main-theme';
import React, { FC, useEffect, useState } from 'react';
import { IComment } from '../../../../../api/use-cases/community/listCommunityTrainingsUseCase';
import { observer } from 'mobx-react';
import * as Styled from '../../styles';
import { Input } from '../../../../atoms/inputs/input';
import { communityStore, userStore } from '../../../../../stores';
import { Button } from '../../../../atoms';

interface ISharedTrainingComments {
  comments: IComment[];
  isCommentModeEnabled: boolean;
  training: string,
  isCommentsVisible: boolean,

  enableComments(): void,

  onCommentHandler(training: string): void;
}

export const SharedTrainingComments: FC<ISharedTrainingComments> = observer((
  {
    comments,
    training,
    isCommentModeEnabled,
    onCommentHandler,
    isCommentsVisible,
    enableComments
  }) => {
  const [initialComments, setInitialComments] = useState<IComment[]>([]);

  const onCommentAddHandler = (): void => {
    onCommentHandler(training);
    initialComments.unshift({
      user: userStore.username,
      content: communityStore.comment
    })
  }

  useEffect(() => {
    setInitialComments(comments)
  }, [])

  const renderComments = () => {

    if (initialComments.length > 1 && !isCommentsVisible) {
      return <Paragraph fontSize={ '1.3rem' } color={ theme.colors.brand.text600 } onClick={ enableComments } cursor={'pointer'} hoverColor={theme.colors.brand.text100}>
        Zobacz wszystkie { initialComments.length } komentarze...
      </Paragraph>
    }

    if (initialComments.length === 1) {
      return <div>
        <Paragraph inline color={ theme.colors.brand.text100 } fontSize={ '1.4rem' } bold> { initialComments[0].user } </Paragraph>
        <Paragraph inline color={ theme.colors.brand.text300 } fontSize={ '1.4rem' }>{ initialComments[0].content }</Paragraph>
      </div>
    }

    if (isCommentsVisible) {
      return <> {
        initialComments
          .slice()
          .reverse()
          .map(comment => {
            return <div>
              <Paragraph inline color={ theme.colors.brand.text100 } fontSize={ '1.4rem' } bold> { comment.user } </Paragraph>
              <Paragraph inline color={ theme.colors.brand.text300 } fontSize={ '1.4rem' }>{ comment.content }</Paragraph>
            </div>
          }) }
      </>
    }
  }


  return <div>
    { renderComments() }
    { isCommentModeEnabled && <Styled.AddCommentWrapper>
      <Input onChange={ (e) => communityStore.setTrainingComment(e.target.value) }
             value={ communityStore.comment }
             placeholder={ "Dodaj komentarz..." }/>
      <Button content={ 'Dodaj' } onClick={ onCommentAddHandler }/>
    </Styled.AddCommentWrapper> }
  </div>;

})
