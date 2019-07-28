(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{253:function(module,exports,__webpack_require__){__webpack_require__(254),__webpack_require__(357),module.exports=__webpack_require__(358)},358:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(22),__webpack_require__(79),__webpack_require__(29),__webpack_require__(27),__webpack_require__(23),__webpack_require__(34);var _storybook_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(19),_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(248),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(249),_storybook_addon_options__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(250),req=__webpack_require__(528);Object(_storybook_addon_options__WEBPACK_IMPORTED_MODULE_9__.setOptions)({name:"React Inline Loaders",url:"http://natol.es/react-inline-loaders"}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.configure)(function loadStories(){req("./index.stories.tsx"),req.keys().forEach(function(filename){-1===filename.indexOf("index.stories.tsx")&&req(filename)})},module),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.addDecorator)(_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_7__.withNotes),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.addDecorator)(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.withKnobs)}.call(this,__webpack_require__(359)(module))},528:function(module,exports,__webpack_require__){var map={"./index.stories.tsx":529,"./loaders/CenterSquaresLoader.stories.tsx":614,"./loaders/ChasingSquaresLoader.stories.tsx":622,"./loaders/DotLineLoader.stories.tsx":623,"./loaders/DotWaveLoader.stories.tsx":624,"./loaders/littleDotLoader.stories.tsx":625,"./loaders/rotateCirclesLoader.stories.tsx":626,"./loaders/simpleSpinnerLoader.stories.tsx":627};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=528},529:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(1)),react_1=__webpack_require__(19),react_markdown_1=__importDefault(__webpack_require__(530)),readmeMD=__webpack_require__(613).default;react_1.storiesOf("Introduction",module).add("to react-inline-loaders",()=>React.createElement(react_markdown_1.default,{source:readmeMD}))}).call(this,__webpack_require__(11)(module))},54:function(module,exports,__webpack_require__){"use strict";function __export(m){for(var p in m)exports.hasOwnProperty(p)||(exports[p]=m[p])}Object.defineProperty(exports,"__esModule",{value:!0}),__export(__webpack_require__(615)),__export(__webpack_require__(616)),__export(__webpack_require__(617)),__export(__webpack_require__(618)),__export(__webpack_require__(619)),__export(__webpack_require__(620)),__export(__webpack_require__(621))},613:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default="[![Build Status](https://travis-ci.org/raulanatol/react-inline-loaders.svg?branch=master)](https://travis-ci.org/raulanatol/react-inline-loaders)\n[![Code Climate](https://codeclimate.com/github/raulanatol/react-inline-loaders/badges/gpa.svg)](https://codeclimate.com/github/raulanatol/react-inline-loaders)\n\n# react-inline-loaders - Loaders components for React.js\n\nMore information <http://natol.es/react-inline-loaders/>\n\n## Usage\n \n```bash\nnpm install --save react-inline-loaders\n```\n\n### Include a react-inline-loader\n\n```js\n<DotWaveLoader/>\n```\n\n## License\n\nAdaptations from:\n - http://codepen.io/Tbgse/pen/oxbmmL\n - https://boguz.github.io/Spinners\n\n*react-inline-loaders* is available under MIT. See LICENSE for more details.\n\n"},614:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(1)),react_1=__webpack_require__(19),src_1=__webpack_require__(54);react_1.storiesOf("CenterSquaresLoader",module).add("default props",()=>React.createElement(src_1.CenterSquaresLoader,null)).add("red background",()=>React.createElement(src_1.CenterSquaresLoader,{color:"#FF0000"}))}).call(this,__webpack_require__(11)(module))},615:function(module,exports,__webpack_require__){"use strict";var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const react_1=__importStar(__webpack_require__(1)),styled_1=__importDefault(__webpack_require__(55)),animation=__webpack_require__(30).keyframes`
  33% {
    transform: translate(0, 0);
    opacity: 0.7;
  }
  66% {
    transform: translate(0, 0);
    opacity: 0.7;
  }
`,Container=styled_1.default.div`
  width: 50px;
  line-height: 10px;
  height: 50px;
  
  & > div {
    display: inline-block;
    width: 15px;
    height: 15px;
    opacity: 0.2;
    background: ${props=>props.theme.background};
    margin: 3px;
    animation: ${animation} 2s infinite;
  }
`,Square1=styled_1.default.div`
  opacity: 0.5;
  transform: translate(0, -25px);
`,Square2=styled_1.default.div`
  opacity: 0.5;
  transform: translate(25px, 0);
`,Square3=styled_1.default.div`
  opacity: 0.5;
  transform: translate(-25px, 0);
`,Square4=styled_1.default.div`
  opacity: 0.5;
  transform: translate(0, 25px);
`;exports.CenterSquaresLoader=react_1.memo(props=>{const theme={background:props.color||"#666"};return react_1.default.createElement(Container,{theme:theme},react_1.default.createElement(Square1,null),react_1.default.createElement(Square2,null),react_1.default.createElement(Square3,null),react_1.default.createElement(Square4,null))})},616:function(module,exports,__webpack_require__){"use strict";var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const react_1=__importStar(__webpack_require__(1)),styled_1=__importDefault(__webpack_require__(55)),animation=__webpack_require__(30).keyframes`
  0% {
    transform: translateY(0px)
  }
  35% {
    transform: translateY(0px);
    opacity: 0.3
  }
  50% {
    transform: translateY(-20px);
    opacity: 0.8
  }
  70% {
    transform: translateY(3px);
    opacity: 0.8
  }
  85% {
    transform: translateY(-3px)
  }
`,Container=styled_1.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 45%;
  margin: 5%;
  position: relative;
`,LoaderDot=styled_1.default.div`
  height: 50px;
  width: 80px;
`,Dot=styled_1.default.div`
  display: inline-block;
  background: ${props=>props.color};
  height: 8px;
  width: 8px;
  opacity: 0.3;
  border-radius: 50%;
  animation: ${animation} 1.8s infinite;
`,Dot2=styled_1.default(Dot)`
  animation-delay: .15s;
`,Dot3=styled_1.default(Dot)`
  animation-delay: .3s;
`,Dot4=styled_1.default(Dot)`
  animation-delay: .45s;
`,Dot5=styled_1.default(Dot)`
  animation-delay: .6s;
`;exports.DotWaveLoader=react_1.memo(({color:color="#666666"})=>react_1.default.createElement(Container,null,react_1.default.createElement(LoaderDot,null,react_1.default.createElement(Dot,{color:color}),react_1.default.createElement(Dot2,{color:color}),react_1.default.createElement(Dot3,{color:color}),react_1.default.createElement(Dot4,{color:color}),react_1.default.createElement(Dot5,{color:color}))))},617:function(module,exports,__webpack_require__){"use strict";var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(1)),core_1=__webpack_require__(30),react_1=__webpack_require__(1),styled_1=__importDefault(__webpack_require__(55)),rotateForeverAnimation=core_1.keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`,Container=styled_1.default.div`
  background-color: ${props=>props.color};
  position: absolute;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  height: 60px;
  width: 60px;
  margin: -30px 0 -30px;
`,Spinner=styled_1.default.div`
  position: relative;
  top: 14%;
  right: 0;
  bottom: 0;
  left: 14%;
  animation: ${rotateForeverAnimation} 0.75s infinite;
  animation-timing-function: linear;
  height: 30px;
  width: 30px;
  margin: 123px;
  border: 8px solid #ffffff;
  border-radius: 50%;
  display: inline-block;
  background-color: ${props=>props.theme.backgroundColor};
  border-right-color: transparent;
  border-left-color: ${props=>props.theme.color};
  border-bottom-color: ${props=>props.theme.color};
  border-top-color: ${props=>props.theme.color};
`;exports.SimpleSpinnerLoader=react_1.memo(props=>{const{color:color="#666",backgroundColor:backgroundColor="transparent"}=props,theme={color:color,backgroundColor:backgroundColor};return React.createElement(Container,{color:backgroundColor},React.createElement(Spinner,{theme:theme}))})},618:function(module,exports,__webpack_require__){"use strict";var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(1)),core_1=__webpack_require__(30),styled_1=__importDefault(__webpack_require__(55)),pulseAnimation=core_1.keyframes`
  30% {
    transform: scale(0.7);
    opacity: 0.8
  }
  50% {
    transform: scale(1.1);
    opacity: 1.0
  }
  70% {
    transform: scale(0.8);
    opacity: 0.8
  }
`,radiusAnimation=core_1.keyframes`
  30% {
    transform: scale(0.7);
    opacity: 1
  }

  40% {
    transform: scale(7.8);
    opacity: 0.1
  }

  80% {
    transform: scale(4.8);
    opacity: 0
  }

  100% {
    transform: scale(1);
    opacity: 0
  }
`,Loader=styled_1.default.div`
  display: flex;
  position: relative;
`,Pulse=styled_1.default.div`
  background: ${props=>props.color};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  animation: ${pulseAnimation} 1.5s infinite;
  position: absolute;
  opacity: 0.8;
  z-index: 5;
`,Explosion=styled_1.default.div`
  content: '';
  width: 15px;
  height: 15px;
  background: ${props=>props.color};
  border-radius: 50%;
  position: absolute;
  animation: ${radiusAnimation} 1.5s infinite;
  z-index: 1;
`;exports.LittleDotLoader=({color:color="#666"})=>React.createElement(Loader,null,React.createElement("div",null,React.createElement(Pulse,{color:color}),React.createElement(Explosion,{color:color})))},619:function(module,exports,__webpack_require__){"use strict";var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(1)),core_1=__webpack_require__(30),styled_1=__importDefault(__webpack_require__(55)),animation=core_1.keyframes`
  0% {
    opacity: 0.5
  }
  30% {
    opacity: 0.5
  }
  60% {
    opacity: 0
  }
  75% {
    opacity: 0
  }
  100% {
    opacity: 0.5
  }
`,Container=styled_1.default.div`
  width: 50px;
  line-height: 10px;
  height: 50px;
  
  & > div {
    display: inline-block;
    width: 15px;
    height: 15px;
    opacity: 1;
    background: ${props=>props.theme.background};
    margin: 3px;
    animation: ${animation} 2.8s infinite;
  }
`,Square1=styled_1.default.div`
  opacity: 0.5;
`,Square2=styled_1.default.div`
  opacity: 0.5;
  animation-delay: .7s;
`,Square3=styled_1.default.div`
  opacity: 0.5;
  animation-delay: 2.1s;
`,Square4=styled_1.default.div`
  opacity: 0.5;
  animation-delay: 1.4s;
`;exports.ChasingSquaresLoader=props=>{const theme={background:props.color||"#666"};return React.createElement(Container,{theme:theme},React.createElement(Square1,null),React.createElement(Square2,null),React.createElement(Square3,null),React.createElement(Square4,null))}},620:function(module,exports,__webpack_require__){"use strict";var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const react_1=__importStar(__webpack_require__(1)),styled_1=__importDefault(__webpack_require__(55)),animation=__webpack_require__(30).keyframes`
  40% {
    transform: translateX(0px);
    opacity: 0.8
  }
  100% {
    transform: translateX(300px);
    opacity: 0
  }
`,Container=styled_1.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 45%;
  margin: 5%;
  position: relative;
  
  & > div {
    display: inline-block;
    background: ${props=>props.theme.background};
    height: 5px;
    width: 5px;
    opacity: 0;
    border-radius: 50%;
    transform: translateX(-300px);
    margin: 0 2px 0 2px;
  }
`,Dot=styled_1.default.div`
  animation: ${animation} 4s infinite;
  animation-delay: ${props=>props.theme.delay};
`;exports.DotLineLoader=react_1.memo(props=>{const theme={background:props.color||"#666"};return react_1.default.createElement(Container,{theme:theme},react_1.default.createElement(Dot,{theme:{delay:".8s"}}),react_1.default.createElement(Dot,{theme:{delay:".7s"}}),react_1.default.createElement(Dot,{theme:{delay:".6s"}}),react_1.default.createElement(Dot,{theme:{delay:".5s"}}),react_1.default.createElement(Dot,{theme:{delay:".4s"}}),react_1.default.createElement(Dot,{theme:{delay:".3s"}}),react_1.default.createElement(Dot,{theme:{delay:".2s"}}),react_1.default.createElement(Dot,{theme:{delay:".1s"}}))})},621:function(module,exports,__webpack_require__){"use strict";var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const react_1=__importStar(__webpack_require__(1)),styled_1=__importDefault(__webpack_require__(55)),core_1=__webpack_require__(30),Loader=styled_1.default.div`
  display: flex;
  width: 100px;
  height: 45px;
`,CircleBase=styled_1.default.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  opacity: .75;
  background-color: ${props=>props.color};
`,circle1Anim=core_1.keyframes`
  0%, 100% {
    -webkit-transform: translateX(-15px);
    transform: translateX(-15px);
  }
  25% {
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
    opacity: .25;
  }
  50% {
    -webkit-transform: translateX(15px);
    transform: translateX(15px);
  }
  75% {
    -webkit-transform: scale(1.4);
    transform: scale(1.4);
    opacity: .8;
  }
`,circle2Anim=core_1.keyframes`
  0%, 100% {
    -webkit-transform: translateX(15px);
    transform: translateX(15px);
  }
  25% {
    -webkit-transform: scale(1.4);
    transform: scale(1.4);
    opacity: .8;
  }
  50% {
    -webkit-transform: translateX(-15px);
    transform: translateX(-15px);
  }
  75% {
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
    opacity: .25;
  }
`,Circle1=styled_1.default(CircleBase)`
  animation: ${circle1Anim} 2s infinite linear;
`,Circle2=styled_1.default(CircleBase)`
  animation: ${circle2Anim} 2s infinite linear;
`;exports.RotateCirclesLoader=react_1.memo(props=>{const{color1:color1="#666",color2:color2="#066"}=props;return react_1.default.createElement(Loader,null,react_1.default.createElement(Circle1,{color:color1}),react_1.default.createElement(Circle2,{color:color2}))})},622:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(1)),react_1=__webpack_require__(19),src_1=__webpack_require__(54);react_1.storiesOf("ChasingSquaresLoader",module).add("default props",()=>React.createElement(src_1.ChasingSquaresLoader,null)).add("red background",()=>React.createElement(src_1.ChasingSquaresLoader,{color:"#FF0000"}))}).call(this,__webpack_require__(11)(module))},623:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(1)),react_1=__webpack_require__(19),src_1=__webpack_require__(54);react_1.storiesOf("DotLineLoader",module).add("default props",()=>React.createElement(src_1.DotLineLoader,null)).add("red background",()=>React.createElement(src_1.DotLineLoader,{color:"#FF0000"}))}).call(this,__webpack_require__(11)(module))},624:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(1)),react_1=__webpack_require__(19),src_1=__webpack_require__(54);react_1.storiesOf("DotWaveLoader",module).add("default props",()=>React.createElement(src_1.DotWaveLoader,null)).add("red background",()=>React.createElement(src_1.DotWaveLoader,{color:"#FF0000"}))}).call(this,__webpack_require__(11)(module))},625:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(1)),src_1=__webpack_require__(54);__webpack_require__(19).storiesOf("LittleDotLoader",module).add("default props",()=>React.createElement(src_1.LittleDotLoader,null)).add("red color",()=>React.createElement(src_1.LittleDotLoader,{color:"#FF0000"}))}).call(this,__webpack_require__(11)(module))},626:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(1)),react_1=__webpack_require__(19),src_1=__webpack_require__(54);react_1.storiesOf("RotateCirclesLoader",module).add("default props",()=>React.createElement(src_1.RotateCirclesLoader,null))}).call(this,__webpack_require__(11)(module))},627:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(1)),react_1=__webpack_require__(19),src_1=__webpack_require__(54);react_1.storiesOf("SimpleSpinnerLoader",module).add("default props",()=>React.createElement(src_1.SimpleSpinnerLoader,null))}).call(this,__webpack_require__(11)(module))}},[[253,1,2]]]);
//# sourceMappingURL=main.16e302706466badea4c3.bundle.js.map