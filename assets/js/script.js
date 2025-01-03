$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }

    // scroll spy
    $("section").each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr("id");

      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });

  // smooth scrolling
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });

  // <!-- emailjs to mail contact form data -->
  $("#contact-form").submit(function (event) {
    emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

    emailjs
      .sendForm("contact_service", "template_contact", "#contact-form")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          document.getElementById("contact-form").reset();
          alert("Form Submitted Successfully");
        },
        function (error) {
          console.log("FAILED...", error);
          alert("Form Submission Failed! Try Again");
        }
      );
    event.preventDefault();
  });
  // <!-- emailjs to mail contact form data -->
});

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Portfolio | Jigar Sable";
    $("#favicon").attr("href", "assets/images/favicon.png");
  } else {
    document.title = "Come Back To Portfolio";
    $("#favicon").attr("href", "assets/images/favhand.png");
  }
});

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: [
    "frontend development",
    "backend development",
    "web designing",
    "android development",
    "web development",
  ],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
  let response;
  let data;
  if (type === "skills") {
    data = `
    [
    {
        "name": "HTML5",
        "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png"
    },
    {
        "name": "CSS3",
        "icon": "https://img.icons8.com/color/48/000000/css3.png"
    },
    {
        "name": "Bootstrap",
        "icon": "https://img.icons8.com/color/48/000000/bootstrap.png"
    },
    {
        "name": "Sass",
        "icon": "https://img.icons8.com/color/48/000000/sass.png"
    },
    {
        "name": "JavaScript",
        "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png"
    },
    {
        "name": "ES6",
        "icon": "https://i.pinimg.com/originals/b5/57/64/b55764416830e7d8b0133c7c0eeaf445.png"
    },
    {
        "name": "jQuery",
        "icon": "https://img.icons8.com/ios-filled/48/1169ae/jquery.png"
    },
    {
        "name": "ReactJS",
        "icon": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
    },
    {
        "name": "Redux",
        "icon": "https://img.icons8.com/color/48/000000/redux.png"
    },
    {
        "name": "Angular",
        "icon": "https://cdn.iconscout.com/icon/free/png-256/free-angular-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226066.png?f=webp&w=256"
    },
    {
        "name": "Vue JS",
        "icon": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png"
    },
    {
        "name": "Firebase",
        "icon": "https://img.icons8.com/color/48/000000/firebase.png"
    },
    {
        "name": "PHP",
        "icon": "https://img.icons8.com/offices/48/000000/php-logo.png"
    },
    {
        "name": "Python",
        "icon": "https://img.icons8.com/color/48/000000/python--v1.png"
    },
    {
        "name": "MySQL",
        "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png"
    },
    {
        "name": "Git VCS",
        "icon": "https://img.icons8.com/color/48/000000/git.png"
    },
    {
        "name": "GitHub",
        "icon": "https://img.icons8.com/glyph-neue/48/ffffff/github.png"
    },
    {
        "name": "WordPress Theme Development",
        "icon": "https://img.icons8.com/color/48/000000/wordpress.png"
    }, 
    {
        "name": "laravel",
        "icon": "https://img.icons8.com/?size=100&id=lRjcvhvtR81o&format=png&color=000000"
    },
    {
        "name": "Suitecrm",
        "icon": "https://docs.suitecrm.com/images/logo-square.png"
    },
    {
        "name": "Sugarcrm",
        "icon": "assets/js/SugarCrmLogo.png"
    },
            {
        "name": "Ethical Hacking",
        "icon": "assets/js/EthicalHacking.png"
    }
]
`;
  } else {
    data = `[
  {
    "name": "NotyStack Android",
    "desc": "Fully fledged android CRUD app based on different design patterns. Built using Java, XML, SQLite, Firebase, RoomDB, MVVM.",
    "image": "notystackandroid",
    "category": "android",
    "links": {
      "view": "https://www.linkedin.com/posts/jigar-sable_androiddev-androidstudio-java-activity-6955224473822199808-JT0j",
      "code": "https://github.com/jigar-sable/notystack-android"
    }
  },
  {
    "name": "SPPU Engg Prep",
    "desc": "All in one SPPU Engineering resources. Built using Java, XML and Firebase.",
    "image": "sppuprepandroid",
    "category": "android",
    "links": {
      "view": "https://www.linkedin.com/posts/jigar-sable_androiddev-androidstudio-java-activity-6955224473822199808-JT0j",
      "code": "https://github.com/jigar-sable/sppu-prep-android"
    }
  },
  {
    "name": "NewsBox Android",
    "desc": "Native android app built using Java, XML. Retrofit & Glide dependencies. Provides different category news.",
    "image": "newsboxandroid",
    "category": "android",
    "links": {
      "view": "https://www.linkedin.com/posts/jigar-sable_androiddev-androidstudio-java-activity-6955224473822199808-JT0j",
      "code": "https://github.com/jigar-sable/newsbox-android"
    }
  },
  {
    "name": "Weatherly Android",
    "desc": "Native android app built using Java, XML and Volley dependencies. Provides weather forecast.",
    "image": "weatherlyandroid",
    "category": "android",
    "links": {
      "view": "https://www.linkedin.com/posts/jigar-sable_androiddev-androidstudio-java-activity-6955224473822199808-JT0j",
      "code": "https://github.com/jigar-sable/weatherly-android"
    }
  },
  {
    "name": "Instagram MERN",
    "desc": "Full-Stack Instagram clone built using MERN stack and realtime chat with the help of socket.iO",
    "image": "instagrammern",
    "category": "mern",
    "links": {
      "view": "https://instagramernstack.herokuapp.com/",
      "code": "https://github.com/jigar-sable/instagram-mern"
    }
  },
  {
    "name": "Flipkart MERN",
    "desc": "Full-Stack Flipkart with Admin Dashboard and Paytm Payment Gateway. MERN Stack WebApp, ready to use for business.",
    "image": "flipkartmern",
    "category": "mern",
    "links": {
      "view": "https://flipkartwebs.herokuapp.com/",
      "code": "https://github.com/jigar-sable/flipkart-mern"
    }
  },
  {
    "name": "ResumeGen",
    "desc": "ReactJS Basic Resume Generator which will generate customized resume in few minutes on your requirements.",
    "image": "resumegen",
    "category": "mern",
    "links": {
      "view": "https://resumegenx.netlify.app/",
      "code": "https://github.com/jigar-sable/resumegen"
    }
  },
  {
    "name": "React-Projects",
    "desc": "Full-Stack project dashboard which is collection of projects built on the React library.",
    "image": "reactprojects",
    "category": "mern",
    "links": {
      "view": "https://reactjsprojects.herokuapp.com/",
      "code": "https://github.com/jigar-sable/React-Projects"
    }
  },
  {
    "name": "Flipkart PHP",
    "desc": "Full-Stack Flipkart Clone Using LAMP Stack. With all major features and OTP authentication and Cashfree payment gateway.",
    "image": "flipkartphp",
    "category": "lamp",
    "links": {
      "view": "https://github.com/jigar-sable/Flipkart-Clone-PHP",
      "code": "https://github.com/jigar-sable/Flipkart-Clone-PHP"
    }
  },
  {
    "name": "JavaScript Projects Website",
    "desc": "This website is specially build to showcase all major javaScript projects. All my javaScript based projects are in it.",
    "image": "jspro",
    "category": "basicweb",
    "links": {
      "view": "https://jigar-sable.github.io/JavaScript-Projects",
      "code": "https://github.com/jigar-sable/JavaScript-Projects"
    }
  },
  {
    "name": "Web UI Clones",
    "desc": "Flipkart, YouTube, Instagram, Sololearn web UI clones using tailwindCSS.",
    "image": "webuiclones",
    "category": "mern",
    "links": {
      "view": "https://github.com/jigar-sable/web-ui-clones",
      "code": "https://github.com/jigar-sable/web-ui-clones"
    }
  },
  {
    "name": "Crypto Tracker",
    "desc": "Crypto Tracker built using ReactJS and Chakra UI. Supports dark mode. API used coingecko.",
    "image": "cryptotracker",
    "category": "mern",
    "links": {
      "view": "https://crypto-tracker-react-project.netlify.app/",
      "code": "https://github.com/jigar-sable/React-Projects/tree/main/crypto-tracker"
    }
  },
  {
    "name": "Hulu Website",
    "desc": "Hulu website built using NextJS and tailwindCSS. API used TMDB, deployed on vercel.",
    "image": "hulu",
    "category": "mern",
    "links": {
      "view": "https://hulu-clone-jigar-sable.vercel.app/",
      "code": "https://github.com/jigar-sable/React-Projects/tree/main/hulu-clone"
    }
  },
  {
    "name": "Portfolio Website",
    "desc": "Personal Portfolio Website. Don't Need Much Info About It, Just Scroll Down. You're Here Only!",
    "image": "portfolio1",
    "category": "basicweb",
    "links": {
      "view": "#",
      "code": "https://github.com/jigar-sable/Portfolio-Website"
    }
  },
  {
    "name": "Composey Website",
    "desc": "Simple landing page website built using HTML, CSS, JavaScript and some JavaScript Libraries.",
    "image": "composey",
    "category": "basicweb",
    "links": {
      "view": "https://composey.netlify.app/",
      "code": "https://github.com/jigar-sable/LGMVIP-WebDev"
    }
  },
  {
    "name": "Webview App",
    "desc": "It's an android app which uses web view component for displaying content. This app provides many different features.",
    "image": "webviewapp",
    "category": "android",
    "links": {
      "view": "https://github.com/jigar-sable/Android-Webview#webapp--android-webview-app",
      "code": "https://github.com/jigar-sable/Android-Webview"
    }
  },
  {
    "name": "PHP Banking Website",
    "desc": "Basic Banking System based on PHP and MySQL database. Made with HTML, CSS, JavaScript and backend with PHP.",
    "image": "tsfbank",
    "category": "lamp",
    "links": {
      "view": "https://tsfbank.rf.gd",
      "code": "https://github.com/jigar-sable/TSF-Bank"
    }
  },
  {
    "name": "Bootstrap Portfolio",
    "desc": "Portfolio built using HTML, CSS, Bootstrap, SASS and JavaScript. Customized Bootstrap using SCSS.",
    "image": "bootstrapportfolio",
    "category": "basicweb",
    "links": {
      "view": "#",
      "code": "#"
    }
  },
  {
    "name": "Bootstrap Template",
    "desc": "Basic website template built using HTML and Bootstrap.",
    "image": "bootstraptemplate",
    "category": "basicweb",
    "links": {
      "view": "#",
      "code": "#"
    }
  },
  {
    "name": "Foodicious",
    "desc": "Basic food website landing page built using HTML, CSS and JavaScript.",
    "image": "foodicious",
    "category": "basicweb",
    "links": {
      "view": "#",
      "code": "#"
    }
  },
  {
    "name": "Food Website",
    "desc": "Basic food website landing page built using HTML, CSS, SASS, Bootstrap and jQuery.",
    "image": "foodwebsite",
    "category": "basicweb",
    "links": {
      "view": "#",
      "code": "#"
    }
  },
  {
    "name": "WebChat Website",
    "desc": "It's a web based chat app made using popular javaScript library Socket IO. Allows multiple users to connect.",
    "image": "webchat",
    "category": "mern",
    "links": {
      "view": "https://github.com/jigar-sable/WebChat#webchat",
      "code": "https://github.com/jigar-sable/WebChat"
    }
  },
  {
    "name": "Basic Banking App",
    "desc": "It's an android app which uses SQLite to store user accounts data. It provides feature to simply transact amount.",
    "image": "basicbank",
    "category": "android",
    "links": {
      "view": "https://github.com/jigar-sable/Basic_Banking_App#basic-banking-app",
      "code": "https://github.com/jigar-sable/Basic_Banking_App"
    }
  },
  {
    "name": "JavaScript Issue Tracker",
    "desc": "It provides the feature to Assign Issue With The Auto Generated Id By Using ChanceJS. Uses Local Storage.",
    "image": "issuetrack",
    "category": "basicweb",
    "links": {
      "view": "https://jigar-sable.github.io/JavaScript-Projects/projects/issuetracker",
      "code": "https://github.com/jigar-sable/JavaScript-Projects/tree/main/projects/issuetracker"
    }
  },
  {
    "name": "PHP PBL Portal",
    "desc": "A simple portal in which students can submit their PBL projects and faculties can view by access admin panel.",
    "image": "phppblform",
    "category": "lamp",
    "links": {
      "view": "https://github.com/jigar-sable/PHP-Projects/tree/main/pblform#pbl-portal",
      "code": "https://github.com/jigar-sable/PHP-Projects/tree/main/pblform"
    }
  },
  {
    "name": "Link List",
    "desc": "All major profile links in a single website. It's just like clone of link tree. Personalized and Responsive.",
    "image": "linklist",
    "category": "basicweb",
    "links": {
      "view": "https://jigar-sable.github.io/LinkList",
      "code": "https://github.com/jigar-sable/LinkList"
    }
  },
  {
    "name": "Job Finder Dummy",
    "desc": "It Fetch JSON Data And Allow Feature To Search Within The Content Displayed. Will be Developed By Using Live APIs.",
    "image": "saas",
    "category": "basicweb",
    "links": {
      "view": "https://jigar-sable.github.io/JavaScript-Projects/api-projects/saas-jobs",
      "code": "https://github.com/jigar-sable/JavaScript-Projects/tree/main/api-projects/saas-jobs"
    }
  },
  {
    "name": "Old Websites",
    "desc": "Bestwebs & ColorCoder. Two Years old websites memories. Simple with basic features.",
    "image": "oldsites",
    "category": "basicweb",
    "links": {
      "view": "#",
      "code": "#"
    }
  },
  {
    "name": "Resistor Color Codes",
    "desc": "Simply provides the color codes of resistors. Calculation information and about resistors.",
    "image": "resistercolor",
    "category": "basicweb",
    "links": {
      "view": "#",
      "code": "#"
    }
  },
  {
    "name": "KIA Info Website",
    "desc": "Basic KIA webpage displays the info about seltos product range. Specs and Image Gallery.",
    "image": "kiaweb",
    "category": "basicweb",
    "links": {
      "view": "#",
      "code": "#"
    }
  },
  {
    "name": "Burger Shop Dummy",
    "desc": "Basic burger shop webpage allow users to check menu and price. Dummy Order Form.",
    "image": "burgerweb",
    "category": "basicweb",
    "links": {
      "view": "#",
      "code": "#"
    }
  },
  {
    "name": "Indian Temples",
    "desc": "It shows temples of different sectors of India. as user clicks it will redirect to wiki of that temple for info.",
    "image": "templeweb",
    "category": "basicweb",
    "links": {
      "view": "#",
      "code": "#"
    }
  },
  {
    "name": "Indian Temples",
    "desc": "It shows temples of different sectors of India. as user clicks it will redirect to wiki of that temple for info.",
    "image": "templeweb",
    "category": "basicweb",
    "links": {
      "view": "#",
      "code": "#"
    }
  },
  {
    "name": "Indian Temples",
    "desc": "It shows temples of different sectors of India. as user clicks it will redirect to wiki of that temple for info.",
    "image": "templeweb",
    "category": "basicweb",
    "links": {
      "view": "#",
      "code": "#"
    }
  }
]`;
  }
  // ? (response = await fetch("skills.json"))
  // : (response = await fetch("./projects/projects.json"));
  //   const data = await response.json();
  return data;
}

function showSkills(skills) {
  let skillsContainer = document.getElementById("skillsContainer");
  let skillHTML = "";
  // console.log();
  JSON.parse(skills).forEach((skill) => {
    skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" width="70" />
                <span>${skill.name}</span>
              </div>
            </div>`;
  });
  skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
  let projectsContainer = document.querySelector("#work .box-container");
  let projectHTML = "";
  JSON.parse(projects)
    .filter((project) => project.category != "android")
    .forEach((project) => {
      projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="../Portfolio-Website/assets/images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`;
    });
  projectsContainer.innerHTML = projectHTML;

  // <!-- tilt js effect starts -->
  VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
  });
  // <!-- tilt js effect ends -->

  /* ===== SCROLL REVEAL ANIMATION ===== */
  const srtop = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 1000,
    reset: true,
  });

  /* SCROLL PROJECTS */
  srtop.reveal(".work .box", { interval: 200 });
}

fetchData().then((data) => {
  showSkills(data);
  console.log(data);
});

fetchData("projects").then((data) => {
  showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15,
});
// <!-- tilt js effect ends -->

// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

/* SCROLL HOME */
srtop.reveal(".home .content h3", { delay: 200 });
srtop.reveal(".home .content p", { delay: 200 });
srtop.reveal(".home .content .btn", { delay: 200 });

srtop.reveal(".home .image", { delay: 400 });
srtop.reveal(".home .linkedin", { interval: 600 });
srtop.reveal(".home .github", { interval: 800 });
srtop.reveal(".home .twitter", { interval: 1000 });
srtop.reveal(".home .telegram", { interval: 600 });
srtop.reveal(".home .instagram", { interval: 600 });
srtop.reveal(".home .dev", { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal(".about .content h3", { delay: 200 });
srtop.reveal(".about .content .tag", { delay: 200 });
srtop.reveal(".about .content p", { delay: 200 });
srtop.reveal(".about .content .box-container", { delay: 200 });
srtop.reveal(".about .content .resumebtn", { delay: 200 });

/* SCROLL SKILLS */
srtop.reveal(".skills .container", { interval: 200 });
srtop.reveal(".skills .container .bar", { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal(".education .box", { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal(".work .box", { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal(".experience .timeline", { delay: 400 });
srtop.reveal(".experience .timeline .container", { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal(".contact .container", { delay: 400 });
srtop.reveal(".contact .container .form-group", { delay: 400 });
