/* ---------------------
	CUSTOM JS DOCUMENT
--------------------- */
/*******************************************
	PreLoader On window Load
*******************************************/
$(window).on("load", function() {

	"use strict";
	$('.preloader').fadeOut();

});




/*******************************************
	Document ready
*******************************************/

jQuery(document).ready(function($) {

	"use strict";


	/* ---------------------
		Hover slide
/* --------------------- */

function doAnimations( elems ) {
        //Cache the animationend event in a variable
        var animEndEv = 'webkitAnimationEnd animationend';

        elems.each(function () {
            var $this = $(this),
                $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }

    //Variables on page load
    var $myCarousel = $('#carousel-example-generic'),
        $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

    //Initialize carousel
    $myCarousel.carousel();

    //Animate captions in first slide on page load
    doAnimations($firstAnimatingElems);

    //Pause carousel
    $myCarousel.carousel('pause');


    //Other slides to be animated on carousel slide event
    $myCarousel.on('slide.bs.carousel', function (e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });

$("#owl-demo").owlCarousel({

		autoPlay: 3000, //Set AutoPlay to 3 seconds

		items: 4,
		itemsDesktop: [1199, 3],
		itemsDesktopSmall: [979, 3]

});

	$('img.data_colored').css({
		'display': 'none'
	}); // element hide on document ready
	$('img.data_nocolor').css({
		'display': 'none'
	}); // element hide on document ready


	var coloredImageActive = $('.wv-slidehover-main ul li.active').children('img.data_colored').attr('src'); // get src from loaded active element children on document ready

	$('.wv-slidehover-main ul li.active').css({
		"background-image": "url(" + coloredImageActive + ")"
	}); // get src to loaded active element on document ready


	$('.wv-slidehover-main ul li').on("mouseenter",

	function() {
		$('.wv-slidehover-main ul li.active').addClass('oldone'); // add class to an element


		var oldImage = $('.wv-slidehover-main ul li.active.oldone img.data_nocolor').attr('src');

		$('.wv-slidehover-main ul li.active.oldone').css({
			"background-image": "url(" + oldImage + ")"
		}); // set src to an element

		$('.wv-slidehover-main ul li').removeClass('active'); // remove class from an element

		$('.wv-slidehover-main ul li').removeClass('oldone'); // removeClass from an element


		var coloredImage = $(this).children('img.data_colored').attr('src'); // get src from current element children

		var nocoloredImage = $(this).children('img.data_nocolor').attr('src'); // get src from current element children

		$(this).addClass('active'); // add class to an element

		$(this).css({
			"background-image": "url(" + coloredImage + ")"
		}); // set src to an element

	});

	/*******************************************
Simple Bar Chart
*******************************************/

	$("#bar-chart").appear(function() {
		$(this).dxChart({
			dataSource: [{
				day: "2009",
				oranges: 100
			}, {
				day: "2010",
				oranges: 300
			}, {
				day: "2011",
				oranges: 200
			}, {
				day: "2012",
				oranges: 400
			}, {
				day: "2013",
				oranges: 600
			}, {
				day: "2014",
				oranges: 200
			}, {
				day: "2015",
				oranges: 300
			}],
			valueAxis: {
				grid: {
					color: '#9D9EA5',
					width: 0.1
				}
			},
			legend: {
				visible: false,
			},
			series: {
				argumentField: "day",
				valueField: "oranges",
				name: "My oranges",
				visible: false,
				type: "bar",
				color: '#f55e45'
			}
		});
	});

	/* ---------------------
		Fun Factor / Counter
/* --------------------- */
	$(".count-number").appear(function() {
		$(this).each(function() {
			var datacount = $(this).attr('data-count');
			$(this).find('.counter').delay(6000).countTo({
				from: 10,
				to: datacount,
				speed: 3000,
				refreshInterval: 50,
			});
		});
	});

	/* ---------------------
		Mac detection
/* --------------------- */
	// console.log(navigator.userAgent);
	/* Adjustments for Safari on Mac */
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
		// console.log('Safari on Mac detected, applying class...');
		$('body').addClass('safari-mac'); // provide a class for the safari-mac specific css to filter with
	}

	/*******************************************
	Main Slider Calling
*******************************************/
	homePageSliderInit();


	/* ---------------------
	All owl Carousels Calling
/* --------------------- */


	// owlCarouselInit();


});

/*******************************************
	Main Slider
*******************************************/

function homePageSliderInit() {
	"use strict";
	$('.tp-banner').show().revolution({
		dottedOverlay: "none",
		delay: 16000,
		startwidth: 1170,
		startheight: 785,
		hideThumbs: 200,

		thumbWidth: 100,
		thumbHeight: 50,
		thumbAmount: 5,

		navigationType: "none",
		navigationArrows: "solo",
		navigationStyle: "preview2",

		touchenabled: "on",
		onHoverStop: "on",

		swipe_velocity: 0.7,
		swipe_min_touches: 1,
		swipe_max_touches: 1,
		drag_block_vertical: false,

		parallax: "mouse",
		parallaxBgFreeze: "on",
		parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],

		keyboardNavigation: "on",

		navigationHAlign: "center",
		navigationVAlign: "bottom",
		navigationHOffset: 0,
		navigationVOffset: 20,

		soloArrowLeftHalign: "left",
		soloArrowLeftValign: "center",
		soloArrowLeftHOffset: 20,
		soloArrowLeftVOffset: 0,

		soloArrowRightHalign: "right",
		soloArrowRightValign: "center",
		soloArrowRightHOffset: 20,
		soloArrowRightVOffset: 0,

		shadow: 0,
		fullWidth: "on",
		fullScreen: "off",

		spinner: "spinner4",

		stopLoop: "off",
		stopAfterLoops: -1,
		stopAtSlide: -1,

		shuffle: "off",

		autoHeight: "off",
		forceFullWidth: "off",



		hideThumbsOnMobile: "off",
		hideNavDelayOnMobile: 1500,
		hideBulletsOnMobile: "off",
		hideArrowsOnMobile: "off",
		hideThumbsUnderResolution: 0,

		hideSliderAtLimit: 0,
		hideCaptionAtLimit: 0,
		hideAllCaptionAtLilmit: 0,
		startWithSlide: 0,
		videoJsPath: "revslider/videojs/",
		fullScreenOffsetContainer: ""
	});

}

/* ---------------------
	All owl Carousels
/* --------------------- */

// function owlCarouselInit() {
// 	"use strict";
// 	/**********owl fixed option*************/
// 	$("#owl-example").owlCarousel({
// 		items: 1,
// 		navigation: true, // Show next and prev buttons
// 		slideSpeed: 300,
// 		paginationSpeed: 400,
// 		singleItem: true,
// 		pagination: false
// 	});
//
//
// 	$("#owl-example1").owlCarousel({
// 		items: 2,
// 		navigation: true, // Show next and prev buttons
// 		slideSpeed: 300,
// 		paginationSpeed: 400,
// 		singleItem: false,
// 		pagination: false
// 	});
//
//
// 	$("#owl-example2").owlCarousel({
// 		items: 3,
// 		navigation: false, // Show next and prev buttons
// 		slideSpeed: 300,
// 		paginationSpeed: 400,
// 		singleItem: false,
// 		pagination: true
// 	});
//
//
// 	$("#owl-example3").owlCarousel({
// 		items: 4,
// 		navigation: true, // Show next and prev buttons
// 		slideSpeed: 300,
// 		paginationSpeed: 400,
// 		singleItem: false,
// 		pagination: false
// 	});
//
//
// 	$("#owl-example4").owlCarousel({
// 		items: 1,
// 		navigation: true, // Show next and prev buttons
// 		slideSpeed: 300,
// 		paginationSpeed: 400,
// 		singleItem: true,
// 		pagination: false
// 	});
//
//
// 	$("#owl-about").owlCarousel({
// 		items: 2,
// 		navigation: false, // Show next and prev buttons
// 		slideSpeed: 300,
// 		paginationSpeed: 400,
// 		singleItem: true,
// 		pagination: true
// 	});
//
//
// 	$("#owl-example6").owlCarousel({
// 		items: 4,
// 		navigation: true, // Show next and prev buttons
// 		slideSpeed: 300,
// 		paginationSpeed: 400,
// 		singleItem: false,
// 		pagination: false
// 	});
//
//
// 	$("#owl-example7").owlCarousel({
// 		items: 4,
// 		navigation: true, // Show next and prev buttons
// 		slideSpeed: 300,
// 		paginationSpeed: 400,
// 		singleItem: false,
// 		pagination: false
// 	});
//
// 	/**********owl custom option*************/
//
//
// 	if ($('.owl-sidebar').length) {
// 		$(".owl-sidebar").each(function(index) {
// 			var effect_mode = $(this).data('effect');
// 			var autoplay = $(this).data('autoplay');
// 			var navigation = $(this).data('navigation');
// 			var pagination = $(this).data('pagination');
// 			var singleitem = $(this).data('singleitem');
// 			var items = $(this).data('items');
// 			$(this).owlCarousel({
// 				transitionStyle: effect_mode,
// 				autoplay: autoplay,
// 				navigation: navigation,
// 				pagination: pagination,
// 				singleItem: singleitem,
// 				items: items,
// 				navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
// 			});
// 		});
// 	}
//
//
//
// 	$("#whoWeAreButton").click(function(e){
// 		e.preventDefault();
// 		$("#whoWeAreModal").modal("show");
// 	});
//
// 	$("#bankruptcy").click(function(e){
// 		e.preventDefault();
// 		practiceAreaClick("bankruptcy" , "fa fa-money" ,"Bankruptcy laws were put in place in this country in order to give a fresh start to consumers who are unable to keep up with their mounting debts and who find themselves in economic distress. We have spent years assisting our clients with bankruptcy filings. Through Chapter 7 or Chapter 13, clients have found a renewed financial future while ending the stress of debt and harassing calls from creditors and collection agencies. Angulo Diaz Law Group, P.A is a law firm committed to providing a sympathetic and patient approach for each client, making the process smooth and seamless." );
// 		$("#modalPracticeArea").modal("show");
// 	});
//
// 	$("#family_law").click(function(e){
// 		e.preventDefault();
// 		practiceAreaClick("Family Law" , "fa fa-users" ,"Ending a marriage is traumatic, and the process can be very overwhelming. Each case is unique and requires an experienced attorney who can provide a creative and skilled approach to the law.It is vital that when going through this process you are represented by an attorney who has the necessary experience in all areas of family law to walk you through such difficult times in your life. These cases include but are not limited to; Petitions for Dissolution of Marriage, child custody and support, division of marital property, negotiation and preparation of separation and property settlement agreements and issues involving visitation, relocations, and modifications of already existing agreements that no longer fit the needs of the parties involved.Frequently, separation and later, divorce, is thought of as a straight-forward process involving the applicable divorce laws. In fact, separation involves complex issues of finance and support, child-rearing, present debts and future obligations, property divisions and many other issues.  The lawyers at Angulo Diaz Law Group, P.A. practice and remain informed with respect to the broader issues that impact families in distress.  During the separation and divorce process, our Attorneys are ready to assist you and work with tax, bankruptcy, business and mental health experts, as well as other experts to provide the service and assistance each case requires.The Attorneys at Angulo Diaz Law Group, will provide you with the supportive, creative, and vigorous representation needed during your family crisis." );
// 		$("#modalPracticeArea").modal("show");
// 	});
//
// 	$("#contract_law").click(function(e){
// 		e.preventDefault();
// 		practiceAreaClick("Contract Law" , "fa fa-pencil-square-o" ,"Before you enter into any business contract or any type of written contract it is always important to have it reviewed by an Attorney to ensure you fully understand the terms and conditions you are binding yourself to. Once an individual enters into a Contract that law presumes that you fully understood and agreed with the terms of same even if you didn't. Often times, we have clients that come to us seeking assistance to terminate a Contract they entered into but did not fully represent their interests and wishes. Although we have been very successfully in invalidating and/or amending Contracts, it is far less expensive to have an experienced attorney either draft or review a contract prior to you signing it then it is to litigate a contract that was poorly drafted. If you do find yourself in a contract that you either want to enforce, or is being enforced against you, at Angulo Diaz Law Group, P.A we will provide you with the expert help you need. We work closely with our clients and our first objective is try to resolve the issue without expensive litigation. But where litigation is unavoidable, we are fearless in enforcing and/or defending our client's rights" );
// 		$("#modalPracticeArea").modal("show");
// 	});
//
// 	$("#employment").click(function(e){
// 		e.preventDefault();
// 		practiceAreaClick("Employment Law" , "fa fa-wrench" ,"At Angulo Diaz Law Group, we believe that each case is different and we work closely with our clients to accomplish their individual goal. We work with clients to help them avoid workplace problems, but where controversy is unavoidable, we have the expertise to handle the matter through all stages of the litigation. Because labor and employment problems often involve high stakes and intense time pressure, our firm is committed to giving employers the most immediate service possible. We respond promptly and without fail, with straightforward advice from an experienced lawyer who won't pass your problem off to someone else. Issues like sexual harassment and workplace violence demand immediate attention and we provide it.The best way to handle any claim is to prevent it from being filed, and we give clients effective guidance right from the start to handle complaints properly and keep them from becoming lawsuits. However, where litigation is necessary, we zealously defend our client's position until we reach their desired goal and resolution. " );
// 		$("#modalPracticeArea").modal("show");
// 	});
//
// 	$("#probate_law").click(function(e){
// 		e.preventDefault();
// 		var textHtml = "<p>After a death in a family, or after the death of a business partner, the guidance, advice and counsel of an experienced probate Attorney is an essential tool that will ensure that assets are transferred according to the law and in accordance with the decedent's wishes. At Angulo Diaz Law Group, we provide the experienced, dedicated and reliable legal counsel you need during this difficult time.</p>" +
// 		"<p>We handle all aspects of probate and estate administration, including but not limited to:</p>" +
// 		"<ul type='square'><li>-Validating a Will, if there is one, and resolving Will contests</li>"+"<li>-Filing all notification requirements</li><li>-Collecting assets and Inventory of the Estate</li><li>-Paying remaining debts and disputing creditor claims as necessary</li><li>-Resolving probate or trust litigation as it arises</li><li-Preparing final inventory and estate administration closing document</li><li>-Distributing assets and inheritance to named beneficiaries (or to beneficiaries in accordance with intestate statute if there is not a valid will).</li></ul>" + "<br>" +
// 		"<p>In every area of our practice, Angulo Diaz Law Group, P.A is responsive to clients, giving each of them the undivided attention needed to fully address his or her concerns and find practical solutions. </p>"
//
// 		practiceAreaClick("Probate Law" , "fa fa-gavel" , textHtml );
// 		$("#modalPracticeArea").modal("show");
// 	});
//
// 	$("#criminal_law").click(function(e){
// 		e.preventDefault();
// 		practiceAreaClick("Criminal Law" , "fa fa-gavel" ,"Criminal law involves government prosecution of an individual for an act that is classified as a crime. Criminal cases are tried through a state prosecutor who initiates the criminal law case by bringing charges against an individual. Individuals who are convicted of a crime may be incarcerated, fined, or a combination of both.The best hope in a criminal case is to have a Criminal Attorney every step of the way to ensure that your rights are protected and to secure the best possible outcome for your case. Criminal Defense Attorneys know what the best case and worst case scenarios are and properly advise you of your legal rights based on the crime you have committed. If you don't use a criminal defense attorney, you could be jeopardizing your future and the severity of the punishment you could receive. If you would like more information about Criminal Law in Miami, or have questions on any topics which concern a legal matter, please contact Angulo Diaz Law Group, P.A for a consultation today. " );
// 		$("#modalPracticeArea").modal("show");
// 	});
//
// 	$("#real_state").click(function(e){
// 		e.preventDefault();
// 		practiceAreaClick("Real Estate Disputes" , "fa fa-university" ,"Florida Real Estate laws are complex and cover a broad range of issues from land lord tenant actions to foreclosures and more. Real property rules are varied and complex, whether you are buying or selling real property or dealing with encroaching neighbors or government regulations. The advice of a highly qualified and experienced Attorney is highly beneficial and a must for anyone who wants to have peace of mind knowing their property is protected by properly prepared documentation and strong legal representation.We have vast experience working with both landlord and tenants in resolving both contractual, eviction and post-eviction disputes that may arise. Whether enforcing a contract, prosecuting or defending an eviction or seeking the damages caused by a breaching party, we work closely with our clients to ensure they are following the steps imposed by the law to obtain a quick and positive result. At Angulo Diaz Law Group, P.A's clients enjoy working on with us because we take the time to learn about their situation and craft unique solutions that meet all local and state laws that apply to Real Property. " );
// 		$("#modalPracticeArea").modal("show");
// 	});
//
//
//
// 	function practiceAreaClick(name , icon , text){
// 		$("#modalTitleIcon").addClass(icon);
// 		$('.modal-title').html(name)
// 		$('#practiceAreaText').html(text);
// 	}
//
// 		$(".navScroll").click(function() {
//
// 			var href = $(this).attr('href');
// 				$('html, body').animate({
//
// 							scrollTop: $(href).offset().top
// 					}, 1000);
// 		});
//
//
   $(window).scroll(function () {
          if ($(this).scrollTop() > 50) {
              $('#back-to-top').fadeIn();
          } else {
              $('#back-to-top').fadeOut();
          }
      });
      // scroll body to 0px on click
      $('#back-to-top').click(function () {
          $('#back-to-top').tooltip('hide');
          $('body,html').animate({
              scrollTop: 0
          }, 800);
          return false;
      });

      $('#back-to-top').tooltip('show');

// 
//
// }
