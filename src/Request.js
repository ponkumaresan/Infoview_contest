import React, { useState } from 'react';
import { render } from 'react-dom';
import './Request.css';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import highcharts3d from 'highcharts/highcharts-3d';
import { Modal } from 'antd';
highcharts3d(Highcharts);


const Requests = () => {


    

  const [modal2Visible, setModal2Visible] = useState(false);
  const [chartOptions, setChartOptions] = useState({
      chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
            }
        },
        title: {
            text: 'Overview of Leaves available and taken, 2022'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
       
        plotOptions: {
        pie: {
                                  innerSize: 100,
                                  depth: 45
                              }
        },
        series: [{
                         type: 'pie',
                         name: 'Leaves Overview',
                         data: [
                             {
                             name:'EL',
                             y:36,
                             color:'#ffb3ce'
                             },
                             {name:'CL',
                             y:12,
                             color:'#b3e2ff'
                             },
                             {
                             name:'SL',
                              y:12,
                              color:'#f7f7c3'
                              },

                             {
                                 name: 'EL Taken',
                                 y: 2,
                                 color:'#e67a65'
                             },
                            {
                                name: 'CL Taken',
                                 y: 3,
                                 color:'#76cc91'
                              },
                              {
                                 name: 'SL Taken',
                                 y: 10,
                                 color:'#7de8e4'
                              },
                         ]
                     }]

  });

  const updateSeries = () => {
    setModal2Visible(false);
    setChartOptions({
      series: [{
                              type: 'pie',
                              name: 'Leaves Overview',
                              data: [
                                  {
                                  name:'EL',
                                  y:36,
                                  color:'#ffb3ce'
                                  },
                                  {name:'CL',
                                  y:12,
                                  color:'#b3e2ff'
                                  },
                                  {
                                  name:'SL',
                                   y:12,
                                   color:'#f7f7c3'
                                   },

                                  {
                                      name: 'EL Taken',
                                      y: 2,
                                      color:'#f7f7c3'
                                  },
                                 {
                                     name: 'CL Taken',
                                      y: 3,
                                      color:'#76cc91'
                                   },
                                   {
                                      name: 'SL Taken',
                                      y: 10,
                                      color:'#e67a65'
                                   },
                              ]
                          }]
    });
  }

  return (
      <div>
        <HighchartsReact className="high"
          highcharts={Highcharts}
          options={chartOptions}
        />
         <button className="tocenter" onClick={() => setModal2Visible(true)} >Apply Leave</button>
         <Modal
          title="Apply Leave"
          centered
          visible={modal2Visible}
          onOk={updateSeries}
          onCancel={() => setModal2Visible(false)}
        >
            <h1>Apply leave</h1>
          <p>No of days</p>
          <p>Select Date</p>
          <p>Reason</p>
        </Modal>
      </div>
      
    )
}

export default Requests;