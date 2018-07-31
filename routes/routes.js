const router = require('express').Router();
const fetch = require('node-fetch');
// const googleMapsClient = require('@google/maps').createClient({
//     clientId: '109945683442140991183',
//     clientSecret:'scrt',
    
//     Promise:Promise
// });



router.get('/',(req,res)=>{
    res.render('index')
})

// Geocode an address.
router.post('/search',(req,res)=>{
    let location = encodeURIComponent(req.body.location);
        fetch('https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyAo2IZrH11E5FlSohn-0U2IEoWUO7ROWQE&input='+location)
            .then(response => response.json())
            .then((json) => {
                let prediction = json.predictions
                // console.log(prediction)
                let name = prediction.map((keyword) => {
                    return keyword
                })
                return name;
            })
            .then((n)=> {
                res.send(n)
                // console.log(n)
            })
            .catch(err => console.log(err))
})

router.get('/search/:placeid',(req,res)=>{
    placeId = req.params.placeid
    // console.log(placeId)
    fetch('https://maps.googleapis.com/maps/api/place/details/json?placeid='+placeId+'&key=AIzaSyAo2IZrH11E5FlSohn-0U2IEoWUO7ROWQE')
        .then(response => response.json())
        .then((json) => {
            let details = json.result;
            res.send(details)
            // console.log(details)
            
        })
        .catch(err => console.log(err))
})

router.get('/exp/:placeid',(req,res)=>{
    placeId = req.params.placeid
    // console.log(placeId)
    fetch('https://maps.googleapis.com/maps/api/place/details/json?placeid='+placeId+'&key=AIzaSyAo2IZrH11E5FlSohn-0U2IEoWUO7ROWQE')
        .then(response => response.json())
        .then((json) => {
            let details = json.result;
            res.render('explore',{details})
            // console.log(details)
            
        })
        .catch(err => console.log(err))
})

module.exports = router