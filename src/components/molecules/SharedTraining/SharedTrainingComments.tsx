import Paragraph from '../../atoms/Paragraph/Paragraph';
import { theme } from '../../../theme/MainTheme';
import React, { FC, useState } from 'react';
import { IComment } from '../../../useCases/community/listCommunityTrainingsUseCase';
import { observer } from 'mobx-react';

interface ISharedTrainingComments {
  comments: IComment[];
}

export const SharedTrainingComments: FC<ISharedTrainingComments> = observer(({ comments }) => {
  const [isCommentsVisible, setCommentsVisibility] = useState<boolean>(false)

  if (comments.length > 1 && !isCommentsVisible) {
    return <Paragraph fontSize={ '1.3rem' } color={ theme.colors.brand.text600 } onClick={ () => setCommentsVisibility(true) }>
      Zobacz wszystkie { comments.length } komentarze...
    </Paragraph>

  }

  if (isCommentsVisible) {
    return <> {
      comments.map(comment => {
        return <div>
          <Paragraph inline color={theme.colors.brand.text100} fontSize={'1.4rem'} bold> { comment.user} </Paragraph>
          <Paragraph inline color={theme.colors.brand.text300} fontSize={'1.4rem'}>{ comment.content }</Paragraph>
        </div>
      }) }
    </>
  }

  return null;
})