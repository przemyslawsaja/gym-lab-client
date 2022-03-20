import React from 'react'
import { render } from '@testing-library/react'
import H1 from "./H1"

describe('<H1 />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const { container } = render(<H1 id={ id }/>);
    const el = container.querySelector('h1') as HTMLElement;
    expect(el.id).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const { container, queryByText } = render(<H1>{ children }</H1>);
    const { childNodes } = container.querySelector('h1') as HTMLElement;
    expect(childNodes).toHaveLength(1);
    expect(queryByText(children)).not.toBeNull();
  });
});