// Cenários desenhados em baixa resolução e ampliados com image-rendering: pixelated.
(() => {
  function setup(id, w, h) {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    return {canvas,ctx,w,h};
  }
  function rect(c,x,y,w,h,color){c.fillStyle=color;c.fillRect(x,y,w,h);}
  function line(c,x,y,w,h,color){rect(c,x,y,w,h,color);}
  function drawIsland(){
    const {ctx:c,w,h}=setup("islandScene",480,270);
    // Sky, layered clouds and distant sea
    rect(c,0,0,w,270,"#75b9d0"); rect(c,0,0,w,105,"#8cc9d5");
    rect(c,26,26,45,8,"#e9e4bd");rect(c,18,34,62,8,"#e9e4bd");rect(c,34,18,27,8,"#e9e4bd");
    rect(c,310,38,56,8,"#f0e8c8");rect(c,298,46,78,8,"#f0e8c8");rect(c,324,30,30,8,"#f0e8c8");
    rect(c,0,103,480,20,"#5da5b5");rect(c,0,123,480,24,"#4b929f");rect(c,0,147,480,18,"#387e8c");
    // Sun
    rect(c,380,18,34,34,"#eecb72");rect(c,388,10,18,8,"#eecb72");rect(c,388,52,18,8,"#eecb72");rect(c,372,26,8,18,"#eecb72");rect(c,414,26,8,18,"#eecb72");
    // distant islands
    rect(c,0,94,82,18,"#557e59");rect(c,10,84,58,16,"#6f9a60");rect(c,395,100,85,20,"#557e59");rect(c,410,88,58,18,"#6e965c");
    // island slope / sandy shore
    rect(c,0,170,480,100,"#c9b77d");rect(c,0,162,480,24,"#e4d49c");
    for(let x=0;x<480;x+=16){rect(c,x,177+(x%3)*2,8,3,"#a9b77b");rect(c,x+6,192+(x%4),4,3,"#f1dfa6");}
    // grass terraces
    rect(c,0,142,480,29,"#72985e");rect(c,0,139,480,8,"#a3b86e");rect(c,0,150,480,6,"#557f50");
    // path
    rect(c,202,162,78,108,"#c4a36d");rect(c,216,162,52,108,"#d6b77e");
    for(let y=174;y<270;y+=22){rect(c,222,y,6,3,"#a88658");rect(c,251,y+9,5,3,"#a88658");}
    // house at left
    rect(c,34,91,88,61,"#d7bd85");rect(c,28,84,100,14,"#7b5540");rect(c,38,75,80,18,"#a45e45");
    for(let x=40;x<118;x+=16){rect(c,x,99,5,5,"#f1dfac");rect(c,x+7,99,5,5,"#f1dfac");}
    rect(c,69,119,20,33,"#684c38");rect(c,73,124,12,10,"#87b5b5");
    // house window glow
    rect(c,45,109,13,14,"#5e8988");rect(c,48,112,7,8,"#e9d48f");rect(c,99,109,13,14,"#5e8988");rect(c,102,112,7,8,"#e9d48f");
    // palms
    function palm(x,y,s=1){rect(c,x,y,6*s,36*s,"#80583b");rect(c,x-15*s,y-8*s,20*s,7*s,"#477b52");rect(c,x-20*s,y-15*s,23*s,7*s,"#5c9658");rect(c,x+4*s,y-8*s,20*s,7*s,"#477b52");rect(c,x+8*s,y-16*s,20*s,7*s,"#5c9658");rect(c,x-4*s,y-20*s,8*s,15*s,"#5c9658");}
    palm(150,113,.9);palm(442,120,1.1);palm(15,130,.65);
    // bushes / flowers
    for(let x=140;x<190;x+=18){rect(c,x,145,15,13,"#4e8150");rect(c,x+3,139,8,8,"#6da35c");}
    for(let x=300;x<360;x+=17){rect(c,x,145,14,12,"#4c8050");rect(c,x+3,139,8,8,"#6da35c");}
    rect(c,172,154,4,4,"#f1d16f");rect(c,329,153,4,4,"#e9a6a0");
    // ship sailing on right horizon
    rect(c,340,125,95,7,"#604532");rect(c,352,132,76,12,"#8b5538");rect(c,362,144,56,7,"#573c30");
    rect(c,382,70,5,58,"#68472f");rect(c,382,66,5,5,"#d5b16d");
    rect(c,388,75,34,38,"#f1e1b4");rect(c,393,81,23,26,"#e8d5a0");rect(c,389,82,20,5,"#b44f42");
    rect(c,353,87,27,30,"#f0dfb6");rect(c,356,92,20,21,"#e5c88f");
    rect(c,399,60,18,8,"#f2e4be");rect(c,402,63,12,3,"#3c3b35");
    // tiny jolly roger
    rect(c,397,88,9,8,"#f8edcf");rect(c,400,89,3,3,"#252f31");rect(c,398,94,7,2,"#252f31");
    // ocean wave bands in foreground
    for(let y=205;y<270;y+=16){for(let x=(y%2?0:8);x<480;x+=38){rect(c,x,y,18,3,"#77b9bb");rect(c,x+5,y+5,9,2,"#e4e0b6");}}
    // foreground grasses and stones
    for(let x=5;x<480;x+=29){rect(c,x,164,3,8,"#416c4b");rect(c,x+4,160,3,9,"#5d8a52");}
    rect(c,118,213,12,6,"#a28d68");rect(c,135,228,8,5,"#e2d09b");rect(c,300,245,14,6,"#9b8a65");
    // wooden dock
    rect(c,0,249,480,21,"#81553a");rect(c,0,249,480,4,"#bd8b50");for(let x=0;x<480;x+=48){rect(c,x,252,3,18,"#513c31");rect(c,x+5,258,25,2,"#a87648");}
  }
  function drawPortrait(){
    const {ctx:c}=setup("portrait",96,112);
    const p=(x,y,w,h,col)=>rect(c,x,y,w,h,col);
    // shadow and straw hat, intentionally chunky pixel shapes
    p(17,103,62,6,"#597b65");p(24,62,49,52,"#bf5142");p(29,56,38,15,"#f0d6a1");
    p(27,30,42,42,"#e6a36c");p(24,23,48,25,"#4b3028");p(19,34,10,25,"#4b3028");p(66,34,10,25,"#4b3028");
    p(16,19,64,10,"#e2a943");p(24,10,48,12,"#eab94f");p(31,7,34,6,"#f1cd6d");p(16,26,64,5,"#9e4b34");
    p(36,45,5,7,"#302a27");p(57,45,5,7,"#302a27");p(43,59,14,3,"#a5483b");
    p(35,73,9,16,"#f0d6a1");p(54,73,9,16,"#f0d6a1");p(29,84,38,28,"#a84438");
    p(21,87,12,19,"#e6a36c");p(65,87,10,19,"#e6a36c");p(22,105,18,5,"#48372e");p(57,105,18,5,"#48372e");
    // vest seams
    p(45,78,5,24,"#e9c88b");p(31,91,4,3,"#f0d6a1");p(62,91,4,3,"#f0d6a1");
  }
  function drawContact(){
    const {ctx:c}=setup("contactScene",480,130);
    rect(c,0,0,480,130,"#4d8586");rect(c,0,67,480,63,"#36747b");
    rect(c,0,85,480,5,"#76b4a6");rect(c,0,105,480,4,"#8bc0ad");
    // pixel clouds
    rect(c,30,25,65,10,"#e9e4bd");rect(c,42,15,34,12,"#e9e4bd");
    rect(c,330,33,85,9,"#e9e4bd");rect(c,349,22,40,12,"#e9e4bd");
    // tiny boat
    rect(c,180,68,118,8,"#684832");rect(c,195,76,88,13,"#9b633b");rect(c,210,89,58,5,"#503a30");
    rect(c,233,19,5,51,"#63452f");rect(c,239,24,42,37,"#f2e2b7");rect(c,243,29,31,27,"#dfc58e");rect(c,239,30,25,4,"#b94e43");
    rect(c,215,43,15,25,"#f2e2b7");
    for(let x=0;x<480;x+=32){rect(c,x,116,18,3,"#9bc9ae");}
  }
  drawIsland();drawPortrait();drawContact();
})();