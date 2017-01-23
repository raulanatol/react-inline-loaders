/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp, import/no-extraneous-dependencies, import/no-webpack-loader-syntax */
import React from 'react';
import ReactDOM from 'react-dom';
import Fork from 'react-ghfork';
import { Catalog, CodeSpecimen, ReactSpecimen } from 'catalog';

import 'purecss/build/pure.css';
import 'react-ghfork/gh-fork-ribbon.ie.css';
import 'react-ghfork/gh-fork-ribbon.css';
import './main.css';

import {
  DotWaveLoader,
  CenterSquaresLoader,
  SimpleSpinnerLoader,
  LittleDotLoader,
  ChasingSquaresLoader,
  DotLineLoader,
  RotateCirclesLoader
} from '../src/index';

const documentationImports = {
  ReactDOM,
  DotWaveLoader,
  CenterSquaresLoader,
  SimpleSpinnerLoader,
  LittleDotLoader,
  ChasingSquaresLoader,
  DotLineLoader,
  RotateCirclesLoader
};
const title = `${NAME} v${VERSION}`; // eslint-disable-line no-undef
const project = `${USER}/${NAME}`; // eslint-disable-line no-undef
const pages = [
  { path: '/', title: 'Introduction', imports: documentationImports, component: require('catalog/lib/loader!raw!../README.md') },
  { path: '/demos/DotWaveLoader', title: 'DotWaveLoader', imports: documentationImports, component: require('catalog/lib/loader!raw!./demos/DotWaveLoader.md') },
  { path: '/demos/CenterSquaresLoader', title: 'CenterSquaresLoader', imports: documentationImports, component: require('catalog/lib/loader!raw!./demos/CenterSquaresLoader.md') },
  { path: '/demos/SimpleSpinnerLoader', title: 'SimpleSpinnerLoader', imports: documentationImports, component: require('catalog/lib/loader!raw!./demos/SimpleSpinnerLoader.md') },
  { path: '/demos/LittleDotLoader', title: 'LittleDotLoader', imports: documentationImports, component: require('catalog/lib/loader!raw!./demos/LittleDotLoader.md') },
  { path: '/demos/ChasingSquaresLoader', title: 'ChasingSquaresLoader', imports: documentationImports, component: require('catalog/lib/loader!raw!./demos/ChasingSquaresLoader.md') },
  { path: '/demos/DotLineLoader', title: 'DotLineLoader', imports: documentationImports, component: require('catalog/lib/loader!raw!./demos/DotLineLoader.md') },
  { path: '/demos/RotateCirclesLoader', title: 'RotateCirclesLoader', imports: documentationImports, component: require('catalog/lib/loader!raw!./demos/RotateCirclesLoader.md') }
];


// Catalog - logoSrc="../images/logo.png"
ReactDOM.render(
  <div>
    <Fork
      className="right"
      project={project}
      style={{
        backgroundColor: '#000'
      }}
    />
    <Catalog
      pages={pages}
      specimens={{
        javascript: props => <CodeSpecimen {...props} lang="javascript"/>,
        js: props => <CodeSpecimen {...props} lang="javascript"/>,
        jsx: props => <ReactSpecimen {...props} />,
        bash: props => <CodeSpecimen {...props} lang="bash"/>,
      }}
      title={title}
    />
  </div>,
  document.getElementById('app')
);
