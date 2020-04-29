//获取cookie值
export function getCookie(name){
    let cookieName=encodeURIComponent(name)+"=";
    let cookieStart=document.cookie.indexOf(cookieName);
    let cookieEnd=document.cookie.indexOf(";",cookieStart);
    let cookieValue=null;

    if(cookieStart>-1){
        if(cookieEnd==-1){
            cookieEnd=document.cookie.length;
        }
        cookieValue=decodeURIComponent(document.cookie.substring(cookieStart+cookieName.length,cookieEnd));
    }
    
    return cookieValue;
}

//设置cookie值
export function setCookie(name,value,expires,path,domain,secure){
    let cookieValue="";
    cookieValue=encodeURIComponent(name)+"="+encodeURIComponent(value);
    if(expires){
        cookieValue+=";expires="+expires.toGMTString();
    }
    if(path){
        cookieValue+=";path="+path;
    }
    if(domain){
        cookieValue+=";domain="+domain;
    }
    if(secure){
        cookieValue+=";secure";
    }
    document.cookie=cookieValue;
}

//删除cookie值
export function unsetCookie(name){
    setCookie(name,null,new Date(0),null,null,null);
}