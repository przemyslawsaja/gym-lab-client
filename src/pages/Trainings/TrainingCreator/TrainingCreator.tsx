import { observer } from 'mobx-react';
import { MainTemplate } from '../../../templates';
import React, { useEffect, useState } from 'react';
import { Input } from '../../../components/atoms/Inputs/Input/Input';
import Paragraph from '../../../components/atoms/Paragraph/Paragraph';
import { theme } from '../../../theme/MainTheme';
import { EmptyExercises, EmptyExercisesMessage, ExercisesCardsWrapper, TrainingCreatorExercisesHeader, TrainingCreatorSection, TrainingCreatorSettings } from './TrainingCreatorStyle'
import { trainingStore } from '../../../stores';
import { Button } from '../../../components/atoms';
import { FiCheck, IoIosAddCircleOutline } from 'react-icons/all';
import { ApplicationRoutePaths } from '../../../routes/applicationRoutes';
import { useHistory } from 'react-router-dom';
import TrainingCreatorExerciseCard from '../../../components/molecules/TrainingCreatorExerciseCard/TrainingCreatorExerciseCard';
import { MdOutlineClose } from 'react-icons/md';
import { Modal } from '../../../components/atoms/Modals/Modal/Modal';
import { ExerciseFinder, ExerciseFinderType } from '../../ExerciseFinder/ExerciseFinder';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { deviceValues } from '../../../devices/Breakpoints';

export const TrainingCreator = observer(() => {
  const [isExerciseFinderModalEnabled, setExerciseFinderModal] = useState<boolean>(false);
  const [isLaptopWidth, setLaptopWidth] = useState<boolean>(true);

  const history = useHistory();
  const { width } = useWindowSize();

  useEffect(() => {
    width >= deviceValues.laptop
      ? setLaptopWidth(true)
      : setLaptopWidth(false)
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
          trainingStore.createTraining();
          history.push(ApplicationRoutePaths.TRAININGS)
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

  const renderEmptyDataComponent = () => {
    if (isLaptopWidth) {
      return <div>
        lala
      </div>
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


      <TrainingCreatorSection>
        <TrainingCreatorExercisesHeader>
          <Paragraph color={ theme.colors.brand.primary300 }><strong>Ćwiczenia</strong></Paragraph>
          { training.hasExercises && <Button content={ "Dodaj ćwiczenie" } onClick={ () => setExerciseFinderModal(true) }>
            <IoIosAddCircleOutline size={ '2.5rem' }/>
          </Button> }
        </TrainingCreatorExercisesHeader>

        { training.hasExercises
          ? <ExercisesCardsWrapper>
            { training.exercises.map(exercise => <TrainingCreatorExerciseCard exercise={ exercise }/>) }
          </ExercisesCardsWrapper>
          : renderEmptyDataComponent()
        }


        { isExerciseFinderModalEnabled && <Modal fillWindow title={ 'Wyszukaj ćwiczenie' } backButton={ {
          content: 'Anuluj',
          onClick: () => setExerciseFinderModal(false)
        } }>
          <ExerciseFinder type={ ExerciseFinderType.MODAL } onExerciseSetsModalClose={ () => setExerciseFinderModal(false) }/>
        </Modal> }

      </TrainingCreatorSection>


    </MainTemplate>
  )
});
