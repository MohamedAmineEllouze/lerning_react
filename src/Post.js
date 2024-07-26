export default function Post({title ,children="no content"}){
    return(
        <div style={{border:"solid 3px #FAD7A0" , margin:"20px 0px"}}>
            <h2>{title}</h2>
            <hr style={{width:"90%", margin:"0 auto"}}/>
            <p>{children}</p>
        </div>
    );
}