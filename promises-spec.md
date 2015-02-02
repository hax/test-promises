
Implementation | Promise/Thenable
-------------- | ----------------
Firefox 35.0.1 |
Chrome 42.0.2292.0 canary |
nodejs v0.11.14 (v8: 3.26.33) | async then then then then then then then then then then then then a1 a2 b1 b2 a3 b3 b4 a4 a5 b5 b6 a6 timeout then then then then a7 b7 b8 a8
Thenable | async then a1 a2 b1 b2 a3 b3 b4 a4 a5 b5 b6 a6 timeout a7 b7 b8 a8
bluebird 2.9.5 | async a1 a2 b1 b2 a3 b3 b4 a4 a5 b5 b6 a6 timeout a7 b7 b8 a8
Thenable | then then async a1 a2 a3 a4 a5 a6 b1 b2 b3 b4 b5 b6 timeout a7 b7 b8 a8
es6-promise 2.0.1 | async a1 a2 a3 a4 a5 a6 b1 b2 b3 b4 b5 b6 timeout a7 b7 b8 a8
Thenable | async then then a1 a2 a3 a4 a5 a6 b1 b2 b3 b4 b5 b6 timeout a7 b7 b8 a8
es6-promises 1.0.10 | then then async timeout a1 a2 a3 a4 a5 a6 b1 b2 b3 b4 b5 b6 a7 b7 b8 a8 |
Thenable | async timeout then then a1 a2 a3 a4 a5 a6 a7 a8 b1 b2 b3 b4 b5 b6 b7 b8
lie 2.8.1 | then then async a1 a2 a3 a4 a5 a6 b1 b2 b3 b4 b5 b6 timeout a7 b7 b8 a8 |
Thenable | then then async a1 a2 a3 a4 b1 b2 b3 b4 a5 b5 b6 a6 timeout a7 b7 b8 a8
my-promise 1.0.1 | async then then a1 a2 a3 a4 a5 a6 b1 b2 b3 b4 b5 b6 timeout a7 b7 b8 a8 |
Thenable | async then then a1 a2 a3 a4 a5 a6 b1 b2 b3 b4 b5 b6 timeout a7 b7 b8 a8
native-promise-only 0.7.6-a | then then async timeout a1 a2 a3 a4 a5 a6 a7 a8 b1 b2 b3 b4 b5 b6 b7 b8
Thenable | then then async timeout a1 a2 a3 a4 a5 a6 a7 a8 b1 b2 b3 b4 b5 b6 b7 b8
promiscuous 0.6.0 | then then async a1 a2 a3 a4 a5 a6 b1 b2 b3 b4 b5 b6 timeout a7 b7 b8 a8 |
Thenable | then then async a1 a2 a3 a4 b1 b2 b3 b4 a5 b5 b6 a6 timeout a7 b7 b8 a8
promise 6.1.0 | then then async a1 a2 a3 a4 a5 a6 b1 b2 b3 b4 b5 b6 timeout a7 b7 b8 a8
Thenable | then then async a1 a2 a3 a4 b1 b2 b3 b4 a5 b5 b6 a6 timeout a7 b7 b8 a8
promiz 1.0.3 | async then then timeout a1 a2 a3 a4 a5 a6 a7 a8 b1 b2 b3 b4 b5 b6 b7 b8
Thenable | async then then timeout a1 a2 a3 a4 a5 a6 b1 b2 b3 b4 b5 b6 a7 b7 b8 a8
q 1.1.2 | async a1 b1 b2 a2 a3 b3 b4 a4 a5 b5 b6 a6 timeout a7 b7 b8 a8
Thenable | async then then a1 b1 b2 a2 a3 b3 b4 a4 a5 b5 b6 a6 timeout a7 b7 b8 a8
rsvp 3.0.16 | async a1 a2 a3 a4 a5 a6 b1 b2 b3 b4 b5 b6 timeout a7 b7 b8 a8
Thenable | async then then a1 a2 a3 a4 a5 a6 b1 b2 b3 b4 b5 b6 timeout a7 b7 b8 a8
vow 0.4.8 | then then async timeout a1 a2 a3 a4 a5 a6 a7 a8 b1 b2 b3 b4 b5 b6 b7 b8
Thenable | then then async timeout a1 a2 a3 a4 b1 b2 b3 b4 a5 b5 b6 a6 a7 b7 b8 a8
when 3.7.2 | async a3 b3 b4 a4 a5 b5 b6 a6 a1 a2 b1 b2 timeout a7 b7 b8 a8
Thenable | async then then a3 b3 b4 a4 a5 b5 b6 a6 a1 a2 b1 b2 timeout a7 b7 b8 a8
