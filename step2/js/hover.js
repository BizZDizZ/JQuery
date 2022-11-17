/* 
    click - 클릭
    dblclick - 더블클릭
    mousedown - 마우스버튼을 누르고 있는중
    mouseup - 마우스버튼을 뗄 때
    mousemove - 마우스커서 이동
    mouseenter - 마우스가 영역으로 들어 갈때
    mouseover - 마우스가 영역으로 들어갈때 (버블링 일어남)
    mouseleave - 마우스가 영역 밖으로 나갈때
    mouseout - 마우스가 영역 밖으로 나갈때 (버블링 일어남)

    문서객체삽입 매서드 B를 기준으로 A
    $(A).appendTo(B) - B 뒷부분에 A를 삽입
    $(A).prependTo(B) - B 앞부분에 A를 삽입
    $(A).insertAfter(B) - A를 B의 뒤에 추가
    $(A).insertBefore(B) - A를 B의 앞에 추가

    역순 A를 기준으로 B
    $(A).append(B) - A 뒷부분에 B를 삽입
    $(A).prepend(B) - A 앞부분에 B를 삽입
    $(A).after(B) - B를 A의 뒤에 추가
    $(A).before(B) - B를 A의 앞에 추가
*/

$(document).ready(function(){
    // $('.outer').dblclick(function(){
    //     $('.inner').append('<h1>더블클릭</h1>');
    // });
    // $('.outer').mousedown(function(){
    //     alert('마우스 버튼 누르고 있는중');
    // });
    // $('.outer').mouseup(function(){
    //     alert('마우스 버튼 뗼 때');
    // });
    // $('.outer').mousemove(function(){
    //     console.log('마우스 커서 이동');
    // });
    // $('.outer').mouseover(function(){
    //     console.log('마우스 커서 이동');
    // });
    // $('.outer').mouseenter(function(){
    //     console.log('마우스 커서 이동'); // 버블링이 일어나지 않아서 많이 사용
    // });
    // $('.outer').mouseleave(function(){
    //     console.log('마우스가 떠날 때');
    // });
    // $('.outer').mouseout(function(){
    //     console.log('마우스가 떠날 때'); // 버블링 일어남
    // });
    $('.outer').hover(function(){
        $('body').append('<h1>마우스 hover 들어갈 때 효과</h1>');
    },function(){
        $('body').append('<h1>마우스 hover 나갈 때 효과</h1>');
    });
});