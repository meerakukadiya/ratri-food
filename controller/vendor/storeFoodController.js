const storeFoodImagesModel = require('../../models/store_food_image');
const createStoreFoodImages = async(request , response) => {
    try{

        const 
        {
            store_id,
            food_image,
            food_status,
            food_minitues,

        }  = request.body;

        const saveData = {
            store_id  :store_id,
            food_image : food_image,
            food_status : food_status,
            food_minitues : food_minitues,
        }

        const createStoreFoodImages = await storeFoodImagesModel.create(saveData)
        if(createStoreFoodImages)
        {
            return response.status(200).send({status : true , message :"Store food Created Successfulyy" , data : createStore})
        }
        else
        {
            return response.status(200).send({status : true , message :"Store Create Successfulyy" , data : null})
        }

    }catch(error)
    {
        return response.status(500).send({status : false , message :error.message , data : null})
    }
}

const getAllStoreFoodImages = async(request , response) =>{
    try{
        const getAllStoreFoodImages = await storeFoodImagesModel.find({
             is_deleted : false
        })
        if(getAllStoreFoodImages)
        {
            return response.status(200).send({status : true , message :"get all store food successfully" , data : getAllStoreFoodImages})
        }
        else
        {
            return response.status(200).send({status : true , message :"no data found" , data : null})
        }

    }catch(error)
    {
        return response.status(500).send({status : false , message :error.message , data : null})
    }
}

const deleteStoreFoodImages = async(request , response) => {
    try{

        const
        {
            id
        } = request.body;

        const updateData = {
              is_deleted : true
        }

        const deleteStoreFoodImages = await storeFoodImagesModel.findOneAndUpdate({
             _id  :id
       },updateData)

       if(deleteStoreFoodImages)
       {
        return response.status(200).send({status : true , message :"store food image deleted successfully" , data : deleteStoreFoodImages})
       }
       else
       {
        return response.status(200).send({status : false , message :"store food images deleting error" , data : null})
       }

    }catch(error)
    {
        return response.status(500).send({status : false , message :error.message , data : null})
    }
}

const updateStoreFoodImages = async(request , response) => {
    try{

    }
    catch(error)
    {

    }
}

const getStoreFoodImagesById = async(request , response) => {
    try{

        const
        {
            id
        } = request.body;

        const getStoreFoodImages = await storeFoodImagesModel.findOne({
            is_deleted : false , _id : id
       })
       if(getStoreFoodImages)
       {
           return response.status(200).send({status : true , message :"get all store images successfully" , data : getStoreFoodImages})
       }
       else
       {
           return response.status(200).send({status : true , message :"no data found" , data : null})
       }

    }catch(error)
    {
        return response.status(500).send({status : false , message :error.message , data : null})
    }
}
module.exports = {
    createStoreFoodImages,
    getAllStoreFoodImages,
    deleteStoreFoodImages,
    updateStoreFoodImages,
    getStoreFoodImagesById
}