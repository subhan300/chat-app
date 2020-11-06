import React,{useEffect} from 'react';
import './Home.css';
import Layout from '../../COMPONENTS/LAYOUT/Layout';
import {getRealTimeUsers} from "../../ACTIONS/Actions"
import {useDispatch,useSelector} from "react-redux"



const Home = (props) => {
    const auth=useSelector(s=>s.auth)
    const ALL_USERS=useSelector(s=>s.ALL_USERS.USERS)
    console.log(ALL_USERS,"ALL_USERS")

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRealTimeUsers(auth.Id))
        return () => {
            
        }
    }, [])


  return (
     
      <>
      
      <Layout>
    <section className="container">
    <div className="listOfUsers">

     {ALL_USERS.length>0?
     ALL_USERS.map((v)=>{console.log(v.FirstName,":",v.isOnline)
         return(
            <div className="displayName">
            <div className="displayPic">
                <img src="https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg" alt="" />
            </div>
            <div style={{margin: '0 10px',display:"flex",flex:1,justifyContent:"space-between"}}>
     <span style={{fontWeight: 500}}>{v.FirstName}</span>
     <span style={{fontWeight: 500,color:"grey"}}>{v.isOnline ? "online" : "offline"}</span>:
           
            </div>
        </div>
     )}):null}
                
    </div>
    <div className="chatArea">
        <div className="chatHeader"> Rizwan Khan </div>
        <div className="messageSections">

            <div style={{ textAlign: 'left' }}>
                <p className="messageStyle" >Hello User</p>
            </div>

        </div>
        <div className="chatControls">
            <textarea />
            <button>Send</button>
        </div>
    </div>
</section>

</Layout>
</>
  );
}


export default Home