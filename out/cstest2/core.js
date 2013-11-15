// Compiled by ClojureScript 0.0-2030
goog.provide('cstest2.core');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
cstest2.core.alert = (function() { 
var alert__delegate = function (args){return console.log((str.join.cljs$core$IFn$_invoke$arity$2 ? str.join.cljs$core$IFn$_invoke$arity$2(" ",args) : str.join.call(null," ",args)));
};
var alert = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return alert__delegate.call(this,args);};
alert.cljs$lang$maxFixedArity = 0;
alert.cljs$lang$applyTo = (function (arglist__4854){
var args = cljs.core.seq(arglist__4854);
return alert__delegate(args);
});
alert.cljs$core$IFn$_invoke$arity$variadic = alert__delegate;
return alert;
})()
;
cstest2.core.init = (function init(){return cstest2.core.alert.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Hello World!"], 0));
});
goog.exportSymbol('cstest2.core.init', cstest2.core.init);
