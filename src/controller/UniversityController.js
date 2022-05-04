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

async function getById(req, res) {
    const { id } = req.params

    const university = await UniversityModel.findOne(id)
    res.send(university)
}

async function post(req, res) {
    const university = new UniversityModel(req.body)

    university.save()
        .then(() => {
            res.send({
                message: 'success'
            })
        })
        .catch((error) => {
            res.send({
                message: `${error}`
            })
        })
}

async function put(req, res) {
    const { id } = req.params
    const {
        web_pages,
        name,
        domains
    } = req.body

    const university = await UniversityModel.findOneAndUpdate({ _id: id }, { web_pages, name, domains }, { new: true })

    res.send({
        message: 'success',
        university
    })
}

async function remove(req, res) {
    const { id } = req.params
    remove = await UniversityModel.deleteOne({ _id: id})
        .then(() => {
            res.send({
                message: 'success'
            })
        })
        .catch((error) => {
            res.send({
                message: `${error}`
            })
        })
}

module.exports = {
    get,
    getById,
    post,
    put,
    remove,
}