(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{892:function(e,a,n){__NEXT_REGISTER_PAGE("/utilities/getPaletteColor",function(){return e.exports=n(893),{page:e.exports.default}})},893:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),r=n(15);function m(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}a.default=function(e){var a=e.components;m(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:a},o.a.createElement(r.MDXTag,{name:"h1",components:a,props:{id:"getpalettecolor"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h1",props:{href:"#getpalettecolor","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"getPaletteColor"),o.a.createElement(r.MDXTag,{name:"p",components:a},"A utility function to get the shade of a palette color."),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"syntax"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#syntax","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Syntax"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js",metaString:""}},"getPaletteColor(colorShade)(props)\ngetPaletteColor(color, shade)(props)\ngetPaletteColor(shade)(props)\n")),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"usage"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#usage","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Usage"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx",metaString:""}},"const Component = styled.div`\n  color: ${getPaletteColor('primary.base')};\n`\n")),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"arguments"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#arguments","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Arguments"),o.a.createElement(r.MDXTag,{name:"table",components:a},o.a.createElement(r.MDXTag,{name:"thead",components:a,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Argument"),o.a.createElement(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Type"),o.a.createElement(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Description"))),o.a.createElement(r.MDXTag,{name:"tbody",components:a,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"colorShade")),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"String"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"The full palette color and shade expressed in dot notation, example ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"primary.base"),".")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"color")),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"String"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"The palette color, example ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"primary"),".")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"shade")),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"String"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"The shade of the palette color, example ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"base"),".")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"props")),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Object"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"The props passed to the component, must contain a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"theme")," prop.")))),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"examples"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#examples","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Examples"),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"full-palette-color-and-shade"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h3",props:{href:"#full-palette-color-and-shade","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Full palette color and shade"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx",metaString:""}},"const StaticDemo = styled.div`\n  color: ${getPaletteColor('primary.base')};\n`\n")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<StaticDemo>Static color</StaticDemo>\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},"Pass a full palette color and shade to return a color that isn't influenced by props. Accepts dot notation or a color and shade argument ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"getPaletteColor('primary', 'base')"),"."),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"palette-color-driven-from-color-prop"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h3",props:{href:"#palette-color-driven-from-color-prop","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Palette color driven from color prop"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx",metaString:""}},"const ShadeDemo = styled.div`\n  color: ${getPaletteColor('base')};\n`\n")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-.jsx",metaString:""}},'<ShadeDemo color="primary">Primary</ShadeDemo>\n<ShadeDemo color="primary.dark">Primary dark</ShadeDemo>\n<ShadeDemo color="orange">Legacy orange</ShadeDemo>\n<ShadeDemo color="#007aff">Hex color</ShadeDemo>\n')),o.a.createElement(r.MDXTag,{name:"p",components:a},"If you only pass a shade to the function it assumes that a palette color will be passed in through a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"color")," prop. This is useful for components who's color will be driven by a parent consumer. If the value of the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"color")," prop happens to be a legacy color (for example ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},'color="orange"'),"), the legacy color will be returned. If the value of the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"color")," prop is anything else it will also be returned."),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"palette-color-driven-from-other-prop"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h3",props:{href:"#palette-color-driven-from-other-prop","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Palette color driven from other prop"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx",metaString:""}},"const ShadeOtherDemo = styled.div`\n  background-color: ${props => getPaletteColor(props.bgColor, 'base')(props)};\n`\n")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-.jsx",metaString:""}},'<ShadeOtherDemo bgColor="primary">Primary</ShadeOtherDemo>\n<ShadeOtherDemo bgColor="primary.dark">Primary dark</ShadeOtherDemo>\n<ShadeOtherDemo bgColor="orange">Legacy orange</ShadeOtherDemo>\n<ShadeOtherDemo bgColor="#007aff">Hex color</ShadeOtherDemo>\n')),o.a.createElement(r.MDXTag,{name:"p",components:a},"You can also apply the utility to use a different prop to drive ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"color"),", or in the above example, ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"background-color"),"."))}}},[[892,1,0]]]);