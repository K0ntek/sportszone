$(document).ready(function()
{
    $('#car').mouseover(function()
    {
        $('#chevy').css({
                    'position':'absolute',
                    'left':'0',
                    'transition':'0.5s'
        })
        $('#block').css({
            'position':'absolute',
            'left':'0',
            'transition':'0.5s',
            'box-shadow': '0px 0px 30px 20px rgb(220, 20, 60, 0.7)'
    })

    $('#car').mouseout(function()
    {
        $('#chevy').css({
                    'position':'absolute',
                    'left':'-25%'
        })
        $('#block').css({
            'position':'absolute',
            'left':'-100%',
            'box-shadow':'none',
            'transition':'0.5s'})
})

    $('#car2').mouseover(function()
    {
        $('#chevy2').css({
                    'position':'absolute',
                    'left':'0',
                    'transition':'0.5s'
        })
        $('#block2').css({
            'position':'absolute',
            'left':'0',
            'transition':'0.5s',
            'box-shadow': '0px 0px 30px 20px rgb(255, 165, 0, 0.7)'
        })
})

    })

    $('#car2').mouseout(function()
    {
        $('#chevy2').css({
                    'position':'absolute',
                    'left':'-25%'
        })
        $('#block2').css({
            'position':'absolute',
            'left':'-100%',
            'box-shadow':'none',
            'transition':'0.5s'})
    })
            $('.item-1').click(function()
            {
                $('#glText1').toggle(500)
                $('.item-1').css({
                    'transition':'0.5s'
                })
                $('#glText1').css({
                    'background':'orangered',
                'transition':'0.5s'
                })
        })

    $('.item-2').click(function()
    {
        $('#glText2').toggle(500)
        $('.item-2').css({
            'transition':'0.5s'
        })
        $('#glText2').css({
            'background':'orangered',
        'transition':'0.5s'
        })
    })

        $('.item-3').click(function()
        {
            $('#glText3').toggle(500)
            $('.item-3').css({
                'transition':'0.5s'
            })
            $('#glText3').css({
            'background':'orangered',
            'transition':'0.5s'
            })
        })

    $('.item-4').click(function()
    {
        $('#glText4').toggle(500)
        $('.item-4').css({
            'transition':'0.5s'
        })
        $('#glText4').css({
            'background':'orangered',
        'transition':'0.5s'
        })
    })

        $('.item-5').click(function()
        {
            $('#glText5').toggle(500)
            $('.item-5').css({
                'transition':'0.5s'
            })
            $('#glText5').css({
            'background':'orangered',
            'transition':'0.5s'
            })
        })

    $('.item-6').click(function()
    {
        $('#glText6').toggle(500)
        $('.item-6').css({
            'transition':'0.5s'
        })
        $('#glText6').css({
        'background':'orangered',
        'transition':'0.5s'
        })
    })
})