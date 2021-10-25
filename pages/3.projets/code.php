<section id="projets">
<div id="para2"></div>
    <h2>PROJETS</h2>
    <div id="flex">
        <?php
            $dir   = "pages/3.projets/projets";
            $files = scandir($dir);
            sort($files);
            array_splice($files,0,2);

            foreach($files as $file)
            {
                $dir_ = "$dir/$file";
                print("<article class='prj'>");
                include("$dir_/code.php");
                print("</article>");
            }
        ?>
    </div>
</section>