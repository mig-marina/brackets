module.exports = function check(str, bracketsConfig) {
	let config=[];
	let j = 0;
	for(let i=0; i<bracketsConfig.length; i++) {
		config[j] = bracketsConfig[i][0] + bracketsConfig[i][1];
		j += 1;
		}
	let k = true;
	while(k) {
		for(let i=0; i<config.length; i++) {	
			str = str.replace(config[i], '');	
		};
		k = false;
		//проверяем, остались ли еще
		for(let i=0; i<config.length; i++) {
			if(str.indexOf(config[i]) !== -1) {k = true;}
		}
	}
	if(str.length === 0) {return true} else return false;		
}
