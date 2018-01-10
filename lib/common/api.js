

const request = require('request'),
      ora = require('ora'),
      cf = require('./config');



module.exports = {
	template_list: function(callback){
	   const spinner = ora('loading...');
	   spinner.start();
	   request({
	   	uri: cf.template_url,
	   	headers: {
	   		'User-Agent' : 'cai-cli'
	   	}
	   }, (err,res,body) => {
	   	spinner.stop();
	   	if(err) return logger.fatal(err)
	   	const respone = JSON.parse(body);
	    if(Array.isArray(respone)){
	    	callback(respone)
	    }else{
	    	console.log(respone.message)
	    }

	   })
	}
}