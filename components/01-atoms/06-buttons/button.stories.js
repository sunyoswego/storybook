import React from 'react';
import { useEffect } from '@storybook/client-api';
import withExternalLinks from 'storybook-external-links'

import button from './01-button.twig';
import buttonData from './button.yml';
import greenButtonData from './02-button~green.yml';
import goldButtonData from './02-button~gold.yml';
import arrowButtonData from './05-button~arrow.yml';

/**
 * Storybook Definition.
 */
export default {
    title: 'Components/Buttons'
    //includeStories: ['Testimonial', 'TestimonialWithYellowBG', 'TestimonialWithGreenBG']
};

export const Button = () => {
    useEffect(() => Drupal.attachBehaviors(), []);
    return <div dangerouslySetInnerHTML={{ __html: button(buttonData) }} />;
};

export const GreenButton = () => {
    useEffect(() => Drupal.attachBehaviors(), []);
    return <div dangerouslySetInnerHTML={{ __html: button(greenButtonData) }} />;
};
export const GoldButton = () => {
    useEffect(() => Drupal.attachBehaviors(), []);
    return <div dangerouslySetInnerHTML={{ __html: button(goldButtonData) }} />;
};
export const ArrowButton = () => {
    useEffect(() => Drupal.attachBehaviors(), []);
    return <div dangerouslySetInnerHTML={{ __html: button(arrowButtonData) }} />;
};
export const ButtonRow = () => {
    useEffect(() => Drupal.attachBehaviors(), []);
    return (
        <div className="button-row buttons-4">
            <a className="button" href="#">button</a><a className="button" href="#">button</a><a className="button" href="#">button</a><a className="button" href="#">button</a>
        </div>
    );
};