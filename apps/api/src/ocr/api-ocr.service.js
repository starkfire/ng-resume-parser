import { createWorker } from 'tesseract.js'

module.exports = {
    parseOCR: async (req, res) => {
        const worker = await createWorker({ logger: m => console.log(m) })

        if (worker) {
            (async () => {
                await worker.load()
                await worker.loadLanguage('eng')
                await worker.initialize('eng')
                
                const { data: { text } } = await worker.recognize(req.file.buffer)
    
                await worker.terminate()
    
                if (text) {
                    console.log(text)
                }
    
                return res.status(200).json({ result: text })
            })();
        }
    }
}