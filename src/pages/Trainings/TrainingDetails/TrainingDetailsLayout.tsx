import { observer } from 'mobx-react';
import React, { FC, useEffect } from 'react';
import { TrainingDetailsTemplate } from '../../../templates';
import { AiFillEdit, FiCheck, IoChevronBackSharp } from 'react-icons/all';
import { ApplicationRoutePaths } from '../../../routes/applicationRoutes';
import { trainingStore } from '../../../stores';
import { useHistory, useParams } from 'react-router-dom';
import HeaderNavigation from '../../../components/organisms/HeaderNavigation/HeaderNavigation';
import { Navigation } from '../../../components/organisms/Navigation/Navigation';
import { Container } from '../../../templates/MainTemplate/MainTemplateStyle';
import { MdOutlineClose } from 'react-icons/md';
import { toast } from 'react-toastify';

interface ITrainingDetailsLayoutProps {
  children: JSX.Element | JSX.Element[]
}


export const TrainingDetailsLayout: FC<ITrainingDetailsLayoutProps> = observer(({ children }) => {
  const { getTrainingById, isTrainingLoading, enableEditMode, disableEditMode, isEditModeEnabled, updateUserTraining } = trainingStore;
  const history = useHistory();

  const { trainingId } = useParams<{ trainingId: string }>();

  useEffect(() => {
    disableEditMode()
    getTrainingById(trainingId)
  }, [])

  const onTrainingUpdateHandler = ():void => {
    updateUserTraining().then(() => toast.success('Zmiany w treningu zostały pomyślnie zapisane'))
    disableEditMode()
  }

  const trainingExercisesNavigation = {
    title: isEditModeEnabled ? 'Edytuj trening' : 'Szczegóły treningu',
    buttons: {
      left: {
        icon: isEditModeEnabled ? MdOutlineClose : IoChevronBackSharp, onClick() {
          isEditModeEnabled ? disableEditMode() : history.push(ApplicationRoutePaths.TRAININGS)
        }
      },
      right: {
        iconProps: { size: '2rem' },
        icon: isEditModeEnabled ? FiCheck : AiFillEdit, onClick() {
          isEditModeEnabled ? onTrainingUpdateHandler() : enableEditMode()
        }
      }
    }
  }

  return <>
    <HeaderNavigation title={ trainingExercisesNavigation.title } buttons={ trainingExercisesNavigation.buttons }/>
    <Container>
      <TrainingDetailsTemplate trainingId={ trainingId }>
        { isTrainingLoading ? null : children }
      </TrainingDetailsTemplate>
    </Container>
    <Navigation/>
  </>
})