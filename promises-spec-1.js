// See https://github.com/promises-aplus/promises-spec/issues/179

'use strict'

var Promise = require('all-promises').default


function log(a, b) {
	return function () {
		console.log(a, b)
	}
}

var r1, r2
var p1 = new Promise(function (resolve) { r1 = resolve })
var p2 = new Promise(function (resolve) { r2 = resolve })

var f0, r0
var p0 = new Promise(function (onFulfilled, onRejected) {
	f0 = onFulfilled
	r0 = onRejected
})
var t0 = p0.then
p0.then = function () {
	console.log('then')
	t0.apply(this, arguments)
}

p1.then(log('p1', 1))
p2.then(log('p2', 1))
p2.then(log('p2', 2))
p1.then(log('p1', 2))

r1(p0)
r2(p0)

p1.then(log('p1', 3))
p2.then(log('p2', 3))
p2.then(log('p2', 4))
p1.then(log('p1', 4))

f0()

p1.then(log('p1', 5))
p2.then(log('p2', 5))
p2.then(log('p2', 6))
p1.then(log('p1', 6))

setTimeout(function () {
	console.log('timeout')
	p1.then(log('p1', 7))
	p2.then(log('p2', 7))
	p2.then(log('p2', 8))
	p1.then(log('p1', 8))
})

console.log('async')
