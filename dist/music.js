const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 3,
    audio: [
      {
        name: "兩隻老虎",
        artist: '兒歌',
        url: '/images/Avanti - Rainy Day (freetouse.com).mp3',
        cover: '/images/cat.jpg'
      },
      {
        name: '哥哥爸爸真偉大',
        artist: '兒歌',
        url: '/images/Avanti - Rainy Day (freetouse.com).mp3',
        cover: '/images/cat.jpg'
      }
    ]
});