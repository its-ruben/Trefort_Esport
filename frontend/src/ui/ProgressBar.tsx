import { Link } from 'react-router-dom';
import './_css/progress'
import { useEffect } from 'react';

function ProgressBar(myWidth:any) {

  return (
    <div>
      <div className="container p-10 justify-content-center">
        <div className="row">
          <div className="col">
            <div className="progress">
              <div id='barWidth'
                className="progress-bar"
                style={{ background: "#fe3b3b", width: `${myWidth.myWidth}%` }}
              >
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default ProgressBar