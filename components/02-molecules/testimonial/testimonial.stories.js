import React from 'react';
import { useEffect } from '@storybook/client-api';
import withExternalLinks from 'storybook-external-links'

import testimonial from './01-testimonial.twig';

import testimonialData from './01-testimonial.yml';
import {select} from "@storybook/addon-knobs/dist/index";

/**
 * Storybook Definition.
 */
export default {
    title: 'Components/Testimonial'
    //includeStories: ['Testimonial', 'TestimonialWithYellowBG', 'TestimonialWithGreenBG']
};

export const Testimonial = () => {
    useEffect(() => Drupal.attachBehaviors(), []);

    const bgOptions = {
        None: '',
        Green: 'bg-gr',
        Gold: 'bg-ye',
        Gray: 'bg-lg'
    }
    const background = select("Background", bgOptions, bgOptions.None);

    return <div className={background}><div className="testimonials"><div dangerouslySetInnerHTML={{ __html: testimonial(testimonialData) }} /></div></div>;
};

// export const TestimonialWithYellowBG = () => {
//     useEffect(() => Drupal.attachBehaviors(), []);
//     return <div className="bg-ye"><div className="testimonials"><div dangerouslySetInnerHTML={{ __html: testimonial(testimonialData) }} /></div></div>;
// };
//
// export const TestimonialWithGreenBG = () => {
//     useEffect(() => Drupal.attachBehaviors(), []);
//     return <div className="bg-gr"><div className="testimonials"><div dangerouslySetInnerHTML={{ __html: testimonial(testimonialData) }} /></div></div>;
// };