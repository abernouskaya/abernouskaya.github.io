"use strict";
 function MapInform(list) {
           this.list = list;
            this.most = function() {
                  function compareLatitude(a,b) {
                     return b.latitude - a.latitude;
                  }
                 
             list.sort(compareLatitude);
                   var res1 = list[0]['city'];
                   var res2=list[(list.length-1)]['city'];
                  document.getElementById("north").onclick=function(EO) {
                          document.getElementById("northcity").innerHTML=res1;}

                      document.getElementById("south").onclick=function(EO) {
                               document.getElementById("southcity").innerHTML=res2;}

                 function compareLongitude(a,b) {
                     return b.longitude - a.longitude;
                 }
                 
                 list.sort(compareLongitude);
                 var res3=list[0]['city'];
                  var res4=list[(list.length-1)]['city'];

                  document.getElementById("east").onclick=function(EO) {
                        document.getElementById("eastcity").innerHTML= res3; }

                   document.getElementById("west").onclick=function(EO) {
                         document.getElementById("westcity").innerHTML=res4; }
           }

               this.nameCity = function() {
                       document.getElementById("name").onclick= ask;
                                function ask(EO) {
                                  var latStr = prompt("Please, enter the latitude");                            
                                   var longStr=prompt("Please, enter the longitude");                             
                                 
                          var lat = parseFloat(latStr); 
                          var long=parseFloat(longStr); 
                          var distance=0;
                          var deltaLat=0;
                          var deltaLong=0;
                          var inf=[]; 
                          var arr={};
                       
                       for (var i=0; i<list.length; i++) {
                               inf.push(list[i]['city']);   
                            
                               for (var j=0; j<inf.length; j++) {
                                   var elem = inf[j];
                                     if (elem in arr) 
                                          continue;

                              deltaLat=Math.abs((lat-list[i]["latitude"]).toFixed(2));
                              deltaLong=Math.abs((long-list[i]["longitude"]).toFixed(2));

                              distance=(Math.sqrt(Math.pow(deltaLat,2) + Math.pow(deltaLong,2))).toFixed(2);

                              arr[elem] = distance;
                                    }    
                              }  
								  
                                   var min=Object.values(arr).sort((prev, next) => prev - next)[0] ;
                                   var minCity = "";
								   
                                   for (var city in arr) {
                                    if (arr[city] == min) {
                                       min = arr[city];
                                       minCity = city;
                                    }
                                   }
                                  document.getElementById("namecity").innerHTML=minCity;                                                                                   
                                   }
                                  }
                            

	   this.abbr = function(){
                               var arr=[];
                               var arrNew={};
                               var str='';
				for (var i=0; i<list.length; i++) {
			        arr.push(list[i]['state']);                               
                }
                   
                for (var j=0; j<arr.length; j++) {
                     var elem = arr[j];
                     if (elem in arrNew) 
                        continue;
                     arrNew[elem] = true;
                     str += elem + ' ';
                }
			 document.getElementById("abbr").innerHTML=str.trim();    
			}			
		};
		               
		var map = new MapInform([{"city": "Nashville", "state" : "TN", "latitude" : 36.17, "longitude" :-86.78},
	                              {"city":"New York", "state" : "NY", "latitude" : 40.71, "longitude" :-74.00},
			                      {"city":"Atlanta", "state" : "GA", "latitude" : 33.75, "longitude" :-84.39},
		                          {"city":"Denver", "state" : "CO", "latitude" : 39.74, "longitude" :-104.98},
		                          {"city":"Seattle", "state" : "WA", "latitude" : 47.61, "longitude" :-122.33},
		                          {"city":"Los Angeles", "state" : "CA", "latitude" : 34.05, "longitude" :-118.24},
		                          {"city":"Memphis", "state" : "TN", "latitude" : 35.15, "longitude" :-90.05}]);

    map.most();							
    map.nameCity();
    map.abbr(); 