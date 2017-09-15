import React from 'react'
import Project from './Project'

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      screen: '',
      closed: true,
      url: window.location.search,
      number: ''
    };
    this.closeTrigger = this.closeTrigger.bind(this);
    this.projectUrl = this.projectUrl.bind(this);
    this.toMain = this.toMain.bind(this);
    this.aboutPopup = this.aboutPopup.bind(this);
  }

  aboutPopup(e) {
    let popup = document.getElementById('about_popup');
    if (popup.style.display == 'none') {
      popup.classList.add('fadeIn')
      popup.classList.remove('fadeOut')
      document.querySelector('body').style.overflow = 'hidden'
      popup.style.display = 'block';
      if (this.state.screen == 'touch') {
        e.target.innerHTML = 'ЗАКРЫТЬ'
      }
    } else {
      popup.classList.add('fadeOut')
      popup.classList.remove('fadeIn')
      document.querySelector('body').style.overflow = 'visible'
      setTimeout(function() {
        popup.style.display = 'none'
      }, 300)
      if (this.state.screen == 'touch') {
        e.target.innerHTML = 'О НАС'
      }
    }
  }

  projectUrl(e) {
    let projectAdress = e.target.id,
        url = '?' + projectAdress,
        icon = document.getElementsByClassName('icon');

    setTimeout(function() {
      for (let i = 0; i < icon.length; i++) {
        icon[i].classList.add('smooth_move');
      }
    },500);

    setTimeout((function() {

      for (var i = 0; i < this.props.data.length; i++) {
        if (['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'].indexOf(this.state.number) > -1) {
          let fullscreenVideo = (this.props.data[this.state.number].video)
          document.getElementById('fullscreen_video').src = fullscreenVideo;
        }
      }

      document.getElementById('fullscreen_video').play();

    }.bind(this)),1);

    document.body.style.overflow = 'hidden';

    window.history.pushState(projectAdress, 'Фосфор', url);
    this.setState({
      url: window.location.search,
      number: e.target.parentNode.id,
      closed: !this.state.closed
    })
    setTimeout(function() {
      document.getElementById('project_popup').style.pointerEvents = 'auto'
    }, 100)
  }

  closeTrigger(e) {
    this.setState({
      closed: false
    })
    if (this.state.url == '') {
      document.body.style.overflow = 'hidden';
    }
  }

  toMain () {
    let projectPopup = document.getElementById('project_popup'),
        screenPage = document.getElementById('screen_page'),
        touchPage = document.getElementById('touch_page');

    if (projectPopup) {
      projectPopup.style.pointerEvents = 'none'
      projectPopup.classList.remove('fadeIn')
      projectPopup.classList.add('fadeOut')
    }

    if (screenPage === null) {
      touchPage.classList.add('fadeIn')
      setTimeout(function() {
        touchPage.classList.remove('fadeIn')
      }, 400)
    } else {
      screenPage.classList.add('fadeIn')
      setTimeout(function() {
        screenPage.classList.remove('fadeIn')
      }, 400)
    }
    if (document.getElementById('fullscreen_video') !== null) {
      document.getElementById('fullscreen_video').pause();
    }
    document.body.style.overflow = 'visible';
    setTimeout((function() {
      this.setState({
        closed: true,
        url: '',
        number: ''
      })
    }.bind(this)), 400)
    window.history.replaceState('/', 'Фосфор', '/');
  }

  componentDidMount () {

    window.addEventListener('keydown', function(e) {
      let videoFl = document.getElementById('fullscreen_video');
      if(e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
        if (videoFl.paused === true) {
          videoFl.play();
          cursor.innerHTML = 'Остановить';
          return false;
        } else {
          videoFl.pause();
          cursor.innerHTML = 'Продолжить';
          return false;
        }
      }
    });

    window.addEventListener('popstate', function() {
      let urlString = window.location.search;
      document.getElementById('logo').classList.remove('hide_top');
      if (urlString.length == 0) {
        this.setState({
          closed: true,
          url: urlString
        })
        document.body.style.cursor = 'auto';
        document.body.style.overflow = 'visible';
      } else {
        this.setState({
          closed: false,
          url: urlString
        })
      }

      let urlState = this.state.url.substring(this.state.url.indexOf('?') + 1),
          dataArr = this.props.data, arrElement;
          dataArr.filter(function(arrElement){
            if (urlState == arrElement.url.toString()) {
              this.setState({
                number: arrElement.quantity.toString()
              })
            }
          }.bind(this));
          if (urlState == '') {
            this.setState({
              number: ''
            })
          }
    }.bind(this));

    let urlConteints = (function () {
      let state = this.state.url.substring(this.state.url.indexOf('?') + 1);
      let arrs = this.props.data;
      let arr;
      arrs.filter(function(arr){
        if (state == arr.url.toString()) {
          this.setState({
            number: arr.quantity.toString()
          })
        }
      }.bind(this));
    }.bind(this));

    urlConteints();

    let urlCheck = (function () {
      if (window.location.search === '') {
        this.setState({
          closed: true
        })
        document.body.style.overflow = 'visible';
      } else {
        this.setState({
          closed: false
        })
        document.body.style.overflow = 'hidden';
      }
    }.bind(this));

    urlCheck();

    let icons = document.querySelectorAll('.icon'),
        videos = document.getElementsByTagName('video'),
        icon = document.getElementsByClassName('icon'),
        cursorX, cursorY;

    let screenDevice = (function () {

      let videoEvents = (function () {
        for (let i = 0; i < icon.length ; i++) {
          (function(i) {
            icon[i].addEventListener('mouseover', function() {
              videos[i].classList.add('focus');
              setTimeout(function () {
                videos[i].play();
              }, 150);
              icon[i].style.zIndex = 998;
            });
            icon[i].addEventListener('mouseout', function() {
              videos[i].classList.remove('focus');
              videos[i].pause();
              icon[i].style.zIndex = 2;
            });
          })(i);
        }
      })

      function timer() {
        let preloader = document.getElementById('preloader'),
            loading = document.getElementById('loading'),
            icons = document.getElementById('icons_block'),
            visualize =  window.setInterval(function() {
              if (metaArr.length >= 16) {
                preloader.style.display = 'none';
                preloader.innerHTML = '';
                icons.style.display = 'block';
                icons.classList.add('fade_in');
                setTimeout(function( ) { clearInterval(visualize) }, 500);
              } else {
                icons.style.display = 'none';
              }
            }, 400);
      }

      let iconsArr = [0, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
          i = -1,
          preloader_image = document.getElementById('preloader_image'),
          iconsChange = window.setInterval(function() {
            i++;
            let imgSrc = '<img src="' + require('../../public/icons/icons_set-new-reduction-' + iconsArr[i] + '.png') + '"">';
            preloader_image.innerHTML = imgSrc;
            if (i >= 14) {
              i = 0;
            }
            if (metaArr.length >= 16) {
              setTimeout(animateIcons(), 10);
              videoEvents();
              timer();
              setTimeout(function( ) { clearInterval(iconsChange); }, 1000);
            } else {
              loading.innerHTML = '<br />' + Math.floor((100 / 16) * metaArr.length) + '%';
            }
          }, 300);

      let animateIcons = (function() {
        let pendingAnimation = false;

        (function() {
          let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                      window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
          window.requestAnimationFrame = requestAnimationFrame;
        })();

        window.addEventListener('mousemove', function(e){
            let closedState = this.state.closed;
            if(!pendingAnimation && closedState == true){
                pendingAnimation = true;
                requestAnimationFrame(function() {
                  animate(e);
                });
            }
        }.bind(this));

        function animate(e) {
          let x = window.innerWidth-e.clientX,
              y = window.innerHeight-e.clientY,
              moveXfast = x/120,
              moveYfast = y/80,
              moveXslow = x/300,
              moveYslow = y/200,
              moveX = x/200,
              moveY = y/150;

          setTimeout(function() {
            for (let i = 0; i < icon.length; i++) {
              icon[i].classList.remove('smooth_move');
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

          pendingAnimation = false;
      }
    }.bind(this));
  }.bind(this));

  if (Modernizr.touch) {
    document.querySelector('body').style.verticalAlign = 'baseline';
    this.setState({
      screen: 'touch'
    })
  } else {
    this.setState({
      screen: 'notouch'
    })
    setTimeout(function() {
      screenDevice();
    }, 100)
  }
}
  render() {
    let projectRender, mainRender;
    if (this.state.closed == false) {
      projectRender = (<Project data={this.props.data} id={this.state.number} project={this.state.url} closed={this.state.closed} toMain={this.toMain}/>)
    } else {
      projectRender = ('')
    }
    if (this.state.screen === 'touch') {
      mainRender = (
        <div id="touch_page">
          <div className="line_top"></div>
          <div className="videos_touch" id="videos_touch">
            <div id="0" className="video_grid first_video">
              <img onClick={this.projectUrl} className="play_btn" src="https://github.com/4s4r/4s4r_media/raw/master/icons/4s4r_play_btn.png" />
              <img onClick={this.projectUrl} className="image_touch" id="chess" src="https://github.com/4s4r/4s4r_media/raw/master/posters/poster_chess.jpg" />
              <p onClick={this.projectUrl} id="chess" className="video_description">Открытие чемпионата по шахматам</p>
            </div>
            <div id="1" className="video_grid">
              <img onClick={this.projectUrl} className="play_btn" src="https://github.com/4s4r/4s4r_media/raw/master/icons/4s4r_play_btn.png" />
              <img onClick={this.projectUrl} className="image_touch" id="acid_noodles" src="https://github.com/4s4r/4s4r_media/raw/master/posters/poster_acid_noodles.jpg" />
              <p onClick={this.projectUrl} id="acid_noodles" className="video_description">Интерактивная выставка &laquo;Acid Noodles&raquo;</p>
            </div>
            <div id="2" className="video_grid">
              <img onClick={this.projectUrl} className="play_btn" src="https://github.com/4s4r/4s4r_media/raw/master/icons/4s4r_play_btn.png" />
              <img onClick={this.projectUrl} className="image_touch" id="apex" src="https://github.com/4s4r/4s4r_media/raw/master/posters/poster_apex.jpg" />
              <p onClick={this.projectUrl} id="apex" className="video_description">Чилл-аут зона &laquo;Apex&raquo;</p>
            </div>
            <div id="3" className="video_grid">
              <img onClick={this.projectUrl} className="play_btn" src="https://github.com/4s4r/4s4r_media/raw/master/icons/4s4r_play_btn.png" />
              <img onClick={this.projectUrl} className="image_touch" id="vertu" src="https://github.com/4s4r/4s4r_media/raw/master/posters/poster_vertu.jpg" />
              <p onClick={this.projectUrl} id="vertu" className="video_description">Оформление званного ужина &laquo;Vertu&raquo;</p>
            </div>
            <div id="4" className="video_grid">
              <img onClick={this.projectUrl} className="play_btn" src="https://github.com/4s4r/4s4r_media/raw/master/icons/4s4r_play_btn.png" />
              <img onClick={this.projectUrl} className="image_touch" id="nn" src="https://github.com/4s4r/4s4r_media/raw/master/posters/poster_nn.jpg" />
              <p onClick={this.projectUrl} id="nn" className="video_description">Видео-приглашение &laquo;NИ&raquo;</p>
            </div>
            <div id="5" className="video_grid">
              <img onClick={this.projectUrl} className="play_btn" src="https://github.com/4s4r/4s4r_media/raw/master/icons/4s4r_play_btn.png" />
              <img onClick={this.projectUrl} className="image_touch" id="tsvetnoy" src="https://github.com/4s4r/4s4r_media/raw/master/posters/poster_tsvetnoy.jpg" />
              <p onClick={this.projectUrl} id="tsvetnoy" className="video_description">Промо-ролик дл ТЦ &laquo;Цветной&raquo;</p>
            </div>
            <div id="6" className="video_grid">
              <img onClick={this.projectUrl} className="play_btn" src="https://github.com/4s4r/4s4r_media/raw/master/icons/4s4r_play_btn.png" />
              <img onClick={this.projectUrl} className="image_touch" id="digital_dreams_of_russia" src="https://github.com/4s4r/4s4r_media/raw/master/posters/poster_digital_dreams.jpg" />
              <p onClick={this.projectUrl} id="digital_dreams_of_russia" className="video_description">Мультимедийная выставка &laquo;Цифровые сны о России&raquo;</p>
            </div>
            <div id="7" className="video_grid">
              <img onClick={this.projectUrl} className="play_btn" src="https://github.com/4s4r/4s4r_media/raw/master/icons/4s4r_play_btn.png" />
              <img onClick={this.projectUrl} className="image_touch" id="cyclotron" src="https://github.com/4s4r/4s4r_media/raw/master/posters/poster_cyclotron.jpg" />
              <p onClick={this.projectUrl} id="cyclotron" className="video_description">Многослойная проекция &laquo;Циклотрон&raquo;</p>
            </div>
            <div id="8" className="video_grid">
              <img onClick={this.projectUrl} className="play_btn" src="https://github.com/4s4r/4s4r_media/raw/master/icons/4s4r_play_btn.png" />
              <img onClick={this.projectUrl} className="image_touch" id="psp" src="https://github.com/4s4r/4s4r_media/raw/master/posters/poster_psp.jpg" />
              <p onClick={this.projectUrl} id="psp" className="video_description">Выставка-вечеринка &laquo;Притащи свой проектор&raquo;</p>
            </div>
            <div id="9" className="video_grid">
              <img onClick={this.projectUrl} className="play_btn" src="https://github.com/4s4r/4s4r_media/raw/master/icons/4s4r_play_btn.png" />
              <img onClick={this.projectUrl} className="image_touch" id="troyka" src="https://github.com/4s4r/4s4r_media/raw/master/posters/poster_troyka.jpg" />
              <p onClick={this.projectUrl} id="troyka" className="video_description">Сценография для танцевального шоу &laquo;Troyka&raquo;</p>
            </div>
            <div id="10" className="video_grid">
              <img onClick={this.projectUrl} className="play_btn" src="https://github.com/4s4r/4s4r_media/raw/master/icons/4s4r_play_btn.png" />
              <img onClick={this.projectUrl} className="image_touch" id="arsenicum" src="https://github.com/4s4r/4s4r_media/raw/master/posters/poster_loginov.jpg" />
              <p onClick={this.projectUrl} id="arsenicum" className="video_description">Ролик для &laquo;Arsenicum&raquo;</p>
            </div>
            <div id="11" className="video_grid">
              <img onClick={this.projectUrl} className="play_btn" src="https://github.com/4s4r/4s4r_media/raw/master/icons/4s4r_play_btn.png" />
              <img onClick={this.projectUrl} className="image_touch" id="turbo_yulia" src="https://github.com/4s4r/4s4r_media/raw/master/posters/poster_turbo_yulia.jpg" />
              <p onClick={this.projectUrl} id="turbo_yulia" className="video_description">Ролик для &laquo;Turbo Yulia&raquo;</p>
            </div>
            <div id="12" className="video_grid">
              <img onClick={this.projectUrl} className="play_btn" src="https://github.com/4s4r/4s4r_media/raw/master/icons/4s4r_play_btn.png" />
              <img onClick={this.projectUrl} className="image_touch" id="siemens" src="https://github.com/4s4r/4s4r_media/raw/master/posters/poster_siemens.jpg" />
              <p onClick={this.projectUrl} id="siemens" className="video_description">Сценография &laquo;Siemens — 160 лет в России&raquo;</p>
            </div>
            <div id="13" className="video_grid">
              <img onClick={this.projectUrl} className="play_btn" src="https://github.com/4s4r/4s4r_media/raw/master/icons/4s4r_play_btn.png" />
              <img onClick={this.projectUrl} className="image_touch" id="white_jaguar" src="https://github.com/4s4r/4s4r_media/raw/master/posters/poster_jaguar.jpg" />
              <p onClick={this.projectUrl} id="white_jaguar" className="video_description">Шоу запуска лимитированной серии &laquo;White Jaguar&raquo;</p>
            </div>
            <div id="14" className="video_grid">
              <img onClick={this.projectUrl} className="play_btn" src="https://github.com/4s4r/4s4r_media/raw/master/icons/4s4r_play_btn.png" />
              <img onClick={this.projectUrl} className="image_touch" id="m_sli" src="https://github.com/4s4r/4s4r_media/raw/master/posters/poster_m_sli.jpg" />
              <p onClick={this.projectUrl} id="m_sli" className="video_description">Интерактивная инсталляция &laquo;М_СЛИ&raquo;</p>
            </div>
            <div id="15" className="video_grid">
              <img onClick={this.projectUrl} className="play_btn" src="https://github.com/4s4r/4s4r_media/raw/master/icons/4s4r_play_btn.png" />
              <img onClick={this.projectUrl} className="image_touch" id="nina_donis" src="https://github.com/4s4r/4s4r_media/raw/master/posters/poster_nina_donis.jpg" />
              <p onClick={this.projectUrl} id="nina_donis" className="video_description">Капсульная коллекция &laquo;NINA DONIS&raquo;</p>
            </div>
          </div>
        </div>
      )
    } else if (this.state.screen === 'notouch') {
      mainRender = (
        <div id="screen_page">
          <div id="preloader">
            <div id="preloader_image"></div>
            <div id="loading">0%</div>
          </div>
          <div id="icons_block" className="icons_block">
            <div className="videos" id="videos">
              <video loop className="video_screen" src="https://s3-us-west-2.amazonaws.com/4s4r-video-previews/CHESS_preview.mp4" type="video/mp4;" ></video>
              <video loop className="video_screen" src="https://github.com/4s4r/4s4r_media/raw/master/preview_videos/ACID_NOODLES_preview.mp4" type="video/mp4;" ></video>
              <video loop className="video_screen" src="https://s3-us-west-2.amazonaws.com/4s4r-video-previews/APEX_preview.mp4" type="video/mp4;" ></video>
              <video loop className="video_screen" src="https://s3-us-west-2.amazonaws.com/4s4r-video-previews/VERTU_preview.mp4" type="video/mp4;" ></video>
              <video loop className="video_screen" src="https://s3-us-west-2.amazonaws.com/4s4r-video-previews/NN_preview.mp4" type="video/mp4;" ></video>
              <video loop className="video_screen" src="https://s3-us-west-2.amazonaws.com/4s4r-video-previews/TSVETNOY_preview.mp4" type="video/mp4;" ></video>
            </div>
            <div className="icons" id="icons">
              <div id="0" onClick={this.closeTrigger} className="icon smooth_move" style={{left: '6%', top: '28%', width: '60px'}}><img id="chess" onClick={this.projectUrl} src={require('../../public/icons/icons_set-new-reduction-1.png')} alt="logo"/><figcaption> Открытие <br /> чемпионата <br /> по шахматам </figcaption></div>
              <div id="1" onClick={this.closeTrigger} className="icon smooth_move" style={{left: '13%', top: '65%'}}><img id="acid_noodles" onClick={this.projectUrl} src={require('../../public/icons/icons_set-new-reduction-2.png')} alt="logo"/><figcaption> Интерактивная выставка <br /> &laquo;Acid Noodles&raquo; </figcaption> </div>
              <div id="2" onClick={this.closeTrigger} className="icon smooth_move" style={{left: '18%', top: '47%'}}><img id="apex" onClick={this.projectUrl} src={require('../../public/icons/icons_set-new-reduction-3.png')} alt="logo"/><figcaption> Чилл-аут зона <br /> &laquo;Apex&raquo; </figcaption> </div>
              <div id="3" onClick={this.closeTrigger} className="icon smooth_move" style={{left: '23%', top: '16%'}}><img id="vertu" onClick={this.projectUrl} src={require('../../public/icons/icons_set-new-reduction-4.png')} alt="logo"/><figcaption> Оформление званного ужина  &laquo;Vertu&raquo; </figcaption></div>
              <div id="4" onClick={this.closeTrigger} className="icon smooth_move" style={{left: '34%', top: '30%'}}><img id="nn" onClick={this.projectUrl} src={require('../../public/icons/icons_set-new-reduction-5.png')} alt="logo"/><figcaption> Видео-приглашение <br /> &laquo;NИ&raquo; </figcaption></div>
              <div id="5" onClick={this.closeTrigger} className="icon smooth_move" style={{left: '47%', top: '14%'}}><img id="tsvetnoy" onClick={this.projectUrl} src={require('../../public/icons/icons_set-new-reduction-6.png')} alt="logo"/><figcaption> Промо-ролик для<br /> ТЦ &laquo;Цветной&raquo; </figcaption></div>
              <div id="6" onClick={this.closeTrigger} className="icon smooth_move" style={{left: '62%', top: '31%'}}><img id="digital_dreams_of_russia" onClick={this.projectUrl}src={require('../../public/icons/icons_set-new-reduction-7.png')} alt="logo"/><figcaption> Мультимедийная выставка &laquo;Цифровые сны о России&raquo; </figcaption></div>
              <div id="7" onClick={this.closeTrigger} className="icon smooth_move" style={{left: '75%', top: '19%'}}><img id="cyclotron" onClick={this.projectUrl} src={require('../../public/icons/icons_set-new-reduction-8.png')} alt="logo"/><figcaption> Многослойная проекция <br /> &laquo;Циклотрон&raquo; </figcaption></div>
              <div id="8" onClick={this.closeTrigger} className="icon smooth_move" style={{left: '85%', top: '38%'}}><img id="psp" onClick={this.projectUrl} src={require('../../public/icons/icons_set-new-reduction-10.png')} alt="logo"/><figcaption> Выставка-вечеринка <br /> &laquo;Притащи свой проектор&raquo; </figcaption></div>
              <div id="9" onClick={this.closeTrigger} className="icon smooth_move" style={{left: '76%', top: '59%'}}><img id="troyka" onClick={this.projectUrl} src={require('../../public/icons/icons_set-new-reduction-11.png')} alt="logo"/><figcaption> Сценография для <br /> танцевального шоу <br /> &laquo;Troyka&raquo; </figcaption></div>
              <div id="10" onClick={this.closeTrigger} className="icon smooth_move" style={{left: '85%', top: '78%', width: '65px'}}><img id="arsenicum" onClick={this.projectUrl} src={require('../../public/icons/icons_set-new-reduction-12.png')} alt="logo" /> <figcaption> Ролик для <br /> &laquo;Arsenicum&raquo; </figcaption> </div>
              <div id="11" onClick={this.closeTrigger} className="icon smooth_move" style={{left: '60%', top: '67%'}}><img id="turbo_yulia" onClick={this.projectUrl}  src={require('../../public/icons/icons_set-new-reduction-13.png')} alt="logo"/><figcaption> Ролик для <br /> &laquo;Turbo Yulia&raquo; </figcaption></div>
              <div id="12" onClick={this.closeTrigger} className="icon smooth_move" style={{left: '45%', top: '48%'}}><img id="siemens" onClick={this.projectUrl}  src={require('../../public/icons/icons_set-new-reduction-14.png')} alt="logo"/><figcaption> Сценография <br /> &laquo;Siemens &mdash; 160 лет в России&raquo; </figcaption></div>
              <div id="13" onClick={this.closeTrigger} className="icon smooth_move" style={{left: '36%', top: '69%'}}><img id="white_jaguar" onClick={this.projectUrl}  src={require('../../public/icons/icons_set-new-reduction-15.png')} alt="logo"/><figcaption> Шоу запуска <br /> лимитированной серии <br /> &laquo;White Jaguar&raquo; </figcaption></div>
              <div id="14" onClick={this.closeTrigger} className="icon smooth_move" style={{left: '49%', top: '78%'}}><img id="m_sli" onClick={this.projectUrl} src={require('../../public/icons/icons_set-new-reduction-16.png')} alt="logo"/><figcaption> Интерактивная <br /> инсталляция <br /> &laquo;М_СЛИ&raquo; </figcaption></div>
              <div id="15" onClick={this.closeTrigger} className="icon smooth_move" style={{left: '23%', top: '76%', width: '65px'}}><img id="nina_donis" onClick={this.projectUrl} src={require('../../public/icons/icons_set-new-reduction-9.png')} alt="logo"/><figcaption> Капсульная коллекция <br /> &laquo;NINA DONIS&raquo; </figcaption></div>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div>
        {mainRender}
        <div className="logo" id="logo"><img onClick={this.toMain} src="https://github.com/4s4r/4s4r_media/raw/master/icons/4s4r_logo.png" alt="" /></div>
        {projectRender}
        <div className="about" id="about" onClick={this.aboutPopup}>О НАС</div>
        <div id="about_popup" className="about_popup" style={{display: 'none'}}>
          <div className="line_top"></div>
          <div className="about_block">
            <p className="about_heading">О НАС</p>
            <div className="about_img">
              <img src="https://github.com/4s4r/4s4r_media/raw/master/4s4r_team.jpg" />
            </div>
            <div className="about_info">
              <p className="about_heading">О НАС</p>
              <p>
                Группа 4s4r (ФОСФОР) — московский коллектив, создающий абстрактную графику и медиа объекты. Возник в декабре 2011 года в Москве. В своих работах команда придерживается эстетики минимализма, исследует пространство символов, геометрии, элементарных форм.
              </p>
              <ul>
                <li>Участники</li>
                <li><a target="_blank" href="https://www.facebook.com/alex.platonov.10?fref=ts"> Лёша Платонов </a></li>
                <li><a target="_blank" href="https://www.facebook.com/sachkov"> Миша Сачков </a></li>
                <li><a target="_blank" href="https://www.facebook.com/alexey.orlov.7"> Лёша Орлов</a></li>
              </ul>
              <ul>
                <li>Контакты</li>
                <li><a target="_blank" href="https://www.facebook.com/4S4R-411199642224950/"> Facebook </a> </li>
                <li><a target="_blank" href="http://nknzn.tumblr.com"> Tumblr </a> </li>
                <li><a target="_blank" href="https://vimeo.com/hello4s4r"> Vimeo </a> </li>
                <li><a target="_blank" href="mailto:4s4r.info@gmail.com"> 4s4r.info@gmail.com </a> </li>
              </ul>
              <p>Проект ФОСФОР прекратил свое существование в 2017 году.</p>
            </div>
          </div>
          <div onClick={this.aboutPopup} id="close_btn">ЗАКРЫТЬ</div>
        </div>
      </div>
    );
  }
}
