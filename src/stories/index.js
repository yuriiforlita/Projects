import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import AppSec from '../icons/src/App'
import { Button, Welcome } from '@storybook/react/demo';

storiesOf('My Apps',module).add('Icon Task',()=><AppSec/>)
