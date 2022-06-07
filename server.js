const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

app.use(cors())

const sea = {
    'oolong':{
        'type':'black tea',
        'origin':'Yo mommas house',
        'waterTemp':'200 degrees',
        'steepTimeSecond':'30 minutes',
        'caffeinated':'true',
        'flavour':'delicious'
    },

    
    'matcha':{
        'type':'green tea',
        'origin':'Yo mommas house',
        'waterTemp':'200 degrees',
        'steepTimeSecond':'180 minutes',
        'caffeinated':'false',
        'flavour':'delicious'
    },

    
    'unknown':{
        'type':'unknown',
        'origin':'unknown',
        'waterTemp':'unknown',
        'steepTimeSecond':'unknown',
        'caffeinated':'unknown',
        'flavour':'unknown'
    }
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const seaName = request.params.name.toLowerCase()
    if(sea[seaName]){ 
     response.json(sea[seaName])
    }else{
        response.json(sea['unknown'])
    }
    
})


app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running on port ${PORT}! You better go get it it\'s open!')
})