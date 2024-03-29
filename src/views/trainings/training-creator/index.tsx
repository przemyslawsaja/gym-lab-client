import { observer } from 'mobx-react';
import { MainTemplate } from '../../../templates';
import React, { useEffect, useState } from 'react';
import { Input } from '../../../components/atoms/inputs/input';
import Paragraph from '../../../components/atoms/paragraph';
import { theme } from '../../../theme/main-theme';
import {
  DesktopCardsWrapper,
  EmptyExercises,
  EmptyExercisesMessage,
  ExercisesCardsWrapper,
  TrainingCreatorExercisesHeader,
  TrainingCreatorSection,
  TrainingCreatorSettings,
  TrainingCreatorFooter,
  TrainingImage,
  TrainingCreatorHeader
} from './styles'
import { trainingStore } from '../../../stores';
import { Button } from '../../../components/atoms';
import { FiCheck, IoIosAddCircleOutline } from 'react-icons/all';
import { ApplicationRoutePaths } from '../../../routes/applicationRoutes';
import { useHistory } from 'react-router-dom';
import TrainingCreatorExerciseCard from '../../../components/molecules/training-creator-exercise-card';
import { MdOutlineClose } from 'react-icons/md';
import { Modal } from '../../../components/atoms/modals/modal';
import { ExerciseFinder, ExerciseFinderType } from '../../../modules/exercise-finder';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { deviceValues } from '../../../devices/Breakpoints';
import { DesktopExerciseCard } from '../../../components/molecules/exercise-card/desktop-exercise-card';
import { ButtonType } from '../../../components/atoms/button';

export const TrainingCreator = observer(() => {
  const [isExerciseFinderModalEnabled, setExerciseFinderModal] = useState<boolean>(false);
  const [isTabletDevice, setTabletDevice] = useState<boolean>(true);

  const history = useHistory();
  const { width } = useWindowSize();

  const onTrainingCreateHandler = ():void => {
    trainingStore.createTraining();
    trainingStore.fetchUserTrainings();
    history.push(ApplicationRoutePaths.TRAININGS)
  }
  useEffect(() => {
    width >= deviceValues.tabletL
      ? setTabletDevice(true)
      : setTabletDevice(false)
  }, [width])

  const navigation = {
    title: "Dodaj trening",
    buttons: {
      left: {
        icon: MdOutlineClose, onClick() {
          history.push(ApplicationRoutePaths.TRAININGS)
          trainingStore.disableCreatorMode();
        },
      },
      right: {
        icon: FiCheck, onClick() {
          onTrainingCreateHandler();
        }
      },
      hideOnDesktop: true
    }
  }

  const {
    name,
    description,
    duration,
    brake,
    training,
    setName,
    setDescription,
    setDuration,
    setBrake,
  } = trainingStore;

  const showExerciseButton = ():boolean => {
    return training.hasExercises && !isTabletDevice;
  }

  const renderExercisesList = () => {
    if (isTabletDevice) {
      return <DesktopCardsWrapper>
        { training.exercises.map(exercise => <DesktopExerciseCard exercise={ exercise } />) }
        <DesktopExerciseCard isEmpty={ true } emptyContent={ 'Dodaj ćwiczenie' } onClick={ () => setExerciseFinderModal(true) }/>
      </DesktopCardsWrapper>
    }

    return <ExercisesCardsWrapper>
      { training.exercises.map(exercise => <TrainingCreatorExerciseCard exercise={ exercise}/> )}
    </ExercisesCardsWrapper>
  }
  const renderEmptyDataComponent = () => {
    if (isTabletDevice) {
      return <DesktopExerciseCard isEmpty={ true } emptyContent={ 'Dodaj ćwiczenie' } onClick={ () => setExerciseFinderModal(true) }/>;
    }

    return <EmptyExercises>
      <EmptyExercisesMessage>Nie dodałeś jeszcze żadnych ćwiczeń</EmptyExercisesMessage>
      <Button content={ "Dodaj ćwiczenie" } onClick={ () => setExerciseFinderModal(true) }>
        <IoIosAddCircleOutline size={ '2.5rem' }/>
      </Button>
    </EmptyExercises>
  };

  return (
    <MainTemplate navigation={ navigation }>
     <TrainingCreatorHeader>
       <TrainingCreatorSettings>
         <TrainingCreatorSection>
           <Paragraph color={ theme.colors.brand.primary300 }><strong>Ogólne</strong></Paragraph>
           <Input value={ name } onChange={ e => setName(e.target.value) } label={ 'Nazwa' }/>
           <Input value={ description } onChange={ e => setDescription(e.target.value) } label={ 'Opis' }/>
         </TrainingCreatorSection>

         <TrainingCreatorSection>
           <Paragraph color={ theme.colors.brand.primary300 }><strong>Ustawienia czasu</strong></Paragraph>
           <Input value={ duration } onChange={ e => setDuration(parseInt(e.target.value)) } label={ 'Długosć treningu' } type={ 'number' } prefix='minut'/>
           <Input value={ brake } onChange={ e => setBrake(parseInt(e.target.value)) } label={ 'Długość przerw między ćwiczeniami' } type={ 'number' } prefix={ 'sekund' }/>
         </TrainingCreatorSection>
       </TrainingCreatorSettings>

       {isTabletDevice && <TrainingImage />}
     </TrainingCreatorHeader>

      <TrainingCreatorSection>
        <TrainingCreatorExercisesHeader>
          <Paragraph color={ theme.colors.brand.primary300 }><strong>Ćwiczenia</strong></Paragraph>
          { showExerciseButton() && <Button content={ "Dodaj ćwiczenie" } onClick={ () => setExerciseFinderModal(true) }>
            <IoIosAddCircleOutline size={ '2.5rem' }/>
          </Button> }
        </TrainingCreatorExercisesHeader>

        { training.hasExercises
          ? renderExercisesList()
          : renderEmptyDataComponent()
        }

        { isExerciseFinderModalEnabled && <Modal fillWindow={!isTabletDevice} title={ 'Wyszukaj ćwiczenie' } backButton={ {
          content: 'Anuluj',
          onClick: () => setExerciseFinderModal(false)
        } }>
          <ExerciseFinder type={ ExerciseFinderType.MODAL } onExerciseSetsModalClose={ () => setExerciseFinderModal(false) }/>
        </Modal> }

        <TrainingCreatorFooter>
          {isTabletDevice && <Button content={'Zapisz trening'} btnType={ButtonType.QUATERNARY} onClick={onTrainingCreateHandler} />}
        </TrainingCreatorFooter>
      </TrainingCreatorSection>
    </MainTemplate>
  )
});
