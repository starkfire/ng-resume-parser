const router = require("express").Router();
const multer = require("multer");

const { parseText } = require('./api-text.service')

const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter(req, file, callback) {
        const supportedMimes = {
            "application/pdf": "pdf"
        };
        
        let ext = supportedMimes[file.mimetype];
        
        !ext ? callback(new Error("Unsupported File Format")) : callback(null, true);
    }
});

router.post("/parse", upload.single("resume"), parseText);

module.exports = router;