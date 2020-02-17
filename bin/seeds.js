const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Offer = require("../models/Offer");

const bcryptSalt = 10;

mongoose
  .connect('mongodb://localhost/h4j', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    startSeeding()
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

function startSeeding() {

  User.deleteMany().then(() => Offer.deleteMany()).then(() => {
    
    let users = [
      {
        username: `michellemullen@gmail.com`,
        password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
        name: `Michelle B. Mullen`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
        averageValue: `4`,
        avatar: `../img/default.png`,
        preferences: [],
        languages: ['inglés', 'español'],
      },
      {
        username: `karolinabt@gmail.com`,
        password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
        name: `Karolin Abt`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
        averageValue: `5`,
        avatar: `../img/default.png`,
        preferences: [],
        languages: ['inglés', 'alemán'],
      },
      {
        username: `markofaber@gmail.com`,
        name: `Marko Faber`,
        password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
        averageValue: `3`,
        avatar: `../img/default.png`,
        preferences: [],
        languages: ['inglés', 'alemán'],
      },
      {
        username: `victorinboileau@gmail.com`,
        name: `Victorine Boileau`,
        password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
        averageValue: `5`,
        avatar: `../img/default.png`,
        preferences: [],
        languages: ['inglés', 'francés', 'español'],
      },
    
      {
        username: `macialmontoyaespino@gmail.com`,
        name: `Maciel Montoya Espino`,
        password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
        averageValue: `5`,
        avatar: `../img/default.png`,
        preferences: [],
        languages: ['inglés', 'alemán', 'francés', 'español', 'portugués', 'italiano'],
      },
      {
        username: `darkobrasanack@gmail.com`,
        password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
        name: `Darko Brasanack`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
        averageValue: `4`,
        avatar: `../img/default.png`,
        preferences: [],
        languages: ['inglés', 'español'],
      },
      {
        username: `georgebestn@gmail.com`,
        password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
        name: `George Best`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
        averageValue: `4`,
        avatar: `../img/default.png`,
        preferences: [],
        languages: ['inglés'],
      },
      {
        username: `madnielsen@gmail.com`,
        password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
        name: `Mad Nielsen`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
        averageValue: `4`,
        avatar: `../img/default.png`,
        preferences: [],
        languages: ['inglés','alemán'],
      },
      {
        username: `juancarlosaragon@gmail.com`,
        password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
        name: `Juan Carlos Aragon`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
        averageValue: `4`,
        avatar: `../img/default.png`,
        preferences: [],
        languages: [`inglés`, `español`, `francés`],
      },
      {
        username: `guillermosara@gmail.com`,
        password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
        name: `Guillermo Sara`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
        averageValue: `4`,
        avatar: `../img/default.png`,
        preferences: [],
        languages: [`inglés`, `español`, `italiano`],
      },
      {
        username: `oswaldoponce@gmail.com`,
        password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
        name: `Oswaldo Ponce`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
        averageValue: `4`,
        avatar: `../img/default.png`,
        preferences: [],
        languages: [`inglés`, `español`],
      },
      {
        username: `tomadueñastrujillo@gmail.com`,
        name: `Tomás Dueñas Trujillo`,
        password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
        averageValue: `5`,
        avatar: `../img/default.png`,
        preferences: [],
        languages: [`inglés`, `español`],
      },
      {
        username: `mercedebalderavergara@gmail.com`,
        name: `Mercedes Balderas Vergara`,
        password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
        averageValue: `4`,
        avatar: `../img/default.png`,
        preferences: [],
        languages: [`inglés`, `español`],
      },
      {
        username: `manolosantander@gmail.com`,
        password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
        name: `Manolo Santander`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
        averageValue: `4`,
        avatar: `../img/default.png`,
        preferences: [],
        languages: [`inglés`, `español`],
      },
      {
        username: `davidalbelda@gmail.com`,
        password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
        name: `David Albelda`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
        averageValue: `4`,
        avatar: `../img/default.png`,
        preferences: [],
        languages: [`inglés`, `español`],
      },
      {
        username: `joangarcia@gmail.com`,
        password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
        name: `Joan Garcia`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
        averageValue: `4`,
        avatar: `../img/default.png`,
        preferences: [],
        languages: [`inglés`, `español`],
      },
      {
        username: `joseguerrero@gmail.com`,
        password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
        name: `Jose Guerrero`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
        averageValue: `4`,
        avatar: `../img/default.png`,
        preferences: [],
        languages: [`inglés`, `español`, `alemán`],
      },
    ]
    

    let offers = [{
        city: "Madrid",
        job: "Jardineria",
        photo: `../images/nophoto.jpg`,
        dayStart: 22 - 4 - 2020,
        dayEnd: 30 - 4 - 2020,
        estatus: "active",

      },
      {
        city: "Sevilla",
        job: "Cuidador",
        photo: `../images/nophoto.jpg`,
        dayStart: 28 - 2 - 2020,
        dayEnd: 2 - 3 - 2020,
        estatus: "active",

      },
      {
        city: "Madrid",
        job: "Reparacion",
        photo: `../images/nophoto.jpg`,
        dayStart: 17 - 3 - 2020,
        dayEnd: 24 - 3 - 2020,
        estatus: "active",

      },
      {
        city: "Barcelona",
        job: "Jardineria",
        photo: `../images/nophoto.jpg`,
        dayStart: 22 - 5 - 2020,
        dayEnd: 30 - 5 - 2020,
        estatus: "active",

      },
      {
        city: "Bilbao",
        job: "Cuidador",
        photo: `../images/nophoto.jpg`,
        dayStart: 28 - 4 - 2020,
        dayEnd: 1 - 5 - 2020,
        estatus: "active",

      },
      {
        city: "Madrid",
        job: "Reparacion",
        photo: `../images/nophoto.jpg`,
        dayStart: 17 - 6 - 2020,
        dayEnd: 24 - 6 - 2020,
        estatus: "active",

      },
      {
        city: "Valencia",
        job: "Jardineria",
        photo: `../images/nophoto.jpg`,
        dayStart: 22 - 5 - 2020,
        dayEnd: 30 - 5 - 2020,
        estatus: "active",

      },
      {
        city: "Barcelona",
        job: "Limpieza",
        photo: `../images/nophoto.jpg`,
        dayStart: 28 - 6 - 2020,
        dayEnd: 2 - 7 - 2020,
        estatus: "active",
      },
      {
        city: "Madrid",
        job: "Reparacion",
        photo: `../images/nophoto.jpg`,
        dayStart: 19 - 3 - 2020,
        dayEnd: 26 - 3 - 2020,
        estatus: "active",
      },
    ]

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }


    User.create(users).then((usersCreated) => {
        offers = offers.map((offer, idx) => {
          offer.user = usersCreated[getRandomInt(0, usersCreated.length - 1)]._id

          return offer
        })

        return Offer.create(offers)

      })
      .then(() => {
        console.log("all inserted!")
        process.exit(0)
      })
  })
}