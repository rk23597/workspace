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
              "refresh_token_url": "env"
          }
      }  
    },
    set payload (data){
        config.apigee.organization['earthport-test'].refresh_token_url=data;
    }
};
config.payload(org.env)
console.log(config.apigee.organization['earthport-test'].refresh_token_url)
   module.exports = config;