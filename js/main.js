function showListDetail(){
    document.getElementById("shopClass_Detail").className="shopClass_Detail show"
    document.getElementById("shopBanner").className="shopBanner fl hide"
    document.getElementById("user").className="user fl hide"
}

function hideListDetail(){
    document.getElementById("shopClass_Detail").className="shopClass_Detail hide"
    document.getElementById("shopBanner").className="shopBanner fl show"
    document.getElementById("user").className="user fl show"
}
var i = 0;
var imgbox = document.getElementById('imgbox').getElementsByClassName('bannerImg');
var bannerImgPoint =document.getElementById('bannerImgPoint').getElementsByClassName('point_btn')
function changeimg(){
    
    if (i<7){
 
        imgbox[i].style.cssText = "opacity: 0;";
        bannerImgPoint[i].className = "point_btn"
        i++
        imgbox[i].style.cssText = "opacity: 1;";
        bannerImgPoint[i].className = "point_btn point_btn_active"
        console.log (i);
        
    }
    else{
        imgbox[i].style.cssText = "opacity: 0;";
        bannerImgPoint[i].className = "point_btn"
        i = 0
        console.log (i);
        imgbox[i].style.cssText = "opacity: 1;";
        bannerImgPoint[i].className = "point_btn point_btn_active"
    }


}

function focusPoint(pointSet){
    imgbox[i].style.cssText = "opacity: 0;";
    bannerImgPoint[i].className = "point_btn"
    i = pointSet
    imgbox[i].style.cssText = "opacity: 1;";
    bannerImgPoint[i].className = "point_btn point_btn_active"


}


setInterval(changeimg,2000)
