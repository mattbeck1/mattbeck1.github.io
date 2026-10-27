// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "teaching-apma-3100",
          title: 'APMA 3100',
          description: "Probability",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/APMA3100/";
            },},{id: "teaching-ds-1001",
          title: 'DS 1001',
          description: "Foundation of Data Science",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/DS1001/";
            },},{id: "teaching-ise-321",
          title: 'ISE 321',
          description: "Introduction to Network Administration",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/ISE321/";
            },},{id: "teaching-defense-against-the-dark-arts",
          title: 'Defense Against the Dark Arts',
          description: "Cybersecurity",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/defense-dark-arts/";
            },},{id: "teaching-foundations-of-machine-learning",
          title: 'Foundations of Machine Learning',
          description: "Machine Learning",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/foundations-ml/";
            },},{id: "teaching-systems-administration",
          title: 'Systems Administration',
          description: "Information Systems Course",
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
