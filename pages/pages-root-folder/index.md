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
  title: "GradNet ICCV2019 Demo"
  url: "https://youtu.be/tWDbs3VrnbU"
  video: '<iframe width="360" height="240" src="https://www.youtube.com/embed/tWDbs3VrnbU" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="max-width: 100%; max-height: 150pt;"></iframe>'
  text: "Check out our demo for Visual Object Tracking"
widget2:
  title: "Depth-based Segmentation"
  url: "https://www.youtube.com/embed/fUJ7ZkgXyZg"
  text: "Image segmentation based on depth estimation"
  video: '<iframe width="360" height="240" src="https://www.youtube.com/embed/fUJ7ZkgXyZg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="max-width: 100%; max-height: 150pt;"></iframe>'
widget3:
  title: "Pose Tracking"
  url: "https://youtu.be/CiKJuAH2U8I"
  video: '<iframe src="https://www.youtube.com/embed/AL-8XCzRFo0" width="360" height="240" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="max-width: 100%; max-height: 150pt;"></iframe>'
  text: "Our team won the 2nd place in the pose-track challenge."

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

<div class="row main-content" style= " margin-top: 30px; max-height:540px">
  <div class="column small-9 pc">
    
    <!-- carrousel -->

    <div id="myCarousel" class="carousel slide" data-ride="carousel" style="">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner">
      		{% include carousel_item.html  active="true"  image="images/ecoNAS.jpg" alt="ecoNAS" title="ecoNAS" caption="Traditional neural architecture search will consume plenty of resources to evaluate candidate networks. Based on our exploration of efficient and reliable proxy tasks, we achieve an impressive 400x time reduction for evolutionary algorithm yet get better results." %}

      		{% include carousel_item.html   image="images/GradNet.jpg" alt="Visual Object Tracking(VOT)" title="Visual Object Tracking(VOT)" caption="Visual object tracking aims to successively track the object in a video with target object being identified in the initial frame. We are now working on this problem and the related topic multiple object tracking (MOT)." %}

      		{% include carousel_item.html  image="images/3D_Det.png" alt="DVC: An End-to-end Deep Video Compression Framework" title="Accurate Monocular 3D Object Detection" caption="we propose a monocular 3D object de- tection framework in the domain of autonomous driving. Unlike previous image-based methods which focus on RGB feature extracted from 2D images" %}

          {% include carousel_item.html  image="images/Cheaper_Lunch.png" alt="Cheaper Pre-training Lunch" title="Cheaper Pre-training Lunch: An Efficient Paradigm for Object Detection" caption="we propose a general and efficient pre-training paradigm, Montage pre-training, for object detection. Montage pre-training needs only the target detection dataset while taking only 1/4 computa- tional resources compared to the widely adopted ImageNet pre-training" %}
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

  <!-- carrousel on mobile devices -->
  <div class="column small-12 mobile">
    
    <!-- carousel -->
    <div id="myCarousel-mobile" class="carousel slide" data-ride="carousel" style="">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#myCarousel-mobile" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel-mobile" data-slide-to="1"></li>
          <li data-target="#myCarousel-mobile" data-slide-to="2"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner">
          {% include carousel_item.html  active="true"
             url="https://wlouyang.github.io/projects/GBD/index.html"
             image="images/gbd-net.jpg"
             alt="GBD-Net for object detection"
             title="Object Detection"
             caption="We are conducting inspiring researches in general object detection. Our team won the 1st place of ILSVRC 2016. We are also working on the related topics including video detection and object tracking." %}

          {% include carousel_item.html
             url="http://cvboy.com/publication/cvpr2017_vip_cnn/"
             image="images/relation.jpg"
             alt="Visual Relationship Detection"
             title="Visual Relationship Detection"
             caption="Visual relationship detection involves detecting and localizing pairs of interacting objects in an image and also classifying the predicate or interaction between them. We are now working on this challenging problem. Click to see the detail!" %}

          {% include carousel_item.html
             url="http://cvboy.com/publication/cvpr2017_vip_cnn/"
             image="images/re-id.png" alt="Re-Identification"
             title="Person Re-Identification (ReID)"
             caption="Given one query image of one specific person, a person ReID system is expected to provide all the images of the same person from a large gallery database. We have been focusing on person re-id problem over years." %}
        </div>

        <!-- Left and right controls -->
        <a class="left carousel-control" href="#myCarousel-mobile" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel-mobile" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
    </div>

  </div>

  <div class="column small-3 pc" style="max-height: inherit">
  	<div><h3>News</h3></div>
    
    <div class="list-group" style="margin-left=0; max-height: inherit; overflow-y: auto;">
    {% include news_item.html 
        highlight="true" date="Always"
        content="We are hiring! Several Ph.D. positions are now available at USYD in computer vision. Candidates with strong academic background and/or solid programming skill are highly preferred. Before applying, please first look at <a href=\"guidelines/guideline_eng.pdf\"><strong>Application Guideline for SIGMA Lab</strong></a>. For Chinese candidates, please refer to <a href=\"guidelines/ad.pdf\"><strong>SIGMA Lab招生简章</strong></a> and <a href=\"guidelines/guideline_chinese.pdf\"><strong>SIGMA Lab申请须知</strong></a>" %}

    {% include news_item.html  highlight="true" date="21-Sep-2018" content="Our team MMDet won the <strong> 1st place </strong> of <a href=\"http://cocodataset.org/#detection-leaderboard\">the COCO Detection Challenge</a>!!! The AWESOME code has been released in the repo <a href=\"https://github.com/open-mmlab/mmdetection\">mmdetection</a>" %}

    {% include news_item.html  date="14-Mar-2019" content="Welcome Xinchi Zhou, Dongzhan Zhou to join us as PhD students!" %}

    {% include news_item.html  date="01-Feb-2019" content="Welcome Hongwen Zhang to join us as a visiting student!" %}

    {% include news_item.html  date="08-Oct-2018" content="Welcome Yi Zhou to join us as a M.Phil. student!" %}

    {% include news_item.html  date="21-Sep-2018" content="Welcome Yukai Shi to visit our lab!" %}

    {% include news_item.html  date="20-Sep-2018" content="Congratulations to Shuyang's paper accepted by NIPS 2018" %}

    {% include news_item.html  date="10-July-2018" content="Congratulations to Guo Lu's paper accepted by ECCV 2018" %}

    {% include news_item.html  date="2-July-2018" content="Congratulations to Lingbo Liu's paper accepted by IJCAI 2018" %}

      {% include news_item.html  date="19-Mar-2018" content="Welcome Lingbo Liu to visit our lab!" %}

{% include news_item.html  date="14-Dec-2017" content="Our lab homepage is now onine!" %}
{% include news_item.html  date="15-Sep-2017" content="Our lab established!" %}

    </div>

  </div>
</div>

<div class="column small-12 mobile">
    <br>
    <h3>News</h3>
    <div class="list-group" style="margin-left=0">
      {% include news_item.html 
        highlight="true" date="Always"
        content="We are hiring! Several Ph.D. positions are now available at USYD in computer vision. Candidates with strong academic background and/or solid programming skill are highly preferred. Before applying, please first look at <a href=\"guidelines/guideline_eng.pdf\"><strong>Application Guideline for SIGMA Lab</strong></a>. For Chinese candidates, please refer to <a href=\"guidelines/guideline_chinese.pdf\"><strong>SIGMA Lab申请须知</strong></a> and <a href=\"guidelines/scholarship_chi.pdf\"><strong>悉尼大学奖学金申请须知</strong></a>." %}

    {% include news_item.html  date="14-Mar-2019" content="Welcome Xinchi Zhou, Dongzhan Zhou to join us as PhD students!" %}

    {% include news_item.html  date="01-Feb-2019" content="Welcome Hongwen Zhang to join us as a visiting student!" %}

    {% include news_item.html  date="08-Oct-2018" content="Welcome Yi Zhou to join us as a M.Phil. student!" %}

    {% include news_item.html  date="21-Sep-2018" content="Welcome Yukai Shi to visit our lab!" %}

    {% include news_item.html  date="20-Sep-2018" content="Congratulations to Shuyang's paper accepted by NIPS 2018" %}

    {% include news_item.html  date="10-July-2018" content="Congratulations to Guo Lu's paper accepted by ECCV 2018" %}

    {% include news_item.html  date="2-July-2018" content="Congratulations to Lingbo Liu's paper accepted by IJCAI 2018" %}

      {% include news_item.html  date="19-Mar-2018" content="Welcome Lingbo Liu to visit our lab!" %}

      {% include news_item.html  date="14-Dec-2017" content="Our lab homepage is now onine!" %}

      {% include news_item.html  date="15-Sep-2017" content="Our lab established!" %}

    </div>
    <h3 class="mobile"> Our Research </h3>

</div>

<div class="pc">
<br>
<h3> Our Research </h3> 
</div>

---
