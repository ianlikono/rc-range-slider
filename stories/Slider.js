import React from 'react';
import { storiesOf } from '@kadira/storybook';

import SliderWrapper from '../examples/SliderWrapper';

storiesOf('Slider', module)
  .add('basical', () => (
    <SliderWrapper
    />
  ))
  .add('jump', () => (
    <SliderWrapper
      jump
    />
  ))
  .add('clickable', () => (
    <SliderWrapper
      jump
      clickable
    />
  ));
