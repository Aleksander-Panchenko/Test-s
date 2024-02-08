    // свайпер

    var swiper = new Swiper(".mySwiper", {
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: true,
        },
      });
      document.querySelector(".swiper-scrollbar").style = "height: 8px" 
  
      // часы
  
      function getTimeRemaining(endtime) {
          var t = Date.parse(endtime) - Date.parse(new Date());
          var seconds = Math.floor((t / 1000) % 60);
          var minutes = Math.floor((t / 1000 / 60) % 60);
          var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
          var days = Math.floor(t / (1000 * 60 * 60 * 24));
          return {
              'total': t,
              'days': days,
              'hours': hours,
              'minutes': minutes,
              'seconds': seconds
          };
      }
  
      function initializeClock(id, endtime) {
          var clock = document.getElementById(id);
          var daysSpan = clock.querySelector('.days');
          var hoursSpan = clock.querySelector('.hours');
          var minutesSpan = clock.querySelector('.minutes');
          var secondsSpan = clock.querySelector('.seconds');
  
          function updateClock() {
              var t = getTimeRemaining(endtime);
  
              // daysSpan.innerHTML = t.days;
              hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
              minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
              secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
              if (t.total <= 0) {
              clearInterval(timeinterval);
              }
          }
  
          updateClock();
          var timeinterval = setInterval(updateClock, 1000);
      }
  
      var deadline="January 01 2018 00:00:00 GMT+0300"; //for Ukraine
      var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
      initializeClock('countdown', deadline);
  
      //кнопки
  
      const menuBtnOn = document.querySelector(".menu__btn1");
      const menuBtnOff = document.querySelector(".menu__btn2");
      const menuMobile = document.querySelector(".menu");
      const sellMenu = document.querySelector(".main__special-menu");
      const sellMenuBtnOn = document.querySelector(".special__btn");
      const sellMenuBtnOff = document.querySelector(".special__btn-off");
      const drobBtn = document.querySelector(".main__drop-uppe-btn");
      const footerBtn = document.querySelector(".footer-drop-down-btn");
      const footerDropList = document.querySelector(".footer-drop-upper-text");
      const maimDropList = document.querySelector(".main__drop-down");
  
      menuBtnOn.addEventListener("click", () => {
          menuMobile.classList.toggle("menu-open")
      })
  
      menuBtnOff.addEventListener("click", () => {
          menuMobile.classList.toggle("menu-open")
      })
  
      sellMenuBtnOn.addEventListener("click", () => {
          sellMenu.classList.toggle("menu-open1")
      })
      sellMenuBtnOff.addEventListener("click", () => {
          sellMenu.classList.toggle("menu-open1")
      })
  
      drobBtn.addEventListener("click", () => {
          drobBtn.classList.toggle("btn-on")
          maimDropList.classList.toggle("when-up")
      })
  
      footerBtn.addEventListener("click", () => {
          if (footerBtn.textContent == "Read more") {
              footerBtn.textContent = "Read less";
              footerDropList.classList.add("all-text");
          } else {
              footerBtn.textContent = "Read more";
              footerDropList.classList.remove("all-text");
          }
      })
  