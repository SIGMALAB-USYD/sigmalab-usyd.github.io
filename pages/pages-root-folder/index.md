---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage
header:
  image_fullwidth:
title: "SIGMA Lab @ USYD"

#slider:
#text_color: white
#shadow_color: black
#slides: 
#  - image: gallery-example-1.jpg
#    slide_html:
#  - image: gallery-example-2.jpg
#    slide_html: "<h2>Yes, this carousel supports html texting</h2>"
#  - image: gallery-example-3.jpg
#    slide_html: "<h2>Yes, this carousel supports html texting</h2>"

sidebar: right

widget1:
  title: "Pose Estimation"
  url: 'https://youtu.be/fSLmi166Mdk'
  video: '<iframe src="https://www.youtube.com/embed/fSLmi166Mdk" width="360" height="240" style="max-width: 100%; max-height: 150pt;"></iframe>'
  text: 'Check out our demo for multi-person <br/> pose estimation!'
widget2:
  title: "Video Detection"
  url: 'https://youtu.be/ZtbUcv_OIZg'
  text: 'We are also conducting reseaches about detecting objects in videos, check out our demo!'
  video: '<iframe src="https://www.youtube.com/embed/ZtbUcv_OIZg" width="360" height="240" style="max-width: 100%; max-height: 150pt;"></iframe>'
widget3:
  title: "Pose Tracking"
  url: 'https://youtu.be/CiKJuAH2U8I'
  video: '<iframe src="https://www.youtube.com/embed/AL-8XCzRFo0" width="360" height="240" style="max-width: 100%; max-height: 150pt;"></iframe>'
  text: 'Our team won the 2nd place in the pose-track challnege.'

#
# Use the call for action to show a button on the frontpage
#
# To make internal links, just use a permalink like this
# url: /getting-started/
#
# To style the button in different colors, use no value
# to use the main color or success, alert or secondary.
# To change colors see sass/_01_settings_colors.scss
#
#callforaction:
#  url: https://tinyletter.com/feeling-responsive
#  text: Inform me about new updates and features ›
#  style: alert
permalink: /index.html
#
# This is a nasty hack to make the navigation highlight
# this page as active in the topbar navigation
#
homepage: true

---

<!-- Logo & header -->
<!-- <div class="row" style="margin-top: 15px">
  <div class="column small-2">
    <img src="assets/img/favicon-usyd.png" width="120" height="128">
  </div>
  <div class="column small-10">
    <div class="row">
      <h1> SIGMA Lab </h1>
    </div>
    <div class="row">
      <h3 style="margin-top: 30px"> <span style="color: #00AAAA">S</span>ydney <span style="color: #00AAAA">I</span>ntelli<span style="color: #00AAAA">G</span>ent <span style="color: #00AAAA">M</span>ultimedi<span style="color: #00AAAA">A</span>, The University of Sydney</h3>
    </div>
  </div>
    
</div>
 -->



<div class="row main-content" style= " margin-top: 30px">
  <div class="column small-9">
    
    <!-- carrousel -->

    <div id="myCarousel" class="carousel slide" data-ride="carousel" style="">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner">
          <div class="item active">
            <a href="https://wlouyang.github.io/projects/GBD/index.html">
              <img src="images/gbd-net.jpg" alt="GBD-Net for object detection" style="">
              <div class="carousel-caption d-none d-md-block">
                <h3 style="color: #FFFFFF"> Object Detection </h3>
                <p style="color: #FFFFFF"> We are conducting inspiring researches in general object detection. Our team won the 1st place of ILSVRC 2016. We are also working on the related topics including video detection and object tracking.</p>
              </div>
            </a>
          </div>

          <div class="item">
            <a href="http://cvboy.com/publication/cvpr2017_vip_cnn/">
              <img src="images/relation.jpg" alt="Visual Relationship Detection" style="" />
              <div class="carousel-caption d-none d-md-block">              
                <h3 style="color: #FFFFFF"> Visual Relationship Detection</h3>
                <p style="color: #FFFFFF">Visual relationship detection involves detecting and localizing pairs of interacting objects in an image and also classifying the predicate or interaction between them. We are now working on this challenging problem. Click to see the detail! </p>                
              </div>
            </a>
          </div>
        
          <div class="item">
            <a href="#">
              <img src="images/re-id.png" alt="Re-Identification" style="">
              <div class="carousel-caption d-none d-md-block">
                <h3 style="color: #FFFFFF"> Person Re-Identification (ReID)</h3>
                <p> Given one query image of one specific person, a person ReID system is expected to provide all the images of the same person from a large gallery database. We have been focusing on person re-id problem over years. </p>
              </div>
            </a>
          </div>
        </div>

        <!-- Left and right controls -->
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
    </div>
  </div>
  <div class="column small-3">
    <h3>News</h3>
    <div class="list-group" style="margin-left=0">

      <button class="list-group-item list-group-item-action list-group-item-success">
        <span class="badge badge-default badge-pill">14-Dec-2017</span>
        We are hiring! Several Ph.D. positions are now available at USYD in computer vision. Candidates with strong academic background and/or solid programming skill are highly preferred. Before applying, please first look at <a href="guidelines/guideline_eng.pdf"><strong>Application Guideline for SIGMA Lab</strong></a>. For Chinese candidates, please refer to <a href="guidelines/guideline_chinese.pdf"><strong>SIGMA Lab申请须知</strong></a>.
      </button>
      
      <button class="list-group-item list-group-item-action">
        <span class="badge badge-default badge-pill">14-Dec-2017</span>
        Our lab homepage is now onine!
      </button>

      <button class="list-group-item list-group-item-action">
        <span class="badge badge-default badge-pill">15-Sep-2017</span>
        Our lab established!
      </button>

    </div>
  </div>
</div>

<br>
### Our Research
---
