import React from 'react';
import { useEffect } from '@storybook/client-api';

import siteHeader from './site-header.twig';
import siteHeaderNew from './site-header-new.twig';

//import siteHeaderData from './site-header.yml';

//import './small-feature.js';

/**
 * Storybook Definition.
 */
export default { title: 'Global/Header' };

export const SiteHeader = () => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return <div dangerouslySetInnerHTML={{ __html: siteHeader() }} />;
};

export const SiteHeaderNew = () => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return <div dangerouslySetInnerHTML={{ __html: siteHeaderNew() }} />;
};