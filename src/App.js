import './App.css';
import HeaderApp from './Header';
import Post from './Post';
import RSB from './RightSidebar';
function App() {
  return (
    <div className="App">
      <HeaderApp/>
      <div style={{
        display:"flex",
        justifyContent:"center",
        gap:"50px"  
      }}>
        <div style={{
          flexGrow:"1",
          marginLeft:"20px"
        }}>
          <Post title="first_post">
            <h4>tiririr</h4>
          </Post>
          <Post title="2nd_post" />
          <Post title="3rd_post" />
          <Post title="4th_post" />
          <Post title="5th_post" />
          <Post title="2nd_post" />
          <Post title="3rd_post" />
          <Post title="4th_post" />
          <Post title="5th_post" />
          <Post title="2nd_post" />
          <Post title="3rd_post" />
          <Post title="4th_post" />
          <Post title="5th_post" />
          
        </div>
        <RSB/>
      </div>
    </div>
  );
}

export default App;
