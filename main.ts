import express from 'express'
import 'dotenv/config'

async function main(){
    

    // Read .env Variable -> process.env.SECRET_KEY

    const app = express();
    const port = 3000

    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })

}

main();