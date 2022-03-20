import React from 'react';
import { render } from '@testing-library/react'
import H2 from './H2';

describe('<H2 />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const { container } = render(<H2 id={ id }/>);
    const el = container.querySelector('h2') as HTMLElement;
    expect(el.id).toEqual(id);
  });
  it('shuld render its text', () => {
    const children = 'Text';
    const { container, queryByText } = render(<H2>{ children }</H2>);
    const { childNodes } = container.querySelector('h2') as HTMLElement;
    expect(childNodes).toHaveLength(1);
    expect(queryByText(children)).not.toBeNull();
  })
});


