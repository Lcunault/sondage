$(function()
{
    var option = $('.option'), _this, bg = $('#bg');

    function switchChoice()
    {
        _this = $(this);

        if( _this.hasClass('selected') )
            return false;
        else
        {
            $('.option.selected').find('.circle').addClass('increase-width');
            setTimeout(function()
            {
                $('.option.selected').find('.circle').addClass('width-zero');
            },300);

            setTimeout(function()
            {
                _this.find('.circle').addClass('move-right');
                bg.toggleClass('op');
            },150);

            setTimeout(function()
            {
                _this.find('.circle').addClass('width-exact');
                bg.toggleClass('big nobg');
            },600);

            setTimeout(function()
            {
                $('.option.selected').removeClass('selected');
                _this.addClass('selected');

                bg.toggleClass('op nobg big');

                if( $('.option.selected').hasClass('superman') )
                    bg.addClass('superman');
                else
                    bg.removeClass('superman');

                $('.circle').removeClass('increase-width width-zero move-right width-exact');
            },800);
        }
    }

    option.on('click',switchChoice);
});