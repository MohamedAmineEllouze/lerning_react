export default function Header_app(){
    return(
        <header style={{
            backgroundColor: "#0c388f",
            width: "100%",
            minHeight: "15vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "calc(10px + 2vmin)",
            color: "white",
            boxShadow: "0px 7px 15px black",
            position: "sticky",
            top: "0",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px"
          }}>
            <h1>Mohamed Amine Ellouze</h1>
        </header>
    );
}