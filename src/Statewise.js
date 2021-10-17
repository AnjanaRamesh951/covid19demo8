import React, {useEffect,useState} from 'react'
import './Statewise.css';
import 'bootstrap/dist/css/bootstrap.css'

function Statewise() {
    const[data,setData]=useState([]);
    const getCovidData=async()=>{
        const res=await fetch('https://data.covid19india.org/data.json')
        const actualData=await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }
    useEffect(() => {
       getCovidData();
    }, []);
    return (
        <div>
          
            <div className="container-fluid mt-5">
                <div className="main-heading">
                <h1 className="mb-5 text-center">Covid-19 Dashboard</h1>

                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>recovered</th>
                                <th>deaths</th>
                                <th>active</th>
                                {/* <th>updated</th> */}
                            </tr>

                        </thead>
                        <tbody>
                            {
                                data.map((curElem,ind)=>{
                                    return(
                                        <tr Key={ind}>
                                        <th>{curElem.state}</th>
                                        <td>{curElem.confirmed}</td>
                                        <td>{curElem.recovered}</td>
                                        <td>{curElem.deaths}</td>
                                        <td>{curElem.active}</td>
                                        {/* <td>{curElem.lastupdated}</td> */}
                                    </tr>

                                    )

                                })
                            }
                      
                        
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default Statewise
