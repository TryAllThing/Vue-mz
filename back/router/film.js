var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var async = require('async');
var path = require('path');
var url = 'mongodb://127.0.0.1:27017/';

router.get('/list', function (req, res) {
    var pageNum = parseInt(req.query.pageNum) || 1; // 当前第几页
    var pageSize = parseInt(req.query.pageSize) || 5; // 每页显示多少条
    var type = parseInt(req.query.type) || 1; // 影片的类型，正在上映or即将上映 1-正在上映 2-即将上映

    MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
        if (err) {
            console.log('连接数据异常');
            res.json({
                code: '1',
                msg: '网络异常'
            })
        } else {
            var db = client.db('maizuo');
            async.waterfall([
                function (cb) {
                    var param = {};
                    if (type == 1) {
                        param = {
                            premiereAt: { $lte: new Date().getTime() / 1000 }
                        }
                    } else {
                        param = {
                            premiereAt: { $gt: new Date().getTime() / 1000 }
                        }
                    }
                    db.collection('list').find(param).count(function (err, num) {
                        if (err) {
                            console.log('查找数据总数异常');
                            res.json({
                                code: '1',
                                msg: '网络异常'
                            })
                        } else {
                            cb(null, num)
                        }
                    })
                },
                function (num, cb) {
                    var param = {};
                    if (type == 1) {
                        param = {
                            premiereAt: { $lte: new Date().getTime() / 1000 }
                        }
                    } else {
                        param = {
                            premiereAt: { $gt: new Date().getTime() / 1000 }
                        }
                    }
                    db.collection('list').find(param).skip(pageSize*pageNum-pageSize).limit(pageSize).toArray(function (err, data) {
                        if (err) {
                            console.log('查找数据异常');
                            res.json({
                                code: '1',
                                msg: '网络异常'
                            })
                        } else {
                            cb(null, { num: num, data: data });
                        }
                    })
                }
            ], function (err, result) {
                if (err) {
                    console.log('拿去数据错误');
                    res.json({
                        code: 1,
                        msg: '网络异常'
                    })
                } else {
                    res.json({
                        code: 0,
                        msg: 'OK',
                        data: {
                            films: result.data,
                            total: result.num
                        }
                    })

                }
                client.close();
            })
        }

    })
})



router.get('/detail', function (req, res) {
    var filmid = parseInt(req.query.filmid);
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
        if (err) {
            console.log('连接数据异常');
            res.json({
                code: '1',
                msg: '网络异常'
            })
        } else {
            var db = client.db('maizuo');
                db.collection('list').find({filmId : filmid}).toArray(function (err, result) {
                    if (err) {
                        console.log('查找数据总数异常');
                        res.json({
                            code: '1',
                            msg: '网络异常'
                        })
                    } else {
                        res.json({
                            code: '0',
                            msg: result
                        })
                    }
                })
            }
        client.close();
        })
})

module.exports = router;