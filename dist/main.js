
  var icons = document.querySelectorAll(".icon"),
      videos = document.getElementsByTagName("video"),
      icon = document.getElementsByClassName('icon'),
      cursorX, cursorY,
      screenPage = document.getElementById('screen_page'),
      touchPage = document.getElementById('touch_page');

  if (Modernizr.touch) {
    console.log('Touch Screen');
    touchPage.style.display = 'block';
    screenPage.style.display = 'none';
    screenPage.innerHTML = '';
    document.querySelector('body').style.overflow = 'visible';
    document.querySelector('body').style.verticalAlign = 'baseline';
    touchDevice();
  } else {
    console.log('No Touch Screen');
    touchPage.style.display = 'none';
    screenPage.style.display = 'block';
    touchPage.innerHTML = '';
    screenDevice();
  }

  function touchDevice() {

  }

  function screenDevice() {

    function videoEvents() {
      for (var i = 0; i < icon.length ; i++) {
        (function(i) {
          icon[i].addEventListener("mouseover", function() {
            videos[i].classList.add('focus');
            setTimeout(function () {
              videos[i].play();
            }, 150);
            icon[i].style.zIndex = 998;
          });
          icon[i].addEventListener("mouseout", function() {
            videos[i].classList.remove('focus');
            videos[i].pause();
            icon[i].style.zIndex = 2;
          });
        })(i);
      }
    }

    document.addEventListener("DOMContetLoaded", timer());
    function timer() {
      var preloader = document.getElementById('preloader'),
          loading = document.getElementById('loading'),
          icons = document.getElementById('icons_block'),
          visualize =  window.setInterval(function() {
        if (metaArr.length >= 16) {
          preloader.className += "fade_out";
          preloader.style.display = "none";
          preloader.innerHTML = "";
          icons.style.display = "block";
          icons.className += " fade_in";
          clearInterval(visualize);
        } else {
          icons.style.display = "none";
        }
      }, 400);
    }

    var iconsArr = [0, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        i = -1,
        preloader_image = document.getElementById('preloader_image'),
        iconsChange = window.setInterval(function() {
          i++;
          preloader_image.innerHTML = '<img src="' + './images/icons/icons_set-new-reduction-' + iconsArr[i] + '.png"' + '/>';
          if (i >= 14) {
            i = 0;
          }
          if (metaArr.length >= 16) {
            clearInterval(iconsChange);
            console.log('videos loaded!');
            setTimeout(animateIcons, 10);
            videoEvents();
          } else {
            loading.innerHTML = '<br>' + Math.floor((100 / 16) * metaArr.length) + '%';
          }
        }, 200);



    function animateIcons() {
      document.addEventListener('mousemove', function( event ) {

        var x = window.innerWidth-event.clientX,
            y = window.innerHeight-event.clientY,
            moveXfast = x/120,
            moveYfast = y/80,
            moveXslow = x/300,
            moveYslow = y/200,
            moveX = x/200,
            moveY = y/150;

        var removingSmoothMove = window.setTimeout(function() {
          for (var i = 0; i < icon.length; i++) {
            icon[i].classList.remove("smooth_move");
          }
        }, 500);

        icon[0].style.left = moveXslow + 3 +'%';
        icon[0].style.top  = moveYslow + 24 +'%';

        icon[1].style.left = moveXfast + 7 + '%';
        icon[1].style.top  = moveYfast + 59 + '%';

        icon[2].style.left = moveX + 14 + '%';
        icon[2].style.top  = moveY + 42 + '%';

        icon[3].style.left = moveXfast + 17 + '%';
        icon[3].style.top  = moveYfast + 10 + '%';

        icon[4].style.left = moveX + 30 + '%';
        icon[4].style.top  = moveY + 25 + '%';

        icon[5].style.left = moveXslow + 44 + '%';
        icon[5].style.top  = moveYslow + 10 + '%';

        icon[6].style.left = moveXfast + 57 + '%';
        icon[6].style.top  = moveYfast + 25 + '%';

        icon[7].style.left = moveX + 71 + '%';
        icon[7].style.top  = moveY + 14 + '%';

        icon[8].style.left = moveX + 81 + '%';
        icon[8].style.top  = moveY + 33 + '%';

        icon[9].style.left = moveXfast + 71 + '%';
        icon[9].style.top  = moveYfast + 53 + '%';

        icon[10].style.left = moveX + 81 + '%';
        icon[10].style.top  = moveY + 73 + '%';

        icon[11].style.left = moveXslow + 57 + '%';
        icon[11].style.top  = moveYslow + 63 + '%';

        icon[12].style.left = moveX + 41 + '%';
        icon[12].style.top  = moveY + 43 + '%';

        icon[13].style.left = moveXfast + 31 + '%';
        icon[13].style.top  = moveYfast + 63 + '%';

        icon[14].style.left = moveX + 45 + '%';
        icon[14].style.top  = moveY + 73 + '%';

        icon[15].style.left = moveX + 20 + '%';
        icon[15].style.top  = moveY + 74 + '%';

      }, false);
    }
  }
