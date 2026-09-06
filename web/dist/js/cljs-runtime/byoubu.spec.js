goog.provide('byoubu.spec');
/**
 * Every backdrop names the same nine roles. A fixed vocabulary is what lets
 *   `byoubu.plate` build a plate for any entry without special-casing, and
 *   what lets two backdrops be compared.
 */
byoubu.spec.required_palette_keys = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sky-zenith","sky-zenith",-20065151),new cljs.core.Keyword(null,"sky-mid","sky-mid",106630624),new cljs.core.Keyword(null,"sky-horizon","sky-horizon",-157541617),new cljs.core.Keyword(null,"haze","haze",-1024870708),new cljs.core.Keyword(null,"ridge-far","ridge-far",762525090),new cljs.core.Keyword(null,"ridge-near","ridge-near",1102584738),new cljs.core.Keyword(null,"dune-lit","dune-lit",790638115),new cljs.core.Keyword(null,"dune-shadow","dune-shadow",423450330),new cljs.core.Keyword(null,"star","star",279424429)], null);
byoubu.spec.required_scene_keys = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sky","sky",1271496862),new cljs.core.Keyword(null,"atmosphere","atmosphere",523254734),new cljs.core.Keyword(null,"terrain","terrain",704966005),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"grade","grade",2117054771)], null);
byoubu.spec.textures = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"moderate","moderate",-1039163165),null,new cljs.core.Keyword(null,"calm","calm",-533989756),null,new cljs.core.Keyword(null,"busy","busy",-328286801),null], null), null);
byoubu.spec.missing = (function byoubu$spec$missing(m,ks){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__22696_SHARP_){
return cljs.core.contains_QMARK_(m,p1__22696_SHARP_);
}),ks);
});
/**
 * Vector of problem descriptions for one backdrop; empty means valid.
 */
byoubu.spec.problems = (function byoubu$spec$problems(backdrop){
var id = new cljs.core.Keyword("byoubu","id","byoubu/id",459733156).cljs$core$IFn$_invoke$arity$1(backdrop);
var palette = new cljs.core.Keyword("byoubu","palette","byoubu/palette",851879321).cljs$core$IFn$_invoke$arity$1(backdrop);
var band = new cljs.core.Keyword("byoubu","content-band","byoubu/content-band",-1665630238).cljs$core$IFn$_invoke$arity$1(backdrop);
var scene = new cljs.core.Keyword("byoubu","scene","byoubu/scene",1831525071).cljs$core$IFn$_invoke$arity$1(backdrop);
var pfx = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)),": "].join('');
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22698(s__22699){
return (new cljs.core.LazySeq(null,(function (){
var s__22699__$1 = s__22699;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22699__$1);
if(temp__5825__auto__){
var s__22699__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22699__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22699__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22701 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22700 = (0);
while(true){
if((i__22700 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__22700);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(backdrop,k) == null)){
cljs.core.chunk_append(b__22701,[pfx,"missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__22762 = (i__22700 + (1));
i__22700 = G__22762;
continue;
} else {
var G__22763 = (i__22700 + (1));
i__22700 = G__22763;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22701),byoubu$spec$problems_$_iter__22698(cljs.core.chunk_rest(s__22699__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22701),null);
}
} else {
var k = cljs.core.first(s__22699__$2);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(backdrop,k) == null)){
return cljs.core.cons([pfx,"missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22698(cljs.core.rest(s__22699__$2)));
} else {
var G__22764 = cljs.core.rest(s__22699__$2);
s__22699__$1 = G__22764;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("byoubu","id","byoubu/id",459733156),new cljs.core.Keyword("byoubu","title","byoubu/title",1943539519),new cljs.core.Keyword("byoubu","summary","byoubu/summary",1753941440),new cljs.core.Keyword("byoubu","tags","byoubu/tags",-743870735),new cljs.core.Keyword("byoubu","seed","byoubu/seed",841916191),new cljs.core.Keyword("byoubu","texture","byoubu/texture",1576630445),new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268),new cljs.core.Keyword("byoubu","palette","byoubu/palette",851879321),new cljs.core.Keyword("byoubu","content-band","byoubu/content-band",-1665630238),new cljs.core.Keyword("byoubu","scene","byoubu/scene",1831525071)], null));
})(),(((id instanceof cljs.core.Keyword))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"id must be a keyword"].join('')], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.int_QMARK_(new cljs.core.Keyword("byoubu","seed","byoubu/seed",841916191).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"seed must be an integer \u2014 a backdrop nobody can re-render ","is an asset, not a spec"].join('')], null)),((cljs.core.contains_QMARK_(byoubu.spec.textures,new cljs.core.Keyword("byoubu","texture","byoubu/texture",1576630445).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"texture must be one of ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(byoubu.spec.textures))].join('')], null)),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22705(s__22706){
return (new cljs.core.LazySeq(null,(function (){
var s__22706__$1 = s__22706;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22706__$1);
if(temp__5825__auto__){
var s__22706__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22706__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22706__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22708 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22707 = (0);
while(true){
if((i__22707 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__22707);
cljs.core.chunk_append(b__22708,[pfx,"palette missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__22765 = (i__22707 + (1));
i__22707 = G__22765;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22708),byoubu$spec$problems_$_iter__22705(cljs.core.chunk_rest(s__22706__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22708),null);
}
} else {
var k = cljs.core.first(s__22706__$2);
return cljs.core.cons([pfx,"palette missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22705(cljs.core.rest(s__22706__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.spec.missing(palette,byoubu.spec.required_palette_keys));
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22711(s__22712){
return (new cljs.core.LazySeq(null,(function (){
var s__22712__$1 = s__22712;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22712__$1);
if(temp__5825__auto__){
var s__22712__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22712__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22712__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22714 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22713 = (0);
while(true){
if((i__22713 < size__5479__auto__)){
var vec__22715 = cljs.core._nth(c__5478__auto__,i__22713);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22715,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22715,(1),null);
if((byoubu.color.hex__GT_rgb(v) == null)){
cljs.core.chunk_append(b__22714,[pfx,"palette ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))].join(''));

var G__22766 = (i__22713 + (1));
i__22713 = G__22766;
continue;
} else {
var G__22767 = (i__22713 + (1));
i__22713 = G__22767;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22714),byoubu$spec$problems_$_iter__22711(cljs.core.chunk_rest(s__22712__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22714),null);
}
} else {
var vec__22720 = cljs.core.first(s__22712__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22720,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22720,(1),null);
if((byoubu.color.hex__GT_rgb(v) == null)){
return cljs.core.cons([pfx,"palette ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))].join(''),byoubu$spec$problems_$_iter__22711(cljs.core.rest(s__22712__$2)));
} else {
var G__22768 = cljs.core.rest(s__22712__$2);
s__22712__$1 = G__22768;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(palette);
})(),((cljs.core.contains_QMARK_(palette,new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"accent ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268).cljs$core$IFn$_invoke$arity$1(backdrop)], 0))," is not a palette key"].join('')], null)),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22723(s__22724){
return (new cljs.core.LazySeq(null,(function (){
var s__22724__$1 = s__22724;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22724__$1);
if(temp__5825__auto__){
var s__22724__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22724__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22724__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22726 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22725 = (0);
while(true){
if((i__22725 < size__5479__auto__)){
var vec__22728 = cljs.core._nth(c__5478__auto__,i__22725);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22728,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22728,(1),null);
if((!(cljs.core.contains_QMARK_(palette,k)))){
cljs.core.chunk_append(b__22726,[pfx,"content-band references unknown palette key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__22769 = (i__22725 + (1));
i__22725 = G__22769;
continue;
} else {
var G__22770 = (i__22725 + (1));
i__22725 = G__22770;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22726),byoubu$spec$problems_$_iter__22723(cljs.core.chunk_rest(s__22724__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22726),null);
}
} else {
var vec__22732 = cljs.core.first(s__22724__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22732,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22732,(1),null);
if((!(cljs.core.contains_QMARK_(palette,k)))){
return cljs.core.cons([pfx,"content-band references unknown palette key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22723(cljs.core.rest(s__22724__$2)));
} else {
var G__22771 = cljs.core.rest(s__22724__$2);
s__22724__$1 = G__22771;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(band);
})(),(function (){var total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,0.0,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,band));
var drift = (total - 1.0);
var drift__$1 = (((drift < (0)))?(- drift):drift);
if((drift__$1 > 0.001)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"content-band weights sum to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total),", not 1.0"].join('')], null);
} else {
return null;
}
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22735(s__22736){
return (new cljs.core.LazySeq(null,(function (){
var s__22736__$1 = s__22736;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22736__$1);
if(temp__5825__auto__){
var s__22736__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22736__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22736__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22738 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22737 = (0);
while(true){
if((i__22737 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__22737);
cljs.core.chunk_append(b__22738,[pfx,"scene missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__22772 = (i__22737 + (1));
i__22737 = G__22772;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22738),byoubu$spec$problems_$_iter__22735(cljs.core.chunk_rest(s__22736__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22738),null);
}
} else {
var k = cljs.core.first(s__22736__$2);
return cljs.core.cons([pfx,"scene missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22735(cljs.core.rest(s__22736__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.spec.missing(scene,byoubu.spec.required_scene_keys));
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22739(s__22740){
return (new cljs.core.LazySeq(null,(function (){
var s__22740__$1 = s__22740;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22740__$1);
if(temp__5825__auto__){
var s__22740__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22740__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22740__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22742 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22741 = (0);
while(true){
if((i__22741 < size__5479__auto__)){
var vec__22743 = cljs.core._nth(c__5478__auto__,i__22741);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22743,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22743,(1),null);
if((byoubu.color.hex__GT_rgb(new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)) == null)){
cljs.core.chunk_append(b__22742,[pfx,"measured ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tier)," content-color is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)], 0))].join(''));

var G__22774 = (i__22741 + (1));
i__22741 = G__22774;
continue;
} else {
var G__22775 = (i__22741 + (1));
i__22741 = G__22775;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22742),byoubu$spec$problems_$_iter__22739(cljs.core.chunk_rest(s__22740__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22742),null);
}
} else {
var vec__22746 = cljs.core.first(s__22740__$2);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22746,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22746,(1),null);
if((byoubu.color.hex__GT_rgb(new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)) == null)){
return cljs.core.cons([pfx,"measured ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tier)," content-color is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)], 0))].join(''),byoubu$spec$problems_$_iter__22739(cljs.core.rest(s__22740__$2)));
} else {
var G__22776 = cljs.core.rest(s__22740__$2);
s__22740__$1 = G__22776;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.select_keys(new cljs.core.Keyword("byoubu","measured","byoubu/measured",-610808208).cljs$core$IFn$_invoke$arity$1(backdrop),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plate","plate",-1920178141),new cljs.core.Keyword(null,"poster","poster",-1616913550)], null)));
})(),(function (){var f = byoubu.facts.derive_facts(backdrop);
var ink = new cljs.core.Keyword("byoubu.facts","ink","byoubu.facts/ink",567836213).cljs$core$IFn$_invoke$arity$1(f);
var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22749(s__22750){
return (new cljs.core.LazySeq(null,(function (){
var s__22750__$1 = s__22750;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22750__$1);
if(temp__5825__auto__){
var s__22750__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22750__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22750__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22752 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22751 = (0);
while(true){
if((i__22751 < size__5479__auto__)){
var vec__22756 = cljs.core._nth(c__5478__auto__,i__22751);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22756,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22756,(1),null);
var r = byoubu.color.contrast_ratio(ink,c);
if(((function (){var or__5002__auto__ = r;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 0.0;
}
})() < byoubu.facts.wcag_aa_body)){
cljs.core.chunk_append(b__22752,[pfx,"recommended ink ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ink)," on the ",cljs.core.name(tier)," content band ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," has contrast ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),", below AA body ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(byoubu.facts.wcag_aa_body)].join(''));

var G__22777 = (i__22751 + (1));
i__22751 = G__22777;
continue;
} else {
var G__22778 = (i__22751 + (1));
i__22751 = G__22778;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22752),byoubu$spec$problems_$_iter__22749(cljs.core.chunk_rest(s__22750__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22752),null);
}
} else {
var vec__22759 = cljs.core.first(s__22750__$2);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22759,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22759,(1),null);
var r = byoubu.color.contrast_ratio(ink,c);
if(((function (){var or__5002__auto__ = r;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 0.0;
}
})() < byoubu.facts.wcag_aa_body)){
return cljs.core.cons([pfx,"recommended ink ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ink)," on the ",cljs.core.name(tier)," content band ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," has contrast ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),", below AA body ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(byoubu.facts.wcag_aa_body)].join(''),byoubu$spec$problems_$_iter__22749(cljs.core.rest(s__22750__$2)));
} else {
var G__22779 = cljs.core.rest(s__22750__$2);
s__22750__$1 = G__22779;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.facts.tier_colors(backdrop));
})()], 0)));
});
byoubu.spec.valid_QMARK_ = (function byoubu$spec$valid_QMARK_(backdrop){
return cljs.core.empty_QMARK_(byoubu.spec.problems(backdrop));
});

//# sourceMappingURL=byoubu.spec.js.map
