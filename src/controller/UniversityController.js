const axios = require('axios')

const UniversityModel = require('../model/universities')

async function get(req, res) {
	const { page = 1, limit = 20, country = undefined } = req.query
	const filterCountry = country ? { country: country } : null
	const universities = await UniversityModel.find(filterCountry)
		.limit(limit * 1)
		.skip((page - 1) * limit);

	res.send({
		total: universities.length,
		universities
	})
}

async function getById(req, res) {
	const { id } = req.params

	const universities = await UniversityModel.find({ _id: id })
	res.send(universities)
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

	const university = await UniversityModel.findOneAndUpdate(
		{ _id: id },
		{ web_pages, name, domains },
		{ new: true }
	);

	res.send({
		message: 'success',
		university
	})
}

async function remove(req, res) {
	const { id } = req.params
	remove = await UniversityModel.deleteOne({ _id: id })
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

async function apiFillDataBase(req, res) {
	const baseURL = 'http://universities.hipolabs.com/search?country='
	const { country } = req.params

	axios.get(baseURL + country)
		.then((response) => {
			const data = response.data
			data.forEach((data) => {

				const university = new UniversityModel(data)
				university.save()
					.then(() => {
						console.log('Universidade adicionada com sucesso')
					})
					.catch((error) => {
						console.log(error)
					})
			})
		})
		.then(() => {
			res.send({
				message: 'success'
			})
		})
		.catch((error) => {
			console.log(error)
		})
}

module.exports = {
	get,
	getById,
	post,
	put,
	remove,
	apiFillDataBase,
}