goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__21569__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__21569 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21571__i = 0, G__21571__a = new Array(arguments.length -  0);
while (G__21571__i < G__21571__a.length) {G__21571__a[G__21571__i] = arguments[G__21571__i + 0]; ++G__21571__i;}
  args = new cljs.core.IndexedSeq(G__21571__a,0,null);
} 
return G__21569__delegate.call(this,args);};
G__21569.cljs$lang$maxFixedArity = 0;
G__21569.cljs$lang$applyTo = (function (arglist__21572){
var args = cljs.core.seq(arglist__21572);
return G__21569__delegate(args);
});
G__21569.cljs$core$IFn$_invoke$arity$variadic = G__21569__delegate;
return G__21569;
})()
);

(o.error = (function() { 
var G__21573__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__21573 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21575__i = 0, G__21575__a = new Array(arguments.length -  0);
while (G__21575__i < G__21575__a.length) {G__21575__a[G__21575__i] = arguments[G__21575__i + 0]; ++G__21575__i;}
  args = new cljs.core.IndexedSeq(G__21575__a,0,null);
} 
return G__21573__delegate.call(this,args);};
G__21573.cljs$lang$maxFixedArity = 0;
G__21573.cljs$lang$applyTo = (function (arglist__21579){
var args = cljs.core.seq(arglist__21579);
return G__21573__delegate(args);
});
G__21573.cljs$core$IFn$_invoke$arity$variadic = G__21573__delegate;
return G__21573;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
