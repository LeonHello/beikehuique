var express = require('express');
var router = express.Router();
var FundType = require('../models/index').FundType;
var Fund = require('../models/index').Fund;

var Expert = require('../models/index').Expert;

//搜索基金种类 url =>  /search/fundtype
router.get('/fundtype', function(req, res, next){
    let keyword = req.query.keyword;
    FundType.findAll()
    .then(arr => {
        var res_arr = [];
        //res_arr中存在重复元素
        for(var i = 0; i < arr.length; i++) {
            var string = arr[i].name;
            for(var j = 0; j < keyword.length; j++) {
                if(string.indexOf(keyword[j]) != -1) 
                    res_arr.push(string);
            }
        }
        //去除重复元素
        var result = [];
        for(var k = 0; k < res_arr.length; k++) {
            if(result.indexOf(res_arr[k]) == -1){
                result.push(res_arr[k]);
            }
        }
        res.send(JSON.stringify(result));
    })
    .catch(next);
})

//搜索某病下的基金 url => /search/fund
router.get('/fund', function(req, res, next){
    let keyword = req.query.keyword;
    FundType.findOne({
        where: {
            name: keyword,
        }
    })
    .then(fundtype => {
        var fundtype_id = fundtype.id;
        Fund.findAll({
            where: {
                fundtype: fundtype_id,
            }
        }).then(fund => res.send(JSON.stringify(fund)))
        .catch(next)
    })
})

// 给出病名提示 url => /search/major
router.get('/major', function(req, res, next) {
    let keyword = req.query.keyword;

    let major_arr = ['脊柱脊髓疾病', '儿童遗传代谢性疾病', '胆道疾病', '听神经瘤', 
    '胶质瘤', '脑膜瘤', '垂体瘤', '听神经瘤', '鞍区肿瘤', '颅底肿瘤', '岩斜脑膜瘤',
    '脑干肿瘤', '颅咽管瘤', '三脑室肿瘤', '髓母细胞瘤', '颅内动脉瘤', '脑动静脉畸形',
    '缺血性脑血管病', '脊柱脊髓疾病', '帕金森病', '癫痫', '三叉神经痛', '脑瘫', 
    '面肌痉挛', '冠脉搭桥', '冠心病', 'TAVI', '冠心病介入', '心律失常介入', '心耳封堵',
    '起搏器', '高血压', '外周血管介入', '先心病介入', '外科治疗', '肺动脉高压', '心衰',
    '妇科肿瘤诊断', '高热惊厥'];

    var major_arr_res = [];

    for(var i = 0; i < major_arr.length; i++) {
        for(var j = 0; j < keyword.length; j++) {
            if(major_arr[i].indexOf(keyword[j]) != -1) 
                major_arr_res.push(major_arr[i]);
        }
    }

    //去除重复元素
    var result = [];
    for(var k = 0; k < major_arr_res.length; k++) {
        if(result.indexOf(major_arr_res[k]) == -1){
            result.push(major_arr_res[k]);
        }
    }

    res.send(JSON.stringify(result));

})

// 根据病名给出专家信息 url => /search/expert
router.get('/expert', function(req, res, next) {
    let keyword = '%' + req.query.keyword + '%';
    Expert.findAll({
        where: {
            major: {
                like: keyword,
            }
        }
    }).then(expert_arr => {
        res.send(JSON.stringify(expert_arr));
    }).catch(next);

})

module.exports = router;