(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[500],{69694:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});n(2784);var r=n(6277),o=(n(85430),n(51537)),i=n.n(o),a=n(52322);function c(e){var t=e.code,n=e.className,o=e.name,c=(0,r.Z)(i().root,n),l=o?i().name:i().hiddenName,s=(0,r.Z)(i().code,"language-".concat(o&&o.endsWith("css")?"css":"js"));return(0,a.jsxs)("div",{className:c,children:[(0,a.jsx)("div",{className:l,children:o}),(0,a.jsx)("pre",{className:s,children:(0,a.jsx)("code",{children:t})})]})}},78127:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});n(2784);var r=n(6277),o=(n(85430),n(62343)),i=n.n(o),a=n(52322);function c(e){var t=e.code,n=e.className,o=(0,r.Z)(i().root,n);return(0,a.jsx)("span",{className:o,children:(0,a.jsx)("code",{dangerouslySetInnerHTML:{__html:t}})})}},97539:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(2784),o=n(18476),i=n.n(o),a=n(98118),c=n(25949),l=n(97249),s=n(2137),u=n(52322);function d(e){var t=e.children;return(0,r.useEffect)((function(){i().highlightAll()}),[]),(0,u.jsxs)("div",{children:[(0,u.jsx)(a.Z,{}),(0,u.jsx)(c.Z,{}),t,(0,u.jsx)(l.Z,{}),(0,u.jsx)(s.Z,{})]})}},65529:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return X}});var r=n(9249),o=n(87371),i=n(88106),a=n(18657),c=n(95058),l=n(2784),s=n(96383),u=n(25567),d=n(41907),f=n(76667),p=n.n(f),h=n(69694),m=n(80753),g=n(56666),v=n(1503),y=n(64705),S=n(95597),E=n(88189),b=n(6277),w=n(13980),k=n.n(w);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var j=["block","className","theme"],L=["blockProps","customStyleMap","customStyleFn","decorator","forceSelection","offsetKey","selection","tree","contentState","blockStyleFn","preventScroll"];function B(e){e.block;var t=e.className,n=e.theme,r=void 0===n?{}:n,o=C(e,j);o.blockProps,o.customStyleMap,o.customStyleFn,o.decorator,o.forceSelection,o.offsetKey,o.selection,o.tree,o.contentState,o.blockStyleFn,o.preventScroll;var i=C(o,L),a=(0,b.Z)(r.divider,t);return l.createElement("hr",x({},i,{className:a}))}var Z=function(e){var t=e.theme,n=void 0===t?{}:t,r=function(){var t=e.getEditorState();return t.getCurrentContent().getBlockForKey(t.getSelection().getStartKey()).getType()===e.blockType}()?(0,b.Z)(n.button,n.active):n.button;return l.createElement("div",{className:n.buttonWrapper,onMouseDown:function(e){e.preventDefault()}},l.createElement("button",{className:r,onClick:function(t){t.preventDefault();var n=e.getEditorState(),r=e.addDivider(n);e.setEditorState(r)},type:"button"},l.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}))))};Z.propTypes={theme:k().object,getEditorState:k().func.isRequired,setEditorState:k().func.isRequired,addDivider:k().func.isRequired};var M=Z;function K(e){return function(t,n){var r=t.getCurrentContent().createEntity(e,"IMMUTABLE",n).getLastCreatedEntityKey(),o=v.AtomicBlockUtils.insertAtomicBlock(t,r," ");return v.EditorState.forceSelection(o,o.getCurrentContent().getSelectionAfter())}}var O={divider:"d6zlymw"},N=n(41473),T=n.n(N),P=n(52322);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,g.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.Z)(e);if(t){var o=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,a.Z)(this,n)}}var A=(0,S.Z)(),D=function(e){var t=void 0===e?{}:e,n=t.entityType,r=void 0===n?"divider":n,o=t.dividerComponent,i=void 0===o?B:o,a=t.buttonComponent,c=void 0===a?M:a,s=t.theme,u=void 0===s?O:s,d=t.decorator,f=i;"function"===typeof d&&(f=d(f));var p=function(e){return l.createElement(f,x({},e,{theme:u}))},h=c;return{blockRendererFn:function(e,t){var n=t.getEditorState;if("atomic"===e.getType()){var o=n().getCurrentContent(),i=e.getEntityAt(0);if(!i)return null;if(o.getEntity(i).getType()===r)return{component:p,editable:!1}}return null},DividerButton:function(e){return l.createElement(h,x({},e,{addDivider:K(r)}))},addDivider:K(r)}}({decorator:(0,y.lM)(A.decorator)}),F=D.DividerButton,H=(0,E.Z)(),I=H.SideToolbar,W=[A,D,H],U={entityMap:{0:{type:"divider",mutability:"IMMUTABLE",data:{}}},blocks:[{key:"9gm3s",text:"This is a simple example for divider plugin. Click side toolbar divider button.",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"ov7r",text:" ",type:"atomic",depth:0,inlineStyleRanges:[],entityRanges:[{offset:0,length:1,key:0}],data:{}}]},q=function(e){(0,i.Z)(n,e);var t=z(n);function n(){var e;(0,r.Z)(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i)),(0,g.Z)((0,m.Z)(e),"state",{editorState:v.EditorState.createWithContent((0,v.convertFromRaw)(U))}),(0,g.Z)((0,m.Z)(e),"onChange",(function(t){e.setState({editorState:t})})),(0,g.Z)((0,m.Z)(e),"focus",(function(){e.editor.focus()})),e}return(0,o.Z)(n,[{key:"render",value:function(){var e=this;return(0,P.jsxs)("div",{className:T().editor,onClick:this.focus,children:[(0,P.jsx)(y.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:W,ref:function(t){e.editor=t}}),(0,P.jsx)(I,{children:function(e){return(0,P.jsx)("div",{children:(0,P.jsx)(F,R({},e))})}})]})}}]),n}(l.Component),V=n(72362),Y=n(78127),G=n(97539);function Q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.Z)(e);if(t){var o=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,a.Z)(this,n)}}var X=function(e){(0,i.Z)(n,e);var t=Q(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"render",value:function(){return(0,P.jsxs)(G.Z,{children:[(0,P.jsxs)(s.Z,{children:[(0,P.jsx)(d.Z,{level:2,children:"Divider"}),(0,P.jsx)(d.Z,{level:3,children:"Supported Environment"}),(0,P.jsxs)("ul",{className:p().list,children:[(0,P.jsx)("li",{className:p().listEntry,children:"Desktop: Yes"}),(0,P.jsx)("li",{className:p().listEntry,children:"Mobile: Yes"}),(0,P.jsx)("li",{className:p().listEntry,children:"Screen-reader: Yes"})]})]}),(0,P.jsxs)(u.Z,{children:[(0,P.jsx)(d.Z,{level:2,children:"Getting Started"}),(0,P.jsx)(h.Z,{code:"npm install @draft-js-plugins/editor"}),(0,P.jsx)(h.Z,{code:"npm install @draft-js-plugins/divider"}),(0,P.jsx)(h.Z,{code:"// It is important to import the Editor which accepts plugins.\n\nimport Editor from '@draft-js-plugins/editor';\n\nimport createDividerPlugin from '@draft-js-plugins/divider';\nimport React from 'react';\n\nconst dividerPlugin = createDividerPlugin();\n\n// The Editor accepts an array of plugins. In this case, only the dividerPlugin\n// is passed in, although it is possible to pass in multiple plugins.\nconst MyEditor = ({ editorState, onChange }) => (\n  <Editor\n    editorState={editorState}\n    onChange={onChange}\n    plugins={[dividerPlugin]}\n  />\n);\n\nexport default MyEditor;\n",name:"gettingStarted.js"}),(0,P.jsx)(d.Z,{level:3,children:"Importing the default styles"}),(0,P.jsxs)("p",{children:["The plugin ships with a default styling available at this location in the installed package: \xa0",(0,P.jsx)(Y.Z,{code:"node_modules/@draft-js-plugins/divider/lib/plugin.css"})]}),(0,P.jsx)(d.Z,{level:4,children:"Webpack Usage"}),(0,P.jsxs)("ul",{className:p().list,children:[(0,P.jsxs)("li",{className:p().listEntry,children:["1. Install Webpack loaders: \xa0",(0,P.jsx)(Y.Z,{code:"npm i style-loader css-loader --save-dev"})]}),(0,P.jsxs)("li",{className:p().listEntry,children:["2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.",(0,P.jsx)(h.Z,{code:"module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",className:p().guideCodeBlock})]}),(0,P.jsxs)("li",{className:p().listEntry,children:["3. Add the below import line to your component to tell Webpack to inject the style to your component.",(0,P.jsx)(h.Z,{code:"import '@draft-js-plugins/divider/lib/plugin.css';",className:p().guideCodeBlock})]}),(0,P.jsx)("li",{className:p().listEntry,children:"4. Restart Webpack."})]}),(0,P.jsx)(d.Z,{level:4,children:"Browserify Usage"}),(0,P.jsxs)("p",{children:["Please help, by submiting a Pull Request to the"," ",(0,P.jsx)(V.Z,{href:"https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Image/index.js",children:"documentation"}),"."]})]}),(0,P.jsxs)(s.Z,{children:[(0,P.jsx)(d.Z,{level:2,children:"Configuration Parameters"}),(0,P.jsxs)("div",{className:p().param,children:[(0,P.jsx)("span",{className:p().paramName,children:"theme"}),(0,P.jsx)("span",{children:"Object of CSS classes with the following keys."}),(0,P.jsx)("div",{className:p().subParams,children:(0,P.jsxs)("div",{className:p().subParam,children:[(0,P.jsx)("span",{className:p().subParamName,children:"divider:"})," CSS class for the divider."]})})]}),(0,P.jsxs)("div",{className:p().param,children:[(0,P.jsx)("span",{className:p().paramName,children:"entityType"}),(0,P.jsx)("span",{children:"Entity type for divider. default type is `divider`"})]}),(0,P.jsxs)("div",{className:p().param,children:[(0,P.jsx)("span",{className:p().paramName,children:"dividerComponent"}),(0,P.jsx)("span",{children:"Pass in a custom divider component to be rendered."})]})]}),(0,P.jsxs)(s.Z,{children:[(0,P.jsx)(d.Z,{level:2,children:"Divider + SideToolbar + Focus Example"}),(0,P.jsx)(q,{}),(0,P.jsx)(h.Z,{code:"import React, { Component } from 'react';\nimport { convertFromRaw, EditorState } from 'draft-js';\n\nimport Editor, { composeDecorators } from '@draft-js-plugins/editor';\nimport createFocusPlugin from '@draft-js-plugins/focus';\nimport createSideToolbarPlugin from '@draft-js-plugins/side-toolbar';\nimport createDividerPlugin from '@draft-js-plugins/divider';\n\nimport editorStyles from './editorStyles.module.css';\n\nconst focusPlugin = createFocusPlugin();\n\nconst decorator = composeDecorators(focusPlugin.decorator);\n\nconst dividerPlugin = createDividerPlugin({ decorator });\nconst { DividerButton } = dividerPlugin;\n\nconst sideToolbarPlugin = createSideToolbarPlugin();\nconst { SideToolbar } = sideToolbarPlugin;\n\nconst plugins = [focusPlugin, dividerPlugin, sideToolbarPlugin];\n\n/* eslint-disable */\nconst initialState = {\n  entityMap: {\n    0: {\n      type: 'divider',\n      mutability: 'IMMUTABLE',\n      data: {},\n    },\n  },\n  blocks: [\n    {\n      key: '9gm3s',\n      text:\n        'This is a simple example for divider plugin. Click side toolbar divider button.',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'ov7r',\n      text: ' ',\n      type: 'atomic',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [\n        {\n          offset: 0,\n          length: 1,\n          key: 0,\n        },\n      ],\n      data: {},\n    },\n  ],\n};\n/* eslint-enable */\n\nexport default class CustomImageEditor extends Component {\n  state = {\n    editorState: EditorState.createWithContent(convertFromRaw(initialState)),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div className={editorStyles.editor} onClick={this.focus}>\n        <Editor\n          editorState={this.state.editorState}\n          onChange={this.onChange}\n          plugins={plugins}\n          ref={(element) => {\n            this.editor = element;\n          }}\n        />\n\n        <SideToolbar>\n          {\n            // may be use React.Fragment instead of div to improve perfomance after React 16\n            (externalProps) => (\n              <div>\n                <DividerButton {...externalProps} />\n              </div>\n            )\n          }\n        </SideToolbar>\n      </div>\n    );\n  }\n}\n",name:"DividerWithSideToolbarEditor.js"}),(0,P.jsx)(h.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n",name:"editorStyles.css"})]})]})}}]),n}(l.Component)},31453:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugin/divider",function(){return n(65529)}])},51537:function(e){e.exports={root:"Code_root__32MsM",name:"Code_name__Asuq_",hiddenName:"Code_hiddenName__3h9eQ"}},41473:function(e){e.exports={editor:"editorStyles_editor__WtRu-"}},62343:function(e){e.exports={root:"InlineCode_root__1EGp7"}},76667:function(e){e.exports={root:"styles_root__25WAG",param:"styles_param__2jueL",paramBig:"styles_paramBig__5OpnV",paramName:"styles_paramName__1qWUG",subParams:"styles_subParams__foFQt",subParam:"styles_subParam__3EKy5",subParamName:"styles_subParamName__3h7dW",list:"styles_list__21I2H",listEntry:"styles_listEntry__1SkYe",guideCodeBlock:"styles_guideCodeBlock__naOiM"}},20138:function(e,t,n){"use strict";n.d(t,{xM:function(){return b},f9:function(){return E},qA:function(){return w},Tj:function(){return k},YC:function(){return y},n3:function(){return u},Ou:function(){return S},Ed:function(){return d},gS:function(){return p},R8:function(){return m},oV:function(){return h},BI:function(){return s},pu:function(){return v},tg:function(){return f},cU:function(){return g}});var r=n(2784),o=n(1503),i=n(6277);function a(e){var t=e.blockType,n=e.children;return function(e){var a=e.theme,c=function(){if(!e.getEditorState)return!1;var n=e.getEditorState();return n.getCurrentContent().getBlockForKey(n.getSelection().getStartKey()).getType()===t}()?(0,i.Z)(a.button,a.active):a.button;return r.createElement("div",{className:a.buttonWrapper,onMouseDown:function(e){e.preventDefault()}},r.createElement("button",{className:c,onClick:function(n){n.preventDefault(),e.setEditorState(o.RichUtils.toggleBlockType(e.getEditorState(),t))},type:"button",children:n}))}}function c(e){var t=e.style,n=e.children;return function(e){var a=e.theme,c=e.getEditorState&&e.getEditorState().getCurrentInlineStyle().has(t)?(0,i.Z)(a.button,a.active):a.button;return r.createElement("div",{className:a.buttonWrapper,onMouseDown:function(e){e.preventDefault()}},r.createElement("button",{className:c,onClick:function(n){n.preventDefault(),e.setEditorState(o.RichUtils.toggleInlineStyle(e.getEditorState(),t))},type:"button",children:n}))}}function l(e){var t=e.alignment,n=e.children;return function(e){var o=e.theme,a=e.alignment===t?(0,i.Z)(o.button,o.active):o.button;return r.createElement("div",{className:o.buttonWrapper,onMouseDown:function(e){e.preventDefault()}},r.createElement("button",{className:a,onClick:function(n){n.preventDefault(),e.setAlignment({alignment:t})},type:"button",children:n}))}}var s=c({style:"ITALIC",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"}))}),u=c({style:"BOLD",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"}),r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),d=c({style:"CODE",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),r.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}))}),f=c({style:"UNDERLINE",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"}))}),p=a({blockType:"header-one",children:"H1"}),h=a({blockType:"header-two",children:"H2"}),m=a({blockType:"header-three",children:"H3"}),g=a({blockType:"unordered-list-item",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"}),r.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}))}),v=a({blockType:"ordered-list-item",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"}),r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),y=a({blockType:"blockquote",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"}),r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),S=a({blockType:"code-block",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),r.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}))}),E=l({alignment:"default",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M3,7 L3,17 L17,17 L17,7 L3,7 Z"}),r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),b=l({alignment:"center",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M5,7 L5,17 L19,17 L19,7 L5,7 Z"}),r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),w=l({alignment:"left",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M21,15 L15,15 L15,17 L21,17 L21,15 Z M21,7 L15,7 L15,9 L21,9 L21,7 Z M15,13 L21,13 L21,11 L15,11 L15,13 Z M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M3,7 L3,17 L13,17 L13,7 L3,7 Z"}),r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),k=l({alignment:"right",children:r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M9,15 L3,15 L3,17 L9,17 L9,15 Z M9,7 L3,7 L3,9 L9,9 L9,7 Z M3,13 L9,13 L9,11 L3,11 L3,13 Z M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M11,7 L11,17 L21,17 L21,7 L11,7 Z"}),r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))});c({style:"SUBSCRIPT",children:r.createElement("div",null,"x",r.createElement("sub",null,"2"))}),c({style:"SUPERSCRIPT",children:r.createElement("div",null,"x",r.createElement("sup",null,"2"))})},95597:function(e,t,n){"use strict";n.d(t,{Z:function(){return S}});var r=n(1503),o=n(46670),i=n(52358),a=n.n(i),c=n(2784),l=n(6277);function s(e){var t=function(e,t,n){var o=t.getStartKey(),i=[];return e.getBlockMap().forEach((function(e,t){i.push(e),t===o&&i.push(n)})),e.merge({blockMap:r.BlockMapBuilder.createFromArray(i),selectionBefore:t,selectionAfter:t.merge({anchorKey:n.getKey(),anchorOffset:n.getLength(),focusKey:n.getKey(),focusOffset:n.getLength(),isBackward:!1})})}(e.getCurrentContent(),e.getSelection(),new r.ContentBlock({key:(0,r.genKey)(),type:"unstyled",text:"",characterList:(0,o.List)()})),n=t.merge({selectionAfter:t.getSelectionAfter().set("hasFocus",!0)});return r.EditorState.push(e,n,"insert-fragment")}var u=function(e,t,n,o){var i=e(),c=i.getSelection().getAnchorKey(),l="up"===n?i.getCurrentContent().getBlockBefore(c):i.getCurrentContent().getBlockAfter(c);if((!l||l.get("key")!==c)&&l){var s=a().encode(l.getKey(),0,0),u=document.querySelectorAll('[data-offset-key="'+s+'"]')[0],d=window.getSelection(),f=document.createRange();f.setStart(u,0),f.setEnd(u,0),d.removeAllRanges(),d.addRange(f);var p="up"===n?l.getLength():0;o.preventDefault(),t(r.EditorState.forceSelection(i,new r.SelectionState({anchorKey:l.getKey(),anchorOffset:p,focusKey:l.getKey(),focusOffset:p,isBackward:!1})))}};function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=function(e){var t=e.theme,n=e.blockKeyStore;return function(e){var r=c.forwardRef((function(r,o){(0,c.useEffect)((function(){return n.add(r.block.getKey()),function(){n.remove(r.block.getKey())}}),[]);var i=r.blockProps,a=r.className,s=i.isFocused?(0,l.Z)(a,t.focused):(0,l.Z)(a,t.unfocused);return c.createElement(e,d({},r,{ref:o,onClick:function(e){e.preventDefault(),r.blockProps.isFocused||r.blockProps.setFocusToBlock()},className:s}))}));return r.displayName="BlockFocus("+function(e){var t=e.WrappedComponent||e;return t.displayName||t.name||"Component"}(e)+")",r.WrappedComponent=e.WrappedComponent||e,r}};var p=function(e,t,n){return e.getBlockMap().keySeq().skipUntil((function(e){return e===t})).takeUntil((function(e){return e===n})).concat([n])},h=function(e,t){return function(e){var t=e.getSelection(),n=e.getCurrentContent();return p(n,t.getStartKey(),t.getEndKey())}(e).includes(t)};var m={unfocused:"uz5k6rs",focused:"f1vn2c6d"},g=function(e,t){var n=e.getSelection();if(n.getAnchorKey()!==n.getFocusKey())return!1;var r=e.getCurrentContent().getBlockForKey(n.getAnchorKey());return t.includes(r.getKey())},v=["backspace","backspace-word","backspace-to-start-of-line","delete","delete-word","delete-to-end-of-block"];function y(e){return r.EditorState.set(e,{selection:e.getSelection(),forceSelection:!0,nativelyRenderedContent:null,inlineStyleOverride:null})}var S=function(e){void 0===e&&(e={});var t,n,i=function(){var e=(0,o.List)();return{add:function(t){return e=e.push(t)},remove:function(t){return e=e.filter((function(e){return e!==t}))},includes:function(t){return e.includes(t)},getAll:function(){return e}}}(),c=e.theme?e.theme:m;return{handleReturn:function(e,t,n){var r=n.setEditorState;return g(t,i)?(r(s(t)),"handled"):"not-handled"},handleKeyCommand:function(e,t,n,o){var a=o.setEditorState;if(v.includes(e)&&g(t,i)){var c=t.getSelection().getStartKey(),l=function(e,t){var n=e.getCurrentContent(),o=n.getKeyBefore(t),i=n.getBlockForKey(o);if(void 0===i){var a=new r.SelectionState({anchorKey:t,anchorOffset:0,focusKey:t,focusOffset:1});n=r.Modifier.removeRange(n,a,"backward"),n=r.Modifier.setBlockType(n,a,"unstyled");var c=r.EditorState.push(e,n,"remove-range"),l=new r.SelectionState({anchorKey:t,anchorOffset:0,focusKey:t,focusOffset:0});return r.EditorState.forceSelection(c,l)}var s=new r.SelectionState({anchorKey:o,anchorOffset:i.getLength(),focusKey:t,focusOffset:1});n=r.Modifier.removeRange(n,s,"backward");var u=r.EditorState.push(e,n,"remove-range"),d=new r.SelectionState({anchorKey:o,anchorOffset:i.getLength(),focusKey:o,focusOffset:i.getLength()});return r.EditorState.forceSelection(u,d)}(t,c);if(l!==t)return a(l),"handled"}return"not-handled"},onChange:function(e){var r=e.getCurrentContent();if(!r.equals(n))return n=r,e;n=r;var o=e.getSelection();if(t&&o.equals(t))return t=e.getSelection(),e;var a=i.getAll();if(t&&p(r,t.getStartKey(),t.getEndKey()).some((function(e){return a.includes(e)})))return t=o,y(e);return p(r,o.getStartKey(),o.getEndKey()).some((function(e){return a.includes(e)}))?(t=o,y(e)):e},keyBindingFn:function(e,t){var n=t.getEditorState,r=t.setEditorState,o=n();if(g(o,i)&&(37===e.keyCode&&u(n,r,"up",e),39===e.keyCode&&u(n,r,"down",e),38===e.keyCode&&u(n,r,"up",e),40===e.keyCode))u(n,r,"down",e);else if(!e.shiftKey){if(37===e.keyCode){var a=o.getSelection(),c=a.getAnchorKey(),l=o.getCurrentContent().getBlockBefore(c);l&&0===a.getAnchorOffset()&&i.includes(l.getKey())&&u(n,r,"up",e)}if(39===e.keyCode){var s=o.getSelection(),d=s.getFocusKey(),f=o.getCurrentContent().getBlockForKey(d),p=o.getCurrentContent().getBlockAfter(d),h="atomic"!==f.getType()&&f.getLength()===s.getFocusOffset();p&&h&&i.includes(p.getKey())&&u(n,r,"down",e)}if(38===e.keyCode){var m=o.getSelection().getAnchorKey(),v=o.getCurrentContent().getBlockBefore(m);v&&i.includes(v.getKey())&&u(n,r,"up",e)}if(40===e.keyCode){var y=o.getSelection().getAnchorKey(),S=o.getCurrentContent().getBlockAfter(y);S&&i.includes(S.getKey())&&u(n,r,"down",e)}}},blockRendererFn:function(e,t){var n=t.getEditorState,o=t.setEditorState;if("atomic"===e.getType()){var i=n();return{props:{isFocused:i.getSelection().getHasFocus()&&h(i,e.getKey()),isCollapsedSelection:i.getSelection().isCollapsed(),setFocusToBlock:function(){!function(e,t,n){var o=e(),i=a().encode(n.getKey(),0,0),c=document.querySelectorAll('[data-offset-key="'+i+'"]')[0],l=window.getSelection(),s=document.createRange();s.setStart(c,0),s.setEnd(c,0),l.removeAllRanges(),l.addRange(s),t(r.EditorState.forceSelection(o,new r.SelectionState({anchorKey:n.getKey(),anchorOffset:0,focusKey:n.getKey(),focusOffset:0,isBackward:!1})))}(n,o,e)}}}}},decorator:f({theme:c,blockKeyStore:i})}}},88189:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(2784),o=n(52367),i=n(52358),a=n.n(i),c=n(20138),l=n(53021);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e){return{modifiers:[{name:"arrow",options:{element:e}},{name:"offset",options:{offset:[-4,-4]}}]}}function d(e){var t,n,o,i=e.theme,a=e.getEditorState,c=e.setEditorState,d=e.childNodes,f=e.referenceElement,p=e.show,h=e.rootReferenceElement,m=e.createBlockTypeSelectPopperOptions,g=void 0===m?u:m,v=(0,r.useCallback)((function(e){e.preventDefault(),e.stopPropagation()}),[]),y=(0,r.useState)(null),S=y[0],E=y[1],b=(0,r.useState)(null),w=b[0],k=b[1],x=(0,r.useMemo)((function(){return g(w)}),[w,g]),C=(0,l.D)(f,S,x),j=C.styles,L=C.attributes,B=C.update;return(0,r.useEffect)((function(){null==B||B()}),[h,B]),r.createElement("div",s({className:null==(t=i.blockTypeSelectStyles)?void 0:t.popup,ref:E,style:j.popper},L.popper,{"data-show":p,onMouseDown:v}),r.createElement("div",{className:null==(n=i.blockTypeSelectStyles)?void 0:n.popupFrame},d({getEditorState:a,setEditorState:c,theme:i.buttonStyles}),r.createElement("div",s({ref:k,style:j.arrow,className:null==(o=i.blockTypeSelectStyles)?void 0:o.arrow},L.popper))))}function f(e){var t=e.referenceElement,n=e.children,o=e.className,i=e.position,a=e.popperOptions,c=void 0===a?{placement:i,modifiers:[{name:"offset",options:{offset:[0,33]}}]}:a,u=(0,r.useState)(null),d=u[0],f=u[1],p=(0,l.D)(t,d,c),h=p.styles,m=p.attributes;return r.createElement("div",s({ref:f,style:h.popper},m.popper,{className:o}),n)}function p(e){return r.createElement("div",null,r.createElement(c.gS,e),r.createElement(c.oV,e),r.createElement(c.YC,e),r.createElement(c.Ou,e),r.createElement(c.cU,e),r.createElement(c.pu,e))}function h(e){var t,n,o=e.theme,i=e.position,c=e.popperOptions,l=e.store,s=e.createBlockTypeSelectPopperOptions,u=e.children,h=void 0===u?p:u,m=e.sideToolbarButtonComponent,g=(0,r.useState)(!1),v=g[0],y=g[1],S=(0,r.useState)(null),E=S[0],b=S[1],w=(0,r.useState)(null),k=w[0],x=w[1],C=(0,r.useCallback)((function(e){var t=e.getSelection();if(!t.getHasFocus())return b(null),void y(!1);var n=e.getCurrentContent().getBlockForKey(t.getStartKey()),r=a().encode(n.getKey(),0,0);setTimeout((function(){var e=document.querySelectorAll('[data-offset-key="'+r+'"]')[0];b(e)}),0)}),[]);return(0,r.useEffect)((function(){return l.subscribeToItem("editorState",C),function(){l.unsubscribeFromItem("editorState",C)}}),[l]),null===E?null:r.createElement(r.Fragment,null,r.createElement(f,{className:null==(t=o.toolbarStyles)?void 0:t.wrapper,referenceElement:E,position:i,popperOptions:c},r.createElement("div",{ref:x,onMouseEnter:function(){return y(!0)},onMouseLeave:function(){return y(!1)}},r.createElement(m,{className:null==(n=o.blockTypeSelectStyles)?void 0:n.blockType}))),r.createElement(d,{getEditorState:l.getItem("getEditorState"),setEditorState:l.getItem("setEditorState"),theme:o,childNodes:h,referenceElement:k,show:v,rootReferenceElement:E,createBlockTypeSelectPopperOptions:s}))}var m={buttonStyles:{buttonWrapper:"b1x6qj4x",button:"b1vm70k4",active:"ah6tpgz"},blockTypeSelectStyles:{blockType:"bloz0n9",popupFrame:"p98xzql",popup:"p1sbsapy",arrow:"a1f9fdzj"},toolbarStyles:{wrapper:"wev3spl"}};function g(e){var t=e.className;return r.createElement("div",{className:t},r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})))}var v=function(e){void 0===e&&(e={});var t=(0,o.MT)({isVisible:!1}),n=e,i=n.position,a=void 0===i?"left":i,c=n.theme,l=void 0===c?m:c,u=n.sideToolbarButtonComponent,d=void 0===u?g:u,f=n.popperOptions,p=n.createBlockTypeSelectPopperOptions;return{initialize:function(e){var n=e.setEditorState,r=e.getEditorState,o=e.getEditorRef;t.updateItem("getEditorState",r),t.updateItem("setEditorState",n),t.updateItem("getEditorRef",o)},onChange:function(e){return t.updateItem("editorState",e),e},SideToolbar:function(e){return r.createElement(h,s({},e,{store:t,theme:l,position:a,popperOptions:f,sideToolbarButtonComponent:d,createBlockTypeSelectPopperOptions:p}))}}}},52367:function(e,t,n){"use strict";n.d(t,{MT:function(){return i},ZP:function(){return c},$m:function(){return a}});var r=n(1503);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e){void 0===e&&(e={});var t=e,n={};return{subscribeToItem:function(e,t){n[e]=n[e]||[],n[e].push(t)},unsubscribeFromItem:function(e,t){var r=n[e];r&&(n[e]=r.filter((function(e){return e!==t})))},updateItem:function(e,r){var i;t=o({},t,((i={})[e]=r,i));var a=n[e];a&&a.forEach((function(n){return n(t[e])}))},getItem:function(e){return t[e]}}}function a(e,t,n){for(var r,o,i=t.getText();null!==(r=e.exec(i));)r.index===e.lastIndex&&(e.lastIndex+=1),n(o=r.index,o+r[0].length)}var c={decodeOffsetKey:function(e){var t=e.split("-"),n=t[0],r=t[1],o=t[2];return{blockKey:n,decoratorKey:parseInt(r,10),leafKey:parseInt(o,10)}},createLinkAtSelection:function(e,t){var n=e.getCurrentContent().createEntity("LINK","MUTABLE",{url:t}).getLastCreatedEntityKey(),o=r.RichUtils.toggleLink(e,e.getSelection(),n);return r.EditorState.forceSelection(o,e.getSelection())},removeLinkAtSelection:function(e){var t=e.getSelection();return r.RichUtils.toggleLink(e,t,null)},collapseToEnd:function(e){var t=e.getSelection();return r.EditorState.forceSelection(e,t.merge({anchorKey:t.getEndKey(),focusKey:t.getEndKey(),anchorOffset:t.getEndOffset(),focusOffset:t.getEndOffset()}))},getCurrentEntityKey:function(e){var t=e.getSelection(),n=t.getAnchorKey(),r=e.getCurrentContent().getBlockForKey(n),o=t.getAnchorOffset(),i=t.getIsBackward()?o-1:o;return r.getEntityAt(i)},getCurrentEntity:function(e){var t=e.getCurrentContent(),n=this.getCurrentEntityKey(e);return n?t.getEntity(n):null},hasEntity:function(e,t){var n=this.getCurrentEntity(e);return Boolean(n&&n.getType()===t)}}}},function(e){e.O(0,[774,331,476,21,919,888,179],(function(){return t=31453,e(e.s=t);var t}));var t=e.O();_N_E=t}]);