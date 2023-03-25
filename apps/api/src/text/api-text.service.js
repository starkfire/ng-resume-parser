const { PdfReader } = require('pdfreader')

module.exports = {
    parseText: async (req, res) => {

        const pdf = new PdfReader()
        
        let tokens = []
        let lastItem = null

        pdf.parseBuffer(req.file.buffer, (err, item) => {

            if (err) {
                console.error(err)
                return res.status(500).json({ message: "An Unknown Error Occurred" })
            }

            if (!item) {
                console.warn('EOF reached')

                const result = tokens.join('')

                return res.status(200).json({ result })
            } else {

                if (item && item.hasOwnProperty('text')) {
                    
                    if (!lastItem) {
                        lastItem = item
                        tokens.push(item.text)
                    } else {
                        
                        if (item.y - lastItem.y > 0) {
                            tokens.push('\n')
                        }

                        tokens.push(item.text)
                        lastItem = item

                    }
                }

            }
        })
    }
}