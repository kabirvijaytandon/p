t_array = [];

function submit()
{


    var _1 = document.getElementById('1').value;
    var _2 = document.getElementById('2').value;
    var _3 = document.getElementById('3').value;
    var _4 = document.getElementById('4').value;

    t_array.push(_1);
    t_array.push(_2);
    t_array.push(_3);
    t_array.push(_4);

    console.log(name_of_the_student_array)

    document.getElementById('display_name').innerHTML = t_array;
    document.getElementById('submit_button').style.display  = "none";
    


}