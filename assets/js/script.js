(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

// import moduleName from './path/to/module'

$(document).ready(function () {
    $.ajax({
        url: "http://localhost:3000/json.json?name=kjhgkjdfhg&age=,ndbf,ns",
        method: "GET",
        dataType: 'json',
        crossDomain: true,
        complete: function complete(data) {
            console.log(data);
            $.each(data.responseJSON, function (k, v) {
                $(".content-json").append('-' + k + ' => ' + v.name + ': ' + v.age + '<br />');
            });
        }
    });

    $.ajax({
        url: "http://localhost:3000/json.json",
        method: "POST",
        data: { name: "John", location: "Boston" },
        dataType: 'json',
        crossDomain: true,
        complete: function complete(data) {
            console.log(data);
            $.each(data.responseJSON, function (k, v) {
                $(".content-json").append('-' + k + ' => ' + v.name + ': ' + v.age + '<br />');
            });
        }
    });
});

},{}]},{},[1])

//# sourceMappingURL=script.js.map
