var stdio = require('stdio');

var org = stdio.getopt({
    'env': {args: 1, required: true}
});

const config = {
    "apigee": {
        "management_api": {
            "host": "api.enterprise.apigee.com"
        },
      "organization":{
          "earthport-test":{
              "refresh_token_url": org.env
          }
      }  
    }
};
   module.exports = config;