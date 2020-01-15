import React from 'react';
import {Remarkable} from 'remarkable';
// import '../darkdown_air_style/css/air.css';

function Post(){
    var md = new Remarkable();
    console.log(md.render("# Hi Remarkable"))
    var html = document.createElement('div');
    html = { __html: md.render("# Hi Remarkable")};
    return (
        <div dangerouslySetInnerHTML={html}>
        </div>
        
    );
}

export default Post;