<template>
  <div id="app">
<!--     <img src="./assets/logo.png"> -->
<keep-alive include='routerPage'>
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  margin:0;
  padding:0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
 /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
div,
dl,
dt,
dd,
ul,
ol,
li,
p,
blockquote,
pre,
hr,
figure,
table,
caption,
th,
td,
form,
fieldset,
legend,
input,
textarea,
menu {
  margin: 0;
  padding: 0;
}
header,
footer,
section,
article,
aside,
nav,
hgroup,
address,
figure,
figcaption,
menu,
details {
  display: block;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
caption,
th {
  text-align: left;
  font-weight: normal;
}
html,
body,
fieldset,
img,
iframe,
abbr {
  border: 0;
}
i,
cite,
em,
var,
address,
dfn {
  font-style: normal;
}
[hidefocus],
summary {
  outline: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
small {

}
sup,
sub {
  font-size: 83%;
}
pre,
code,
kbd,
samp {
  font-family: inherit;
}
q:before,
q:after {
  content: none;
}
textarea {
  overflow: auto;
  resize: none;
}
label,
summary {
  cursor: default;
}
a,
button {
  cursor: pointer;
}
h1,
h2,
h3,
h4,
h5,
h6,
em,
strong,
b {
  font-weight: bold;
}
del,
ins,
u,
s,
a,
a:hover {
  text-decoration: none;
}
ul,
li {
  list-style: none;
}
.clearfix:after {
  content: '\20';
  display: block;
  height: 0;
  clear: both
}
.clearfix {
  zoom: 1
}
</style>
