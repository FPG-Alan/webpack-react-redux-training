import 'babel-polyfill';
import test from './test';
import $ from 'jquery';

import './styles/main.css';

$(function(){
	console.log('page loaded...');

	let testBtn = $('.test-btn');
	testBtn.on('click',function(){
		require.ensure(['./components/test/index.js'],function(require){
			var testComponent=require('./components/test/index.js');
			new testComponent('hello test',$);
		});
	});
});
