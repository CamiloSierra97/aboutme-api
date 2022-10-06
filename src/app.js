const express = require("express");

const app = express();

const port = 9000;

app.use(express.json());


const hobbiesDB = [
    {
        id: 1,
        name: 'Play videogames'
    },
    {
        id: 2,
        name: 'Watch movies and series'
    },
    {
        id: 3,
        name: 'Go to the gym'
    },
    {
        id: 4,
        name: 'Study backend'
    },
    {
        id: 5,
        name: 'Learn English'
    }
]

const check = (id) => {
    const data = hobbiesDB.filter(hobbie => hobbie.id === 4 || hobbie.id === 5)
    return data
}

const enterprises = [
    {
        id: 50,
        name: 'Mercadolibre'
    },
    {
        id: 51,
        name: 'Globant'
    },
    {
        id: 52,
        name: 'PixelPro'
    }
]

const add = () => {
    hobbiesDB.push(enterprises)
    return hobbiesDB
}

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server OK!" });
});

app.get("/me", (req, res) => {
    res.status(200).json({
        name: 'Camilo',
        age: 25,
        country: 'Colombia'
    })
})

app.post("/metas", (req, res) => {
    res.status(200).json({
        hobbiesDB
    })
})

app.patch("/metas", (req, res) => {
    const id = req.params.id
    const data = check(id)
    res.status(200).json({
        data
    })
})

app.put("/business", (req, res) => {
    const data = add()
    res.status(200).json({
        data
    })
})

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});