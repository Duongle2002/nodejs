const express = require('express');
const morgan = require('morgan');
const rootRoutes = express.Router();
// const CvController = require('../controllers/CvController');
const wordExperience = [
  {
    name: "Front End Developer",
    start_date: "Jan 2015",
    end_date: "Jan 2016",
    description: "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste"
  },
  {
    name: "Back End Developer",
    start_date: "Jan 2015",
    end_date: "Jan 2016",
    description: "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste"
  },
];

const educationExperience = [
  {
    name: "W3Schools.com",
    start_date: "Forever",
    end_date: "Jan 2016",
    description: "Web Development! All I need to know in one place"
  },
  {
    name: "London Business School",
    start_date: "2013",
    end_date: "2015",
    description: "Master Degree"
  },
  {
    name: "School of Coding",
    start_date: "2010",
    end_date: "2013",
    description: "Bachelor Degree"
  },
];

const imageShop = [
    {
        name:" nhamnhangnho",
        image:"https://th.bing.com/th/id/OIP.8YIDdHOZMapS2UL4PDPuaQHaFj?w=209&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        time:"5",
        date:"12th Oct 2024"
    },
    {
        name:" Going all-in with millennial design",
        image:"https://th.bing.com/th/id/OIP.8YIDdHOZMapS2UL4PDPuaQHaFj?w=209&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        time:"5",
        date:"12th Oct 2024"
    },
    {
        name:" Going all-in with millennial design",
        image:"https://th.bing.com/th/id/OIP.8YIDdHOZMapS2UL4PDPuaQHaFj?w=209&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        time:"5",
        date:"12th Oct 2024"
    },
    {
        name:" nhamnhangnho",
        image:"https://th.bing.com/th/id/OIP.8YIDdHOZMapS2UL4PDPuaQHaFj?w=209&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        time:"5",
        date:"12th Oct 2024"
    },
    {
        name:" Going all-in with millennial design",
        image:"https://th.bing.com/th/id/OIP.8YIDdHOZMapS2UL4PDPuaQHaFj?w=209&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        time:"5",
        date:"12th Oct 2024"
    },
    {
        name:" nhamnhangnho",
        image:"https://th.bing.com/th/id/OIP.8YIDdHOZMapS2UL4PDPuaQHaFj?w=209&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        time:"5",
        date:"12th Oct 2024"
    },
]
rootRoutes.use(morgan("combined"));

// Định nghĩa route cho trang chủ
rootRoutes.get('/about', (req, res) => {
  res.render('html', { wordExperience, educationExperience , title:"About"}); // Corrected data passing
});

rootRoutes.get('/', (req, res) => {
  console.log(req.query.p); // lấy query 
  res.render('home',{title: "Home" })
});

rootRoutes.get('/shop', (req, res) => {
  res.render('shop',{ imageShop, title: "Shop"})
});
rootRoutes.get('/shop/:id', (req, res) => {
  console.log(req.params.id);// lấy param
  res.render('shop',{ imageShop, title: "Shop"})
});
// rootRoutes.get('/cv/:id', CvController.detail);

module.exports = rootRoutes; // Corrected export
