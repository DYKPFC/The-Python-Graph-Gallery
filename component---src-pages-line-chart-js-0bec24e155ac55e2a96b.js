"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[5508],{9935:function(e,t,a){a.d(t,{Z:function(){return r}});var l=a(7294),n=a(5444),i=a(1496),o=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function r(e){var t=e.imgName,a=e.caption;if(o.includes(t))return l.createElement("p",null,"TODO");var r=(0,n.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(t)}));return r?l.createElement(l.Fragment,null,l.createElement("div",{className:"chartImageContainer"},l.createElement(i.Z,{alt:a,fluid:r.node.childImageSharp.fluid,className:"chartImageImg"}),l.createElement("div",{className:"chartImageOverlay"},l.createElement("div",{className:"chartImageOverlayText"},l.createElement("p",null,a))))):null}},7834:function(e,t,a){a.d(t,{Z:function(){return r}});var l=a(7294),n=a(9935),i=a(7408),o=a(5444);function r(e){var t=e.imgName,a=e.caption,r=e.linkTo;return l.createElement(i.Z,{xs:12,md:4},l.createElement(o.Link,{to:r},l.createElement(n.Z,{imgName:t,caption:a})))}},7444:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var l=a(7294),n=a(1006),i=a(3203),o=a(6187),r=a(7567),c=a(994),m=a(7834),s=a(9869),h=a(5444),p=a(3727),u=a(7408),d=a(3026),w=a(9935),g=a(458);function E(){return l.createElement(i.Z,{title:"Line chart",isTocEnabled:!0,seoDescription:"A collection of line chart examples made with Python, coming with explanation and reproducible code"},l.createElement(n.Z,{title:"Line Chart",description:"<p>A <a href='https://www.data-to-viz.com/graph/line.html'>line chart</a> displays the evolution of one or several numeric variables. It is one of the most common chart type, so it can be build using any python viz library, like <code>matplotlib</code>, <code>seaborn</code> or <code>plotly</code>. This kind of basic chart type can also be learned in this <a target='_blank' href='https://datacamp.pxf.io/YgNDbR'>online course</a>.</p>"}),l.createElement(o.Z,null,l.createElement("h2",{id:"Quick"},"⏱ Quick start"),l.createElement(c.Z,{className:"align-items-center"},l.createElement(u.Z,{md:6},l.createElement("p",null,"Making a simple line chart with ",l.createElement("code",null,"matplotlib")," is pretty straightforward thanks to the ",l.createElement("code",null,"plot()")," function."),l.createElement("p",null,"If you provide only a series of values, it will consider that these values are ordered and will use values from 1 to n to create the X axis.🔥"),l.createElement("p",null,"For more control on the chart, see the dedicated section below.")),l.createElement(u.Z,{md:6},l.createElement(h.Link,{to:"/120-line-chart-with-matplotlib"},l.createElement(w.Z,{imgName:"120_Basic_lineplot2",caption:"A basic line chart made with python and seaborn"})))),l.createElement(d.Z,null,"# libraries\nimport matplotlib.pyplot as plt\nimport numpy as np\n\n# create data\nvalues=np.cumsum(np.random.randn(1000,1))\n\n# use the plot function\nplt.plot(values)\n")),l.createElement(g.Z,null),l.createElement(o.Z,null,l.createElement("h2",{id:"Matplotlib"},l.createElement(p.rS,null),"Line chart with ",l.createElement("code",null,"Matplotlib")),l.createElement("p",null,l.createElement("code",null,"Matplotlib")," is a great fit to build line charts thanks to its ",l.createElement("code",null,"plot()")," function. The ",l.createElement(h.Link,{to:"/120-line-chart-with-matplotlib"},"first chart")," of this section explains how to use ",l.createElement("code",null,"plot()")," from any kind of data input format. The ",l.createElement(h.Link,{to:"/121-line-chart-customization"},"next one")," goes deep into chart customization (line width, color aspect and more). A common need is to build a ",l.createElement(h.Link,{to:"/line-chart-dual-y-axis-with-matplotlib"},"dual Y axis line chart"),", but be mindful of the ",l.createElement("a",{href:"https://www.data-to-viz.com/caveat/dual_axis.html"},"caveats")," that go with it."),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"120_Basic_lineplot1",caption:"How to build a basic line chart with python from any kind of input format",linkTo:"/120-line-chart-with-matplotlib"}),l.createElement(m.Z,{imgName:"121_Custom_line_plot3",caption:"How to customize the matplotlib line plot appearance: width, stroke, color, style..",linkTo:"/121-line-chart-customization"}),l.createElement(m.Z,{imgName:"basic-time-series-with-matplotlib",caption:"How to deal with the date format. How to represent those dates properly on the X axis.",linkTo:"/basic-time-series-with-matplotlib"}),l.createElement(m.Z,{imgName:"line-chart-dual-y-axis-with-matplotlib1",caption:"How to build a dual Y axis line chart to display 2 series with different units.",linkTo:"/line-chart-dual-y-axis-with-matplotlib"}),l.createElement(m.Z,{imgName:"area-fill-between-two-lines-in-matplotlib",caption:"Fill the gap between 2 line charts",linkTo:"/area-fill-between-two-lines-in-matplotlib"}))),l.createElement(g.Z,null),l.createElement(o.Z,null,l.createElement("h2",{id:"Multiple groups"},l.createElement(p.rS,null),"Line chart with several groups (",l.createElement("code",null,"Matplotlib"),")"),l.createElement("p",null,"A line chart with multiple groups allows to show the evolution of several items on the same figure. It is powerful but can quickly turn into a ",l.createElement("a",{href:"https://www.data-to-viz.com/caveat/spaghetti.html"},"spaghetti chart"),": when too many lines are displayed they get hard to read. The examples below explain how to build one, and what are the alternative to show your data a better way."),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"122_Multiple_line_plot",caption:"Line chart with multiple groups",linkTo:"/122-multiple-lines-chart"}),l.createElement(m.Z,{imgName:"123_Highlight_a_line",caption:"How to customize the matplotlib line plot appearance: width, stroke, color, style..",linkTo:"/123-highlight-a-line-in-line-plot"}),l.createElement(m.Z,{imgName:"124_Spaghetti_plot",caption:"Line chart with multiple groups",linkTo:"/124-spaghetti-plot"}),l.createElement(m.Z,{imgName:"125_Lineplot_small_multiple_v2",caption:"Line chart and small multiple",linkTo:"/125-small-multiples-for-line-chart"}),l.createElement(m.Z,{imgName:"125_Lineplot_small_multiple",caption:"Line chart and small multiple (variation)",linkTo:"/125-small-multiples-for-line-chart"}))),l.createElement(g.Z,null),l.createElement(o.Z,null,l.createElement("h2",{id:"From the web"},l.createElement(p.rS,null),"From the web"),l.createElement("p",null,"The web is full of astonishing charts made by awesome bloggers, (often using ",l.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),"). The ",l.createElement("a",{href:"https://www.python-graph-gallery.com"},"Python graph gallery")," tries to display (or translate from R) some of the best creations and explain how their source code works. If you want to display your work here, please drop me a word or even better, submit a ",l.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"Pull Request"),"!"),l.createElement(c.Z,null,l.createElement(u.Z,{xs:12,md:4},l.createElement(h.Link,{to:"/web-line-chart-with-labels-at-line-end"},l.createElement(w.Z,{imgName:"web-line-chart-with-labels-at-line-end",caption:"How to add labels at the end of each line with matplotlib. Definitely better than using a legend!"}))),l.createElement(u.Z,{xs:12,md:4},l.createElement(h.Link,{to:"/web-time-series-and-facetting-with-matplotlib"},l.createElement(w.Z,{imgName:"web-time-series-and-facetting-with-matplotlib-square",caption:"Display 2 line charts and fill the area between both. Also uses faceting to split by groups."}))),l.createElement(u.Z,{xs:12,md:4},l.createElement(h.Link,{to:"/web-highlighted-lineplot-with-faceting"},l.createElement(w.Z,{imgName:"web-highlighted-lineplot-with-faceting",caption:"A multipanel connected scatterplot, with several groups displayed and one highlighted per panel."}))),l.createElement(u.Z,{xs:12,md:4},l.createElement(h.Link,{to:"/web-lineplots-and-area-chart-the-economist"},l.createElement(w.Z,{imgName:"web-lineplots-and-area-chart-the-economist-square1",caption:"Learn how to mimick The Economist's style with a figure combining both a line and an area chart."}))),l.createElement(u.Z,{xs:12,md:4},l.createElement(h.Link,{to:"/web-multiple-lines-and-panels"},l.createElement(w.Z,{imgName:"web-multiple-lines-and-panels",caption:"Multiple grouped line charts with a beautiful color palette and customized title and annotation."}))))),l.createElement(g.Z,null),l.createElement("div",{className:"greySection",id:"related"},l.createElement(o.Z,null,l.createElement(s.Z,{chartFamily:"evolution"}))),l.createElement(g.Z,null),l.createElement(o.Z,null,l.createElement(r.Z,null)),l.createElement(g.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-line-chart-js-0bec24e155ac55e2a96b.js.map