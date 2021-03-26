require("dotenv").config();
const https = require('https');
const NetlifyAPI = require('netlify');

exports.handler = async (event, context) => {
    const client = new NetlifyAPI(process.env.NETLIFY_API);
    const sites = await client.listSites();

    return {
        statusCode: 200,
        body: {
            message: 'Success!',
            data: sites,
        },
    };

//     let path = `/stores/gs88u3hwmj/${event.queryStringParameters.path}`
//     let formData = event.body
//
//     async function createProduct(path, formData) {
//         const options = {
//             method: 'POST',
//             host: 'api.bigcommerce.com',
//             path,
//             headers: {
//                 accept: 'application/json',
//                 'X-Auth-Client': process.env.BC_AUTH_CLIENT,
//                 'X-Auth-Token': process.env.BC_AUTH_TOKEN
//             }
//         }
//
//         return new Promise((resolve, reject) => {
//             const request = https.request(options, (response) => {
//                 let body = '';
//                 console.log(response.headers)
//                 response.on('data', (rawData) => {
//                     body += rawData;
//                 })
//                 response.on('end', () => {
//                     resolve(JSON.parse(body));
//                 })
//             });
//
//             request.on('error', (err) => {
//                 reject(err)
//             });
//
//             request.write(formData);
//             request.end();
//         })
//     }
//
//     const bcResponse = JSON.stringify(await createProduct(path, formData));
//     const response = {
//         "statusCode": 200,
//         "headers": {
//             "Access-Control-Allow-Origin": "*",
//         }
//     }
//
//     response.body = bcResponse;
//
//     if (!bcResponse.errors) {
//         context.succeed(response);
//     } else {
//         context.fail(response)
//     }
};
