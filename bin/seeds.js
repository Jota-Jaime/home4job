const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Offer = require("../models/offer");

const bcryptSalt = 10;

mongoose
  .connect('mongodb://localhost/h4j', {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


let User = [
  {
    username: `michellemullen@gmail.com`,
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    name: `Michelle B. Mullen`,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
    averageValue: `4`,
    avatar: `../img/default.png`,
    preferences: [],
    languages: [`ingles`, `español`],
  },
  {
    username: `karolinabt@gmail.com`,
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    name: `Karolin Abt`,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
    averageValue: `5`,
    avatar: `../img/default.png`,
    preferences: [],
    languages: [`ingles`, `aleman`],
  },
  {
    username: `markofaber@gmail.com`,
    name: `Marko Faber`,
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
    averageValue: `3`,
    avatar: `../img/default.png`,
    preferences: [],
    languages: [`ingles`, `aleman`],
  },
  {
    username: `victorinboileau@gmail.com`,
    name: `Victorine Boileau`,
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
    averageValue: `5`,
    avatar: `../img/default.png`,
    preferences: [],
    languages: [`ingles`, `frances`, `español`],
  },

  {
    username: `macialmontoyaespino@gmail.com`,
    name: `Maciel Montoya Espino`,
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
    averageValue: `5`,
    avatar: `../img/default.png`,
    preferences: [],
    languages: [`ingles`, `aleman`, `frances`, `español`, `portugues`, `italiano`],
  },
  {
    username: `darkobrasanack@gmail.com`,
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    name: `Darko Brasanack`,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
    averageValue: `4`,
    avatar: `../img/default.png`,
    preferences: [],
    languages: [`ingles`, `español`],
  },
  {
    username: `georgebestn@gmail.com`,
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    name: `George Best`,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
    averageValue: `4`,
    avatar: `../img/default.png`,
    preferences: [],
    languages: [`ingles`],
  },
  {
    username: `madnielsen@gmail.com`,
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    name: `Mad Nielsen`,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
    averageValue: `4`,
    avatar: `../img/default.png`,
    preferences: [],
    languages: [`ingles`,`aleman`],
  },
]

let Offer = [
  {
    city: "Madrid",
    job:"Jardineria",
    photo: `../images/nophoto.jpg`,
    dayStart: 22-4-2020,
    dayEnd: 30-4-2020,
    estatus: "active",
    user:{
      username: `juancarlosaragon@gmail.com`,
      password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
      name: `Juan Carlos Aragon`,
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
      averageValue: `4`,
      avatar: `../img/default.png`,
      preferences: [],
      languages: [`ingles`, `español`, `frances`],
    },
  },
  {
    city: "Sevilla",
    job:"Cuidador",
    photo: `../images/nophoto.jpg`,
    dayStart: 28-2-2020,
    dayEnd: 2-3-2020,
    estatus:"active",
    user:  {
      username: `guillermosara@gmail.com`,
      password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
      name: `Guillermo Sara`,
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
      averageValue: `4`,
      avatar: `../img/default.png`,
      preferences: [],
      languages: [`ingles`, `español`, `italiano`],
    },
  },
  {
    city: "Madrid",
    job: "Reparacion",
    photo: `../images/nophoto.jpg`,
    dayStart: 17-3-2020,
    dayEnd: 24-3-2020,
    estatus:"active", 
    user:{
      username: `oswaldoponce@gmail.com`,
      password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
      name: `Oswaldo Ponce`,
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
      averageValue: `4`,
      avatar: `../img/default.png`,
      preferences: [],
      languages: [`ingles`, `español`],
    },
  },
  {
    city: "Barcelona",
    job:"Jardineria",
    photo: `../images/nophoto.jpg`,
    dayStart: 22-5-2020,
    dayEnd: 30-5-2020,
    estatus: "active",
    user:  {
      username: `tomadueñastrujillo@gmail.com`,
      name: `Tomás Dueñas Trujillo`,
      password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
      averageValue: `5`,
      avatar: `../img/default.png`,
      preferences: [],
      languages: [`ingles`, `español`],
    },
  },
  {
    city: "Bilbao",
    job:"Cuidador",
    photo: `../images/nophoto.jpg`,
    dayStart: 28-4-2020,
    dayEnd: 1-5-2020,
    estatus:"active",
    user:{
      username: `mercedebalderavergara@gmail.com`,
      name: `Mercedes Balderas Vergara`,
      password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
      averageValue: `4`,
      avatar: `../img/default.png`,
      preferences: [],
      languages: [`ingles`, `español`],
    },
  },
  {
    city: "Madrid",
    job: "Reparacion",
    photo: `../images/nophoto.jpg`,
    dayStart: 17-6-2020,
    dayEnd: 24-6-2020,
    estatus:"active", 
    user:{
      username: `manolosantander@gmail.com`,
      password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
      name: `Manolo Santander`,
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
      averageValue: `4`,
      avatar: `../img/default.png`,
      preferences: [],
      languages: [`ingles`, `español`],
    },
  },
  {
    city: "valencia",
    job:"Jardinera",
    photo: `../images/nophoto.jpg`,
    dayStart: 22-5-2020,
    dayEnd: 30-5-2020,
    estatus: "active",
    user:{
      username: `davidalbelda@gmail.com`,
      password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
      name: `David Albelda`,
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
      averageValue: `4`,
      avatar: `../img/default.png`,
      preferences: [],
      languages: [`ingles`, `español`],
    },
  },
  {
    city: "Barcelona",
    job:"Limpieza",
    photo: `../images/nophoto.jpg`,
    dayStart: 28-6-2020,
    dayEnd: 2-7-2020,
    estatus:"active",
    user:{
      username: `joangarcia@gmail.com`,
      password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
      name: `Joan Garcia`,
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
      averageValue: `4`,
      avatar: `../img/default.png`,
      preferences: [],
      languages: [`ingles`, `español`],
    },
  },
  {
    city: "Madrid",
    job: "Reparacion",
    photo: `../images/nophoto.jpg`,
    dayStart: 19-3-2020,
    dayEnd: 26-3-2020,
    estatus:"active", 
    user: {
      username: `joseguerrero@gmail.com`,
      password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
      name: `Jose Guerrero`,
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sint hic minus error laborum natus voluptatibus facere. Accusamus possimus velit, numquam, vel deserunt, voluptates consectetur quae voluptatem dolores ea id?`,
      averageValue: `4`,
      avatar: `../img/default.png`,
      preferences: [],
      languages: [`ingles`, `español`, `aleman`],
    },
  },
]







User.deleteMany()
  .then(() => {
    return User.create(users)
  })
  .then(usersCreated => {
    console.log(`${usersCreated.length} users created with the following id:`);
    console.log(usersCreated.map(u => u._id));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })



  Promise.all(offers.map(offer => user.create(offer.user).then(user => user.name)))
    .then(() => offers.map(offer => user.findOne({ name: offer.user.name }).then(user => Object.assign({}, offer, { user: user._id }))))
    .then(findusers => Promise.all(findusers).then(offers => offers.map(offer => offer.create(offer))))
    .then(savedoffers => Promise.all(savedoffers).then(offers => offers.forEach(offer => console.log(`Montaña rusa ${offer.name} creada`))).then(() => mongoose.connection.close()))
    .catch(error => console.log('Error: ', error))