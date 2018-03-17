<?php
fscanf(STDIN, "%d\n", $n);
for ($i = 0; $i < $n; $i++) {
    $line = trim(fgets(STDIN));
    $xy = explode(" ", $line);
    fprintf(STDOUT, $xy[0] + $xy[1]);
    fprintf(STDOUT, "\n");
}
?>
