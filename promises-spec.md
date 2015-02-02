 0. [Promise test](https://github.com/hax/test-promises/blob/master/promises-spec-Promise.js)  / [jsbin](http://jsbin.com/raxeve/1/edit?js,output)
 0. [Thenable test](https://github.com/hax/test-promises/blob/master/promises-spec-Thenable.js)  / [jsbin](http://jsbin.com/safoxe/edit?js,console)

[All promise implementations](https://github.com/hax/all-promises) (except browsers) are tested on Node.js v0.11.14

Implementation | Result
-------------- | ------
Firefox 35.0.1 -- Promise | async then then timeout a1 a2 a3 a4 a5 a6 a7 a8 b1 b2 b3 b4 b5 b6 b7 b8
Firefox 35.0.1 -- Thenable | async then then timeout a1 a2 a3 a4 a5 a6 a7 a8 b1 b2 b3 b4 b5 b6 b7 b8
Internet Explorer 11.0.9879.0 -- Promise | async then then then then then then then then then then then then timeout a1 a2 b1 b2 a3 b3 b4 a4 a5 b5 b6 a6 a7 b7 b8 a8
Internet Explorer 11.0.9879.0 -- Thenable | async then then then then then then then then then then then then timeout a1 a2 b1 b2 a3 b3 b4 a4 a5 b5 b6 a6 then then then then a7 b7 b8 a8
Chrome 42.0.2292.0 canary -- Promise | async then then then then then then then then then then then then a1 a2 b1 b2 a3 b3 b4 a4 a5 b5 b6 a6 timeout then then then then a7 b7 b8 a8
Chrome 42.0.2292.0 canary -- Thenable | async then then then then then then then then then then then then a1 a2 b1 b2 a3 b3 b4 a4 a5 b5 b6 a6 timeout then then then then a7 b7 b8 a8
nodejs v0.11.14 (v8: 3.26.33) native -- Promise | async then then then then then then then then then then then then a1 a2 b1 b2 a3 b3 b4 a4 a5 b5 b6 a6 timeout then then then then a7 b7 b8 a8
nodejs v0.11.14 (v8: 3.26.33) native -- Thenable | async then a1 a2 b1 b2 a3 b3 b4 a4 a5 b5 b6 a6 timeout a7 b7 b8 a8
bluebird 2.9.5 -- Promise | async a1 a2 b1 b2 a3 b3 b4 a4 a5 b5 b6 a6 timeout a7 b7 b8 a8
bluebird 2.9.5 -- Thenable | then then async a1 a2 a3 a4 a5 a6 b1 b2 b3 b4 b5 b6 timeout a7 b7 b8 a8
es6-promise 2.0.1 -- Promise | async a1 a2 a3 a4 a5 a6 b1 b2 b3 b4 b5 b6 timeout a7 b7 b8 a8
es6-promise 2.0.1 -- Thenable | async then then a1 a2 a3 a4 a5 a6 b1 b2 b3 b4 b5 b6 timeout a7 b7 b8 a8
es6-promises 1.0.10 -- Promise | then then async timeout a1 a2 a3 a4 a5 a6 b1 b2 b3 b4 b5 b6 a7 b7 b8 a8 |
es6-promises 1.0.10 -- Thenable | async timeout then then a1 a2 a3 a4 a5 a6 a7 a8 b1 b2 b3 b4 b5 b6 b7 b8
lie 2.8.1 -- Promise | then then async a1 a2 a3 a4 a5 a6 b1 b2 b3 b4 b5 b6 timeout a7 b7 b8 a8 |
lie 2.8.1 -- Thenable | then then async a1 a2 a3 a4 b1 b2 b3 b4 a5 b5 b6 a6 timeout a7 b7 b8 a8
my-promise 1.0.1 -- Promise | async then then a1 a2 a3 a4 a5 a6 b1 b2 b3 b4 b5 b6 timeout a7 b7 b8 a8 |
my-promise 1.0.1 -- Thenable | async then then a1 a2 a3 a4 a5 a6 b1 b2 b3 b4 b5 b6 timeout a7 b7 b8 a8
native-promise-only 0.7.6-a -- Promise | then then async timeout a1 a2 a3 a4 a5 a6 a7 a8 b1 b2 b3 b4 b5 b6 b7 b8
native-promise-only 0.7.6-a -- Thenable | then then async timeout a1 a2 a3 a4 a5 a6 a7 a8 b1 b2 b3 b4 b5 b6 b7 b8
promiscuous 0.6.0 -- Promise | then then async a1 a2 a3 a4 a5 a6 b1 b2 b3 b4 b5 b6 timeout a7 b7 b8 a8 |
promiscuous 0.6.0 -- Thenable | then then async a1 a2 a3 a4 b1 b2 b3 b4 a5 b5 b6 a6 timeout a7 b7 b8 a8
promise 6.1.0 -- Promise | then then async a1 a2 a3 a4 a5 a6 b1 b2 b3 b4 b5 b6 timeout a7 b7 b8 a8
promise 6.1.0 -- Thenable | then then async a1 a2 a3 a4 b1 b2 b3 b4 a5 b5 b6 a6 timeout a7 b7 b8 a8
promiz 1.0.3 -- Promise | async then then timeout a1 a2 a3 a4 a5 a6 a7 a8 b1 b2 b3 b4 b5 b6 b7 b8
promiz 1.0.3 -- Thenable | async then then timeout a1 a2 a3 a4 a5 a6 b1 b2 b3 b4 b5 b6 a7 b7 b8 a8
q 1.1.2 -- Promise | async a1 b1 b2 a2 a3 b3 b4 a4 a5 b5 b6 a6 timeout a7 b7 b8 a8
q 1.1.2 -- Thenable | async then then a1 b1 b2 a2 a3 b3 b4 a4 a5 b5 b6 a6 timeout a7 b7 b8 a8
rsvp 3.0.16 -- Promise | async a1 a2 a3 a4 a5 a6 b1 b2 b3 b4 b5 b6 timeout a7 b7 b8 a8
rsvp 3.0.16 -- Thenable | async then then a1 a2 a3 a4 a5 a6 b1 b2 b3 b4 b5 b6 timeout a7 b7 b8 a8
vow 0.4.8 -- Promise | then then async timeout a1 a2 a3 a4 a5 a6 a7 a8 b1 b2 b3 b4 b5 b6 b7 b8
vow 0.4.8 -- Thenable | then then async timeout a1 a2 a3 a4 b1 b2 b3 b4 a5 b5 b6 a6 a7 b7 b8 a8
when 3.7.2 -- Promise | async a3 b3 b4 a4 a5 b5 b6 a6 a1 a2 b1 b2 timeout a7 b7 b8 a8
when 3.7.2 -- Thenable | async then then a3 b3 b4 a4 a5 b5 b6 a6 a1 a2 b1 b2 timeout a7 b7 b8 a8
