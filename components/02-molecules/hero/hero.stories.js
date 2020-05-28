import React from 'react';
import { useEffect } from '@storybook/client-api';

import hero from './hero.twig';

import heroData from './hero.yml';
import videoHeroData from './video-hero.yml';

import './hero';

/**
 * Storybook Definition.
 */
export default { title: 'Components/Hero' };

export const Hero = () => {
    useEffect(() => Drupal.attachBehaviors(), []);
    return <div dangerouslySetInnerHTML={{ __html: hero(heroData) }} />;
};

export const VideoHero = () => {
    useEffect(() => Drupal.attachBehaviors(), []);
    return <div dangerouslySetInnerHTML={{ __html: hero(videoHeroData) }} />;
};
