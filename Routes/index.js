import express from "express"
import { addmovie, deletemovies, getmovies, getmoviesbyid, updatemovie } from "../handlers/movies.js"
const Router = express.Router()
Router.get('/api/movies', getmovies)
Router.get('/api/moviesbyid', getmoviesbyid)
Router.post('/api/delete', deletemovies)
Router.post('/api/addmovie', addmovie)
Router.post('/api/updatemovie', updatemovie)
export default Router;