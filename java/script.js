


function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
loco()













function videoconAnimation() {
    var vidcon = document.querySelector("#video-container");
    var playBtn = document.querySelector("#play");
    vidcon.addEventListener("mouseenter", function () {
      gsap.to(playBtn, {
        scale: 1,
        opacity: 1,
      });
    });
    vidcon.addEventListener("mouseleave", function () {
      gsap.to(playBtn, {
        scale: 0,
        opacity: 0,
      });
    });
    vidcon.addEventListener("mousemove", function (loc) {
      gsap.to(playBtn, {
        left: loc.x,
        top: loc.y,
      });
    });
  }
  function loadingAnimation() {
    gsap.from("#vdo h1", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.5,
      stagger: 0.2,
    });
    gsap.from("#page2 #video-container", {
      scale: 0.9,
      opacity: 0,
      delay: 1.3,
      duration: 0.3,
    });
  }
  function cursorAnimation() {
    document.addEventListener("mousemove", function (loc) {
      gsap.to("#cursor", {
        left: loc.x,
        top: loc.y,
      });
    });
    var child = document.querySelectorAll(".child");
    child.forEach(function (element) {
      element.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(1)",
        });
        element.addEventListener("mouseleave", function () {
          gsap.to("#cursor", {
            transform: "scale(0)",
          });
        });
      });
    });
  }
  
  videoconAnimation();
  loadingAnimation();
  cursorAnimation();









// toggle reset button
function togglereset() {
    const resetbtn = document.querySelector('.reset');
    resetbtn.classList.toggle('active');
}



// switch left middl right part of banner
function switchbanner(name) {
    const banner = document.querySelector('#banner');
    if (!banner.classList.contains(name)) {
        banner.className = 'banner';
        banner.classList.add(name);
        // whenever switch the banner button should toggle
        togglereset();

    }
    return;
}


// reset button
function resetbanner() {
    const banner = document.querySelector('#banner');
    banner.className = 'banner';
    togglereset();
}

// toggle reset button
function togglereset() {
    const resetbtn = document.querySelector('.reset');
    resetbtn.classList.toggle('active');
}

function aboutTextAnimation() {
    var clutter = "";

    document.querySelector("#page3>#texthere>p").textContent.split("").forEach(function (dets) {
        clutter += `<span>${dets}</span>`

        document.querySelector("#page3>#texthere>p").innerHTML = clutter;
    })


    gsap.to("#page3>#texthere>p>span", {
        scrollTrigger: {
            trigger: `#page3>#texthere>p>span`,
            start: `top bottom`,
            end: `bottom top`,
            scroller: `#main`,
            scrub: 1,
        },
        stagger: .2,
        color: `white`
    })
}
aboutTextAnimation()


