// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Lauren Flynn",

  headerTagline: [
    //Line 1 For Header
    "Full-Stack Web Developer",
    //Line 2 For Header
    "Former Educator",
    //Line 3 For Header
    "Recent Grad",
  ],
  //   Header Paragraph
  headerParagraph:
    "Professional seeking role in Technology with experience using Node.js, CSS, HTML, SQL/no-SQL and React.js. Looking to obtain the role of a Full-Stack Web Developer to utilize 18 months of experience in handling popular web languages and Javascript in developing and implementing applications based on clients’ need.",

  //Contact Email
  contactEmail: "dejaflynn@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [

    {
      id: 1,
      title: "Imstagram", //Project Title - Add Your Project Title Here
      para:
        "Imstgram is an Instagram clone built using a tech stack composed of PostgreSQL, Firebase's Firestore NoSQL Cloud Database, Express, NodeJS and React. Redux Toolkit was leveraged for application state management. Material-UI was implemented as the base for shaping the UI/UX design framework.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.postimg.cc/mkBJ6zq0/Screen-Shot-2021-01-06-at-10-34-21-AM.png",
      //Project URL - Add Your Project Url Here
      url: "https://cta-imstagram.netlify.app/",
      url2: "https://github.com/DejaLFlynn/DejaF_CTA2020",
    },
    {
      id: 2,
      title: "Congo Marketplace", //Project Title - Add Your Project Title Here
      para:
        "A Full-Stack, using noSQL(Firebase), to sign in and sign up on Amazon and React/Redux.js libraries.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.postimg.cc/W12zrM3F/congopic.png",
      //Project URL - Add Your Project Url Here
      url: "https://df-congo-marketplace.netlify.app/",
      url2: "https://github.com/DejaLFlynn/df-Congo-marketplace",
    },



    {
      id: 3,
      title: "Pokemon Selector", //Project Title - Add Your Project Title Here
      para:
      "Pokemon client application. Your app will allow users to see Pokemon by type, see an individual Pokemon and leave a comment for it.",
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.postimg.cc/3W5KfRt7/Screen-Shot-2021-02-17-at-1-23-42-PM.png",
      //Project URL - Add Your Project Url Here
      url: "https://dejaflynpokemon.netlify.app/",
      url2:"https://github.com/DejaLFlynn/Unit4AssessmentPokemon",
    },
    {
      id: 4,
      title: "Word Count", //Project Title - Add Your Project Title Here
      para:
        "A Front-End application built with React displays any text placed in input, character count, word count, sentence count, paragraph count and bigram count.  With a build in dark and light mode. ", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.postimg.cc/BQQNbVLN/Screen-Shot-2020-12-25-at-7-59-10-PM.png",
      //Project URL - Add Your Project Url Here
      url: "https://priceless-goldstine-3c591f.netlify.app/",
      url2: "https://github.com/DejaLFlynn/WordCount",
    },
    {
      id: 5,
      title: "We Rise", //Project Title - Add Your Project Title Here
      para:
        "WeRise is built using a tech stack composed of PostgreSQL, Firebase's Firestore NoSQL Cloud Database, Express, NodeJS and React. Redux Toolkit was leveraged for application state management. Material-UI was implemented as the base for shaping the UI/UX design framework.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.postimg.cc/BQQNbVLN/Screen-Shot-2020-12-25-at-7-59-10-PM.png",
      //Project URL - Add Your Project Url Here
      url: "https://werise.netlify.app/",
      url2: "https://github.com/neuhelos/WeRise",
    },
    {
      id: 6,
      title: "Covid Near US", //Project Title - Add Your Project Title Here
      para:
        "A React app that is a Covid-19 United States statistics tracker that uses several API’s and libraries such as Bootstrap, Chart.js, Social Sharing, Simple Maps as a dashboard.  The App also gives the user local Covid-19 testing sites. ", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.postimg.cc/pXGCFJKv/Screen-Shot-2020-12-25-at-7-58-17-PM.png",
      //Project URL - Add Your Project Url Here
      url: "https://covidnearus.netlify.app/",
      url2: "https://github.com/jovannil94/COVID-Hackathon",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Seeking an opportunity to expand her skills, Lauren joined Pursuit, an exceptional coding program, where she completed a year of Full-Stack Web Development. At Pursuit, she was able to master the following: Node.js, CSS, HTML, SQL/no-SQL, React.js JavaScript and other popular languages.",
  aboutParaTwo:
    "With an undergraduate degree in Computer science from St. John’s University and a passion for teaching computer literacy to underprivileged , high risk communities in Harlem and the South Bronx, Lauren Flynn used her Communication Art skills to create a curriculum for teaching computer literacy at The Archdiocese of New York, The Children’s Aid Society of New York, Microsoft, The Boys and Girls Club and Hofstra University STEM program. This was a wonderful and gratifying work experience. Looking back, she remembers the fun and excitement she and her students shared when participating in robotics competitions or using their computer skills when working in STEM activities.",
  aboutParaThree:
    "Using her academic and professional experience, Lauren is seeking a position as Full Stack Web Developer, bringing with her tons of ambition, grit and determination with a smile.",
  aboutImage: "https://i.postimg.cc/vBwrCMHT/IMG-0861.jpg",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 5,
      img: htmlIcon,
      para:
        "Thorough understanding of web architectures, tags, and technologies. Build robust portal frameworks and web applications using HTML5",
    },
    {
      id: 2,
      img: designIcon,
      para:
        "Front-end experience using Material-UI, Bootstrap, and Gatsby, creating clean and functional apps that optimizes the user's experience.",
    },
    {
      id: 3,
      img: cssIcon,
      para:
        "Deep understanding of CSS inheritance and how to use it to your advantage; a good ideology for managing maintainable, scalable, and cross-browser code across large sites; and familiarity with source control principles",
    },

    {
      id: 1,
      img: reactIcon,
      para: "Good Experience in React.js for creating interactive UI's. Experienced in working with Redux architecture using complex Object-Oriented concepts in improving the performance of the websites. ",
    },
    {
      id: 5,
      img: codeIcon,
      para: "SQL and NoSQL using Google's Firebase",
    },
    {
      id: 6,
      img: jsIcon,
      para: "Experienced in working with Node.JS and NPM modules.",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Prior Work",
  promotionPara:
    "Former computer teacher for 9 years with the Archdiocese of NY and 13 years as the Technology Director for Dunlevy Milbank Center, Children's Aid NY. I’ve created my own curriculum and taught Computer Literacy, Graphic Design, and STEM. I’ve been trained through the Boys and Girls Club & Microsoft to implement Robotics and coding. Prior, a First LEGO League Coach with an all girls team called Milbotics and I’m also a Certified Code.org teacher as well. Recently I’ve also worked with Hostra University with a STEM program called Wise Guys and Gals to facilitate a series of science activities using all general science topics. I’ve utilized Classroom Inc. for several years, and assisted classroom teachers for 2 years. Working in Harlem and the South Bronx’s my passion, where most students still don’t have access to a computer, and with my instruction students have gained intermediate to advanced skills through the the work. The divide in the workforce is staggering for young adults and most are lost within a year or two with no computer literacy.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    {
      img: githubIcon,
      url: "https://github.com/DejaLFlynn/react-portfolio-template",
    },

  ],

  // End Contact Section ---------------
}
