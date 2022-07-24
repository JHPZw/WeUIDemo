/*获取XmlHttpRequest*/
function getAjax(){
    var xmlHttpRequest;
    /*如果是chrome，火狐，safari，IE7以上等主流浏览器*/
    try{
        xmlHttpRequest=new XMLHttpRequest();
    }catch (e) {
        try{
            /*是否是IE6*/
            xmlHttpRequest=new ActiveXObject("Msxml2.XMLHTTP");
        }catch (e) {
            try{
                /*IE5或者更早版本*/
                xmlHttpRequest=new ActiveXObject("Microsoft.XMLHTTP");
            }catch(e){
                /*抛出异常提示*/
                alert("不存在XmlHttpRequest的浏览器");
                throw e;
            }
        }
    }
    //将对象返回
    return xmlHttpRequest;
}