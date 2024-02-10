import React, { useContext, useEffect, useRef, useState } from 'react'
import { secondaryFindUrl } from '../../../utils/iconsUrl';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import './Forecast.css'
import DayDropdown from './DayDropdown';
import ParameterDropdown from './ParameterDropdown';
import { getWeatherForecastData } from '../../../api/openWeatherMap';
import UnitContext from '../../../context/UnitContext';
const Forecast = (props) => {

   
    const {unit:{unitSymbol, unit}} = useContext(UnitContext)

    const [forecastData, setForecastData] = useState([]);
    const [humidity, setHumidity] = useState([]);
    const [pressure, setPressure] = useState([0]);
    const [visibility, setVisibility] = useState([0]); 
    const [day, setDay] = useState(0);
    const [parameter, setParameter] = useState(0);
    
    const [paramterFont, setParameterFont] = useState(12);
    const [tempFont, setTempFont] = useState(16);
    const [timeFont, setTimeFont] = useState(12);

    const paramList = [visibility, humidity, pressure];
    const paramUnits  = ['km', '%', 'HPA'];
    useEffect(() => {
        const getWeatherForecastDataHandler = async () => {
            const response = await  getWeatherForecastData(props.coords.lat, props.coords.lon, unit);
            setForecastData(response.transformedForecastData || []);
            setHumidity(response.transformedHumidity || []);
            setPressure(response.transformedPressure || []);
            setVisibility(response.transformedVisibility || []);
        }
        getWeatherForecastDataHandler();
       
      }, [props.coords, unit])
      

      ChartJS.defaults.font.family = 'Outfit';
      ChartJS.defaults.color = '#ffffff';
      const chartRef = useRef();
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Filler,
        Legend
      );
   
    const labels =(paramList[parameter]?.[day] || []).map(value => `${value} ${paramUnits[parameter]}`);

    const images = (forecastData?.[day] || []).map((day) => secondaryFindUrl(day.id, day.icon));

    const data = {
        labels,
        datasets: [
        {
        fill: true,
        label: 'Dataset 1',
        // data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        data: (forecastData?.[day] || []).map((day) => day.temp),
        // backgroundColor: 'rgba(255, 99, 132, 0.5)',
        backgroundColor: (context) => {
            const chart= context.chart;
            // console.log(chart);
            const {ctx, chartArea} = chart;
            // console.log(context.dataIndex);
            if(!chartArea) return null;
        
            return setGradient(chart)
        },
        // pointBackgroundColor: '#0094FF',
        borderColor: 'red',
        borderWidth: '1',
        images,
      },
    ],
  };

  const options = {
    maintainAspectRatio: true,
    responsive: true,
    tension: 0.3,
    plugins: {
        legend: {
            position: 'top',
            display: false,
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },

    scales: {
        // Parameter Axis
        x: {
            type: 'category',
            offset: false,
            grid: {
                color: '#444'
            },
            ticks: {
                color: '#98AFC7',
                font: {size: paramterFont},
            }
        },
        y: {
            grid: {
            display: false,
            color: '#ffffff'
            },
            ticks: {
                display: false
            }
        },
        x2: {
            // Temperature Axis
            type: 'category',
            position: 'top',
            afterFit: (context) => {
                context.height = 50;
            },
            grid: {
                display: false
            },
            ticks: {
            color: '#fff',
            font: {size: tempFont},
            callback: (value, index) => {
                // console.log(`index: ${index}`)
                const label = (forecastData?.[day] || [])[index].temp
                return `${label} °${unitSymbol}`;
            }
            },
        },

        x3: {
            // Time Axis
            type: 'category',
            position: 'top',
            afterFit: (context) => {
                context.height = 70;
            },
            grid: {
                display: false
            },
            ticks: {
                color: '#C9CBCF',
                font: {size: timeFont},
                callback: (value, index) => {
                    const label = (forecastData?.[day] || [])[index].time
                    return label;
                }
            }
        },
    },

    layout: {
        padding: 20
    }
  };
  
  const xScaleImage = {
    id: 'xScaleImage',
    afterDatasetsDraw: (chart, args, plugins) => {
        const {ctx, data, scales: {x}} = chart;
        // console.log(x)
        ctx.save();
        // console.log(data)
        // For every imageURL in dataset draw the image
        data.datasets[0].images?.forEach((image, index) => {
            const label = new Image();
            label.src = image;
            ctx.drawImage(label,x.getPixelForTick(index)-15, 25, 24, 24);
        })
    }
  }
  const xScalePadding = {
    id: 'xScalePadding',
    beforeDatasetsDraw: (chart, args, pluginOptions) => {
        const {scales: {x2}} = chart;
        x2._labelItems.forEach((label, index) => {
            label.textBaseline = 'top';
            // label.textOffset = -15;
        })
    } 
  }
  
  const setGradient = (chart) => {
    const {ctx, chartArea: {top, bottom}} = chart;
    const gradientSegment = ctx.createLinearGradient(0, top, 0, bottom);
        // 0 is start, 1 is end with their respective colors
        gradientSegment.addColorStop(0, '#ff4d4d00');
        gradientSegment.addColorStop(1, '#ff4d4da9');
        return gradientSegment;
  }
 
  const element = document.querySelector('.chart-wrapper');


    if(element) {
        window.addEventListener('resize', () => {
        customChartMediaQuery(element.offsetWidth)
        })
    }

    const customChartMediaQuery = (width) => {
        if(width < 450) {
            setParameterFont(8);
            setTempFont(12);
            setTimeFont(10);
        }
        else if(width < 576) {
            setParameterFont(10);
            setTempFont(14);
            setTimeFont(12);
            // console.log('In WIDTH IF');
        } else if (width < 768) {
            setParameterFont(12);
            setTempFont(16);
            setTimeFont(14);
        } 
    };

    // On load the resize Effect won't take action so using useEffect.
    useEffect(() => {
        if(element) {
            customChartMediaQuery(element.offsetWidth)
        }
    }, [])





  
  return (
    <>
    <h1 className='weather-forecast noto-h4-20' id='forecast'>Weather Forecast</h1>
      <div className='forecast'>
       <div className='forecast__dropdown-wrapper'>
            <DayDropdown day={day} setDayHandler = {setDay} 
                optionList={forecastData.map((day) => (day[0].date))}
            />
            <ParameterDropdown 
                param={parameter} setParamHandler={setParameter}
            />
       </div>
        <div id="wrapper" className='chart-wrapper'>
            <Line ref={chartRef} className='chartbox' data={data} type="line" options={options} plugins={[xScaleImage, xScalePadding]}/>
        </div>
      </div>

    </>
  );

}

export default Forecast;