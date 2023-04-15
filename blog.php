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
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="single-blog-style-one">
                            <div class="image-block">
                                <div class="inner-block">
                                    <img src="images/kk21-1.png" alt="Awesome Image" />
                                    <div class="date-block">
                                       <?php echo date("F d, Y");?>
                                    </div><!-- /.date-block -->
                                </div><!-- /.inner-block -->
                            </div><!-- /.image-block -->
                            <div class="text-block">
                                <div class="meta-info">
                                    <a href="#">By Malltronik</a>
                                    <span class="sep">.</span>
                                    <a href="#">0 Comments</a>
                                </div><!-- /.meta-info -->
                                <h3><a href="blog-details.html">Cukup Bayar Sekali, Untung Berkali-kali</a></h3>
                                <p> Bisnis yang mudah di aplikasikan, sangat cocok untuk kaum milenial seperti sekarang. Cukup dalam satu genggaman semua jadi serba mudah</p>
                                <div class="line-block"></div><!-- /.line-block -->
                                <a href="blog-details.html" class="more-link">Read More</a>
                            </div><!-- /.text-block -->
                        </div><!-- /.single-blog-style-one -->
                    </div><!-- /.col-lg-4 -->
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="single-blog-style-one">
                            <div class="image-block">
                                <div class="inner-block">
                                    <img src="images/unnamed-1-1.jpg" alt="Awesome Image" />
                                    <div class="date-block">
                                        <?php echo date("F d, Y");?>
                                    </div><!-- /.date-block -->
                                </div><!-- /.inner-block -->
                            </div><!-- /.image-block -->
                            <div class="text-block">
                                <div class="meta-info">
                                    <a href="#">By Malltronik</a>
                                    <span class="sep">.</span>
                                    <a href="#">0 Comments</a>
                                </div><!-- /.meta-info -->
                                <h3><a href="about_us.php">Seputar tentang Aplikasi Malltronik</a></h3>
                                <p>Terobosan terbaru bisnis masa depan yang memberikan sejuta kemudahan dengan memberikan semua kebutuhan kamu</p>
                                <div class="line-block"></div><!-- /.line-block -->
                                <a href="about_us.php" class="more-link">Read More</a>
                            </div><!-- /.text-block -->
                        </div><!-- /.single-blog-style-one -->
                    </div><!-- /.col-lg-4 -->
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="single-blog-style-one">
                            <div class="image-block">
                                <div class="inner-block">
                                    <img src="images/Tenant-1-1.png" alt="Awesome Image" />
                                    <div class="date-block">
                                        <?php echo date("F d, Y");?>
                                    </div><!-- /.date-block -->
                                </div><!-- /.inner-block -->
                            </div><!-- /.image-block -->
                            <div class="text-block">
                                <div class="meta-info">
                                    <a href="#">By Malltronik</a>
                                    <span class="sep">.</span>
                                    <a href="#">0 Comments</a>
                                </div><!-- /.meta-info -->
                                <h3><a href="blog-details.html">Seputar Tenant aman dan terpercaya </a></h3>
                                <p>Bergabung Menjadi Tenant Malltronik
                                    menjadikan Semua Lebih Mudah Bersama Mama Muda
                                    Gratis Pendaftaran Dan Ongkos Kirim</p>
                                <div class="line-block"></div><!-- /.line-block -->
                                <a href="blog-details.html" class="more-link">Read More</a>
                            </div><!-- /.text-block -->
                        </div><!-- /.single-blog-style-one -->
                    </div><!-- /.col-lg-4 -->
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