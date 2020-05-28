import React from 'react';
import { useEffect } from '@storybook/client-api';

import siteFooter from './site-footer.twig';
import siteFooterNew from './site-footer-new.twig';
import siteFooterNew2 from './site-footer-new-2.twig';

import siteFooterData from './site-footer.yml';

//import './small-feature.js';

/**
 * Storybook Definition.
 */
export default { title: 'Global/Footer' };

export const SiteFooter = () => {
    useEffect(() => Drupal.attachBehaviors(), []);
    return <div dangerouslySetInnerHTML={{ __html: siteFooter(siteFooterData) }} />;
};

export const SiteFooterNew = () => {
    useEffect(() => Drupal.attachBehaviors(), []);
    return <div dangerouslySetInnerHTML={{ __html: siteFooterNew(siteFooterData) }} />;
};

export const SiteFooterNew2 = () => {
    useEffect(() => Drupal.attachBehaviors(), []);
    return <div dangerouslySetInnerHTML={{ __html: siteFooterNew2(siteFooterData) }} />;
};

