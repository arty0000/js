var wrestMsg="";var wrestFld=null;var wrestFldDefaultColor="";function wrestItemname(fld)
{var id=fld.getAttribute("id");var labels=document.getElementsByTagName("label");var el=null;for(i=0;i<labels.length;i++){if(id==labels[i].htmlFor){el=labels[i];break;}}
if(el!=null){var text=el.innerHTML.replace(/[<].*[>].*[<]\/+.*[>]/gi,"");if(text==''){return fld.getAttribute("title")?fld.getAttribute("title"):(fld.getAttribute("placeholder")?fld.getAttribute("placeholder"):fld.name);}else{return text;}}else{return fld.getAttribute("title")?fld.getAttribute("title"):(fld.getAttribute("placeholder")?fld.getAttribute("placeholder"):fld.name);}}
function wrestTrim(fld)
{var pattern=/(^\s+)|(\s+$)/g;return fld.value.replace(pattern,"");}
function wrestRequired(fld)
{if(wrestTrim(fld)==""){if(wrestFld==null){wrestMsg=wrestItemname(fld)+" : 필수 "+(fld.type=="select-one"?"선택":"입력")+"입니다.\n";wrestFld=fld;}}}
function wrestTelNum(fld)
{if(!wrestTrim(fld))return;var pattern=/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;if(!pattern.test(fld.value)){if(wrestFld==null){wrestMsg=wrestItemname(fld)+" : 전화번호 형식이 올바르지 않습니다.\n\n하이픈(-)을 포함하여 입력하세요.\n";wrestFld=fld;fld.select();}}}
function wrestEmail(fld)
{if(!wrestTrim(fld))return;var pattern=/([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)\.([0-9a-zA-Z_-]+)/;if(!pattern.test(fld.value)){if(wrestFld==null){wrestMsg=wrestItemname(fld)+" : 이메일주소 형식이 아닙니다.\n";wrestFld=fld;}}}
function wrestHangul(fld)
{if(!wrestTrim(fld))return;var pattern=/([^가-힣\x20])/;if(pattern.test(fld.value)){if(wrestFld==null){wrestMsg=wrestItemname(fld)+' : 한글이 아닙니다. (자음, 모음 조합된 한글만 가능)\n';wrestFld=fld;}}}
function wrestHangul2(fld)
{if(!wrestTrim(fld))return;var pattern=/([^가-힣ㄱ-ㅎㅏ-ㅣ\x20])/i;if(pattern.test(fld.value)){if(wrestFld==null){wrestMsg=wrestItemname(fld)+' : 한글이 아닙니다.\n';wrestFld=fld;}}}
function wrestHangulAlNum(fld)
{if(!wrestTrim(fld))return;var pattern=/([^가-힣\x20^a-z^A-Z^0-9])/i;if(pattern.test(fld.value)){if(wrestFld==null){wrestMsg=wrestItemname(fld)+' : 한글, 영문, 숫자가 아닙니다.\n';wrestFld=fld;}}}
function wrestHangulAlpha(fld)
{if(!wrestTrim(fld))return;var pattern=/([^가-힣\x20^a-z^A-Z])/i;if(pattern.test(fld.value)){if(wrestFld==null){wrestMsg=wrestItemname(fld)+' : 한글, 영문이 아닙니다.\n';wrestFld=fld;}}}
function wrestNumeric(fld)
{if(fld.value.length>0){for(i=0;i<fld.value.length;i++){if(fld.value.charAt(i)<'0'||fld.value.charAt(i)>'9'){wrestMsg=wrestItemname(fld)+" : 숫자가 아닙니다.\n";wrestFld=fld;}}}}
function wrestAlpha(fld)
{if(!wrestTrim(fld))return;var pattern=/(^[a-zA-Z]+$)/;if(!pattern.test(fld.value)){if(wrestFld==null){wrestMsg=wrestItemname(fld)+" : 영문이 아닙니다.\n";wrestFld=fld;}}}
function wrestAlNum(fld)
{if(!wrestTrim(fld))return;var pattern=/(^[a-zA-Z0-9]+$)/;if(!pattern.test(fld.value)){if(wrestFld==null){wrestMsg=wrestItemname(fld)+" : 영문 또는 숫자가 아닙니다.\n";wrestFld=fld;}}}
function wrestAlNum_(fld)
{if(!wrestTrim(fld))return;var pattern=/(^[a-zA-Z0-9\_]+$)/;if(!pattern.test(fld.value)){if(wrestFld==null){wrestMsg=wrestItemname(fld)+" : 영문, 숫자, _ 가 아닙니다.\n";wrestFld=fld;}}}
function wrestMinLength(fld)
{if(!wrestTrim(fld))return;var minlength=fld.getAttribute("minlength");if(wrestFld==null){if(fld.value.length<parseInt(minlength)){wrestMsg=wrestItemname(fld)+" : 최소 "+minlength+"글자 이상 입력하세요.\n";wrestFld=fld;}}}
function wrestImgExt(fld)
{if(!wrestTrim(fld))return;var pattern=/\.(gif|jpg|png)$/i;if(!pattern.test(fld.value)){if(wrestFld==null){wrestMsg=wrestItemname(fld)+" : 이미지 파일이 아닙니다.\n.gif .jpg .png 파일만 가능합니다.\n";wrestFld=fld;fld.select();}}}
function wrestExtension(fld,css)
{if(!wrestTrim(fld))return;var str=css.split("=");var src=fld.value.split(".");var ext=src[src.length-1];if(wrestFld==null){if(ext.toLowerCase()<str[1].toLowerCase()){wrestMsg=wrestItemname(fld)+" : ."+str[1]+" 파일만 가능합니다.\n";wrestFld=fld;}}}
function wrestNospace(fld)
{var pattern=/(\s)/g;if(pattern.test(fld.value)){if(wrestFld==null){wrestMsg=wrestItemname(fld)+" : 공백이 없어야 합니다.\n";wrestFld=fld;}}}
function wrestSubmit()
{wrestMsg="";wrestFld=null;var attr=null;for(var i=0;i<this.elements.length;i++){var el=this.elements[i];if(el.type=="text"||el.type=="hidden"||el.type=="file"||el.type=="password"||el.type=="select-one"||el.type=="textarea"){if(el.getAttribute("required")!=null){wrestRequired(el);}
if(el.getAttribute("minlength")!=null){wrestMinLength(el);}
var array_css=el.className.split(" ");el.style.backgroundColor=wrestFldDefaultColor;for(var k=0;k<array_css.length;k++){var css=array_css[k];switch(css){case"required":wrestRequired(el);break;case"trim":wrestTrim(el);break;case"email":wrestEmail(el);break;case"hangul":wrestHangul(el);break;case"hangul2":wrestHangul2(el);break;case"hangulalpha":wrestHangulAlpha(el);break;case"hangulalnum":wrestHangulAlNum(el);break;case"nospace":wrestNospace(el);break;case"numeric":wrestNumeric(el);break;case"alpha":wrestAlpha(el);break;case"alnum":wrestAlNum(el);break;case"alnum_":wrestAlNum_(el);break;case"telnum":wrestTelNum(el);break;case"imgext":wrestImgExt(el);break;default:if(/^extension\=/.test(css)){wrestExtension(el,css);break;}}}}}
if(wrestFld!=null){alert(wrestMsg);if(wrestFld.style.display!="none"){var id=wrestFld.getAttribute("id");var msg_el=document.createElement("strong");msg_el.id="msg_"+id;msg_el.className="msg_sound_only";msg_el.innerHTML=wrestMsg;wrestFld.parentNode.insertBefore(msg_el,wrestFld);var new_href=document.location.href.replace(/#msg.+$/,"")+"#msg_"+id;document.location.href=new_href;if(typeof(wrestFld.select)!="undefined")
wrestFld.select();wrestFld.focus();}
return false;}
if(this.oldsubmit&&this.oldsubmit()==false)
return false;return true;}
function wrestInitialized()
{for(var i=0;i<document.forms.length;i++){if(document.forms[i].onsubmit){document.forms[i].oldsubmit=document.forms[i].onsubmit;}
document.forms[i].onsubmit=wrestSubmit;}}
$(document).ready(function(){wrestInitialized();});