/*jslint node: true */
'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new Schema({

    name: {type: String, required: true, unique: true},

    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Product', productSchema);
