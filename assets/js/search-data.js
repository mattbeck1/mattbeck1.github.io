// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "My papers, also listed on Google Scholar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Courses I have been a teaching or instructional assistant for at Stony Brook University and the University of Virginia.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-graduated-with-an-m-s-in-data-science-from-the-university-of-virginia",
          title: 'Graduated with an M.S. in Data Science from the University of Virginia.',
          description: "",
          section: "News",},{id: "news-started-my-ph-d-in-computer-science-at-stony-brook-university-working-with-professor-r-sekar",
          title: 'Started my Ph.D. in Computer Science at Stony Brook University, working with Professor...',
          description: "",
          section: "News",},{id: "teaching-probability",
          title: 'Probability',
          description: "APMA 3100 · Teaching Assistant",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/APMA3100/";
            },},{id: "teaching-foundation-of-data-science",
          title: 'Foundation of Data Science',
          description: "DS 1001 · Teaching Assistant",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/DS1001/";
            },},{id: "teaching-introduction-to-network-administration",
          title: 'Introduction to Network Administration',
          description: "ISE 321 · Teaching Assistant",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/ISE321/";
            },},{id: "teaching-defense-against-the-dark-arts",
          title: 'Defense Against the Dark Arts',
          description: "CS 4630 · Teaching Assistant",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/defense-dark-arts/";
            },},{id: "teaching-foundations-of-machine-learning",
          title: 'Foundations of Machine Learning',
          description: "DS 3001 · Instructional Assistant",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/foundations-ml/";
            },},{id: "teaching-systems-administration",
          title: 'Systems Administration',
          description: "CSE 311 · Teaching Assistant",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/sysadmin/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%74%74%68%65%77.%62%65%63%6B@%73%74%6F%6E%79%62%72%6F%6F%6B.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mattbeck1", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/matthew-beck-34b377172", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=JGw8SuwAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
