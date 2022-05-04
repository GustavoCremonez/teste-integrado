const UniversityModel = require('../model/universities')

async function get(req, res){
    const { id, country} = req.params

    const filterId = id ? { _id: id} : null
    const filterCountry = country ? { country: country} : null

    if(filterId){
        const university = await UniversityModel.findOne(filterId)
        res.send(university)
    }
    else if(filterCountry){
        const universities = await UniversityModel.find(filterCountry)
        res.send(universities)
    }
    else{
        const universities = await UniversityModel.find()
        res.send(universities)
    }
}

module.exports = {
    get,
}