import React, { FC } from 'react'
import { Label, LabelDetails, RadioInput, RadioWrapper, StyledRadioButton } from './styles'

interface IRadioButton {
  id: string,
  name: string,
  register: () => void;
  label: string,
  labelDetails?: string
}

const RadioButton: FC<IRadioButton> = ({ id, name, register, label, labelDetails }) => {
  return (
    <RadioWrapper htmlFor={ id }>
      <RadioInput
        id={ id }
        ref={ register }
        type="radio"
        name={ name }
        value={ id }
      />
      <StyledRadioButton/>
      <Label>
        { label }
        { labelDetails && <LabelDetails>
          { labelDetails }
        </LabelDetails> }
      </Label>

    </RadioWrapper>
  )
}

export default RadioButton;
