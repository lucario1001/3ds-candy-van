var titleDB;


$.get("https://3ds.titledb.com/v1/url",function(res){titleDB = res; console.log(titleDB)});