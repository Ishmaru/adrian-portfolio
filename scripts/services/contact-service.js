(function() {


  angular
    .module("myApp")
    .factory("ContactService", ContactService);

  ContactService.$inject = [];


  function ContactService() {
    var contactList = [
      {
        name: 'Gmail',
        email: 'adrian.delpha@gmail.com',
        logo: 'https://www.agrega.hn/wp-content/uploads/2016/02/logo_lockup_gmail_icon_horizontal.png'
      },
      {
        name: 'Linked In',
        url: 'https://www.linkedin.com/in/adriandelpha',
        logo: 'http://oi68.tinypic.com/f0xkc8.jpg'
      },
      {
        name: 'Git Hub',
        url: 'https://github.com/Ishmaru',
        logo: 'http://oi68.tinypic.com/jaucdx.jpg'
      },
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/user/DelphaDesign',
        logo: 'https://www.youtube.com/yt/brand/media/image/YouTube-logo-full_color.png'
      },
      {
        name: 'DeviantArt',
        url: 'http://delphadesign.deviantart.com/',
        logo: 'http://logok.org/wp-content/uploads/2014/12/DeviantArt-logo-wordmark-1024x762.png'
      },
      {
        name: 'IndieDB',
        url: 'http://www.indiedb.com/members/delphadesign',
        logo: 'http://www.steverichey.com/wp-content/uploads/2013/11/indiedb.png'
      }
    ];

    return {contactList};
  };

})();



