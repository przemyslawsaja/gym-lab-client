import * as React from 'react';
import { observer } from 'mobx-react';
import { FC } from 'react';
import { Wrapper, StyledInput, Label } from './InputStyle';

export type InputType = 'text' | 'password' | 'number';

export interface IInputProps {
  id?: string;
  label?: string | JSX.Element;
  type?: InputType
  disabled?: boolean;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
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

  return <Wrapper prefix={prefix}>
    <StyledInput id={id} type={type ? type : 'text'} disabled={disabled} placeholder={placeholder} value={value} onChange={(e) => onChange(e)} prefix={prefix}/>
    <Label hasValue={ hasValue()}>{ label }</Label>
  </Wrapper>
});
