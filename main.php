<main id="main">
<?php
    $pages_dir   = "pages";
    $pages_files = scandir($pages_dir);
    sort($pages_files);
    array_splice($pages_files,0,2);

    foreach($pages_files as $pages_file)
    {
        include("$pages_dir/$pages_file/code.php");
    }
?>
</main>