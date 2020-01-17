 <?php

 
$row_style =array('evn','odd');
$index_style=0;

$meal =array('breckfast'=>'eggs and tea',
              'lunch'=>'rice and meat',
             'dinner'=>'vigitable and water' );

print "<table border='5'>";

foreach($meal as $key => $value){

    print '<tr class="' . $row_style[$index_style] . '">';
   
    print "<td>$key</td><td>$value</td></tr> \n";
    $index_style = 1 - $index_style;

}
print "</table>";
?>
