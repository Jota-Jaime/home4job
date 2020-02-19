require('dotenv').config();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Offer = require("../models/Offer");

const bcryptSalt = 10;

mongoose
  .connect(`${process.env.DBURL}`, {
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
        location: [40.4297251,-3.6859807]

      },
      {
        city: "Sevilla",
        job: "Cuidador",
        photo: `../images/nophoto.jpg`,
        dayStart: 28 - 2 - 2020,
        dayEnd: 2 - 3 - 2020,
        estatus: "active",
        location: [37.4060072,-5.9871337]
      },
      {
        city: "Madrid",
        job: "Reparacion",
        photo: `../images/nophoto.jpg`,
        dayStart: 17 - 3 - 2020,
        dayEnd: 24 - 3 - 2020,
        estatus: "active",
        location: [40.4598082,-3.7071957]

      },
      {
        city: "Barcelona",
        job: "Jardineria",
        photo: `../images/nophoto.jpg`,
        dayStart: 22 - 5 - 2020,
        dayEnd: 30 - 5 - 2020,
        estatus: "active",
        location: [41.387802,2.1673753]

      },
      {
        city: "Bilbao",
        job: "Cuidador",
        photo: `../images/nophoto.jpg`,
        dayStart: 28 - 4 - 2020,
        dayEnd: 1 - 5 - 2020,
        estatus: "active",
        location: [43.2622731,-2.9503671]

      },
      {
        city: "Madrid",
        job: "Reparacion",
        photo: `../images/nophoto.jpg`,
        dayStart: 17 - 6 - 2020,
        dayEnd: 24 - 6 - 2020,
        estatus: "active",
        location: [40.4338635,-3.6071526]

      },
      {
        city: "Valencia",
        job: "Jardineria",
        photo: `../images/nophoto.jpg`,
        dayStart: 22 - 5 - 2020,
        dayEnd: 30 - 5 - 2020,
        estatus: "active",
        location: [39.4759099,-0.3618022]

      },
      {
        city: "Barcelona",
        job: "Limpieza",
        photo: `../images/nophoto.jpg`,
        dayStart: 28 - 6 - 2020,
        dayEnd: 2 - 7 - 2020,
        estatus: "active",
        location: [41.3780693,2.1230836]
      },
      {
        city: "Madrid",
        job: "Reparacion",
        photo: `../images/nophoto.jpg`,
        dayStart: 19 - 3 - 2020,
        dayEnd: 26 - 3 - 2020,
        estatus: "active",
        location: [40.4246511,-3.6741397]
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