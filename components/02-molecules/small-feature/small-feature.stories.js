import React from 'react';
import { useEffect } from '@storybook/client-api';

import smallFeature from './01-small-feature.twig';

import smallFeatureData from './small-feature.yml';
import smallFeatureRightData from './small-feature~right.yml';

import smallFeatureHalfData from './small-feature~half.yml';
import smallFeatureHalfRightData from './small-feature~half-right.yml';

import './small-feature.js';
import { withKnobs, select, boolean, number } from "@storybook/addon-knobs";

//import { addDecorator } from '@storybook/react';

//addDecorator(smallFeature => <div className="bg-gr ">{smallFeature()}</div>);

const bgOptions = {
    None: '',
    Green: 'bg-gr',
    Gold: 'bg-ye',
    Gray: 'bg-lg'
}

/**
 * Storybook Definition.
 */
export default {
    title: 'Components/Small Feature',
    decorators: [withKnobs]
};

export const SmallFeature = () => {
    useEffect(() => Drupal.attachBehaviors(), []);
    const background = select("Background", bgOptions, bgOptions.None);
    const paddingStep = number("Padding", 5);
    const padding = "ph3 pv" + paddingStep;

    return <div className={ padding + " " + background }  dangerouslySetInnerHTML={{ __html: smallFeature(smallFeatureData) }} />;
};
export const SmallFeatureRight = () => {
    useEffect(() => Drupal.attachBehaviors(), []);
    return <div dangerouslySetInnerHTML={{ __html: smallFeature({...smallFeatureRightData,...smallFeatureData}) }} />;
};

SmallFeatureRight.story = {
    name: "Small Feature (media on right)"
}

export const SmallFeatureHalf = () => {
    useEffect(() => Drupal.attachBehaviors(), []);
    return <div dangerouslySetInnerHTML={{ __html: smallFeature({...smallFeatureHalfData,...smallFeatureData}) }} />;
}

SmallFeatureHalf.story = {
    name: "50/50 Small Feature"
}

export const SmallFeatureHalfRight = () => {
    useEffect(() => Drupal.attachBehaviors(), []);
    return <div dangerouslySetInnerHTML={{ __html: smallFeature({...smallFeatureHalfRightData,...smallFeatureData}) }} />;
}

SmallFeatureHalfRight.story = {
    name: "50/50 Small Feature (media on right)"
}
