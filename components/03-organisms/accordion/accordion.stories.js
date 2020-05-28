import React from 'react';
import { useEffect } from '@storybook/client-api';

import accordion from './accordion.twig';

import accordionData from './accordion.yml';

import './accordion.js';


/**
 * Storybook Definition.
 */
export default { title: 'Components' };

export const Accordion = () => {
    useEffect(() => Drupal.attachBehaviors(), []);
    return <div dangerouslySetInnerHTML={{ __html: accordion(accordionData) }} />;
};

