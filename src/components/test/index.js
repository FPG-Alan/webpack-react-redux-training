import './test.css';

var html=require('./test.html');

module.exports=function(text,$){
	$('body').append(html);
};
