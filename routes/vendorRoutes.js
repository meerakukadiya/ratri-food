const express = require('express');
const router = express();
const multer = require('multer');
const userAuth = require('../middleware/auth');

const storage = multer.diskStorage({
    destination: function(request, file, callback) {
      callback(null, './public/images/store');
    },
    filename: function (request, file, callback) {
        fileExtension = file.originalname.split(".")[1];
        console.log({ fileExtension  :fileExtension})
      callback(null, file.fieldname + '-' + Date.now() + fileExtension);
    }
})

const upload = multer({storage  :storage});
//Create Store
const storeController = require('../controller/vendor/storeController');
router.post("/create-store",userAuth.userAuth,upload.single('store_image'),storeController.createStore)
router.post("/get-all-store",userAuth.userAuth,storeController.getAllStore)
router.post("/get-store-details-by-id",userAuth.userAuth,storeController.getStoreDetailsById)
router.put("/update-store-details",userAuth.userAuth,storeController.updateStoreDetails)
router.put("/delete-store",userAuth.userAuth,storeController.deleteStore)


//Create Store Food Images
const storeFoodImageController = require('../controller/vendor/storeFoodController');
router.post("/create-store-food-images",storeFoodImageController.createStoreFoodImages)
router.post("/get-all-store-food-images",storeFoodImageController.getAllStoreFoodImages)
router.post("/get-store-food-images-by-id",storeFoodImageController.getStoreFoodImagesById)
router.post("/delete-store-food-images",storeFoodImageController.deleteStoreFoodImages)
router.post("/update-store-food-images",storeFoodImageController.updateStoreFoodImages)

module.exports = router;