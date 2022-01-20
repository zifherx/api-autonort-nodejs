import app from './app'
import connectDB from './config/database'

async function main() {
    await app.listen(app.get('port'))
    console.log('Server on port:', app.get('port'));
    await connectDB();
}

main();