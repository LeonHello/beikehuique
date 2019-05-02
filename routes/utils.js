var express = require('express');
var router = express.Router();

//生成轮播图下载的url的工具路由 => /utils/generate_carousel_figure_url
router.get('/generate_carousel_figure_url', function(req, res, next){
    var url_arr = [];
    let base_url = 'https://bgbsk.cn/download/index_img/';
    let base_back = '.JPG';
    url_arr[0] = base_url + '1' + base_back;
    url_arr[1] = base_url + '2' + base_back;
    url_arr[2] = base_url + '3' + base_back;
    url_arr[3] = base_url + '4' + base_back;
    url_arr[4] = base_url + '5' + base_back;
    res.end(JSON.stringify(url_arr));
})

module.exports = router;