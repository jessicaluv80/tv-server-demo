const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
})

app.use(bodyParser.json())
app.use((req, res, next) => {
    console.log(req.body)
    next()
})

const inMemoryDatabase = {
    shows: [
        {
            name: 'STRANGER THINGS',
            rating: 4,
            previewImage: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png',
        },
        {
            name: 'Ghost Adventures',
            rating: 5,
            previewImage: 'https://travel.home.sndimg.com/content/dam/images/travel/fullset/2017/12/Unknown.jpeg.rend.hgtvcom.616.462.suffix/1515515037838.jpeg',
        },
        {
            name: 'Dead Files',
            rating: 2,
            previewImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAZ6ABREFjHAPtgkRtctiRwgkXYo00RAj_NGM-v3nosV6AVHEcmA',

        }

    ]
}

app.get('/shows', (req, res) => {
    res.send(inMemoryDatabase.shows)
})

app.post('/shows', (req, res) => {
    const newShow = req.body
    inMemoryDatabase.shows.push(newShow)
    res.send(newShow)

})

app.listen('3001', () => console.log('Running on port 3001'))