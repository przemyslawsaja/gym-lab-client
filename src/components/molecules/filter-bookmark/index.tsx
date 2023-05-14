import React, { FC, useState } from 'react'
import Paragraph from '../../atoms/paragraph';
import Icon from '../../atoms/icon';
import RadioButton from '../../atoms/radio-button';
import { theme } from '../../../theme/main-theme';
import { BookmarkItems, BookmarkWrapper, } from './styles'

interface IFilterBookmark {
  label: string,
  items: string[],
  register: () => void;
  watch: (name: string) => void;
}

const FilterBookmark: FC<IFilterBookmark> = ({ label, items, register, watch }) => {
  const [isBookMarkExpanded, setBookMarkExpansion] = useState<boolean>(false);

  const ToggleBookMark = (): void => {
    setBookMarkExpansion(!isBookMarkExpanded)
  };

  return (
    <>
      <BookmarkWrapper isBookMarkExpanded={ isBookMarkExpanded } onClick={ () => ToggleBookMark() }>
        <Icon
          size={ 3 }
          color={ `${ isBookMarkExpanded ? "#000" : theme.colors.secondary.color1 }` }
          className={ `${ isBookMarkExpanded ? "fas fa-angle-up" : "fas fa-angle-down" }` }/>
        <Paragraph color={ `${ isBookMarkExpanded ? "#000" : theme.colors.secondary.color1 }` }>
          { label }
        </Paragraph>
      </BookmarkWrapper>
      { isBookMarkExpanded && <BookmarkItems>
        { items.map((item, idx) => {
          return <RadioButton
            id={ item }
            key={ `${ item }_${ idx }` }
            name={ label }
            label={ item.charAt(0).toUpperCase() + item.slice(1) }
            register={ register }
          />
        }) }
      </BookmarkItems> }
    </>
  )
}

export default FilterBookmark;
