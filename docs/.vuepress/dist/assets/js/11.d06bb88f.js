(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{168:function(e,t,a){"use strict";a.r(t);var s=a(0),i=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"redis-backup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-backup","aria-hidden":"true"}},[e._v("#")]),e._v(" Redis Backup")]),e._v(" "),a("p",[e._v("This command will backup your redis database. You can specify the storage type and the interval the command runs. Under the hood the command uses redis-dump (a small ruby gem). Your files will be saved in this format: d-m-Y_H-i-s.json.")]),e._v(" "),a("p",[e._v("Type "),a("code",[e._v("stool redis:backup")])]),e._v(" "),a("h3",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[e._v("#")]),e._v(" Options")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Storage")]),e._v(" "),a("td",[e._v("If you set up digitalocean spaces you can save the backups there. Otherwise they will be saved on your local disk")])]),e._v(" "),a("tr",[a("td",[e._v("Cronjob")]),e._v(" "),a("td",[e._v("If you enable this, the command will be run on a daily basis")])])])])])}],!1,null,null,null);t.default=i.exports}}]);