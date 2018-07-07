$(function(){
	showJobList();
});

function showJobList(){
	$.get('/job',function(data){
		if(data && data.code==200){
			var ls=data.data;
			var html='';
			for(var i=0;i<ls.length;i++){
				html+=getTrHtml(ls[i]);
			}
			$('#tb').append(html);
		}
	},'json');
}

function getTrHtml(job){
	var html='';
	html+='<tr>';
	html+='		<td>'+job.id+'</td>';
	html+='		<td>'+job.className+'</td>';
	html+='		<td>'+job.cronExpression+'</td>';
	html+='		<td>'+job.jobName+'</td>';
	html+='		<td>'+job.jobGroup+'</td>';
	html+='		<td>'+job.triggerName+'</td>';
	html+='		<td>'+job.triggerGroup+'</td>';
	html+='		<td>'+job.pause+'</td>';
	html+='		<td>'+job.enable+'</td>';
	html+='		<td>'+job.description+'</td>';
	html+='		<td>'+job.createTime+'</td>';
	html+='		<td>'+job.lastUpdateTime+'</td>';
	html+='</tr>';
	
	return html;
}