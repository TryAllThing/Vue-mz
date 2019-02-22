var express = require('express')
var router = express.Router()
var MongoClient = require('mongodb').MongoClient
var async = require('async')
var path = require('path')
var url = 'mongodb://127.0.0.1:27017/'

router.get('/list', function(req, res) {
  MongoClient.connect(
    url,
    { useNewUrlParser: true },
    function(err, client) {
      if (err) {
        console.log('连接数据异常')
        res.json({
          code: '1',
          msg: '网络异常'
        })
      } else {
        var db = client.db('maizuo')
        db.collection('buyaddress')
          .find()
          .toArray(function(err, data) {
            if (err) {
              console.log('查找数据总数异常')
              res.json({
                code: '1',
                msg: '网络异常'
              })
            } else {
              res.json({
                code: '0',
                msg: data
              })
            }
          })
      }
      client.close()
    }
  )
})
module.exports = router
