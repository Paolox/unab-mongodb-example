'use strict';

var mongoose    = require('mongoose');
var ProductModel= require('../../models/product');

var ProductsLib = function(){
  var self = this;

  self.getAll = function(callback){
    ProductModel.find().exec(function(error, products){
        if(error){
            console.error(error);
            return callback(error);
        }
        callback(null, products);
    });
  };

  self.getById = function(id, callback){
    ProductModel.findOne({_id: id}).exec(function(error, product){
        if(error){
            console.error(error);
            return callback(error);
        }
        if(!product){
          return callback(new Error('NOT_FOUND'));
        }
        callback(null, product);
    });
  };

  self.create = function(newProduct, callback){

    var product = new ProductModel(newProduct);

    product.save(function(error, savedProduct, numAffected){

      callback(error, null);

    });

  };

  self.update = function(id, newData, callback){
    delete newData._id;

    ProductModel.findOneAndUpdate({ _id: id }, newData, function(error, result){
        if(error){
            console.error(error);
            return callback(error);
        }
        return callback(null, result);
    });
  };

  self.delete = function(id, callback){

    ProductModel.remove({_id: id}, function(error){
        if(error){
            console.error(error);
            return callback(error);
        }
        return callback(null);
    });
  };
};

module.exports = new ProductsLib();
