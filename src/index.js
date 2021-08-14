import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import NetData from './NetData';
       
ReactDOM.render(
    <>
    <h1 className="heading"> Some Of The Best Netflix Series</h1>
    <div className="hero">
<Card
imgsrc={NetData[0].imgsrc}
title ={NetData[0].title}
sname={NetData[0].sname}
link={NetData[0].link}/>
<Card 
imgsrc={NetData[1].imgsrc}
title ={NetData[1].title}
sname={NetData[1].sname}
link={NetData[1].link}/>
<Card
imgsrc={NetData[2].imgsrc}
title ={NetData[2].title}
sname={NetData[2].sname}
link={NetData[2].link}/>
<Card
imgsrc={NetData[3].imgsrc}
title ={NetData[3].title}
sname={NetData[3].sname}
link={NetData[3].link}/>
<Card
imgsrc={NetData[3].imgsrc}
title ={NetData[3].title}
sname={NetData[3].sname}
link={NetData[3].link}/>
<Card
imgsrc={NetData[3].imgsrc}
title ={NetData[3].title}
sname={NetData[3].sname}
link={NetData[3].link}/>
<Card
imgsrc={NetData[3].imgsrc}
title ={NetData[3].title}
sname={NetData[3].sname}
link={NetData[3].link}/>
<Card
imgsrc={NetData[3].imgsrc}
title ={NetData[3].title}
sname={NetData[3].sname}
link={NetData[3].link}/>
<Card
imgsrc={NetData[3].imgsrc}
title ={NetData[3].title}
sname={NetData[3].sname}
link={NetData[3].link}/>
<Card
imgsrc={NetData[3].imgsrc}
title ={NetData[3].title}
sname={NetData[3].sname}
link={NetData[3].link}/>
<Card
imgsrc={NetData[3].imgsrc}
title ={NetData[3].title}
sname={NetData[3].sname}
link={NetData[3].link}/>

<Card
imgsrc={NetData[3].imgsrc}
title ={NetData[3].title}
sname={NetData[3].sname}
link={NetData[3].link}/>

<Card
imgsrc={NetData[3].imgsrc}
title ={NetData[3].title}
sname={NetData[3].sname}
link={NetData[3].link}/>
<Card
imgsrc={NetData[3].imgsrc}
title ={NetData[3].title}
sname={NetData[3].sname}
link={NetData[3].link}/>
<Card
imgsrc={NetData[3].imgsrc}
title ={NetData[3].title}
sname={NetData[3].sname}
link={NetData[3].link}/>
<Card
imgsrc={NetData[3].imgsrc}
title ={NetData[3].title}
sname={NetData[3].sname}
link={NetData[3].link}/>


</div>
</>,

    
    document.getElementById('root')
);
