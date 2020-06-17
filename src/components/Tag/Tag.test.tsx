import { render } from '@testing-library/react';
import React from 'react';

import Tag from '.';

describe('<Tag />', () => {
  it('should render as expected', () => {
    const { asFragment } = render(<Tag messageType="success">success</Tag>);
    expect(asFragment()).toMatchSnapshot();
  });
});
