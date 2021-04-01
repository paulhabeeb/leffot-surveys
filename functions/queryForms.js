require("dotenv").config();
const https = require('https');
const NetlifyAPI = require('netlify');

exports.handler = async (event, context) => {
    const client = new NetlifyAPI(process.env.NETLIFY_API);
    const forms = await client.listSiteForms({ site_id: process.env.SITE_ID });

    let formId = null
    forms.forEach(form => {
        if (form.name === event.queryStringParameters.formName) {
            formId = form.id
        }
    })

    const submissions = await client.listFormSubmissions({ form_id: formId })

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(submissions),
    };
};
