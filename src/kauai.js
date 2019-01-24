import Heading from './components/heading/heading';
import KauaiImage from './components/kauai-image/kauai-image';
import React from 'react';

const heading = new Heading();
heading.render("kauai");

const kauaiImage = new KauaiImage();
kauaiImage.render();