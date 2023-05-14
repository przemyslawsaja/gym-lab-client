import React, {FC} from 'react'
import H1 from '../../atoms/h1'
import Icon from '../../atoms/icon'
import FormButton from '../../atoms/form-button'
import RadioButton from '../../atoms/radio-button'
import FilterBookmark from '../../molecules/filter-bookmark';
import { theme } from '../../../theme/main-theme'
import { SortingOptions } from './components/sorting-options'
import { filterBookmarks } from './components/filter-bookmarks'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  RadioForm,
  ModalHeader,
  ModalWrapper,
  FiltersButtons,
} from './styles'
import { RoundButton } from '../../atoms'

type Inputs = {
  sortValues?: string,
  Muscles?: string,
};

const defaultValues = {
  sortValues: "",
  Muscles: "",
};

interface IFiltersModal {
  ToggleFiltersModal: () => void;
}
const FiltersModal:FC<IFiltersModal> = ({ToggleFiltersModal}): JSX.Element => {
  const { register, handleSubmit, watch } = useForm<Inputs>({defaultValues});

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data)
  };

  return (
    <ModalWrapper onSubmit={handleSubmit(onSubmit)}>
      <ModalHeader>
        <H1>Sort by</H1>
        <RoundButton radius='50px' onClick={ToggleFiltersModal}>
          <Icon color={ theme.colors.secondary.color2 } className="fas fa-times"/>
        </RoundButton>
      </ModalHeader>
        <RadioForm>
          {SortingOptions.map((e) => {
           return <RadioButton
              id={e.id}
              key= {e.id}
              register={register}
              name="sortValues"
              label={e.label}
              labelDetails={e.labelDetails}>
            </RadioButton>
          })}
        </RadioForm>
          {filterBookmarks.map((bookmark, idx) => {
            return <FilterBookmark
              key={`${bookmark}_${idx}`}
              label={bookmark.name}
              items={bookmark.items}
              register={register}
              watch={watch}
            />
          })}
          <FiltersButtons>
            <FormButton onClick={() => console.log('clear')}>
              Clear
            </FormButton>
            <FormButton secondary onClick={ToggleFiltersModal}>
              Submit
            </FormButton>

          </FiltersButtons>
    </ModalWrapper>
  )
}

export default FiltersModal
