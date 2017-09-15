import React, { Component } from 'react';

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupOpened: false
    }
    this.switcher = this.switcher.bind(this);
    this.playVideo = this.playVideo.bind(this);
  };

  playVideo(e) {
    let playBtn = e.target,
        fullVideo = playBtn.nextSibling;
    fullVideo.play();
  }

  videoClick() {
    let video = document.getElementById('fullscreen_video'),
        cursor = document.getElementById('cursor');
    if (video.paused) {
      video.play();
      cursor.innerHTML = 'Остановить';
    } else {
      video.pause();
      cursor.innerHTML = 'Продолжить';
    }
  };

  videoOver() {
    let video = document.getElementById('fullscreen_video'),
        cursor = document.getElementById('cursor');
    if (video.paused) {
      document.querySelector('body').style.cursor = 'none';
      cursor.innerHTML = 'Продолжить';
    } else {
      document.querySelector('body').style.cursor = 'none';
      cursor.innerHTML = 'Остановить';
    }
  }

  videoOut() {
    let cursor = document.getElementById('cursor');
    document.querySelector('body').style.cursor = 'auto';
    cursor.innerHTML = '';
  }

  switcher() {
    let isClosed = this.state.popupOpened,
        popup = document.getElementById('popup'),
        video = document.getElementById('fullscreen_video');
    if (isClosed == false) {
      popup.classList.remove('fadeOut')
      popup.classList.add('fadeIn')
      popup.style.display = 'block'
      video.pause();
      this.setState({
        popupOpened: true
      })
    } else if (isClosed == true){
      popup.classList.remove('fadeIn')
      popup.classList.add('fadeOut')
      setTimeout(function () {
        popup.style.display = 'none'
      }, 300)
      video.play();
      this.setState({
        popupOpened: false
      })
    }
  }

  componentDidMount() {

    document.querySelector('body').style.cursor = 'none';

    let video = document.getElementById('fullscreen_video'),
        seekBar = document.getElementById('seek_bar'),
        progressBar = document.getElementById('progress_bar'),
        timer = document.getElementById('timer'),
        video_controls = document.getElementById('video_controls'),
        popup = document.getElementById('popup'),
        cursorX, cursorY, t, delay = 3000,
        cursor = document.getElementById('cursor'),
        fullscreen_block = document.getElementById('fullscreen_block'),
        footer = document.querySelector('.footer'),
        logo = document.querySelector('.logo_project'),
        project_popup = document.getElementById('project_popup'),
        about_btn = document.getElementById('about_btn'),
        gallery = document.getElementById('gallery'),
        gallery_photoes = gallery.querySelectorAll('div > img'),
        active = false;

    for (let i = 0; i < gallery_photoes.length ; i++) {
      if (gallery_photoes) {
        (function(i) {
          gallery_photoes[i].addEventListener('click' , function(e) {
            const img = e.target;
            const body = document.getElementsByTagName('body')[0];
            const wrapperTop = document.getElementById('gallery').offsetTop;
            const wWidth = window.innerWidth;
            const wHeight = window.innerHeight;
            const wDimensions = wWidth/wHeight;

            const viewportOffset = e.target.getBoundingClientRect();

            if (img.parentNode.classList.contains('active')) {
              img.parentNode.classList.remove('active');
              body.classList.remove('hidden');

              img.setAttribute('style','transform:translate(0,0) scale(1); -webkit-transform:translate(0,0) scale(1); width:100%; height: auto; z-index: 1; cursor: zoom-in;');
              popup.style.overflowY = 'auto';
            } else if (wWidth > 1024) {
              const imgNaturalWidth = img.naturalWidth;
              const imgNaturalHeight = img.naturalHeight;

              const imgWidth = img.width;
              const imgHeight = img.height;
              const imgDimensions = imgWidth/imgHeight;

              img.parentNode.classList.add('active');
              body.classList.add('hidden');

              let scale;
              let x;
              const y = wHeight/2 - viewportOffset.top - imgHeight/2;

              if (wWidth > 1200) {
                x = wWidth/2 - viewportOffset.left - imgWidth/2;
              } else {
                x = wWidth/2 - viewportOffset.left - imgWidth/2;
              }

              if (wDimensions > imgDimensions) {
                if (imgNaturalHeight > wHeight) {
                  scale = wHeight/imgHeight;
                } else {
                  scale = imgNaturalHeight/imgHeight;
                }

                img.setAttribute('style','transform:translate(' + x + 'px,' + y + 'px) scale(' + scale + '); -webkit-transform:translate(' + x + 'px,' + y + 'px) scale(' + scale + '); width:100%; z-index: 1001; cursor: zoom-out;');
                popup.style.overflowY = 'hidden';
              } else {
                if (imgNaturalWidth > wWidth) {
                  scale = wWidth/imgWidth;
                } else {
                  scale = imgNaturalWidth/imgWidth;
                }

                img.setAttribute('style','transform:translate(' + x + 'px,' + y + 'px) scale(' + scale + '); -webkit-transform:translate(' + x + 'px,' + y + 'px) scale(' + scale + '); width:100%; z-index: 1001; cursor: zoom-out;');
                popup.style.overflowY = 'hidden';
              }
            }
          });
        })(i);
      }
    }

    if (Modernizr.touch) {
      video.onload = function() {
        video.play();
      }
    } else {
      video.onload = function() {
        video.play();
      }
      function clear() {
        footer.classList.add('clear');
        logo.classList.add('clear');
        clearTimeout(t);
        clearTimeout(t1);
      }

      footer.addEventListener('mouseover', clear);
      logo.addEventListener('mouseover', clear);
      footer.addEventListener('mouseout', clear);
      logo.addEventListener('mouseout', clear);

      function hiding() {
        footer.classList.remove('show_bot');
        logo.classList.remove('show_top');
        footer.classList.remove('clear');
        logo.classList.remove('clear');
        footer.classList.add('hide_bot');
        logo.classList.add('hide_top');
        return false
      }

      let t1 = setTimeout(hiding, delay);

      video.addEventListener('mousemove', function(event) {
        cursorX = event.clientX;
        cursorY = event.clientY;

        clearTimeout(t);

        footer.classList.remove('hide_bot');
        logo.classList.remove('hide_top');

        footer.classList.add('show_bot');
        logo.classList.add('show_top');

        if (this.state.popupOpened == false) {
          t = setTimeout(hiding, delay);
        } else {
          clearTimeout(t);
        }

      }.bind(this));
    }

    video.addEventListener('mouseout', function() {
      clearTimeout(t);
    })

    setInterval(function () {
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
    }, 1000/60);

    setInterval(function() {
        let duration = video.duration,
            currentTime = video.currentTime,
            minutes = Math.floor((duration - currentTime)/ 60),
            seconds = Math.floor(duration - currentTime - minutes * 60),
            currentSeconds;
        if (seconds < 10) {
          currentSeconds = '0' + seconds;
        } else {
          currentSeconds = seconds;
        }
        if (minutes !== minutes) {
          timer.innerHTML = '0:0';
        } else {
          timer.innerHTML = minutes + ':' + currentSeconds;
          video.muted = false;
        }
    }, 100);

    let move = function (e) {
      let x = ((e.pageX - 20)/seekBar.offsetWidth) * 100;
      progressBar.style.width = x + '%';
      let time = video.duration * (x / 100);
      video.currentTime = time;
    };

    video.addEventListener('timeupdate', function() {
      let time = (video.currentTime/video.duration) * 100;
      progressBar.style.width = time + '%';
      if (document.getElementById('play_btn')) {
        document.getElementById('play_btn').style.display = 'none'
      }
    });
    seekBar.addEventListener('click', function(e) {
      let x = ((e.pageX - 20)/seekBar.offsetWidth) * 100;
      progressBar.style.width = x + '%';
      let time = video.duration * (x / 100);
      video.currentTime = time;
    });
    seekBar.addEventListener('mousedown', function() {
      seekBar.addEventListener('mousemove', move, false);
      video.pause();
    });
    seekBar.addEventListener('mouseup', function() {
      seekBar.removeEventListener('mousemove', move, false);
      video.play();
    });
    seekBar.addEventListener('touchmove', function(e) {
      let x = ((e.changedTouches[0].clientX - 20)/seekBar.offsetWidth) * 100;
      progressBar.style.width = x + '%';
      let time = video.duration * (x / 100);
      video.currentTime = time;
      video.play();
    }, false);
  }
  render() {
    let projectNodes = this.props.data,
        id = this.props.id,
        heading, fullscreenVideo, videoPoster, team, description, mediaContent, swiperContent, galleryPhotoes, playerBtn;

    if (Modernizr.touch) {
      playerBtn = ( <img onClick={this.playVideo} id="play_btn" className="play_btn" src="https://github.com/4s4r/4s4r_media/raw/master/icons/4s4r_play_btn.png" /> )
    } else {
      playerBtn = ''
    }
    for (var i = 0; i < projectNodes.length; i++) {
      if (['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'].indexOf(id) > -1) {
        heading = (projectNodes[id].name),
        fullscreenVideo = (projectNodes[id].video),
        videoPoster = (projectNodes[id].video_poster),
        mediaContent = (projectNodes[id].media_content),
        swiperContent = ( projectNodes[id].swiper);
        if (swiperContent) {
          galleryPhotoes = swiperContent.map(function(obj) {
            return (
              <div className={obj.type}><img src={obj.url} /></div>
            )
          })
        } else {
          galleryPhotoes = '';
        }
        if (this.state.popupOpened == true) {
          team = (projectNodes[id].team),
          description = (projectNodes[id].description);
        } else {
          team = '',
          description = '';
        }
      } else {
        heading = '',
        fullscreenVideo = '',
        videoPoster = '',
        mediaContent = '',
        swiperContent = '';
      }
    }
    return (
      <div id="project_popup" className="fadeIn">
        <div className="cursor" id="cursor" style={{top: '-150px'}}></div>
        <div className="logo_project" id="logo"><img onClick={this.props.toMain} src="https://github.com/4s4r/4s4r_media/raw/master/icons/4s4r_logo.png" alt="" /></div>
        <div className="fullscreen_video" id="fullscreen_block">
          <div className="videoWrapper" id="videoWrapper">
            {playerBtn}
            <video autoPlay muted playsInline id="fullscreen_video" className="fullscreen" poster={videoPoster} onClick={this.videoClick} onMouseOut={this.videoOut} onMouseMove={this.videoOver} src={fullscreenVideo}></video>
          </div>
          <div id="about_btn" onClick={this.switcher}>О Проекте</div>
          <div className="footer">
            <div id="about_btn" onClick={this.switcher}>О Проекте</div>
            <div className="status_bar">
              <div className="heading" dangerouslySetInnerHTML={{__html: heading}}></div>
              <div id="video_controls" className="video_controls">
                <div id="seek_bar">
                  <div id="progress_line"></div>
                  <div id="progress_bar"></div>
                </div>
                <p className="timer" id="timer">2:26</p>
              </div>
            </div>
          </div>
        </div>
        <div className="popup fadeIn" id="popup">
          <div className="line_top">
            <div className="logo" id="logo"><img onClick={this.props.toMain} src="https://github.com/4s4r/4s4r_media/raw/master/icons/4s4r_logo.png" alt="" /></div>
            <div id="close_btn" onClick={this.switcher}>Закрыть</div>
          </div>
          <div className="popup_content">

            <div className="heading" dangerouslySetInnerHTML={{__html: heading}}></div>
            <div className="bars">
              <div className="leftbar" dangerouslySetInnerHTML={{__html: team}}>
              </div>
              <div className="rightbar">
                <div className="description" dangerouslySetInnerHTML={{__html: description}}>
                </div>
                <div className="media_content" dangerouslySetInnerHTML={{__html: mediaContent}}>
                </div>
                <div id="gallery">
                  {galleryPhotoes}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

