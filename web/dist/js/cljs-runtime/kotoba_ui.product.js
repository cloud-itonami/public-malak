goog.provide('kotoba_ui.product');
kotoba_ui.product.classes = (function kotoba_ui$product$classes(base,extra){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),((cljs.core.seq(extra))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra)].join(''):null)].join('');
});
/**
 * Compact labelled value. opts: :label, :value, :detail, :status, :id, :class.
 */
kotoba_ui.product.metric = (function kotoba_ui$product$metric(p__22944){
var map__22945 = p__22944;
var map__22945__$1 = cljs.core.__destructure_map(map__22945);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22945__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22945__$1,new cljs.core.Keyword(null,"value","value",305978217));
var detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22945__$1,new cljs.core.Keyword(null,"detail","detail",-1545345025));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22945__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22945__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22945__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__22946 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),kotoba_ui.product.classes("kotoba-product__metric",class$)], null);
if(cljs.core.truth_(id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22946,new cljs.core.Keyword(null,"id","id",-1388402092),id);
} else {
return G__22946;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"kotoba-product__metric-label hig-footnote"], null),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"kotoba-product__metric-value hig-title2"], null),value], null),(cljs.core.truth_((function (){var or__5002__auto__ = detail;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return status;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"kotoba-product__metric-detail hig-footnote"], null),(cljs.core.truth_(status)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"kotoba-product__status"], null),status], null):null),detail], null):null)], null);
});
/**
 * Purposeful empty state. opts: :title, :body, :actions, :id, :class.
 */
kotoba_ui.product.empty_state = (function kotoba_ui$product$empty_state(p__22947){
var map__22948 = p__22947;
var map__22948__$1 = cljs.core.__destructure_map(map__22948);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22948__$1,new cljs.core.Keyword(null,"title","title",636505583));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22948__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22948__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22948__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22948__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__22949 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),kotoba_ui.product.classes("kotoba-product__empty",class$)], null);
if(cljs.core.truth_(id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22949,new cljs.core.Keyword(null,"id","id",-1388402092),id);
} else {
return G__22949;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hig-headline"], null),title], null),(cljs.core.truth_(body)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hig-footnote kotoba-product__muted"], null),body], null):null),((cljs.core.seq(actions))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"kotoba-product__empty-actions"], null)], null),actions):null)], null);
});
/**
 * Accessible responsive table. Columns are {:key k :label s}; rows are maps.
 *   Cell values may be hiccup. opts: :caption, :columns, :rows, :empty, :id, :class.
 */
kotoba_ui.product.data_table = (function kotoba_ui$product$data_table(p__22950){
var map__22951 = p__22950;
var map__22951__$1 = cljs.core.__destructure_map(map__22951);
var caption = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22951__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22951__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22951__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var empty = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22951__$1,new cljs.core.Keyword(null,"empty","empty",767870958));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22951__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22951__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(cljs.core.seq(rows)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"kotoba-product__table-scroll"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),(function (){var G__22952 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),kotoba_ui.product.classes("kotoba-product__table",class$)], null);
if(cljs.core.truth_(id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22952,new cljs.core.Keyword(null,"id","id",-1388402092),id);
} else {
return G__22952;
}
})(),(cljs.core.truth_(caption)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"caption","caption",-855383902),caption], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5480__auto__ = (function kotoba_ui$product$data_table_$_iter__22953(s__22954){
return (new cljs.core.LazySeq(null,(function (){
var s__22954__$1 = s__22954;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22954__$1);
if(temp__5825__auto__){
var s__22954__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22954__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22954__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22956 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22955 = (0);
while(true){
if((i__22955 < size__5479__auto__)){
var map__22957 = cljs.core._nth(c__5478__auto__,i__22955);
var map__22957__$1 = cljs.core.__destructure_map(map__22957);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22957__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22957__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append(b__22956,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)], null),label], null));

var G__23032 = (i__22955 + (1));
i__22955 = G__23032;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22956),kotoba_ui$product$data_table_$_iter__22953(cljs.core.chunk_rest(s__22954__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22956),null);
}
} else {
var map__22958 = cljs.core.first(s__22954__$2);
var map__22958__$1 = cljs.core.__destructure_map(map__22958);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22958__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22958__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)], null),label], null),kotoba_ui$product$data_table_$_iter__22953(cljs.core.rest(s__22954__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(columns);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5480__auto__ = (function kotoba_ui$product$data_table_$_iter__22959(s__22960){
return (new cljs.core.LazySeq(null,(function (){
var s__22960__$1 = s__22960;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22960__$1);
if(temp__5825__auto__){
var s__22960__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22960__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22960__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22962 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22961 = (0);
while(true){
if((i__22961 < size__5479__auto__)){
var vec__22963 = cljs.core._nth(c__5478__auto__,i__22961);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22963,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22963,(1),null);
cljs.core.chunk_append(b__22962,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),(function (){var iter__5480__auto__ = ((function (i__22961,vec__22963,idx,row,c__5478__auto__,size__5479__auto__,b__22962,s__22960__$2,temp__5825__auto__,map__22951,map__22951__$1,caption,columns,rows,empty,id,class$){
return (function kotoba_ui$product$data_table_$_iter__22959_$_iter__22966(s__22967){
return (new cljs.core.LazySeq(null,((function (i__22961,vec__22963,idx,row,c__5478__auto__,size__5479__auto__,b__22962,s__22960__$2,temp__5825__auto__,map__22951,map__22951__$1,caption,columns,rows,empty,id,class$){
return (function (){
var s__22967__$1 = s__22967;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__22967__$1);
if(temp__5825__auto____$1){
var s__22967__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22967__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__22967__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__22969 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__22968 = (0);
while(true){
if((i__22968 < size__5479__auto____$1)){
var map__22970 = cljs.core._nth(c__5478__auto____$1,i__22968);
var map__22970__$1 = cljs.core.__destructure_map(map__22970);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22970__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
cljs.core.chunk_append(b__22969,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null));

var G__23048 = (i__22968 + (1));
i__22968 = G__23048;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22969),kotoba_ui$product$data_table_$_iter__22959_$_iter__22966(cljs.core.chunk_rest(s__22967__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22969),null);
}
} else {
var map__22971 = cljs.core.first(s__22967__$2);
var map__22971__$1 = cljs.core.__destructure_map(map__22971);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22971__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null),kotoba_ui$product$data_table_$_iter__22959_$_iter__22966(cljs.core.rest(s__22967__$2)));
}
} else {
return null;
}
break;
}
});})(i__22961,vec__22963,idx,row,c__5478__auto__,size__5479__auto__,b__22962,s__22960__$2,temp__5825__auto__,map__22951,map__22951__$1,caption,columns,rows,empty,id,class$))
,null,null));
});})(i__22961,vec__22963,idx,row,c__5478__auto__,size__5479__auto__,b__22962,s__22960__$2,temp__5825__auto__,map__22951,map__22951__$1,caption,columns,rows,empty,id,class$))
;
return iter__5480__auto__(columns);
})()], null));

var G__23053 = (i__22961 + (1));
i__22961 = G__23053;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22962),kotoba_ui$product$data_table_$_iter__22959(cljs.core.chunk_rest(s__22960__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22962),null);
}
} else {
var vec__22972 = cljs.core.first(s__22960__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22972,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22972,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),(function (){var iter__5480__auto__ = ((function (vec__22972,idx,row,s__22960__$2,temp__5825__auto__,map__22951,map__22951__$1,caption,columns,rows,empty,id,class$){
return (function kotoba_ui$product$data_table_$_iter__22959_$_iter__22975(s__22976){
return (new cljs.core.LazySeq(null,(function (){
var s__22976__$1 = s__22976;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__22976__$1);
if(temp__5825__auto____$1){
var s__22976__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22976__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22976__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22978 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22977 = (0);
while(true){
if((i__22977 < size__5479__auto__)){
var map__22981 = cljs.core._nth(c__5478__auto__,i__22977);
var map__22981__$1 = cljs.core.__destructure_map(map__22981);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22981__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
cljs.core.chunk_append(b__22978,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null));

var G__23065 = (i__22977 + (1));
i__22977 = G__23065;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22978),kotoba_ui$product$data_table_$_iter__22959_$_iter__22975(cljs.core.chunk_rest(s__22976__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22978),null);
}
} else {
var map__22982 = cljs.core.first(s__22976__$2);
var map__22982__$1 = cljs.core.__destructure_map(map__22982);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22982__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null),kotoba_ui$product$data_table_$_iter__22959_$_iter__22975(cljs.core.rest(s__22976__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__22972,idx,row,s__22960__$2,temp__5825__auto__,map__22951,map__22951__$1,caption,columns,rows,empty,id,class$))
;
return iter__5480__auto__(columns);
})()], null),kotoba_ui$product$data_table_$_iter__22959(cljs.core.rest(s__22960__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,rows));
})()], null)], null)], null);
} else {
var or__5002__auto__ = empty;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return kotoba_ui.product.empty_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Nothing here yet"], null));
}
}
});
kotoba_ui.product.product_css = ["@layer kotoba.hig{",".kotoba-product__metric{min-width:0;padding:var(--hig-spacing-3);border:var(--hig-hairline) solid var(--hig-color-separator);border-radius:var(--hig-radius-large);background:var(--hig-color-secondary-system-background)}",".kotoba-product__metric-label,.kotoba-product__metric-detail,.kotoba-product__muted{color:var(--hig-color-secondary-label)}",".kotoba-product__metric-value{margin:var(--hig-spacing-1) 0;overflow-wrap:anywhere}",".kotoba-product__status{display:inline-block;margin-right:var(--hig-spacing-2);color:var(--hig-color-tint);font-weight:600}",".kotoba-product__empty{text-align:center;padding:var(--hig-spacing-6);border:var(--hig-hairline) dashed var(--hig-color-separator);border-radius:var(--hig-radius-large)}",".kotoba-product__empty-actions{display:flex;justify-content:center;flex-wrap:wrap;gap:var(--hig-spacing-2);margin-top:var(--hig-spacing-3)}",".kotoba-product__table-scroll{overflow-x:auto}",".kotoba-product__table{width:100%;border-collapse:collapse}",".kotoba-product__table caption{text-align:left;margin-bottom:var(--hig-spacing-2);font-weight:600}",".kotoba-product__table th,.kotoba-product__table td{text-align:left;vertical-align:top;padding:var(--hig-spacing-2) var(--hig-spacing-3);border-bottom:var(--hig-hairline) solid var(--hig-color-separator)}",".kotoba-product__table th{color:var(--hig-color-secondary-label);font-weight:600}","}"].join('');

//# sourceMappingURL=kotoba_ui.product.js.map
