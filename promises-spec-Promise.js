// See https://github.com/promises-aplus/promises-spec/issues/179

'use strict'

var Promise = require('all-promises').default


var logs = []
function log(s) {
	return function () {
		logs.push(s)
	}
}
setTimeout(function () { console.log(logs.join(' ')) }, 100)

var r1, r2
var a = new Promise(function (resolve) { r1 = resolve })
var b = new Promise(function (resolve) { r2 = resolve })

var f0, r0
var p0 = new Promise(function (onFulfilled, onRejected) {
	f0 = onFulfilled
	r0 = onRejected
})
var t0 = p0.then
p0.then = function () {
	log('then')()
	t0.apply(this, arguments)
}

a.then(log('a1'))
b.then(log('b1'))
b.then(log('b2'))
a.then(log('a2'))

r1(p0)
r2(p0)

a.then(log('a3'))
b.then(log('b3'))
b.then(log('b4'))
a.then(log('a4'))

f0()

a.then(log('a5'))
b.then(log('b5'))
b.then(log('b6'))
a.then(log('a6'))

setTimeout(function () {
	log('timeout')()
	a.then(log('a7'))
	b.then(log('b7'))
	b.then(log('b8'))
	a.then(log('a8'))
})

log('async')()
