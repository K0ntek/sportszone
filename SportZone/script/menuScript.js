$(document).ready(function()
{
    $('#MUSCLE').css({
                    'background':'linear-gradient(90deg, orangered, transparent)',
                    'color': 'white',
                    'width': '60%',
                    'margin-top':'22px',
                    'border-radius':'0px 80px 80px 15px',
                    'justify-content':'center'
                    })

    $('#SPORT').css({
                        'background':'linear-gradient(90deg, rgb(67 43 15), transparent)',
                        'color': 'white',
                        'width': '60%',
                        'margin-top':'22px',
                        'border-radius':'0px 80px 80px 15px'
                        })
    $('#choiceMuscle').click(function()
    {
        $('#MUSCLE').toggle(400);
    })


    $('#choiceSport').click(function()
    {
        $('#SPORT').toggle(400);
    })

})