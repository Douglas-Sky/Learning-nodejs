import {createServer} from 'node:http';

const server = createServer((req, res) => {
    res.writeHead(500, {'Content-Type': 'text/htmlc'})
    res.end('Server is running');
} );
server.listen(3000, '127.0.0.1', () => {
    console.log('Server is listening')
});

// Arrow function 

function handleRequest() {}
const handleRequest = () => {}