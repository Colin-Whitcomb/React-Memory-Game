(this.webpackJsonpmemory_game=this.webpackJsonpmemory_game||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Aang","image":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/efa024c7-04d4-42fd-bbbf-0041fe846265/d277isg-ef0fae03-5fd6-4677-8922-276c4ac515d1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZWZhMDI0YzctMDRkNC00MmZkLWJiYmYtMDA0MWZlODQ2MjY1XC9kMjc3aXNnLWVmMGZhZTAzLTVmZDYtNDY3Ny04OTIyLTI3NmM0YWM1MTVkMS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.tqISf-_Z_xsCJ5_V5TWBZPBNwa675CTL84KKIjHCuuo"},{"id":2,"name":"Toph","image":"https://images.squarespace-cdn.com/content/v1/5031788c24ac2660dcea339c/1398228738331-UMFEHPLP7PQSDEQ9D0PW/ke17ZwdGBToddI8pDm48kJ6IJCuegf0Jc301TkSDDzhZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyZC6UZLFfDtXLrsgnL5GxSXgHvyoYB6Ddd7yZRP77r76KHkHzIU-9E-mcrvis-6AI/image-asset.png"},{"id":3,"name":"Katara","image":"https://pbs.twimg.com/media/EY5Ht-YUcAAGxZi.jpg"},{"id":4,"name":"Zuko","image":"https://i.pinimg.com/originals/12/4d/fb/124dfb9709719b9f36508fee6ee1379f.jpg"},{"id":5,"name":"Sokka","image":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mv5bntc2yte0nwqtmda5zi00nwm4ltg4otatmzvlnzfkownlode5xkeyxkfqcgdeqxvymjgyoti4mgatat-v1-1589918106.jpg?crop=0.7627118644067796xw:1xh;center,top&resize=480:*"},{"id":6,"name":"Azula","image":"https://vignette.wikia.nocookie.net/avatar/images/4/42/Azula_hanging_from_a_cliff.png/revision/latest/scale-to-width-down/340?cb=20121225195159"},{"id":7,"name":"Mai","image":"https://vignette.wikia.nocookie.net/avatar/images/d/d9/Mai_ready_to_attack.png/revision/latest?cb=20090326221510"},{"id":8,"name":"Ty Lee","image":"https://vignette.wikia.nocookie.net/avatar/images/6/6d/Ty_Lee.png/revision/latest?cb=20140905083814"},{"id":9,"name":"Oppa","image":"https://pbs.twimg.com/media/ENJvzvlWkAAS7Ac.png"},{"id":10,"name":"Momo","image":"https://pbs.twimg.com/media/D1Cqzu1WkAA4cKw.jpg"},{"id":11,"name":"Suki","image":"https://i.pinimg.com/originals/9b/ec/9c/9bec9ce8311bd059a23c84d3e051eb88.jpg"},{"id":12,"name":"Iroh","image":"https://vignette.wikia.nocookie.net/avatar/images/f/f0/Iroh%27s_lotus_tile.png/revision/latest/scale-to-width-down/340?cb=20140112225732"}]')},,,,,,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(3),r=t.n(i),s=t(4),m=t(5),o=t(7),l=t(6);t(13);var h=function(e){return c.a.createElement("div",{className:"card",onClick:function(){return e.chooseCharacter(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image,id:e.id})))};t(14);var g=function(e){return c.a.createElement("div",{className:"wrapper"},e.children)},d=t(1);t(15);var u=function(e){return c.a.createElement("div",{className:"jumbotron jumbotron-fluid"},c.a.createElement("div",{className:"container text-center"},c.a.createElement("h1",{className:"display-4"},"Avatar Memory Game"),e.message?c.a.createElement("h1",{className:"navbar-brand"},e.message):c.a.createElement("h1",{className:"navbar-brand"},"Click an image to start the game!"),c.a.createElement("br",null),c.a.createElement("h3",{className:"navbar-brand"},"Score: ",e.count," | High Score: ",e.highScore)))};var p=function(e){return c.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},c.a.createElement("h4",{className:"navbar-brand"},"React Memory Game"),e.message?c.a.createElement("h4",{className:"navbar-brand"},e.message):c.a.createElement("h4",{className:"navbar-brand"},"Be careful not to pick the same Avatar!"))};function v(e){return c.a.createElement("div",{className:"container"},e.children)}function f(e){return c.a.createElement("div",{className:"row"},e.children)}var b=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=a.call.apply(a,[this].concat(c))).state={characters:d,count:0,chosenCharacters:[],highScore:0,message:"Try to guess all 12 characters without clicking duplicates. Click an image to start!"},e.wasClicked=function(a){e.checkChosen(a),e.setState({characters:e.shuffleCards(d)})},e.checkChosen=function(a){if(e.state.chosenCharacters.includes(a))e.setState({chosenCharacters:[],count:0,message:"Already picked, try again"});else{e.state.chosenCharacters.push(a);var t=e.state.chosenCharacters.length;console.log(t),e.state.highScore<t?e.setState({message:"Good pick! Choose again.",count:t,highScore:t}):e.setState({message:"Good pick! Choose again.",count:t})}},e.shuffleCards=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(g,null,c.a.createElement(p,null),c.a.createElement(u,{count:this.state.count,highScore:this.state.highScore,message:this.state.message}),c.a.createElement(v,null,c.a.createElement(f,null,this.state.characters.map((function(a){return c.a.createElement(h,{chooseCharacter:e.wasClicked,name:a.name,image:a.image,id:a.id})})))))}}]),t}(n.Component);r.a.render(c.a.createElement(b,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.6337203f.chunk.js.map