var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var async = require('async');
var path = require('path');
var url = 'mongodb://127.0.0.1:27017/';

router.post('/login', function (req, res) {
  var username = req.body.username;
  var yzm = req.body.yzm;
  MongoClient.connect(url,function(err,client){
    if (err) {
      throw err;
    }else{
      var db = client.db("maizuo");
      db.collection("user").find({phone:username,yzm:yzm}).toArray(function(err,result){
        if(result.length>0){
          res.json({
            code: '0',
            msg: '成功'
          })
        }else{
          res.json({
            code: '1',
            msg: '失败'
          })
        }
      })
    }
    client.close();
  })
})

module.exports = router;