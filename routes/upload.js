var express = require('express');
var router = express.Router();

var multer = require('multer');
var upload = multer({dest: './source/upload/img/'});

//上传图片 url => /upload/img
router.all('/img', upload.single('img'), function(req, res, next){
    // 文件路径
    var filePath = './' + req.file.path;  
    // 文件类型
    var fileType = req.file.mimetype;
    var lastName = '';
    switch (fileType){
        case 'image/png':
            lastName = '.png';
            break;
        case 'image/jpeg':
            lastName = '.jpg';
            break;
        default:
            lastName = '.png';
            break;
    }
    // 构建图片名
    var fileName = Date.now() + lastName;
    // 图片重命名
    // fs.rename(filePath, fileName, (err) => {
    //     if (err) {
    //         res.end(JSON.stringify({status:'102',msg:'文件写入失败'}));   
    //     }else{
    //         var localFile = './' + fileName;  
    //         var formUploader = new qiniu.form_up.FormUploader(config);
    //         var putExtra = new qiniu.form_up.PutExtra();
    //         var key = fileName;

    //         // 文件上传
    //         formUploader.putFile(uploadToken, key, localFile, putExtra, function(respErr,
    //           respBody, respInfo) {
    //           if (respErr) {
    //             res.end(JSON.stringify({status:'101',msg:'上传失败',error:respErr}));   
    //           }
    //           if (respInfo.statusCode == 200) {
    //             res.end(JSON.stringify({status:'100',msg:'上传成功'}));   
    //           } else {
    //             res.end(JSON.stringify({status:'102',msg:'上传失败',error:JSON.stringify(respBody)}));  
    //           }
    //           // 上传之后删除本地文件
    //           fs.unlinkSync(localFile);
    //         });
    //     }
    // });
})

module.exports = router;