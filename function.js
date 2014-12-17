
$(function () {
	var SingleDanMu = Backbone.Model.extend({

    		defaults: {
        		Time: "empty Time: ",
        		Danmu: "empty Danmu: ",
        		Date1: "empty Date...",
			Color:"empty Color..."
    		},
	});

	var DanMuZu = Backbone.Collection.extend({
    		model: SingleDanMu,
    		localStorage: new Backbone.LocalStorage("danmuzu-backbone1"),
	});
	var idCount=0;
	var danMuZu = new DanMuZu;
    var DanMuZuShowListView = Backbone.View.extend({
    	el: "#commentkuang",

    	initialize: function() {
			idCount++;
        	this.listenTo(this.model, 'change', this.renderOne);
    	},
    		
    	renderOne: function() {
			var row=document.getElementById("commentkuang").insertRow(danMuZu.length);
			row.id = ""+ idCount;
			row.ondblclick = function() {
				var timeString = document.getElementById(row.id).cells[0].innerHTML;
    			document.getElementById("myVideo").currentTime=Number(timeString.substr(0, timeString.indexOf(':')))*60+Number(timeString.substr(timeString.indexOf(':')+1));
			};
			row.onmouseover = function() {
				row.style.backgroundColor = "gray";
			};
			row.onmouseout  = function() {
				row.style.backgroundColor = "white";
			};
			var cell=row.insertCell(0);
			var time=this.model.toJSON().Time;
			if(Math.floor(time%60)<10){
				time = Math.floor(time/60) + ":0" +Math.floor(time%60);
			}
			else{
				time = Math.floor(time/60) + ":" +Math.floor(time%60);
			}
			cell.innerHTML=time;
			var cell=row.insertCell(1);
			cell.innerHTML=this.model.toJSON().Danmu;
			var cell=row.insertCell(2);
			cell.innerHTML=this.model.toJSON().Date;
    	}
	});


    var DanMuInputView = Backbone.View.extend({
    	el: "#danmuinput",

    	initialize: function(){
			this.listenTo(danMuZu, 'add', this.addOne);
			danMuZu.fetch();
			var DanMuLength = 1;
			danMuZu.each(function(singleDanMu){
				var row=document.getElementById("commentkuang").insertRow(DanMuLength);
				row.id = ""+ DanMuLength;
				row.ondblclick = function() {
					var timeString = document.getElementById(row.id).cells[0].innerHTML;
    				document.getElementById("myVideo").currentTime=Number(timeString.substr(0, timeString.indexOf(':')))*60+Number(timeString.substr(timeString.indexOf(':')+1));
				};
				row.onmouseover = function() {
					row.style.backgroundColor = "gray";
				};
				row.onmouseout  = function() {
					row.style.backgroundColor = "white";
				};
				var cell=row.insertCell(0);
				var time=singleDanMu.get('Time');
				if(Math.floor(time%60)<10){
					time = Math.floor(time/60) + ":0" +Math.floor(time%60);
				}
				else{
					time = Math.floor(time/60) + ":" +Math.floor(time%60);
				}
				cell.innerHTML=time;
				var cell=row.insertCell(1);
				cell.innerHTML=singleDanMu.get('Danmu');
				var cell=row.insertCell(2);
				cell.innerHTML=singleDanMu.get('Date');
				DanMuLength++;
			})
    	},
    	events:{  
			'click #search_button' : 'inputDanMu', 
			'click #clear' : 'cleanDanMu',

    	},

    	inputDanMu: function(e){
    		var d = new Date();
			var month = d.getMonth() +1;
    		var formattedDate = month + "-" + d.getDate() + " " + d.getHours()+":"+d.getMinutes();
			danMuZu.create({Time: document.getElementById("myVideo").currentTime,Danmu: $("#search_input").val(),Date:formattedDate, Color:$("#inputColor").val()});
    	},


    	cleanDanMu: function(e){
			var length = danMuZu.length;
			for(i=0;i<length;i++){
				danMuZu.at(0).destroy();
			}
		},

		addOne: function(todo) {
			var view = new DanMuZuShowListView({model: todo});
		},

		delete: function(){
			this.model.destroy();
		}
	});

	var danMuInputView = new DanMuInputView;

	var MyMar;
	var MyMar1;
	var slide1array = new Array();
	var slide2array = new Array();
	var slide3array = new Array();
	var slide4array = new Array();
	var slide5array = new Array();
	var slide6array = new Array();
	var array1element=0;
	var array2element=0;
	var array3element=0;
	var array4element=0;
	var array5element=0;
	var array6element=0;
	vid.onplay = function() {
  		MyMar1=setInterval(changen,100);
		function changen(){
			if(array1element==0){
				if(slide1array.length!=0){
					array1element = slide1array[0].length;
					document.getElementById("demo1").innerHTML = document.getElementById("demo1").innerHTML +' <span style="color:'+slide1array[1]+'">'+slide1array[0].charAt(0)+'</span>';
					array1element--;
				}
				else{
					document.getElementById("demo1").innerHTML = document.getElementById("demo1").innerHTML +" ";
				}
			}
			else{
				if(array1element!=1){
					document.getElementById("demo1").innerHTML = document.getElementById("demo1").innerHTML +'<span style="color:'+slide1array[1]+'">'+slide1array[0].charAt(slide1array[0].length-array1element)+'</span>';
					array1element--;
				}
				else{
					document.getElementById("demo1").innerHTML = document.getElementById("demo1").innerHTML +'<span style="color:'+slide1array[1]+'">'+slide1array[0].charAt(slide1array[0].length-1)+'</span>';
					array1element=0;
					slide1array.splice(0,2);
				}
			}
			if(array2element==0){
				if(slide2array.length!=0){
					array2element = slide2array[0].length;
					document.getElementById("demo2").innerHTML = document.getElementById("demo2").innerHTML +' <span style="color:'+slide2array[1]+'">'+slide2array[0].charAt(0)+'</span>';
					array2element--;
				}
				else{
					document.getElementById("demo2").innerHTML = document.getElementById("demo2").innerHTML +" ";
				}
			}
			else{
				if(array2element!=1){
					document.getElementById("demo2").innerHTML = document.getElementById("demo2").innerHTML +'<span style="color:'+slide2array[1]+'">'+slide2array[0].charAt(slide2array[0].length-array2element)+'</span>';
					array2element--;
				}
				else{
					document.getElementById("demo2").innerHTML = document.getElementById("demo2").innerHTML +'<span style="color:'+slide2array[1]+'">'+slide2array[0].charAt(slide2array[0].length-1)+'</span>';
					array2element=0;
					slide2array.splice(0,2);
				}
			}
			if(array3element==0){
				if(slide3array.length!=0){
					array3element = slide3array[0].length;
					document.getElementById("demo3").innerHTML = document.getElementById("demo3").innerHTML +' <span style="color:'+slide3array[1]+'">'+slide3array[0].charAt(0)+'</span>';
					array3element--;
				}
				else{
					document.getElementById("demo3").innerHTML = document.getElementById("demo3").innerHTML +" ";
				}
			}
			else{
				if(array3element!=1){
					document.getElementById("demo3").innerHTML = document.getElementById("demo3").innerHTML +'<span style="color:'+slide3array[1]+'">'+slide3array[0].charAt(slide3array[0].length-array3element)+'</span>';
					array3element--;
				}
				else{
					document.getElementById("demo3").innerHTML = document.getElementById("demo3").innerHTML +'<span style="color:'+slide3array[1]+'">'+slide3array[0].charAt(slide3array[0].length-1)+'</span>';
					array3element=0;
					slide3array.splice(0,2);
				}
			}
			if(array4element==0){
				if(slide4array.length!=0){
					array4element = slide4array[0].length;
					document.getElementById("demo4").innerHTML = document.getElementById("demo4").innerHTML +' <span style="color:'+slide4array[1]+'">'+slide4array[0].charAt(0)+'</span>';
					array4element--;
				}
				else{
					document.getElementById("demo4").innerHTML = document.getElementById("demo4").innerHTML +" ";
				}
			}
			else{
				if(array4element!=1){
					document.getElementById("demo4").innerHTML = document.getElementById("demo4").innerHTML +'<span style="color:'+slide4array[1]+'">'+slide4array[0].charAt(slide4array[0].length-array4element)+'</span>';
					array4element--;
				}
				else{
					document.getElementById("demo4").innerHTML = document.getElementById("demo4").innerHTML +'<span style="color:'+slide4array[1]+'">'+slide4array[0].charAt(slide4array[0].length-1)+'</span>';
					array4element=0;
					slide4array.splice(0,2);
				}
			}
			if(array5element==0){
				if(slide5array.length!=0){
					array5element = slide5array[0].length;
					document.getElementById("demo5").innerHTML = document.getElementById("demo5").innerHTML +' <span style="color:'+slide5array[1]+'">'+slide5array[0].charAt(0)+'</span>';
					array5element--;
				}
				else{
					document.getElementById("demo5").innerHTML = document.getElementById("demo5").innerHTML +" ";
				}
			}
			else{
				if(array5element!=1){
					document.getElementById("demo5").innerHTML = document.getElementById("demo5").innerHTML +'<span style="color:'+slide5array[1]+'">'+slide5array[0].charAt(slide5array[0].length-array5element)+'</span>';
					array5element--;
				}
				else{
					document.getElementById("demo5").innerHTML = document.getElementById("demo5").innerHTML +'<span style="color:'+slide5array[1]+'">'+slide5array[0].charAt(slide5array[0].length-1)+'</span>';
					array5element=0;
					slide5array.splice(0,2);
				}
			}
			if(array6element==0){
				if(slide6array.length!=0){
					array6element = slide6array[0].length;
					document.getElementById("demo6").innerHTML = document.getElementById("demo6").innerHTML +' <span style="color:'+slide6array[1]+'">'+slide6array[0].charAt(0)+'</span>';
					array6element--;
				}
				else{
					document.getElementById("demo6").innerHTML = document.getElementById("demo6").innerHTML +" ";
				}
			}
			else{
				if(array6element!=1){
					document.getElementById("demo6").innerHTML = document.getElementById("demo6").innerHTML +'<span style="color:'+slide6array[1]+'">'+slide6array[0].charAt(slide6array[0].length-array6element)+'</span>';
					array6element--;
				}
				else{
					document.getElementById("demo6").innerHTML = document.getElementById("demo6").innerHTML +'<span style="color:'+slide6array[1]+'">'+slide6array[0].charAt(slide6array[0].length-1)+'</span>';
					array6element=0;
					slide6array.splice(0,2);
				}
			}
			deletechar("demo1");
			deletechar("demo2");
			deletechar("demo3");
			deletechar("demo4");
			deletechar("demo5");
			deletechar("demo6");
			function deletechar(demo){
				if(document.getElementById(demo).scrollWidth>Number(document.getElementById("comment").style.width.replace('px',''))){
					if(document.getElementById(demo).innerHTML.substr(0,19)=='<span style="color:'){
						document.getElementById(demo).innerHTML = document.getElementById(demo).innerHTML.substr(36);
					}
					else{
						document.getElementById(demo).innerHTML = document.getElementById(demo).innerHTML.substr(1);
					}
				}
			}
		};
	};
	vid.onpause = function() {
		clearInterval(MyMar1);
	};
	var count1=0;
	var count2=0;
	var count3=0;
	var count4=0;
	var count5=0;
	var count6=0;
	var lasttime=-1;
	vid.ontimeupdate = function() {
		var currenttime=Math.floor(document.getElementById("myVideo").currentTime); 
		if(currenttime==lasttime){}
		else{
		lasttime=currenttime;
		var length = danMuZu.length;
		for(i=0;i<length;i++){
			if(currenttime==Math.round(danMuZu.at(i).get('Time'))){
				var danMuLength = danMuZu.at(i).get('Danmu').length;
				var choose = Math.min(count1,count2,count3,count4,count5,count6);
				if ( count1 == choose){
					count1 = count1 + danMuLength;
					slide1array.push(danMuZu.at(i).get('Danmu'));
					slide1array.push(danMuZu.at(i).get('Color'));
				}
				else if (count2==choose){
					count2 = count2 + danMuLength;
					slide2array.push(danMuZu.at(i).get('Danmu'));
					slide2array.push(danMuZu.at(i).get('Color'));
				}
				else if (count3==choose){
					count3 = count3 + danMuLength;
					slide3array.push(danMuZu.at(i).get('Danmu'));
					slide3array.push(danMuZu.at(i).get('Color'));
				}
				else if (count4==choose){
					count4 = count4 + danMuLength;
					slide4array.push(danMuZu.at(i).get('Danmu'));
					slide4array.push(danMuZu.at(i).get('Color'));
				}
				else if (count5==choose){
					count5 = count5 + danMuLength;
					slide5array.push(danMuZu.at(i).get('Danmu'));
					slide5array.push(danMuZu.at(i).get('Color'));
				}
				else{
					count6 = count6 + danMuLength;
					slide6array.push(danMuZu.at(i).get('Danmu'));
					slide6array.push(danMuZu.at(i).get('Color'));
				}
			}
		}
		if(count1-10>=0){
			count1=count1-10;
		}
		else{
			count1=0;
		}
		if(count2-10>=0){
			count2=count2-10;
		}
		else{
			count2=0;
		}
		if(count3-10>=0){
			count3=count3-10;
		}
		else{
			count3=0;
		}
		if(count4-10>=0){
			count4=count4-10;
		}
		else{
			count4=0;
		}
		if(count5-10>=0){
			count5=count5-10;
		}
		else{
			count5=0;
		}
		if(count6-10>=0){
			count6=count6-10;
		}
		else{
			count6=0;
		}}
	};
});
