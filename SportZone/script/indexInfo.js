$(document).ready(function()
{
    $('#info').hover(function()
    {
        $('#alert').toggle(500)
    })

    $('#info').click(function()
    {
        $('#information').toggle(500)
    })
})