import { observer } from 'mobx-react';
import React, { FC, useEffect, useState } from 'react';
import { TrainingDetailsTemplate } from '../../../../templates';
import { AiFillEdit, FiCheck, IoChevronBackSharp } from 'react-icons/all';
import { ApplicationRoutePaths } from '../../../../routes/applicationRoutes';
import { trainingStore } from '../../../../stores';
import { useHistory, useParams } from 'react-router-dom';
import HeaderNavigation from '../../../../components/organisms/header-navigation';
import { Navigation } from '../../../../components/organisms/navigation';
import { Container } from '../../../../templates/main-template/styles';
import { MdOutlineClose } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useWindowSize } from '../../../../hooks/useWindowSize';
import { deviceValues } from '../../../../devices/Breakpoints';
import { ButtonType } from '../../../../components/atoms/button';
import { IHeaderButton } from '../../../../components/organisms/header-navigation/types';

interface ITrainingDetailsLayoutProps {
  children: JSX.Element | JSX.Element[]
}


export const TrainingDetailsLayout: FC<ITrainingDetailsLayoutProps> = observer(({ children }) => {
  const { getTrainingById, isTrainingLoading, enableEditMode, disableEditMode, isEditModeEnabled, updateUserTraining } = trainingStore;
  const { trainingId } = useParams<{ trainingId: string }>();
  const [isTabletDevice, setTabletDevice] = useState<boolean>(true);
  const history = useHistory();

  const { width } = useWindowSize();

  useEffect(() => {
    width >= deviceValues.tabletL
      ? setTabletDevice(true)
      : setTabletDevice(false)
  }, [width])

  useEffect(() => {
    disableEditMode()
    getTrainingById(trainingId)
  }, [])

  const onTrainingUpdateHandler = (): void => {
    updateUserTraining().then(() => toast.success('Zmiany w treningu zostały pomyślnie zapisane'))
    disableEditMode()
  }

  const rightButton: IHeaderButton = {
    iconProps: { size: '2rem' },
    icon: isEditModeEnabled ? FiCheck : AiFillEdit, onClick() {
      isEditModeEnabled ? onTrainingUpdateHandler() : enableEditMode()
    },
    content: isEditModeEnabled ? "Zapisz zmiany": "Edytuj trening",
  }

  const trainingExercisesNavigation = {
    title: isEditModeEnabled ? 'Edytuj trening' : 'Szczegóły treningu',
    buttons: {
      left: {
        icon: isEditModeEnabled ? MdOutlineClose : IoChevronBackSharp, onClick() {
          isEditModeEnabled ? disableEditMode() : history.push(ApplicationRoutePaths.TRAININGS)
        }
      },
      right: rightButton
    },
    desktopButtons: {
      right: rightButton
    }
  }


  return <>
    <HeaderNavigation title={ trainingExercisesNavigation.title } buttons={ isTabletDevice ? trainingExercisesNavigation.desktopButtons : trainingExercisesNavigation.buttons }/>
    <Container>
      <TrainingDetailsTemplate trainingId={ trainingId }>
        { isTrainingLoading ? null : children }
      </TrainingDetailsTemplate>
    </Container>
    <Navigation/>
  </>
})
