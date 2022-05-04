const UniversityModel = require('../model/universities')

async function get(req, res) {
    const { country } = req.params

    const filterCountry = country ? { country: country } : null

    const universities = await UniversityModel.find(filterCountry)
    res.send(universities)
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

    const university = await UniversityModel.findOneAndUpdate({ _id: id }, {web_pages, name, domains}, { new: true })

    res.send({
        message: 'success',
        university
    })
}



module.exports = {
    get,
    getById,
    post,
    put,
}