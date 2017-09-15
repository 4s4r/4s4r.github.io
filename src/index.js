import React from 'react'
import { render } from 'react-dom'
import Main from './components/Main'

require('../public/styles/main.scss')
require('../public/styles/content.scss')
// require('../dist/main.js')


let data = [
  {
    url: 'chess',
    name: 'Открытие чемпионата по шахматам',
    quantity: 0,
    video: 'https://s3.eu-central-1.amazonaws.com/4s4r/chess.mp4',
    video_poster: 'https://github.com/4s4r/4s4r_media/raw/master/posters/poster_chess.jpg',
    team: 'ГРАФИКА <br /> 4S4R <br /> Аня Титовец <br /> <br /> Хореограф <br /> Анна Абалихина',
    description: 'Танцевальное шоу на церемонии открытия Турнира претендентов на звание чемпиона мира по шахматам, 2016. <br /> <br /> Фото галерея:',
    media_content: '',
    swiper: [
        {
        url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/chess_photo/ALM-151.jpg',
        type: 'col_1'
        },
        {
        url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/chess_photo/ALM-153.jpg',
        type: 'col_2 col_left'
        },
        {
        url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/chess_photo/ALM-157.jpg',
        type: 'col_2 col_right'
        },
        {
        url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/chess_photo/ALM-159.jpg',
        type: 'col_1'
        }
    ]
  },
  {
    url: 'acid_noodles',
    name: 'Интерактивная выставка &laquo;Acid Noodles&raquo;',
    quantity: 1,
    video: 'https://s3.eu-central-1.amazonaws.com/4s4r/acid_noodles.mp4',
    video_poster: 'https://github.com/4s4r/4s4r_media/raw/master/posters/poster_acid_noodles.jpg',
    team: 'ГРАФИКА <br /> 4S4R <br /> Сергей Завьялов <br /> <br /> ЗВУК <br /> Siriusmo ',
    description: 'Контент для интерактивной выставки Acid Noodles в ТЦ &laquo;Цветной&raquo;, 2016. <br /> <br /> Фото галерея:',
    media_content: '',
    swiper: [
        {
        url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/acid_noodles_photo/double(1).jpg',
        type: 'col_1'
        },
        {
        url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/acid_noodles_photo/double-1.jpg',
        type: 'col_1'
        },
        {
        url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/acid_noodles_photo/a1_1000.png',
        type: 'col_1'
        },
        {
        url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/acid_noodles_photo/double.jpg',
        type: 'col_1'
        }
    ]
  },
  {
    url: 'apex',
    name: 'Чилл-аут зона &laquo;Apex&raquo; ',
    quantity: 2,
    video: 'https://s3.eu-central-1.amazonaws.com/4s4r/apex.mp4',
    video_poster: 'https://github.com/4s4r/4s4r_media/raw/master/posters/poster_apex.jpg',
    team: 'ГРАФИКА <br /> 4S4R <br /> <br /> ЗВУК <br /> 4S4R ',
    description: 'Чилл-аут зона на рейве RGB \ ARMA17, 2015. <br /> <br /> Фото галерея:',
    media_content: '',
    swiper: [
        {
            url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/apex_photo/04.png',
            type: 'col_2 col_left'
        },
        {
            url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/apex_photo/13.png',
            type: 'col_2 col_right'
        },
        {
            url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/apex_photo/11.png',
            type: 'col_2 col_left'
        },
        {
            url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/apex_photo/21.png',
            type: 'col_2 col_right'
        },
        {
            url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/apex_photo/60.png',
            type: 'col_1'
        },
        {
            url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/apex_photo/14.png',
            type: 'col_2 col_left'
        },
        {
            url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/apex_photo/20.png',
            type: 'col_2 col_right'
        },
        {
            url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/apex_photo/22.png',
            type: 'col_2 col_left'
        },
        {
            url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/apex_photo/25.png',
            type: 'col_2 col_right'
        },
        {
            url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/apex_photo/26.png',
            type: 'col_2 col_left'
        },
        {
            url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/apex_photo/30.png',
            type: 'col_2 col_right'
        },
        {
            url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/apex_photo/IMG_7001.jpg',
            type: 'col_1'
        },
        {
            url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/apex_photo/31.png',
            type: 'col_2 col_left'
        },
        {
            url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/apex_photo/32.png',
            type: 'col_2 col_right'
        },
        {
            url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/apex_photo/29.png',
            type: 'col_2 col_left'
        },
        {
            url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/apex_photo/51.png',
            type: 'col_2 col_right'
        },
        {
            url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/apex_photo/IMG_7012.jpg',
            type: 'col_1'
        },
        {
            url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/apex_photo/33.png',
            type: 'col_2 col_left'
        },
        {
            url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/apex_photo/42.png',
            type: 'col_2 col_right'
        },
        {
            url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/apex_photo/52.png',
            type: 'col_2 col_left'
        },
        {
            url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/apex_photo/56.png',
            type: 'col_2 col_right'
        },
        {
            url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/apex_photo/IMG_7016.jpg',
            type: 'col_1'
        }
    ]
  },
  {
    url: 'vertu',
    name: 'Оформление званого ужина  &laquo;Vertu&raquo;',
    quantity: 3,
    video: 'https://s3.eu-central-1.amazonaws.com/4s4r/vertu.mp4',
    video_poster: 'https://github.com/4s4r/4s4r_media/raw/master/posters/poster_vertu.jpg',
    team: 'ГРАФИКА <br /> 4S4R <br /> Аня Титовец <br /> <br /> ЗВУК <br /> 4S4R',
    description: 'Оформление званного ужина Vertu в Электротеатре имени Станиславского, 2015.',
    media_content: ''
  },
  {
    url: 'nn',
    name: 'Видео-приглашение &laquo;NИ&raquo;',
    quantity: 4,
    video: 'https://s3.eu-central-1.amazonaws.com/4s4r/nn.mp4',
    video_poster: 'https://github.com/4s4r/4s4r_media/raw/master/posters/poster_nn.jpg',
    team: 'ГРАФИКА <br /> 4S4R <br /> <br /> ЗВУК <br /> Monoleak',
    description: 'Видео-приглашение на мероприятие вымышленной корпорации, 2015.',
    media_content: ''
  },
  {
    url: 'tsvetnoy',
    name: 'Промо-ролик для ТЦ &laquo;Цветной&raquo;',
    quantity: 5,
    video: 'https://s3.eu-central-1.amazonaws.com/4s4r/tsvetnoy.mp4',
    video_poster: 'https://github.com/4s4r/4s4r_media/raw/master/posters/poster_tsvetnoy.jpg',
    team: 'ГРАФИКА <br /> 4S4R <br /> Даша Сусак <br /> <br /> Продюсирование <br /> 4S4R <br /> Мария Пудан',
    description: 'Промо-ролик распродаж в ТЦ &laquo;Цветной&raquo;, 2015.',
    media_content: ''
  },
  {
    url: 'digital_dreams_of_russia',
    name: 'Мультимедийная выставка &laquo;Цифровые сны о России&raquo;',
    quantity: 6,
    video: 'https://s3.eu-central-1.amazonaws.com/4s4r/digital_dreams_of_russia.mp4',
    video_poster: 'https://github.com/4s4r/4s4r_media/raw/master/posters/poster_digital_dreams.jpg',
    team: 'ГРАФИКА <br /> 4S4R <br /> Аня Титовец <br /> Кир Хачитурян<br /> <br /> ЗВУК <br /> Monoleak',
    description: 'Контент мультимедийной выставки &laquo;Цифровые сны о России&raquo;, Гонконг, 2015.',
    media_content: ''
  },
  {
    url: 'cyclotron',
    name: 'Многослойная проекция &laquo;Циклотрон&raquo;',
    quantity: 7,
    video: 'https://s3.eu-central-1.amazonaws.com/4s4r/cyclotron.mp4',
    video_poster: 'https://github.com/4s4r/4s4r_media/raw/master/posters/poster_cyclotron.jpg',
    team: 'ГРАФИКА <br /> 4S4R <br /> Даша Сусак <br /> <br /> ЗВУК <br /> 4S4R <br /> Миша Тюкалин <br /><br />Публикации <br /><a href="http://special.theoryandpractice.ru/4s4r" target="_blank">TNP</a><br /><a href="http://bernaskoni.com/projects/arc/" target="_blank">Arc</a>',
    description: 'Многослойная проекция внутри архитектурного объекта Арка в рамках фестиваля &laquo;Ночь новых медиа&raquo; в Николо-Ленивце, 2014. <br /><br /> ',
    media_content: '<div class="small_video"><div class="videoWrapper_small"><iframe src="https://player.vimeo.com/video/80882242?color=ff0000&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div><br /><div class="description">Показан на Международном фестивале полнокупольного искусства Планетарий Музея истории космонавтики им. К.Э. Циолковского<br /> Калуга, 2013</div><div class="small_video"><div class="videoWrapper_small"><iframe src="https://player.vimeo.com/video/109970419?color=ff0000&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div><br />'
  },
  {
    url: 'psp',
    name: 'Выставка-вечеринка &laquo;Притащи свой проектор&raquo;',
    quantity: 8,
    video: 'https://s3.eu-central-1.amazonaws.com/4s4r/psp.mp4',
    video_poster: 'https://github.com/4s4r/4s4r_media/raw/master/posters/poster_psp.jpg',
    team: 'Курирование <br /> Алексей Орлов <br /> Алексей Платонов <br /> <br /> Публикации <br /> <a href="http://blog.mathrioshka.ru/post/22205984521/%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D0%B2%D1%8B%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0-%D0%BF%D1%80%D0%B8%D1%82%D0%B0%D1%89%D0%B8-%D1%81%D0%B2%D0%BE%D0%B9-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BE%D1%80" target="_blank">mathrioshka</a>',
    description: 'Выставка-вечеринка Притащи свой проектор. <br /><br />',
    media_content: '<div class="small_video"><div class="videoWrapper_small"><iframe src="https://player.vimeo.com/video/52481253?color=ff0000&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div><br /><div class="description">Выставка-вечеринка Притащи свой проектор II, 2012 </div><div class="small_video"><div class="videoWrapper_small"><iframe src="https://player.vimeo.com/video/41139326?color=ff0000&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div><br /><div class="description">Объект для выставки-вечеринки Притащи свой проектор II, 2012</div><div class="small_video"><div class="videoWrapper_small"><iframe src="https://player.vimeo.com/video/44917855?color=ff0000&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div><br /><div class="description">Тизер выставки-вечеринки Притащи свой проектор II, 2012</div><div class="small_video"><div class="videoWrapper_small"><iframe src="https://player.vimeo.com/video/137527998?color=ff0000&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div><br /><div class="description">Контент для выставки-вечерники Притащи свой проектор II, 2012</div><div class="small_video"><div class="videoWrapper_small"><iframe width="560" height="315" src="https://www.youtube.com/embed/QARwW6QdoWE" frameborder="0" allowfullscreen></iframe></div></div><br /><div class="description">Выставка-вечеринка Притащи свой проектор, 2012</div>'
  },
  {
    url: 'troyka',
    name: 'Сценография для танцевального шоу &laquo;Troyka&raquo;',
    quantity: 9,
    video: 'https://s3.eu-central-1.amazonaws.com/4s4r/troyka.mp4',
    video_poster: 'https://github.com/4s4r/4s4r_media/raw/master/posters/poster_troyka.jpg',
    team: 'ГРАФИКА <br /> 4S4R <br /> <br /> Постановка <br /> Олег Глушков',
    description: 'Сценография для танцевального шоу в рамках проекта &laquo;Опыты&raquo; в пространстве Troyka Multispace, 2014. <br /><br />',
    media_content: '<div class="small_video"><div class="videoWrapper_small"><iframe src="https://player.vimeo.com/video/95588579?color=ff0000&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div><br /><div class="description"></div>'
  },
  {
    url: 'arsenicum',
    name: 'Ролик для &laquo;Arsenicum&raquo;',
    quantity: 10,
    video: 'https://s3.eu-central-1.amazonaws.com/4s4r/arsenicum.mp4',
    video_poster: 'https://github.com/4s4r/4s4r_media/raw/master/posters/poster_loginov.jpg',
    team: 'ГРАФИКА <br /> 4S4R  <br /> <br /> ЗВУК <br /> Factory Floor [remix by NKNZN]<br /> <br /> Публикации <br /> <a href="http://www.interviewrussia.ru/fashion/novye-russkie-filmy-rossiyskih-dizaynerov-na-londonskoy-nedele-mody" target="_blank">Interview Russia</a>',
    description: 'Ролик для марки Arsenicum в рамках New Russian Fashion in Film для London Fashion Week, 2014. <br /><br />',
    media_content: ''
  },
  {
    url: 'turbo_yulia',
    name: '&laquo;Turbo Yulia&raquo;',
    quantity: 11,
    video: 'https://s3.eu-central-1.amazonaws.com/4s4r/turbo_yulia.mp4',
    video_poster: 'https://github.com/4s4r/4s4r_media/raw/master/posters/poster_turbo_yulia.jpg',
    team: 'ГРАФИКА <br /> 4S4R <br /> <br /> ЗВУК <br /> Andrey Rodionov <br /> <br /> Публикации <br /> <a href="http://www.interviewrussia.ru/fashion/novye-russkie-filmy-rossiyskih-dizaynerov-na-londonskoy-nedele-mody" target="_blank">Interview Russia</a>',
    description: 'Ролик для марки Turbo Yulia в рамках New Russian Fashion in Film для London Fashion Week, 2014. <br /> <br /> Фото галерея:',
    media_content: '',
    swiper: [
        {
        url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/turbo_yulia_photo/1.jpg',
        type: 'col_2 col_left'
        },
        {
        url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/turbo_yulia_photo/2.jpg',
        type: 'col_2 col_right'
        },
        {
        url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/turbo_yulia_photo/6.jpg',
        type: 'col_2 col_left'
        },
        {
        url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/turbo_yulia_photo/7.jpg',
        type: 'col_2 col_right'
        },
        {
        url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/turbo_yulia_photo/3.jpg',
        type: 'col_2 col_left'
        },
        {
        url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/turbo_yulia_photo/4.jpg',
        type: 'col_2 col_right'
        },
        {
        url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/turbo_yulia_photo/9.jpg',
        type: 'col_2 col_left'
        },
        {
        url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/turbo_yulia_photo/13.jpg',
        type: 'col_2 col_right'
        },
        {
        url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/turbo_yulia_photo/5.jpg',
        type: 'col_2 col_left'
        },
        {
        url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/turbo_yulia_photo/10.jpg',
        type: 'col_2 col_right'
        },
        {
        url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/turbo_yulia_photo/11.jpg',
        type: 'col_2 col_left'
        },
        {
        url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/turbo_yulia_photo/12.jpg',
        type: 'col_2 col_right'
        },
        {
        url: 'https://github.com/4s4r/4s4r_media/raw/master/photos/turbo_yulia_photo/14.jpg',
        type: 'col_2 col_left'
        }
    ]
  },
  {
    url: 'siemens',
    name: '&laquo;Siemens &mdash; 160 лет в России&raquo;',
    quantity: 12,
    video: 'https://s3.eu-central-1.amazonaws.com/4s4r/siemens.mp4',
    video_poster: 'https://github.com/4s4r/4s4r_media/raw/master/posters/poster_siemens.jpg',
    team: 'ГРАФИКА <br /> 4S4R <br /> <br /> ЗВУК <br /> 4S4R',
    description: 'Сценография для мероприятия &laquo;Siemens - 160 лет в России&raquo;, 2013.',
    media_content: ''
  },
  {
    url: 'white_jaguar',
    name: 'Шоу запуска лимитированной серии &laquo;White Jaguar&raquo;',
    quantity: 13,
    video: 'https://s3.eu-central-1.amazonaws.com/4s4r/white_jaguar.mp4',
    video_poster: 'https://github.com/4s4r/4s4r_media/raw/master/posters/poster_jaguar.jpg',
    team: 'ГРАФИКА <br /> 4S4R <br /> Тимур Абдулов <br /> <br /> ЗВУК <br /> Андрей Poison',
    description: 'Шоу по случаю запуска лимитированной серии Jaguar White Edition, 2012.',
    media_content: ''
  },
  {
    url: 'm_sli',
    name: 'Интерактивная инсталляция &laquo;М_СЛИ&raquo;',
    quantity: 14,
    video: 'https://s3.eu-central-1.amazonaws.com/4s4r/m_sli.mp4',
    video_poster: 'https://github.com/4s4r/4s4r_media/raw/master/posters/poster_m_sli.jpg',
    team: 'ГРАФИКА <br /> 4S4R <br /> <br /> ЗВУК <br /> 4S4R <br /> Poison',
    description: 'Шоу на запуске проекта М_СЛИ в музее &laquo;Гараж&raquo;, 2011. <br /><br />',
    media_content: '<div class="small_video"><div class="videoWrapper_small"><iframe src="https://player.vimeo.com/video/33588917?color=ff0000&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div><br /><div class="description">Интерактивная инсталляция на запуске проекта М_СЛИ в музее &laquo;Гараж&raquo;, 2011</div>'
  },
  {
    url: 'nina_donis',
    name: 'Капсульная коллекция &laquo;NINA DONIS&raquo;',
    quantity: 15,
    video: 'https://s3.eu-central-1.amazonaws.com/4s4r/nina_donis.mp4',
    video_poster: 'https://github.com/4s4r/4s4r_media/raw/master/posters/poster_nina_donis.jpg',
    team: 'ГРАФИКА <br /> 4S4R <br /> <br /> ЗВУК <br /> 4S4R',
    description: 'Капсульная коллекция NINA DONIS, показанная в формате video & party, 2009.',
    media_content: ''
  }
]


document.addEventListener('DOMContentLoaded', function() {
  render(
    <Main data={data}/>,
    document.getElementById('root')
  );
});
