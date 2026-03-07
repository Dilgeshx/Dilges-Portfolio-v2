$(window).on('load',function(){
  gsap.to('#loader',1,{y:"-100%"});
  gsap.to('#loader',1,{opacity:0});
  gsap.to('#loader',0,{display:"none",delay:1});
  gsap.to('#header',0,{display:"block",delay:1})
  gsap.to('#navigation-content',0,{display:"none"});
  gsap.to('#navigation-content',0,{display:"flex",delay:1});
})
$(function(){
     $('.menubar').on('click',function(){
         gsap.to('#navigation-content',.6,{y:0});
     })
     $('.navigation-close').on('click',function(){
        gsap.to('#navigation-content',.6,{y:"-100%"});
    });
   }); 

$(function(){
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };
      
      TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      
        var that = this;
        var delta = 200 - Math.random() * 100;
      
        if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 100;
        }
      
        setTimeout(function() {
          that.tick();
        }, delta);
      };
      
      window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-rotate');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0em solid #666 ; }";
        document.body.appendChild(css);
      };
})
$(function(){
    function setActiveTopNav(tab){
      $('.top-nav a').removeClass('active');
      if(tab === 'about'){
        $('#about-link').addClass('active');
      }else{
        $('#home-link').addClass('active');
      }
    }
    setActiveTopNav('home');

    $('#about-link').on('click',function(e){
      e.preventDefault();
      gsap.to('#navigation-content',0,{display:"none",delay:.7});
      gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
  gsap.to('#header',0,{display:"none"});
gsap.to('#blog',0,{display:"none"});
gsap.to('#portfolio',0,{display:"none"});
   gsap.to('#breaker',0,{display:"block"});
   gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#contact',0,{display:"none"});
   gsap.to('#breaker',0,{display:"none",delay:2});
   gsap.to('#breaker-two',0,{display:"none",delay:2});
   gsap.to('#about',0,{display:"block",delay:.7});
   gsap.to('#navigation-content',0,{display:'flex',delay:2});
   setActiveTopNav('about');
 })
 $('#about-link-menu').on('click',function(e){
  e.preventDefault();
  $('#about-link').trigger('click');
 })
 $('#contact-link').on('click',function(){
   gsap.to('#navigation-content',0,{display:"none",delay:.7});
   gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"none"});
gsap.to('#about',0,{display:"none"});
gsap.to('#blog',0,{display:"none"});
gsap.to('#portfolio',0,{display:"none"});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#breaker-two',0,{display:"none",delay:2});
gsap.to('#contact',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})
$('#portfolio-link').on('click',function(){
  gsap.to('#navigation-content',0,{display:"none",delay:.7});
  gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"none"});
gsap.to('#about',0,{display:"none"});
gsap.to('#contact',0,{display:"none"});
gsap.to('#blog',0,{display:"none"});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#breaker-two',0,{display:"none",delay:2});
gsap.to('#portfolio',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})
$('#blog-link').on('click',function(){
  gsap.to('#navigation-content',0,{display:"none",delay:.7});
  gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"none"});
gsap.to('#about',0,{display:"none"});
gsap.to('#portfolio',0,{display:"none"});
gsap.to('#contact',0,{display:"none"});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#breaker-two',0,{display:"none",delay:2});
gsap.to('#blog',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})
$('#home-link').on('click',function(e){
  e.preventDefault();
  gsap.to('#navigation-content',0,{display:"none",delay:.7});
  gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"none"});
gsap.to('#about',0,{display:"none"});
gsap.to('#portfolio',0,{display:"none"});
gsap.to('#contact',0,{display:"none"});
gsap.to('#blog',0,{display:"none"});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#breaker-two',0,{display:"none",delay:2});
gsap.to('#header',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
setActiveTopNav('home');
})
$('#home-link-menu').on('click',function(e){
  e.preventDefault();
  $('#home-link').trigger('click');
})

})
$(function(){
 var $cursor = $('.cursor')
  var root = document.documentElement;
  var pointerX = window.innerWidth * 0.5;
  var pointerY = window.innerHeight * 0.5;
  var bgX = pointerX;
  var bgY = pointerY;
  var bgTicking = false;

   function cursormover(e){

    gsap.set($cursor, {
      x: e.clientX,
      y: e.clientY
    });
    pointerX = e.clientX;
    pointerY = e.clientY;
    if(!bgTicking){
      bgTicking = true;
      requestAnimationFrame(updateBackgroundCursor);
    }
   }
   function updateBackgroundCursor(){
    // Smoothly lerp the glow position to create a subtle delayed follow.
    bgX += (pointerX - bgX) * 0.085;
    bgY += (pointerY - bgY) * 0.085;
    root.style.setProperty('--bg-cursor-x', bgX + 'px');
    root.style.setProperty('--bg-cursor-y', bgY + 'px');

    if(Math.abs(pointerX - bgX) > 0.1 || Math.abs(pointerY - bgY) > 0.1){
      requestAnimationFrame(updateBackgroundCursor);
      return;
    }
    bgTicking = false;
   }
   function cursorhover(e){
    gsap.to( $cursor,{
     scale:1.4,
     opacity:1
    })
    
  }
  function cursor(e){
    gsap.to( $cursor, {
     scale:1,
     opacity:.6
    })
  }

  gsap.set($cursor, { xPercent: -50, yPercent: -50 });
  root.style.setProperty('--bg-cursor-x', bgX + 'px');
  root.style.setProperty('--bg-cursor-y', bgY + 'px');
  $(window).on('mousemove',cursormover);
  $('.menubar').hover(cursorhover,cursor);
  $('a').hover(cursorhover,cursor);
  $('.navigation-close').hover(cursorhover,cursor);
  $('#theme-toggle').hover(cursorhover,cursor);

})

$(function(){
  var storageKey = 'dilges-theme';
  var themes = ['default', 'cyber', 'galaxy'];
  var themeClasses = {
    cyber: 'theme-cyber',
    galaxy: 'theme-galaxy'
  };
  var $body = $('body');
  var $toggle = $('#theme-toggle');
  var activeTheme = 'default';

  function applyTheme(themeName){
    var nextTheme = themes.indexOf(themeName) >= 0 ? themeName : 'default';
    activeTheme = nextTheme;
    $body.removeClass(themeClasses.cyber + ' ' + themeClasses.galaxy);
    if(nextTheme !== 'default'){
      $body.addClass(themeClasses[nextTheme]);
    }
    $toggle.attr('aria-pressed', nextTheme !== 'default' ? 'true' : 'false');
  }

  var savedTheme = null;
  try {
    savedTheme = localStorage.getItem(storageKey);
  } catch (err) {
    savedTheme = null;
  }
  applyTheme(savedTheme);

  $toggle.on('click', function(e){
    e.preventDefault();
    var currentIndex = themes.indexOf(activeTheme);
    var nextTheme = themes[(currentIndex + 1) % themes.length];
    applyTheme(nextTheme);
    try {
      localStorage.setItem(storageKey, nextTheme);
    } catch (err) {
      // Ignore storage errors in privacy-limited contexts.
    }
  });
});

$(function(){
  var $heroName = $('#hero-name');
  if(!$heroName.length){
    return;
  }

  var targetName = String($heroName.data('name') || $heroName.text()).trim();
  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@$%&*+-_=';

  function randomChar(){
    return randomChars[Math.floor(Math.random() * randomChars.length)];
  }
  function randomSeedFromName(){
    var seed = '';
    for(var i = 0; i < targetName.length; i++){
      seed += targetName[i] === ' ' ? ' ' : randomChar();
    }
    return seed;
  }

  function scrambleToName(){
    var frame = 0;
    var totalFrames = Math.max(28, targetName.length * 3);
    $heroName.removeClass('is-ready');

    var timer = setInterval(function(){
      var revealCount = Math.floor((frame / totalFrames) * targetName.length);
      var nextText = '';

      for(var i = 0; i < targetName.length; i++){
        var currentChar = targetName[i];
        if(currentChar === ' '){
          nextText += ' ';
        } else if(i < revealCount){
          nextText += currentChar;
        } else {
          nextText += randomChar();
        }
      }

      $heroName.text(nextText);
      $heroName.attr('data-text', nextText);
      frame++;

      if(frame > totalFrames){
        clearInterval(timer);
        $heroName.text(targetName);
        $heroName.attr('data-text', targetName);
        $heroName.addClass('is-ready');
      }
    }, 42);
  }

  $heroName.text(randomSeedFromName());
  $heroName.attr('data-text', $heroName.text());
  $heroName.css('visibility', 'visible');

  $(window).on('load', function(){
    setTimeout(scrambleToName, 920);
  });
});

$(function(){
  var $dock = $('#music-dock');
  var $audio = $('#site-audio');
  var $cover = $('#music-cover');
  var $title = $('#music-now-title');
  var $play = $('#music-play');
  if(!$dock.length || !$audio.length || !$play.length){
    return;
  }
  if(!$dock.parent().is('body')){
    $dock.appendTo('body');
  }
  $dock.css('display', 'flex');

  var playlist = [
    { title: 'The Voidz - Lazy Boy', src: 'audio/track-1.mp3', cover: 'images/lazy-boy-cover.png' }
  ];
  var defaultVolume = 0.22;
  var current = 0;
  var unlocked = false;

  function syncState(){
    $play.text($audio[0].paused ? '>' : '||');
    $dock.toggleClass('playing', !$audio[0].paused);
  }
  function loadTrack(index){
    if(!playlist.length){
      $title.text('No track selected');
      return;
    }
    current = (index + playlist.length) % playlist.length;
    $audio.attr('src', playlist[current].src);
    $title.text(playlist[current].title);
    $cover.attr('src', playlist[current].cover || 'images/lazy-boy-cover.png');
  }
  function tryPlay(){
    $audio[0].play().then(function(){
      unlocked = true;
      syncState();
    }).catch(function(){
      syncState();
    });
  }

  loadTrack(0);
  $audio[0].volume = defaultVolume;
  syncState();

  $play.on('click', function(){
    if($audio[0].paused){
      tryPlay();
    }else{
      $audio[0].pause();
    }
  });
  $audio.on('ended', function(){
    loadTrack(current + 1);
    tryPlay();
  });
  $audio.on('play pause', syncState);

  $play.hover(
    function(){ gsap.to($('.cursor'), { scale: 1.25, opacity: 1 }); },
    function(){ gsap.to($('.cursor'), { scale: 1, opacity: .6 }); }
  );

  $(window).on('load', function(){
    setTimeout(tryPlay, 450);
  });
  $(document).one('pointerdown keydown touchstart', function(){
    if(!unlocked && $audio[0].paused){
      tryPlay();
    }
  });
});
