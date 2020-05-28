import React from 'react';
import { useEffect } from '@storybook/client-api';
import withExternalLinks from 'storybook-external-links'

import card from './01-card.twig';
import cardData from './01-card.yml';
import cardCenterData from './01-card~center.yml'
import cardHorizontalData from './01-card~horizontal.yml'

import cardFeatured from './02-card-featured.twig'
import cardFeaturedData from './02-card-featured.yml'

/**
 * Storybook Definition.
 */
export default {
    title: 'Components/Cards',
};

export const Card = () => {
    useEffect(() => Drupal.attachBehaviors(), []);
    return <div dangerouslySetInnerHTML={{ __html: card(cardData) }} />;
};

export const CardCenter = () => {
    useEffect(() => Drupal.attachBehaviors(), []);
    return <div dangerouslySetInnerHTML={{ __html: card(cardCenterData) }} />;
};

export const CardHorizontal = () => {
    useEffect(() => Drupal.attachBehaviors(), []);
    return <div dangerouslySetInnerHTML={{ __html: card(cardHorizontalData) }} />;
};

export const FeaturedCard = () => {
    useEffect(() => Drupal.attachBehaviors(), []);
    return <div dangerouslySetInnerHTML={{ __html: cardFeatured(cardFeaturedData) }} />;
};
