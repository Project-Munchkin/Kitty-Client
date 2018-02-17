$('input[type="radio"]').on('change', function(ev) {
    // 라디오 버튼이 선택이 바뀌었을 때
    var target = $(ev.currentTarget);
    // 선택된 버튼에 active 클래스를 추가해서 강조
    $('label[for="'+target.attr('id')+'"]').addClass('active');
 
    // 나머지 버튼들의 active 클래스를 제거
    $('input.selector[name="' + target.attr('name') +'"]').not(target).each(function (i,obj) {
        var id = $(obj).attr('id');
        $('label[for="'+id+'"]').removeClass('active');
    });
});
