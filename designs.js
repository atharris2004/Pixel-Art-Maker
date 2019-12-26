//Select color input
//select size input
var height, width, color;

//when size is submitted by the use, call makeGrid()
$('#sizePicker').submit(function (event) {
   event.preventDefault();
   height = $('#inputHeight').val();
   width = $('#inputWidth').val();
   makeGrid(height, width);
   //console.log('Height: ' + height + ' and width: ' + width);
})
// the grid becomes what the user inputs
function makeGrid(x, y) {
    $('tr').remove();

    //My code
    for (var i = 1; i <= x; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (var j = 1; j <=y; j++) {
            $('#table' + i).append('<td></td>');
        }
    }
    //adding the color to each individual cell
    $('td').click(function addColor() {
        color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}