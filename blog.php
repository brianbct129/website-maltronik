<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Malltronik - E-Mall untuk kebutuhan anda </title>
    <?php include "assets/head.php"?>
</head> 
<body>
    <div class="preloader"></div><!-- /.preloader -->
    <div class="page-wrapper">
    <?php include "assets/navigation.php"?>

        <section class="inner-banner">
            <div class="container">
                <ul class="thm-breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li><span class="sep">.</span></li>
                    <li><span class="page-title">Blog</span></li>
                </ul><!-- /.thm-breadcrumb -->
                <h2>Blog</h2>
            </div><!-- /.container -->
        </section><!-- /.inner-banner -->

        <section class="blog-style-one blog-page" id="blog">
            <div class="container model_1">
                <div class="row">
                    <?php include "assets/blog_content_default.php"?>
                </div><!-- /.row -->
                <!-- <div class="blog-post-pagination text-center">
                    <a class="prev" href="#"><i class="fa fa-arrow-left"></i></a>
                    <a class="active" href="#">01</a>
                    <a href="#">02</a>
                    <a href="#">03</a>
                    <a href="#">04</a>
                    <a href="#">05</a>
                    <a class="next" href="#"><i class="fa fa-arrow-right"></i></a>
                </div> -->
                <div class="blog-post-pagination text-center"></div>
                <!-- /.blog-post-pagination -->

            </div><!-- /.container -->
        </section><!-- /.blog-style-one -->
        <?php include "assets/footer.php"?>
    </div><!-- /.page-wrapper -->
    <a href="#" data-target="html" class="scroll-to-target scroll-to-top"><i class="fa fa-long-arrow-up"></i></a>
    <!-- /.scroll-to-top -->
   <?php include "assets/script.php"?>
</html>