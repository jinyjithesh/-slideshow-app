
import classes from "./Slide1.module.css"
import React, {  useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'

export const Slide1 = () => {
 console.log()
    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(false);
    const [index, setIndex] = React.useState(0);
    const [current,setCurrent] = useState(0);
    const[startTime,setStartTime]=useState(0);
    const[endTime,setEndTime]=useState(0);
    const delay = 3000;
   

    useEffect(() => {
    
        axios.get(' https://dev.bfitds.com/api/default/demo-playlist/45/fa5326c2-4c6e-4d90-9b11-18b7c819599d').then((response) => {
           
            console.log("1234",response.data[0].playlist.playlistContents[0]);
             console.log("data",response.data)
             console.log("startDate",response.data[0].startDate)
              console.log (  "startTime",response.data[0].startAt)

             console.log("endtime",response.data[0].endAt);
             console.log (  "startTime",response.data[0].startAt);
             console.log (  "NOW TIMe",nowtime)
             console.log (  "timefrom",timefrom)
             console.log (  "timetoo", endTime)
            
            setState(response.data[0].playlist.playlistContents)
            setStartTime(response.data[0].startAt) 
            setEndTime(response.data[0].endAt)
            
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
          });
    }, []);

const timefrom  = moment(nowtime).format('DD-MM-YYYY ,h:mm:ss a');
// const timeend =moment(timeto).format('DD-MM-YYYY ,h:mm:ss a');


var nowtime = new Date()  
// var timeto = endTime;

        if( timefrom >endTime ){
          setLoading(false)
          setState(true)
         
            alert('start time should be smaller than end time!');
   
        }else{
        
          
        }
// alert(tempDate);

// const b =setStartTime();


   
  //   useEffect(()=>{

  //     state.length >0 && state.map((p,index)=>(
  //         // console.log("fileName",p.fileName)
  //         console.log("duration",p.duration)

  //     ))
  // },[state])
 
  
 
   
// if(startTime<0 && endTime  >0)



useEffect(() => {
       
  setTimeout(
    () =>
      setIndex((prevIndex) =>
        prevIndex === state.length - 1 ? 0 : prevIndex + 1
      ),
    delay
  );
  
  return () => {
   
  };
}, [index]);
      
      // const endSlide=()=>{
      //   console.log("end time",endTime)
      //  setEndTime (endTime>0 );
      // };
     



      // if(!Array.isArray(state) || state.length <= 0){
      //   return null;
      // }
    
  
    return (


<section className={classes.slideshow} >

{/* {startTime <= tempDate && startTime.map((t,index)=>{
  
})} */}
<div className={classes.slideshowSlider} style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>

{ state.length > 0 && state.map((p,index)=>(
  
    <div
  className={ index ===  current ? 'slide active': 'slide'}
  key={index}
  
  style={{p}} >
    {index === current && state.length >0 && state.map((p,index)=> (
   
      <img src={p.fileName }    transition-duration={p.duration} key={index} width="100%" height="100%" alt="img" className={classes.image}/>
    ) )} 

    </div>

  
))}
</div>

</section>
           
 
   
    )
}
