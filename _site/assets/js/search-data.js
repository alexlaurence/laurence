// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "",
    section: "Navigation",
    handler: () => {
      window.location.href = "/laurence/";
    },
  },{id: "nav-family-tree",
          title: "Family Tree",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/laurence/en/family-tree/";
          },
        },{id: "nav-家系図",
          title: "家系図",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/laurence/ja/family-tree/";
          },
        },{id: "nav-family-news",
          title: "Family News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/laurence/family-news/index.html";
          },
        },{id: "nav-ビデオアーカイブ",
          title: "ビデオアーカイブ",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/laurence/ja/video-archive/";
          },
        },{id: "nav-video-archive",
          title: "Video Archive",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/laurence/en/video-archive/";
          },
        },{id: "nav-オーディオアーカイブ",
          title: "オーディオアーカイブ",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/laurence/ja/audio-archive/";
          },
        },{id: "nav-audio-archive",
          title: "Audio Archive",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/laurence/en/audio-archive/";
          },
        },{id: "nav-画像アーカイブ",
          title: "画像アーカイブ",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/laurence/ja/image-archive/";
          },
        },{id: "nav-image-archive",
          title: "Image Archive",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/laurence/en/image-archive/";
          },
        },{id: "nav-document-archive",
          title: "Document Archive",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/laurence/en/document-archive/";
          },
        },{id: "nav-ドキュメントアーカイブ",
          title: "ドキュメントアーカイブ",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/laurence/ja/document-archive/";
          },
        },{id: "nav-people",
          title: "People",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/laurence/en/people/";
          },
        },{id: "nav-人々",
          title: "人々",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/laurence/ja/people/";
          },
        },{id: "dropdown-video-archive",
              title: "Video Archive",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/laurence/video-archive/";
              },
            },{id: "dropdown-audio-archive",
              title: "Audio Archive",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/laurence/audio-archive/";
              },
            },{id: "dropdown-image-archive",
              title: "Image Archive",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/laurence/image-archive/";
              },
            },{id: "dropdown-document-archive",
              title: "Document Archive",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/laurence/document-archive/";
              },
            },{id: "post-creating-family-photo-galleries",
        
          title: "Creating Family Photo Galleries",
        
        description: "How to organize and display family photographs in beautiful galleries",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/laurence/family-news/2024/photo-gallery/";
          
        },
      },{id: "post-welcome-to-the-laurence-family-archive",
        
          title: "Welcome to the Laurence Family Archive",
        
        description: "Introducing our new digital family heritage repository",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/laurence/family-news/2024/welcome-to-the-laurence-family-archive/";
          
        },
      },{id: "post-preserving-family-voices-and-stories",
        
          title: "Preserving Family Voices and Stories",
        
        description: "How to contribute audio recordings and oral histories to our family archive",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/laurence/family-news/2023/audios/";
          
        },
      },{id: "post-how-to-share-family-videos",
        
          title: "How to Share Family Videos",
        
        description: "A guide for family members on sharing video memories in our archive",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/laurence/family-news/2023/videos/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/laurence/books/the_godfather/";
            },},{id: "news-the-laurence-family-mourns-the-loss-of-avi",
          title: 'The Laurence Family Mourns The Loss of Avi',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/laurence/news/avi_memorial/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/laurence/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/laurence/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/laurence/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/laurence/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/laurence/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/laurence/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/laurence/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/laurence/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/laurence/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/laurence//feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
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
    },{ // Video Archive Items
    id: "video-archive-family-reunion-1998",
    title: "Family Reunion 1998",
    description: "A heartwarming look back at the 1998 family reunion in the old backyard.",
    section: "Videos",
    handler: () => { window.location.href = "/video-archive/#play-family-reunion-1998"; },
  },
  {
    id: "video-archive-holiday-dinner",
    title: "Holiday Dinner",
    description: "The whole family gathers for a festive holiday meal.",
    section: "Videos",
    handler: () => { window.location.href = "/video-archive/#play-holiday-dinner"; },
  },
  {
    id: "video-archive-summer-vacation",
    title: "Summer Vacation",
    description: "Fun times at the lake during the summer of 2005.",
    section: "Videos",
    handler: () => { window.location.href = "/video-archive/#play-summer-vacation"; },
  },
  {
    id: "video-archive-grandpas-stories",
    title: "Grandpa's Stories",
    description: "Grandpa shares tales from his youth and family history.",
    section: "Videos",
    handler: () => { window.location.href = "/video-archive/#play-grandpas-stories"; },
  },
  // Audio Archive Items
  {
    id: "audio-archive-grandmas-life-story",
    title: "Grandma's Life Story",
    description: "An in-depth interview with Grandma about her childhood and family origins.",
    section: "Audio",
    handler: () => { window.location.href = "/audio-archive/#oral-histories"; },
  },
  {
    id: "audio-archive-holiday-phone-call-2002",
    title: "Holiday Phone Call 2002",
    description: "A joyful holiday phone call with relatives across the country.",
    section: "Audio",
    handler: () => { window.location.href = "/audio-archive/#family-conversations"; },
  },
  {
    id: "audio-archive-family-band-performance",
    title: "Family Band Performance",
    description: "A recording of the family band playing at the 1995 reunion.",
    section: "Audio",
    handler: () => { window.location.href = "/audio-archive/#musical-heritage"; },
  },
  {
    id: "audio-archive-radio-broadcast-1969",
    title: "Radio Broadcast 1969",
    description: "A radio news broadcast from the day of the moon landing.",
    section: "Audio",
    handler: () => { window.location.href = "/audio-archive/#historical-recordings"; },
  },
];
