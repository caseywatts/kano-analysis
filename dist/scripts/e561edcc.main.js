function myData(a){console.log(a),a=_.map(a,function(a){return a.Dissatisfaction=+a.Dissatisfaction,a.Satisfaction=+a.Satisfaction,a}),a=_.sortBy(a,"Dissatisfaction"),console.log(a);c3.generate({data:{json:a,keys:{value:["Satisfaction","Dissatisfaction"]},type:"bar"},grid:{y:{lines:[{value:0}]}},tooltip:{format:{title:function(b){return"Feature "+a[b].FeatureID+": "+a[b].Description}}}})}document.addEventListener("DOMContentLoaded",function(){var a="1THu-Vknk-UJX7UsDOjtsti_pDk6bnhyGS20Hjzxv46E";Tabletop.init({key:a,callback:myData,simpleSheet:!0})});