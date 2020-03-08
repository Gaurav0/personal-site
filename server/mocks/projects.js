'use strict';

module.exports = function(app) {
  const express = require('express');
  let projectsRouter = express.Router();

  projectsRouter.get('/', function(req, res) {
    res.send([
      {
          id: 1,
          slug: "old-school-rpg-demo",
          title: "Old School RPG Demo",
          thumb: "/images/rpg_thumb.jpg",
          image: "/images/rpg.jpg",
          desc: "This is a demo of an old school console style JRPG, perhaps like Dragon Warrior or Final Fantasy for the original NES, written in HTML5.",
          url: "http://gaurav0.github.com/Old-School-RPG-Map",
          urltext: "Play Now",
          src: "https://github.com/Gaurav0/Old-School-RPG-Map"
      },
      {
          id: 2,
          slug: "space-em",
          title: "Space \u2019Em",
          thumb: "/images/spaceem_thumb.png",
          image: "/images/spaceem.png",
          desc: "A simple, fun HTML5 Space Shooter. Playable via keyboard, mouse or touch.",
          url: "http://gaurav0.github.com/ACM-Space-Shooter/spaceshooter.html",
          urltext: "Play Now",
          src: "https://github.com/Gaurav0/ACM-Space-Shooter"
      },
      {
          id: 3,
          slug: "infinite-graffiti-wall",
          title: "Infinite Graffiti Wall",
          thumb: "/images/wall_thumb.jpg",
          image: "/images/wall.jpg",
          desc: "A persistent, infinite graffiti wall on which people can collaboratively draw. Written using Python / HTML5 / Google App Engine.",
          url: "http://infinitegraffitiwall.appspot.com",
          urltext: "Try It Now",
          src: "https://bitbucket.org/Gaurav0/infinitegraffitiwall"
      },
      {
        id: 4,
        slug: "universal-lpc-spritesheet-character-generator",
        title: "Universal LPC Spritesheet Character Generator",
        thumb: "/images/chargen_thumb.png",
        image: "/images/chargen.png",
        desc: "Customize a pixel art character for your game with open source art assets from the Liberated Pixel Cup on opengameart.com",
        url: "http://gaurav.munjal.us/Universal-LPC-Spritesheet-Character-Generator",
        urltext: "Try It Now",
        src: "https://github.com/Gaurav0/Universal-LPC-Spritesheet-Character-Generator"
      }
    ]);
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/projects', require('body-parser').json());
  app.use('/api/projects', projectsRouter);
};
