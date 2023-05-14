import { observer } from 'mobx-react';
import { TrainingDetailsLayout } from '../training-details-layout';
import React from 'react';
import H1 from '../../../../components/atoms/h1';
import Paragraph from '../../../../components/atoms/paragraph';
import { theme } from '../../../../theme/main-theme';
import { Input } from '../../../../components/atoms/inputs/input';
import { Button } from '../../../../components/atoms';
import { communityStore, trainingStore } from '../../../../stores';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { ApplicationRoutePaths } from '../../../../routes/applicationRoutes';

export const TrainingShare = observer(() => {
  const history = useHistory();
  const trainingShareHandler = ():void => {
    communityStore.shareTraining(trainingStore.training.id)
      .then( async () =>{
        toast.success('Trening udostępniony pomyślnie')
        await communityStore.fetchCommunityTrainings();
        history.push(ApplicationRoutePaths.COMMUNITY)
      })
  }

  return <TrainingDetailsLayout>
    <H1 color={ theme.colors.brand.quaternary300 }>Udostępnianie</H1>
    <Paragraph color={ theme.colors.secondary.color2 }>
      Udostępnij swój trening, aby inny użytkownicy mogli korzystać z twojego treningu.
    </Paragraph>
    <br />
    <Input value={communityStore.description} onChange={(e) => communityStore.setDescriptionComment(e.target.value)} label={'Opis'}/>
    <br />
    <Button content={"Udostępnij"} onClick={trainingShareHandler}/>
  </TrainingDetailsLayout>
})
