<script src="http://libs.baidu.com/jquery/1.10.2/jquery.min.js"></script>
    <script>
        $(document).ready(function(){
        $(window).scroll(function(){
            var top=$(document).scrollTop();
            //console.log(top);
            var menu=$("#menu");//提前保存，性能
            var items=$("#content").find(".item");//通过ID选择比通过CLASS效率高
            var currentId="";//当前所在的楼层
            items.each(function(){
                var m=$(this);
                var itemTop=m.offset().top;
                //console.log(itemTop);
                if(top>itemTop-150){//实际滚动效果
                    currentId="#"+m.attr("id");
                }
                else{
                    return false;
                }
            });
            var currentLink=menu.find(".current");
            if(currentId && currentLink.attr("href")!=currentId){
                    currentLink.removeClass("current");
                    menu.find("[href="+currentId +"]").addClass("current");
                }
              });
                    });
    </script>
