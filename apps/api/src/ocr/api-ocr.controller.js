const router = require('express').Router()
const multer = require('multer')

const { parseOCR } = require('./api-ocr.service')

const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter(req, file, callback) {
        const supportedMimes = {
            'image/jpg': 'jpg',
            'image/jpeg': 'jpeg',
            'image/png': 'png'
        }
        
        let ext = supportedMimes[file.mimetype];
        
        !ext ? callback(new Error("Unsupported File Format")) : callback(null, true);
    }
})

router.post('/parse', upload.single('resume'), parseOCR)

module.exports = router