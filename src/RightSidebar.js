import RSBButton from './RSBButton'

export default function RSB(){
    return(
        <div style={{
            border: "solid 5px #FAD7A0",
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"space-around",
            height:"150px",
            width:"200px",
            alignItems:"center",
            margin:"20px 0px",
            marginRight:"20px",
            position:"sticky",
            top:"120px"
             }}>
            <RSBButton/>
            <RSBButton/>
            <RSBButton/>
            <RSBButton/>
            <RSBButton/>
            <RSBButton/>
            <RSBButton/>
        </div>
    );
}