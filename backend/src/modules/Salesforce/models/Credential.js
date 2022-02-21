const mongoose = require('mongoose');
const MongooseUtil = require('../../../utils/MongooseUtil');
const Parent = require('../../../base/models/Credential');

const collectionName = 'salesforceCredentials';
const parentModelObject = new Parent();

const _schema = new mongoose.Schema({
    accessToken: {
        type: String,
        required: true,
        lhEncrypt: true,
    },
    refreshToken: {
        type: String,
        required: true,
        lhEncrypt: true,
    },
    instanceUrl: { type: String, required: true },
});

const _model = MongooseUtil.createModel(
    collectionName,
    _schema,
    parentModelObject
);

class Credential extends Parent {
    static Schema = _schema;

    static Model = _model;

    constructor(model = _model) {
        super(model);
    }
}

module.exports = Credential;
