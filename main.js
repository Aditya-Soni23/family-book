var reasons = [
    "Grand Mother",
    "Father",
    "Mother",
    "sister",
    "Brother"
  ];
  
  var images = [
    "https://i.pinimg.com/originals/92/02/fa/9202fae3cd9fa94846d393cf1e392533.gif",
    "https://i.pinimg.com/originals/95/f7/ae/95f7aef0dbfaa4e8ae72610ba85d7399.gif",
    "https://media0.giphy.com/media/KfOIgxrDGE66q1AxNH/200w.gif",
    "https://thumbs.gfycat.com/CourageousWetDove-size_restricted.gif",
    "https://thumbs.gfycat.com/BitesizedDrearyBird-size_restricted.gif"
  ];
  
  var i=0;
  
  function nextslide(){
    document.getElementById("reasontext").innerHTML=reasons[i];
    document.getElementById("album").src=images[i];
    i++;
    
  }
  