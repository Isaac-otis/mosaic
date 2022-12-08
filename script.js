/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

    console.log("Hello, world!");

    let event_triggers = document.querySelectorAll(".event_trigger");
    let popup_container = document.querySelector("#popup_container");
    event_triggers.forEach((e) => {
      e.onmouseover = function () {
        popup_container.classList.add("show");
        let t = e.getAttribute("data-image");
        document.querySelector("#popup_image").setAttribute("src", t);
        document.querySelector("#item_number").textContent = e.textContent;
      };
      e.onmouseleave = function () {
        popup_container.classList.remove("show");
      };
    });

    let about_trigger = document.querySelector('#about');
    let about_text = document.querySelector('#about_text');
    about_trigger.onmouseover = function () {
        about_text.classList.add('show');
    }
    about_trigger.onmouseleave = function () {
        about_text.classList.remove('show');
    }

    
    let control_video = document.querySelector('#control_video');
    let video = document.querySelector('.video');
    function move_video(e) {
        body = document.querySelector('body');
        let rect = body.getBoundingClientRect();
        video.style.transform = "translateX(-50%)";
        video.style.left = (e.clientX - rect.left)+ 'px';
        video.style.top = (e.clientY - rect.top) + 'px';
    }
    function drag_video() {
        window.addEventListener('mousemove' , move_video);
        control_video.classList.add('colored');
    }
    function drop_video() {
        window.removeEventListener('mousemove' , move_video);
        control_video.classList.remove('colored');
    }
    control_video.addEventListener('mouseup' , drop_video);
    control_video.addEventListener('mousedown' , drag_video);