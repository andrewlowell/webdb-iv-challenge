const express = require('express');
const helmet = require('helmet');
// const db = require('./data/dbConfig.js');
const model = require('./foodModel.js');

const server = express();

server.use(helmet());
server.use(express.json());

// list all roles
server.get('/api/dishes', async (req, res) => {
  // get the roles from the database
  try {
    const roles = await model.getDishes(); // all the records from the table
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json(error);
  }
});

server.get('/api/dishes/:id', (req, res) => {
  console.log('getting project', req.params.id)
  model.getDish(req.params.id)
    .then(project => {
      console.log('getting project by id, got back:', project)
      res.status(200).json(project)
    })
    .catch(err => {
      res.status(404).json({ message: "The project with the specified ID does not exist." })
    })
})

server.post('/api/dishes', (req, res) => {
  const { name } = req.body
  if (!name) {
    res.status(400).json({ errorMessage: "Please provide name and description for the project." })
  }
  else {
    const dish = {
      name: name,
    }
    model.addDish(dish)
      .then(project => {
        console.log('dish', project)
        model.getDish(project[0])
          .then(foundProject => {
            res.status(201).json(foundProject)
          })
          .catch(err => {
            res.status(500).json({ error: 'created, but could not get the project??' })
          })
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ error: "There was an error while saving the project to the database" })
      })
  }
})

const port = process.env.PORT || 5555;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);