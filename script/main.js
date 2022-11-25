$(function(){
    $('.hweb ul li').click(function(){
        let i=$(this).index();
        // let n=0;
        // let m=3;
        // if(i<j){
        //     for(n;n<i+1;n++){
        //         $('main>div').eq(n).addClass('on');
        //         console.log(n);
        //         console.log(i);
        //     }
        //     j=i;
        // }else{
        //     for(m;m>i-1;m--){
        //         $('main>div').eq(m).addClass('on');
        //         console.log(m);
        //         console.log(i);
        //     }
        //     j=i+1;
        // }
        if(i==0){
            $('.first_papg').addClass('on');
            $('.profile').removeClass('on');
            $('.project').removeClass('on');
            $('.skill ul li').eq(0).find('.percent').animate({'width':'85%'},300,'easeInOutCirc');
            $('.skill ul li').eq(1).find('.percent').animate({'width':'90%'},600,'easeInOutCirc');
            $('.skill ul li').eq(2).find('.percent').animate({'width':'60%'},900,'easeInOutCirc');
            $('.skill ul li').eq(3).find('.percent').animate({'width':'70%'},1200,'easeInOutCirc');
            for(let n=0;n<=3;n++){
                $('.skill ul li').eq(n).find('.per').animate({'opacity':'1'},300*(n+1),'easeInBack');
            }
        }else if(i==1){
            $('.first_papg').addClass('on');
            $('.profile').addClass('on');
            $('.project').removeClass('on');
        }else{
            $('.first_papg').addClass('on');
            $('.profile').addClass('on');
            $('.project').addClass('on');
        }
    });
    $('.logo').click(function(){
        $('main>div').removeClass('on');
    });

    $('.project1 .img_box2 img').mouseover(function(){
        $('.project1 .img_box2 img').stop().animate({'margin-top':'-594px'},5000);
    }).mouseout(function(){
        $('.project1 .img_box2 img').stop().animate({'margin-top':'0px'},500);
    });

    $('.project1 .img_box2_2 img').mouseover(function(){
        $('.project1 .img_box2_2 img').stop().animate({'margin-top':'-1060px'},8000);
    }).mouseout(function(){
        $('.project1 .img_box2_2 img').stop().animate({'margin-top':'0px'},500);
    });

    $('.project1 .img_box2_3 img').mouseover(function(){
        $('.project1 .img_box2_3 img').stop().animate({'margin-top':'-1427px'},8000);
    }).mouseout(function(){
        $('.project1 .img_box2_3 img').stop().animate({'margin-top':'0px'},500);
    });

    $('.project2 .img_box2 img').mouseover(function(){
        $('.project2 .img_box2 img').stop().animate({'margin-top':'-2372px'},10000);
    }).mouseout(function(){
        $('.project2 .img_box2 img').stop().animate({'margin-top':'0px'},500);
    });
    function mok(a){
        $('.img_web > div').hide();
        $('.img_web > div').eq(a).show();
    };
    function project(a){
        $('.common').fadeOut();
        $('.common').eq(a).fadeIn();
    }
    let b=0;
    let c=0;
    $('i.fa-caret-square-left').click(function(){
        if(b==2){
            b=0;
        }else{
            b++;
        }
        mok(b);
        console.log(b);
    });
    $('i.fa-caret-square-right').click(function(){
        if(b==0){
            b=2;
        }else{
            b--;
        }
        mok(b);
    });
    $('i.fa-arrow-alt-circle-left').click(function(){
        if(c==1){
            c=2;
            $('i.fa-arrow-alt-circle-left').hide();
        }else{
            c++;
        }
        $('i.fa-arrow-alt-circle-right').show();
        project(c);
        order(c+1);
    });
    $('i.fa-arrow-alt-circle-right').click(function(){
        if(c==1){
            c=0;
            $('i.fa-arrow-alt-circle-right').hide();
        }else{
            c--;
        }
        $('i.fa-arrow-alt-circle-left').show();
        project(c);
        order(c+1);
    });
    function an(){
            $('.an1').stop().animate({'top':'-40px'},300).animate({'top':'0px'},300);
            $('.an2').stop().delay(600).animate({'top':'-40px'},300).animate({'top':'0px'},300);
            $('.an3').stop().delay(1200).animate({'top':'-40px'},300).animate({'top':'0px'},300);
    }
    let production=setInterval(an,3600);
    function order(a){
        $('.order').html(`<p>${a}/3</p>`);
    }
});