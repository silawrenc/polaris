import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { Text, View } from 'react-native';
import { SafeView } from 'storybook/story-components-native';

import Button from '../';

storiesOf('Atoms/Button', module)
  .addDecorator(storyFn => (
    <SafeView>
      {storyFn()}
      <View>
        <Text style={{ textAlign: 'center' }}>Native Button</Text>
      </View>
    </SafeView>
  ))
  .add('Native Only', () => (
    <Button onPress={action('Clicked Button')} title="Hello">
      <Text>Hello Native</Text>
    </Button>
  ));
