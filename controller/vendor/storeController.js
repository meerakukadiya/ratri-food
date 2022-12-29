const storeModel = require('../../models/store');
const loginTokenModel = require('../../models/logintoken');

const createStore = async(request , response) => {
    try{
         
        const
        {
            store_name,
            store_email,
          
            store_location,
            store_status,
            store_time,
        } = request.body;

        let token = req.headers["x-access-token"];
        const isLogin = await loginTokenModel.findOne({ token: token });
        if (!isLogin) {
            return response.status(200).send({
                message: "Invalid Token",
            });
        }

        const  filename = request.file;
        const image = filename.filename;
     
        const saveData = {
            store_name  :store_name,
            store_email : store_email,
            store_image  :image,
            store_location :store_location,
            store_status  :store_status,
            store_time : store_time
        }

        const createStore = await storeModel.create(saveData);
        if(createStore)
        {
            return response.status(200).send({status : true , message :"Store Create Successfulyy" , data : createStore})
        }
        else
        {
            return response.status(200).send({status : false , message :"Store Creating Error", data : null})
        }

    }
    catch(error)
    {
        return response.status(500).send({status : false , message :error.message , data : null})
    }
}

const getAllStore = async(request , response) => {
    try{

        let token = req.headers["x-access-token"];
        const isLogin = await loginTokenModel.findOne({ token: token });
        if (!isLogin) {
            return response.status(200).send({
                message: "Invalid Token",
            });
        }

        const getAllStoreDetails = await storeModel.find({
            is_deleted : false
        })

        if(getAllStoreDetails)
        {
            return response.status(200).send({status : true , message :"get all store details", data : getAllStoreDetails})
        }
        else
        {
            return response.status(200).send({status : false , message :"no data found", data : null})
        }

    }catch(error)
    {
        return response.status(500).send({status : false , message :error.message , data : null})
    }
}

const getStoreDetailsById = async(request , response) => {
    try{

        const{
            id
        } = request.body;

        let token = req.headers["x-access-token"];
        const isLogin = await loginTokenModel.findOne({ token: token });
        if (!isLogin) {
            return response.status(200).send({
                message: "Invalid Token",
            });
        }

        const getStoreDetails = await storeModel.findOne({
            is_deleted : false , _id : id
        })

        if(getStoreDetails)
        {
            return response.status(200).send({status : true , message :"get store details", data : getStoreDetails})
        }
        else
        {
            return response.status(200).send({status : false , message :"record not found", data : null})
        }

    }catch(error)
    {
        return response.status(500).send({status : false , message :error.message , data : null})
    }
}

const deleteStore  = async(request , response) => {
  try{

    const{
        id
    } = request.body;


    let token = req.headers["x-access-token"];
    const isLogin = await loginTokenModel.findOne({ token: token });
    if (!isLogin) {
        return response.status(200).send({
            message: "Invalid Token",
        });
    }

    const deleteRecord = {
        is_deleted : true
    }

    const deleteStore = await storeModel.findOneAndUpdate({
        is_deleted : false , _id : id
    } , deleteRecord)

    if(deleteStore)
    {
        return response.status(200).send({status : true , message :"store deleted successfully", data : deleteStore})
    }
    else
    {
        return response.status(200).send({status : false , message :"store deleting error", data : null})
    }

  }catch(error)
  {
    return response.status(500).send({status : false , message :error.message , data : null})
  }
}

const updateStoreDetails = async(request , response) => {
    try{

        const
        {
            store_name,
            store_email,
          
            store_location,
            store_status,
            store_time,
        } = request.body;

        let token = req.headers["x-access-token"];
        const isLogin = await loginTokenModel.findOne({ token: token });
        if (!isLogin) {
            return response.status(200).send({
                message: "Invalid Token",
            });
        }

        const  filename = request.file;
        const image = filename.filename;
     
        const updateData = {
            store_name  :store_name,
            store_email : store_email,
            store_image  :image,
            store_location :store_location,
            store_status  :store_status,
            store_time : store_time
        }

        const updateStore = await storeModel.findOneAndUpdate({
            _id : id
        } , updateData)

        if(updateStore)
        {
            return response.status(200).send({status : true , message :"store updated successfully", data : updateStore})
        }
        else
        {
            return response.status(200).send({status : false , message :"store updating error", data : null})
        }

    }catch(error)
    {
        return response.status(500).send({status : false , message :error.message , data : null})
    }
}

module.exports = {
    createStore,
    getAllStore,
    getStoreDetailsById,
    deleteStore,
    updateStoreDetails
}