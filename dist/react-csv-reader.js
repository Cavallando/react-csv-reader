module.exports=function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=r(1),n=r(2),s=r(3),a=i.forwardRef(({accept:e=".csv, text/csv",cssClass:t="csv-reader-input",cssInputClass:r="csv-input",cssLabelClass:n="csv-label",fileEncoding:a="UTF-8",inputId:o="react-csv-reader-input",inputName:u="react-csv-reader-input",inputStyle:h={},label:f,onError:l=(()=>{}),onFileLoaded:d,parserOptions:c={},disabled:p=!1,strict:g=!1},m)=>i.createElement("div",{className:t},f&&i.createElement("label",{className:n,htmlFor:o},f),i.createElement("input",{className:r,type:"file",id:o,name:u,style:h,accept:e,onChange:t=>{let r=new FileReader;const i=t.target.files;if(i.length>0){const t={name:i[0].name,size:i[0].size,type:i[0].type};if(g&&e.indexOf(t.type)<=0)return void l(new Error(`[strict mode] Accept type not respected: got '${t.type}' but not in '${e}'`));r.onload=e=>{var n;const o=s.parse(r.result,Object.assign(c,{error:l,encoding:a}));d(null!==(n=null==o?void 0:o.data)&&void 0!==n?n:[],t,i[0])},r.readAsText(i[0],a)}},disabled:p,ref:m})));a.propTypes={accept:n.string,cssClass:n.string,cssInputClass:n.string,cssLabelClass:n.string,fileEncoding:n.string,inputId:n.string,inputName:n.string,inputStyle:n.object,label:n.oneOfType([n.string,n.element]),onError:n.func,onFileLoaded:n.func.isRequired,parserOptions:n.object,disabled:n.bool,strict:n.bool},t.default=a},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("prop-types")},function(e,t,r){var i,n,s;
/* @license
Papa Parse
v5.3.0
https://github.com/mholt/PapaParse
License: MIT
*/n=[],void 0===(s="function"==typeof(i=function e(){"use strict";var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},r=!t.document&&!!t.postMessage,i=r&&/blob:/i.test((t.location||{}).protocol),n={},s=0,a={parse:function(r,i){var o=(i=i||{}).dynamicTyping||!1;if(k(o)&&(i.dynamicTypingFunction=o,o={}),i.dynamicTyping=o,i.transform=!!k(i.transform)&&i.transform,i.worker&&a.WORKERS_SUPPORTED){var u=function(){if(!a.WORKERS_SUPPORTED)return!1;var r,i,o=(r=t.URL||t.webkitURL||null,i=e.toString(),a.BLOB_URL||(a.BLOB_URL=r.createObjectURL(new Blob(["(",i,")();"],{type:"text/javascript"})))),u=new t.Worker(o);return u.onmessage=m,u.id=s++,n[u.id]=u}();return u.userStep=i.step,u.userChunk=i.chunk,u.userComplete=i.complete,u.userError=i.error,i.step=k(i.step),i.chunk=k(i.chunk),i.complete=k(i.complete),i.error=k(i.error),delete i.worker,void u.postMessage({input:r,config:i,workerId:u.id})}var c=null;return a.NODE_STREAM_INPUT,"string"==typeof r?c=i.download?new h(i):new l(i):!0===r.readable&&k(r.read)&&k(r.on)?c=new d(i):(t.File&&r instanceof File||r instanceof Object)&&(c=new f(i)),c.stream(r)},unparse:function(e,t){var r=!1,i=!0,n=",",s="\r\n",o='"',u=o+o,h=!1,f=null,l=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||a.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(n=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(r=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(h=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(o=t.quoteChar),"boolean"==typeof t.header&&(i=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");f=t.columns}void 0!==t.escapeChar&&(u=t.escapeChar+o),"boolean"==typeof t.escapeFormulae&&(l=t.escapeFormulae)}}();var d=new RegExp(p(o),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return g(null,e,h);if("object"==typeof e[0])return g(f||c(e[0]),e,h)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:c(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),g(e.fields||[],e.data||[],h);throw new Error("Unable to serialize unrecognized input");function c(e){if("object"!=typeof e)return[];var t=[];for(var r in e)t.push(r);return t}function g(e,t,r){var a="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var o=Array.isArray(e)&&0<e.length,u=!Array.isArray(t[0]);if(o&&i){for(var h=0;h<e.length;h++)0<h&&(a+=n),a+=m(e[h],h);0<t.length&&(a+=s)}for(var f=0;f<t.length;f++){var l=o?e.length:t[f].length,d=!1,c=o?0===Object.keys(t[f]).length:0===t[f].length;if(r&&!o&&(d="greedy"===r?""===t[f].join("").trim():1===t[f].length&&0===t[f][0].length),"greedy"===r&&o){for(var p=[],g=0;g<l;g++){var _=u?e[g]:g;p.push(t[f][_])}d=""===p.join("").trim()}if(!d){for(var y=0;y<l;y++){0<y&&!c&&(a+=n);var v=o&&u?e[y]:y;a+=m(t[f][v],y)}f<t.length-1&&(!r||0<l&&!c)&&(a+=s)}}return a}function m(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);!0===l&&"string"==typeof e&&null!==e.match(/^[=+\-@].*$/)&&(e="'"+e);var i=e.toString().replace(d,u);return"boolean"==typeof r&&r||"function"==typeof r&&r(e,t)||Array.isArray(r)&&r[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(i,a.BAD_DELIMITERS)||-1<i.indexOf(n)||" "===i.charAt(0)||" "===i.charAt(i.length-1)?o+i+o:i}}};if(a.RECORD_SEP=String.fromCharCode(30),a.UNIT_SEP=String.fromCharCode(31),a.BYTE_ORDER_MARK="\ufeff",a.BAD_DELIMITERS=["\r","\n",'"',a.BYTE_ORDER_MARK],a.WORKERS_SUPPORTED=!r&&!!t.Worker,a.NODE_STREAM_INPUT=1,a.LocalChunkSize=10485760,a.RemoteChunkSize=5242880,a.DefaultDelimiter=",",a.Parser=g,a.ParserHandle=c,a.NetworkStreamer=h,a.FileStreamer=f,a.StringStreamer=l,a.ReadableStreamStreamer=d,t.jQuery){var o=t.jQuery;o.fn.parse=function(e){var r=e.config||{},i=[];return this.each((function(e){if("INPUT"!==o(this).prop("tagName").toUpperCase()||"file"!==o(this).attr("type").toLowerCase()||!t.FileReader||!this.files||0===this.files.length)return!0;for(var n=0;n<this.files.length;n++)i.push({file:this.files[n],inputElem:this,instanceConfig:o.extend({},r)})})),n(),this;function n(){if(0!==i.length){var t,r,n,u=i[0];if(k(e.before)){var h=e.before(u.file,u.inputElem);if("object"==typeof h){if("abort"===h.action)return t=u.file,r=u.inputElem,n=h.reason,void(k(e.error)&&e.error({name:"AbortError"},t,r,n));if("skip"===h.action)return void s();"object"==typeof h.config&&(u.instanceConfig=o.extend(u.instanceConfig,h.config))}else if("skip"===h)return void s()}var f=u.instanceConfig.complete;u.instanceConfig.complete=function(e){k(f)&&f(e,u.file,u.inputElem),s()},a.parse(u.file,u.instanceConfig)}else k(e.complete)&&e.complete()}function s(){i.splice(0,1),n()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=v(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new c(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,r){if(this.isFirstChunk&&k(this._config.beforeFirstChunk)){var n=this._config.beforeFirstChunk(e);void 0!==n&&(e=n)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var o=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var u=o.meta.cursor;this._finished||(this._partialLine=s.substring(u-this._baseIndex),this._baseIndex=u),o&&o.data&&(this._rowCount+=o.data.length);var h=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(i)t.postMessage({results:o,workerId:a.WORKER_ID,finished:h});else if(k(this._config.chunk)&&!r){if(this._config.chunk(o,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);o=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(o.data),this._completeResults.errors=this._completeResults.errors.concat(o.errors),this._completeResults.meta=o.meta),this._completed||!h||!k(this._config.complete)||o&&o.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),h||o&&o.meta.paused||this._nextChunk(),o}this._halted=!0},this._sendError=function(e){k(this._config.error)?this._config.error(e):i&&this._config.error&&t.postMessage({workerId:a.WORKER_ID,error:e,finished:!1})}}function h(e){var t;(e=e||{}).chunkSize||(e.chunkSize=a.RemoteChunkSize),u.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var i in e)t.setRequestHeader(i,e[i])}if(this._config.chunkSize){var n=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+n)}try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}r&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");return null===t?-1:parseInt(t.substring(t.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){var r=t.statusText||e;this._sendError(new Error(r))}}function f(e){var t,r;(e=e||{}).chunkSize||(e.chunkSize=a.LocalChunkSize),u.call(this,e);var i="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,i?((t=new FileReader).onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var n=Math.min(this._start+this._config.chunkSize,this._input.size);e=r.call(e,this._start,n)}var s=t.readAsText(e,this._config.encoding);i||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function l(e){var t;u.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,r=this._config.chunkSize;return r?(e=t.substring(0,r),t=t.substring(r)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function d(e){u.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=b((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=b((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=b((function(){this._streamCleanUp(),i=!0,this._streamData("")}),this),this._streamCleanUp=b((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function c(e){var t,r,i,n=Math.pow(2,53),s=-n,o=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/,u=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,h=this,f=0,l=0,d=!1,c=!1,m=[],_={data:[],errors:[],meta:{}};if(k(e.step)){var y=e.step;e.step=function(t){if(_=t,w())E();else{if(E(),0===_.data.length)return;f+=t.data.length,e.preview&&f>e.preview?r.abort():(_.data=_.data[0],y(_,h))}}}function b(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function E(){if(_&&i&&(R("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+a.DefaultDelimiter+"'"),i=!1),e.skipEmptyLines)for(var t=0;t<_.data.length;t++)b(_.data[t])&&_.data.splice(t--,1);return w()&&function(){if(_)if(Array.isArray(_.data[0])){for(var t=0;w()&&t<_.data.length;t++)_.data[t].forEach(r);_.data.splice(0,1)}else _.data.forEach(r);function r(t,r){k(e.transformHeader)&&(t=e.transformHeader(t,r)),m.push(t)}}(),function(){if(!_||!e.header&&!e.dynamicTyping&&!e.transform)return _;function t(t,r){var i,n=e.header?{}:[];for(i=0;i<t.length;i++){var s=i,a=t[i];e.header&&(s=i>=m.length?"__parsed_extra":m[i]),e.transform&&(a=e.transform(a,s)),a=C(s,a),"__parsed_extra"===s?(n[s]=n[s]||[],n[s].push(a)):n[s]=a}return e.header&&(i>m.length?R("FieldMismatch","TooManyFields","Too many fields: expected "+m.length+" fields but parsed "+i,l+r):i<m.length&&R("FieldMismatch","TooFewFields","Too few fields: expected "+m.length+" fields but parsed "+i,l+r)),n}var r=1;return!_.data.length||Array.isArray(_.data[0])?(_.data=_.data.map(t),r=_.data.length):_.data=t(_.data,0),e.header&&_.meta&&(_.meta.fields=m),l+=r,_}()}function w(){return e.header&&0===m.length}function C(t,r){return i=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[i]&&(e.dynamicTyping[i]=e.dynamicTypingFunction(i)),!0===(e.dynamicTyping[i]||e.dynamicTyping)?"true"===r||"TRUE"===r||"false"!==r&&"FALSE"!==r&&(function(e){if(o.test(e)){var t=parseFloat(e);if(s<t&&t<n)return!0}return!1}(r)?parseFloat(r):u.test(r)?new Date(r):""===r?null:r):r;var i}function R(e,t,r,i){var n={type:e,code:t,message:r};void 0!==i&&(n.row=i),_.errors.push(n)}this.parse=function(n,s,o){var u=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var r=new RegExp(p(t)+"([^]*?)"+p(t),"gm"),i=(e=e.replace(r,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<i[0].length;if(1===i.length||s)return"\n";for(var a=0,o=0;o<i.length;o++)"\n"===i[o][0]&&a++;return a>=i.length/2?"\r\n":"\r"}(n,u)),i=!1,e.delimiter)k(e.delimiter)&&(e.delimiter=e.delimiter(n),_.meta.delimiter=e.delimiter);else{var h=function(t,r,i,n,s){var o,u,h,f;s=s||[",","\t","|",";",a.RECORD_SEP,a.UNIT_SEP];for(var l=0;l<s.length;l++){var d=s[l],c=0,p=0,m=0;h=void 0;for(var _=new g({comments:n,delimiter:d,newline:r,preview:10}).parse(t),y=0;y<_.data.length;y++)if(i&&b(_.data[y]))m++;else{var v=_.data[y].length;p+=v,void 0!==h?0<v&&(c+=Math.abs(v-h),h=v):h=v}0<_.data.length&&(p/=_.data.length-m),(void 0===u||c<=u)&&(void 0===f||f<p)&&1.99<p&&(u=c,o=d,f=p)}return{successful:!!(e.delimiter=o),bestDelimiter:o}}(n,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);h.successful?e.delimiter=h.bestDelimiter:(i=!0,e.delimiter=a.DefaultDelimiter),_.meta.delimiter=e.delimiter}var f=v(e);return e.preview&&e.header&&f.preview++,t=n,r=new g(f),_=r.parse(t,s,o),E(),d?{meta:{paused:!0}}:_||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,r.abort(),t=k(e.chunk)?"":t.substring(r.getCharIndex())},this.resume=function(){h.streamer._halted?(d=!1,h.streamer.parseChunk(t,!0)):setTimeout(h.resume,3)},this.aborted=function(){return c},this.abort=function(){c=!0,r.abort(),_.meta.aborted=!0,k(e.complete)&&e.complete(_),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(e){var t,r=(e=e||{}).delimiter,i=e.newline,n=e.comments,s=e.step,o=e.preview,u=e.fastMode,h=t=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(h=e.escapeChar),("string"!=typeof r||-1<a.BAD_DELIMITERS.indexOf(r))&&(r=","),n===r)throw new Error("Comment character same as delimiter");!0===n?n="#":("string"!=typeof n||-1<a.BAD_DELIMITERS.indexOf(n))&&(n=!1),"\n"!==i&&"\r"!==i&&"\r\n"!==i&&(i="\n");var f=0,l=!1;this.parse=function(e,a,d){if("string"!=typeof e)throw new Error("Input must be a string");var c=e.length,g=r.length,m=i.length,_=n.length,y=k(s),v=[],b=[],E=[],w=f=0;if(!e)return z();if(u||!1!==u&&-1===e.indexOf(t)){for(var C=e.split(i),R=0;R<C.length;R++){if(E=C[R],f+=E.length,R!==C.length-1)f+=i.length;else if(d)return z();if(!n||E.substring(0,_)!==n){if(y){if(v=[],L(E.split(r)),q(),l)return z()}else L(E.split(r));if(o&&o<=R)return v=v.slice(0,o),z(!0)}}return z()}for(var O=e.indexOf(r,f),x=e.indexOf(i,f),S=new RegExp(p(h)+p(t),"g"),T=e.indexOf(t,f);;)if(e[f]!==t)if(n&&0===E.length&&e.substring(f,f+_)===n){if(-1===x)return z();f=x+m,x=e.indexOf(i,f),O=e.indexOf(r,f)}else{if(-1!==O&&(O<x||-1===x)){if(!(O<T)){E.push(e.substring(f,O)),f=O+g,O=e.indexOf(r,f);continue}var I=P(O,T,x);if(I&&void 0!==I.nextDelim){O=I.nextDelim,T=I.quoteSearch,E.push(e.substring(f,O)),f=O+g,O=e.indexOf(r,f);continue}}if(-1===x)break;if(E.push(e.substring(f,x)),M(x+m),y&&(q(),l))return z();if(o&&v.length>=o)return z(!0)}else for(T=f,f++;;){if(-1===(T=e.indexOf(t,T+1)))return d||b.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:v.length,index:f}),j();if(T===c-1)return j(e.substring(f,T).replace(S,t));if(t!==h||e[T+1]!==h){if(t===h||0===T||e[T-1]!==h){-1!==O&&O<T+1&&(O=e.indexOf(r,T+1)),-1!==x&&x<T+1&&(x=e.indexOf(i,T+1));var D=F(-1===x?O:Math.min(O,x));if(e[T+1+D]===r){E.push(e.substring(f,T).replace(S,t)),e[f=T+1+D+g]!==t&&(T=e.indexOf(t,f)),O=e.indexOf(r,f),x=e.indexOf(i,f);break}var A=F(x);if(e.substring(T+1+A,T+1+A+m)===i){if(E.push(e.substring(f,T).replace(S,t)),M(T+1+A+m),O=e.indexOf(r,f),T=e.indexOf(t,f),y&&(q(),l))return z();if(o&&v.length>=o)return z(!0);break}b.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:v.length,index:f}),T++}}else T++}return j();function L(e){v.push(e),w=f}function F(t){var r=0;if(-1!==t){var i=e.substring(T+1,t);i&&""===i.trim()&&(r=i.length)}return r}function j(t){return d||(void 0===t&&(t=e.substring(f)),E.push(t),f=c,L(E),y&&q()),z()}function M(t){f=t,L(E),E=[],x=e.indexOf(i,f)}function z(e){return{data:v,errors:b,meta:{delimiter:r,linebreak:i,aborted:l,truncated:!!e,cursor:w+(a||0)}}}function q(){s(z()),v=[],b=[]}function P(i,n,s){var a={nextDelim:void 0,quoteSearch:void 0},o=e.indexOf(t,n+1);if(n<i&&i<o&&(o<s||-1===s)){var u=e.indexOf(r,o);if(-1===u)return a;o<u&&(o=e.indexOf(t,o+1)),a=P(u,o,s)}else a={nextDelim:i,quoteSearch:n};return a}},this.abort=function(){l=!0},this.getCharIndex=function(){return f}}function m(e){var t=e.data,r=n[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var s={abort:function(){i=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(k(r.userStep)){for(var a=0;a<t.results.data.length&&(r.userStep({data:t.results.data[a],errors:t.results.errors,meta:t.results.meta},s),!i);a++);delete t.results}else k(r.userChunk)&&(r.userChunk(t.results,s,t.file),delete t.results)}t.finished&&!i&&_(t.workerId,t.results)}function _(e,t){var r=n[e];k(r.userComplete)&&r.userComplete(t),r.terminate(),delete n[e]}function y(){throw new Error("Not implemented.")}function v(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=v(e[r]);return t}function b(e,t){return function(){e.apply(t,arguments)}}function k(e){return"function"==typeof e}return i&&(t.onmessage=function(e){var r=e.data;if(void 0===a.WORKER_ID&&r&&(a.WORKER_ID=r.workerId),"string"==typeof r.input)t.postMessage({workerId:a.WORKER_ID,results:a.parse(r.input,r.config),finished:!0});else if(t.File&&r.input instanceof File||r.input instanceof Object){var i=a.parse(r.input,r.config);i&&t.postMessage({workerId:a.WORKER_ID,results:i,finished:!0})}}),(h.prototype=Object.create(u.prototype)).constructor=h,(f.prototype=Object.create(u.prototype)).constructor=f,(l.prototype=Object.create(l.prototype)).constructor=l,(d.prototype=Object.create(u.prototype)).constructor=d,a})?i.apply(t,n):i)||(e.exports=s)}]);
//# sourceMappingURL=react-csv-reader.js.map