(function() {


  angular
    .module("myApp")
    .factory("ContactService", ContactService);

  DataService.$inject = [];


  function ContactService() {
    var contactList = [
      {
        gmail: 'adrian.delpha@gmail.com',
        gmailLogo: 'http://vignette4.wikia.nocookie.net/logopedia/images/5/54/Gmail_icon.png/revision/latest?cb=20150709135925'
      },
      {
        youtube: 'https://www.youtube.com/user/DelphaDesign',
        youtubeLogo: 'https://www.youtube.com/yt/brand/media/image/YouTube-logo-full_color.png'
      },
      {
        deviantart: 'http://delphadesign.deviantart.com/',
        deviantartLogo: 'http://www.userlogos.org/files/logos/dfordesmond/deviantart%201.png'
      },
      {
        linkedin: 'https://www.linkedin.com/in/adriandelpha',
        linkedinLogo: 'http://oi68.tinypic.com/f0xkc8.jpg'
      },
      {
        gitHub: 'https://github.com/Ishmaru',
        gitHubLogo: 'http://media.creativebloq.futurecdn.net/sites/creativebloq.com/files/images/2013/06/16-logo.jpg'
      },
      {
        indieDb: 'http://www.indiedb.com/members/delphadesign',
        indieDbLogo: 'http://static.indiedb.com/cutoff/images/default/bg_header_logo.png'
      }
    ];

    return {contactList};
  };

})();



