(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09273a4b"],{"019b":function(t,s){t.exports="https://blank312.top/vueshop/img/delete.png"},1056:function(t,s){t.exports="https://blank312.top/vueshop/img/itemlike04.png"},"710b":function(t,s,e){},a3b0:function(t,s){t.exports="https://blank312.top/vueshop/img/itemlike02.png"},b900:function(t,s){t.exports="https://blank312.top/vueshop/img/itemlike03.png"},d3ad:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"order-right"},[e("div",{staticClass:"order-content"},[t._m(0),t._m(1),e("div",{staticClass:"orders"},t._l(t.myOrderList,(function(s){return e("table",{key:s.id,staticClass:"order-item"},[e("thead",[e("tr",[e("th",{attrs:{colspan:"5"}},[e("span",{staticClass:"ordertitle"},[t._v(t._s(s.createTime)+"　订单编号："+t._s(s.outTradeNo)+" "),t._m(2,!0)])])])]),e("tbody",t._l(s.orderDetailList,(function(a,i){return e("tr",{key:a.id},[e("td",{attrs:{width:"60%"}},[e("div",{staticClass:"typographic"},[e("img",{staticStyle:{height:"100px",width:"100px"},attrs:{src:a.imgUrl}}),e("a",{staticClass:"block-text",attrs:{href:"#"}},[t._v(t._s(a.skuName)+" ")]),e("span",[t._v("x"+t._s(a.skuNum))]),e("a",{staticClass:"service",attrs:{href:"#"}},[t._v("售后申请")])])]),0===i?[e("td",{staticClass:"center",attrs:{rowspan:s.orderDetailList.length,width:"8%"}},[t._v(t._s(s.consignee))]),e("td",{staticClass:"center",attrs:{rowspan:s.orderDetailList.length,width:"13%"}},[e("ul",{staticClass:"unstyled"},[e("li",[t._v("总金额¥"+t._s(s.totalAmount))]),e("li",[t._v(t._s("UNPAID"===s.orderStatus?"在线支付":"货到付款"))])])]),e("td",{staticClass:"center",attrs:{rowspan:s.orderDetailList.length,width:"8%"}},[e("a",{staticClass:"btn",attrs:{href:"#"}},[t._v(t._s(s.orderStatusName))])]),e("td",{staticClass:"center",attrs:{rowspan:s.orderDetailList.length,width:"13%"}},[t._m(3,!0)])]:t._e()],2)})),0)])})),0),e("div",{staticClass:"choose-order"},[e("el-pagination",{attrs:{"current-page":t.page,"page-size":t.limit,total:t.total,"pager-count":7,background:"",layout:"prev, pager, next, jumper,->,total"},on:{"current-change":t.getMyOrderList}})],1)]),t._m(4)])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"title"},[e("h3",[t._v("我的订单")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"chosetype"},[e("table",[e("thead",[e("tr",[e("th",{attrs:{width:"29%"}},[t._v("商品")]),e("th",{attrs:{width:"31%"}},[t._v("订单详情")]),e("th",{attrs:{width:"13%"}},[t._v("收货人")]),e("th",[t._v("金额")]),e("th",[t._v("状态")]),e("th",[t._v("操作")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"pull-right delete"},[a("img",{attrs:{src:e("019b")}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"unstyled"},[e("li",[e("a",{attrs:{href:"mycomment.html",target:"_blank"}},[t._v("评价|晒单")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"like"},[a("h4",{staticClass:"kt"},[t._v("猜你喜欢")]),a("ul",{staticClass:"like-list"},[a("li",{staticClass:"likeItem"},[a("div",{staticClass:"p-img"},[a("img",{attrs:{src:e("f392")}})]),a("div",{staticClass:"attr"},[a("em",[t._v("DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本")])]),a("div",{staticClass:"price"},[a("em",[t._v("¥")]),a("i",[t._v("3699.00")])]),a("div",{staticClass:"commit"},[t._v("已有6人评价")])]),a("li",{staticClass:"likeItem"},[a("div",{staticClass:"p-img"},[a("img",{attrs:{src:e("a3b0")}})]),a("div",{staticClass:"attr"},[t._v("Apple苹果iPhone 6s/6s Plus 16G 64G 128G")]),a("div",{staticClass:"price"},[a("em",[t._v("¥")]),a("i",[t._v("4388.00")])]),a("div",{staticClass:"commit"},[t._v("已有700人评价")])]),a("li",{staticClass:"likeItem"},[a("div",{staticClass:"p-img"},[a("img",{attrs:{src:e("b900")}})]),a("div",{staticClass:"attr"},[t._v("DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本")]),a("div",{staticClass:"price"},[a("em",[t._v("¥")]),a("i",[t._v("4088.00")])]),a("div",{staticClass:"commit"},[t._v("已有700人评价")])]),a("li",{staticClass:"likeItem"},[a("div",{staticClass:"p-img"},[a("img",{attrs:{src:e("1056")}})]),a("div",{staticClass:"attr"},[t._v("DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本")]),a("div",{staticClass:"price"},[a("em",[t._v("¥")]),a("i",[t._v("4088.00")])]),a("div",{staticClass:"commit"},[t._v("已有700人评价")])])])])}],r=e("1da1"),l=(e("96cf"),{name:"MyOrder",data:function(){return{page:1,limit:3,myOrderList:[],total:0}},mounted:function(){this.getMyOrderList()},methods:{getMyOrderList:function(){var t=arguments,s=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.length>0&&void 0!==t[0]?t[0]:1,s.page=a,e.next=4,s.$API.reqMyOrderList(s.page,s.limit);case 4:i=e.sent,200===i.code&&(s.myOrderList=i.data.records,s.total=i.data.total);case 6:case"end":return e.stop()}}),e)})))()}}}),n=l,c=(e("d659"),e("2877")),o=Object(c["a"])(n,a,i,!1,null,"487035d0",null);s["default"]=o.exports},d659:function(t,s,e){"use strict";e("710b")},f392:function(t,s){t.exports="https://blank312.top/vueshop/img/itemlike01.png"}}]);
//# sourceMappingURL=chunk-09273a4b.9ecdd4de.js.map