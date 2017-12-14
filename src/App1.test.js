import React from 'react';
import { mount } from 'enzyme';

import 'antd';
import MediaQuery from 'react-responsive';

test('<MediaQuery />', () => {
  const wrapper = mount(
    <div>
      <MediaQuery minDeviceWidth={1224} values={{ deviceWidth: 1600 }}>
        <div>You are a desktop or laptop</div>
      </MediaQuery>
    </div>
  );

  expect(wrapper.text()).toBe('You are a desktop or laptop');
});
