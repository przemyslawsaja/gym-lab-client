import * as React from 'react';
import { observer } from 'mobx-react';
import { ChangeEvent, FC } from 'react';
import { Wrapper, StyledInput, Label } from './InputStyle';

export type InputType = 'text' | 'password' | 'number';

export interface IInputProps {
  id?: string;
  label?: string | JSX.Element;
  type?: InputType
  disabled?: boolean;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  pattern?: string;
  value: number | string;
  prefix?: string;
  placeholder?: string;
}

export const Input:FC<IInputProps> = observer((
  { id,
    label,
    type,
    disabled,
    onChange,
    value,
    prefix,
    placeholder
  }) => {

  const hasValue = ():boolean => {
    if(value === 0 ){
      return true;
    }
    return !!value;
  }

  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    if(!onChange){
      return;
    }

    onChange(e)
  }
  return <Wrapper prefix={prefix}>
    <StyledInput
      id={id}
      type={type ? type : 'text'}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChangeHandler(e)}
      prefix={prefix}
    />
    <Label hasValue={ hasValue()}>{ label }</Label>
  </Wrapper>
});
