canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

function my_touchmove(e)
{
    currentposition_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    currentposition_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_touch_x = current_position_of_touch_x;
    last_position_of_touch_y = current_position_of_touch_y;
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
currentposition_of_touch_x = e.clientX - canvas.offsetLeft;
    currentposition_of_touch_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    currentposition_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    currentposition_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();
    }
    last_position_of_touch_x = current_position_of_touch_x;
    last_position_of_touch_y  = current_position_of_touch_y;
}