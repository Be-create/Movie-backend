import { movieModel } from "../database/movie.js";
export const addmovie = async (req, res) => {
    try {
        
        const { adult,
            backdrop_path,
            genre,
            id,
            original_language,
            
            overview,
            popularity,
            poster_path,
            release_date,
            title,
            
            vote_average,
            vote_count } = req.body


        if (title===''||popularity===0||overview===""||backdrop_path===''||release_date===''||vote_average===null||vote_count===null||id===null) {
            res.status(400).send({
                status: "error",
                message: "Invalid input"
            })
        }
        else {
            let movie = await movieModel.create({
                adult,backdrop_path,genre,id,original_language,overview,popularity,poster_path, release_date, title,vote_average,vote_count
            })

            movie = movie.toJSON()
           
            return res.status(200).send({
                status: "success",
                massage: "movie posted successfully",
                data: movie
            })
        }

    }
    catch (error) {
        return res.status(500).send({
            status: "error",
            message: error,
            data:error
        })
    }

}
export const getmovies = async (req, res) => {
    try {
        const movies = await movieModel.find()
        return res.status(200).send({
            status: "success",
            massage: "all movies",
            data: movies
        })

    } catch (error) {
        return res.status(500).send({
            status: "error",
            message: error
        })
    }
}
export const getmoviesbyid = async (req, res) => {
    let { id } = req.query
    try {
      const movie=  await movieModel.findOne(
            { id: id }
        )
        return res.status(200).send({
            status: "success",
            massage: "requested movie",
            data: movie
        })

    } catch (error) {
        return res.status(500).send({
            status: "error",
            message: error
        })
    }
}
export const deletemovies = async (req, res) => {
    let { id } = req.query
    try {
      const movie=  await movieModel.findOneAndDelete(
            { id: id }
        )
        return res.status(200).send({
            status: "success",
            massage: "deleted",
            data: movie
        })

    } catch (error) {
        return res.status(500).send({
            status: "error",
            message: error
        })
    }
}
export const updatemovie = async (req, res) => {
    try {
        
        const { adult,
            backdrop_path,
            genre,
            id,
            original_language,
            
            overview,
            popularity,
            poster_path,
            release_date,
            title,
            
            vote_average,
            vote_count } = req.body


        if (!id) {
            res.status(400).send({
                status: "error",
                message: "Invalid input"
            })
        }
        else {
            let movie = await movieModel.findOneAndUpdate({ id: id },{
                adult,backdrop_path,genre,original_language,overview,popularity,poster_path, release_date, title,vote_average,vote_count
            })

            movie = movie.toJSON()
            console.log(movie)
            return res.status(200).send({
                status: "success",
                massage: "movie updated successfully",
                data: movie
            })
        }

    }
    catch (error) {
        return res.status(500).send({
            status: "error",
            message: error
        })
    }

}