const mongoose = require('mongoose');

class MongooseUtil {
    static createModel(collectionName, schema, parentModelObject) {
        if (!parentModelObject || !parentModelObject.model) {
            return mongoose.model(collectionName, schema);
        }
        return parentModelObject.model.discriminator(collectionName, schema);
    }
}

module.exports = MongooseUtil;