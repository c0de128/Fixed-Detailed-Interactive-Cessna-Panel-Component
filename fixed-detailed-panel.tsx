import React, { useState } from 'react';

const InstrumentPanel = () => {
  const [selectedInstrument, setSelectedInstrument] = useState(null);

  const instrumentData = {
    airspeed: {
      title: "Airspeed Indicator (ASI)",
      description: "Primary instrument for measuring aircraft velocity relative to the surrounding air mass",
      dataSource: {
        primary: "Pitot-static system",
        components: [
          "Pitot tube for ram air pressure",
          "Static ports for ambient pressure",
          "Pressure differential chamber",
          "Mechanical linkage system"
        ]
      },
      technicalDetails: {
        operation: [
          "Measures differential pressure between ram air and static air",
          "Calibrated diaphragm expands/contracts with pressure changes",
          "Mechanical linkage converts pressure to airspeed reading",
          "Temperature and density altitude corrections applied"
        ],
        calibration: [
          "Requires periodic pitot-static system checks",
          "Position error corrections applied",
          "Instrument error corrections factored",
          "Regular leak checks mandatory"
        ]
      },
      limitations: [
        "Accuracy affected by non-standard atmospheric conditions",
        "Position error in certain flight attitudes",
        "Lag in rapid speed changes",
        "Altitude effects on indicated speed"
      ],
      maintenance: {
        regular: [
          "Pitot tube inspection and cleaning",
          "Static port obstruction check",
          "System leak checks",
          "Instrument face cleaning"
        ],
        periodic: [
          "24-month pitot-static system certification",
          "Instrument calibration verification",
          "Pressure chamber testing"
        ]
      }
    },
    attitude: {
      title: "Attitude Indicator (AI)",
      description: "Artificial horizon showing aircraft's orientation relative to Earth's horizon",
      dataSource: {
        primary: "Vacuum-driven or electric gyro system",
        components: [
          "Gyroscope assembly",
          "Gimbal mounting system",
          "Vacuum pump or electric motor",
          "Erection mechanism"
        ]
      },
      technicalDetails: {
        operation: [
          "Gyro spins at approximately 18,000 RPM",
          "Gyroscopic rigidity maintains artificial horizon",
          "Gimbaled mounting allows freedom of movement",
          "Erection system corrects for precession"
        ],
        calibration: [
          "Five-minute warm-up period required",
          "Regular erection system checks",
          "Gimbal friction adjustments",
          "Vacuum pressure verification"
        ]
      },
      limitations: [
        "Precession errors during extended turns",
        "Acceleration and deceleration errors",
        "Erection system limitations",
        "Turn rate limitations"
      ],
      maintenance: {
        regular: [
          "Vacuum pressure check",
          "Power-up alignment verification",
          "Warning flag operation check",
          "Movement smoothness verification"
        ],
        periodic: [
          "Gyro bearing inspection",
          "Vacuum system filter replacement",
          "Drive coupling inspection",
          "Erection system verification"
        ]
      }
    },
    altimeter: {
      title: "Altimeter",
      description: "Barometric pressure altimeter indicating aircraft height above mean sea level",
      dataSource: {
        primary: "Static pressure system",
        components: [
          "Static ports",
          "Aneroid wafers",
          "Temperature compensation mechanism",
          "Altitude adjustment mechanism"
        ]
      },
      technicalDetails: {
        operation: [
          "Measures atmospheric pressure changes with altitude",
          "Multiple aneroid wafers for sensitivity",
          "Mechanical multiplication for pointer movement",
          "Temperature compensated mechanism"
        ],
        calibration: [
          "Field elevation verification",
          "Barometric scale calibration",
          "Static system leak checks",
          "Scale error compensation"
        ]
      },
      limitations: [
        "Scale error",
        "Installation error",
        "Static system error",
        "Temperature error"
      ],
      maintenance: {
        regular: [
          "Static port cleaning",
          "Case seal inspection",
          "Pointer alignment check",
          "Face glass cleaning"
        ],
        periodic: [
          "24-month altimeter certification",
          "Static system certification",
          "Encoder correlation check",
          "Environmental testing"
        ]
      }
    },
    turn: {
      title: "Turn Coordinator",
      description: "Combines turn rate indication with roll rate sensing for coordinated flight",
      dataSource: {
        primary: "Electric gyro system",
        components: [
          "Electric gyro motor",
          "Gimbal assembly",
          "Roll sensing mechanism",
          "Inclinometer (slip/skid indicator)"
        ]
      },
      technicalDetails: {
        operation: [
          "Gyro canted 30° from horizontal",
          "Senses both roll and yaw movements",
          "Standard rate turn at 3° per second",
          "Inclinometer uses gravity for slip/skid"
        ],
        calibration: [
          "Gyro speed verification",
          "Turn rate calibration",
          "Inclinometer ball freedom check",
          "Power system verification"
        ]
      },
      limitations: [
        "Acceleration errors",
        "Power supply requirements",
        "Operating temperature range",
        "Maximum turn rate limitations"
      ],
      maintenance: {
        regular: [
          "Power-up check",
          "Movement smoothness verification",
          "Warning flag operation",
          "Inclinometer ball check"
        ],
        periodic: [
          "Bearing replacement",
          "Motor brush inspection",
          "Gimbal inspection",
          "Calibration verification"
        ]
      }
    },
    heading: {
      title: "Heading Indicator (HI)",
      description: "Gyroscopic direction indicator providing stable heading reference",
      dataSource: {
        primary: "Vacuum or electric gyro system",
        components: [
          "Gyroscope assembly",
          "Compass card",
          "Set knob mechanism",
          "Gimbaled mounting"
        ]
      },
      technicalDetails: {
        operation: [
          "Gyro spinning on vertical axis",
          "Maintains rigid position in space",
          "Manual alignment with magnetic compass",
          "Gradual precession normal"
        ],
        calibration: [
          "Regular alignment with magnetic compass",
          "Vacuum pressure verification",
          "Gimbal freedom check",
          "Drift rate measurement"
        ]
      },
      limitations: [
        "Precession over time",
        "Turn rate limitations",
        "Bank angle limitations",
        "Starting heading errors"
      ],
      maintenance: {
        regular: [
          "Vacuum system check",
          "Bearing lubrication",
          "Card alignment verification",
          "Set knob operation"
        ],
        periodic: [
          "Gyro overhaul",
          "Drive system inspection",
          "Gimbal overhaul",
          "Card replacement"
        ]
      }
    },
    vspeed: {
      title: "Vertical Speed Indicator (VSI)",
      description: "Rate-of-climb indicator showing aircraft vertical velocity",
      dataSource: {
        primary: "Static pressure system",
        components: [
          "Static ports",
          "Calibrated leak",
          "Diaphragm assembly",
          "Mechanical linkage"
        ]
      },
      technicalDetails: {
        operation: [
          "Measures rate of static pressure change",
          "Calibrated leak creates pressure differential",
          "Direct indication of vertical speed",
          "Built-in lag for stability"
        ],
        calibration: [
          "Zero point verification",
          "Scale accuracy check",
          "Leak rate calibration",
          "Response time verification"
        ]
      },
      limitations: [
        "Lag in indication",
        "Position error effects",
        "Temperature effects",
        "Atmospheric density variations"
      ],
      maintenance: {
        regular: [
          "Zero check",
          "Pointer movement check",
          "Case seal inspection",
          "Port cleanliness verification"
        ],
        periodic: [
          "Calibration verification",
          "Static system test",
          "Diaphragm inspection",
          "Case pressure seal test"
        ]
      }
    }
  };

  return (
    <div className="p-4 bg-gray-900 text-white">
      <div className="grid grid-cols-3 gap-4 mb-8">
        {Object.entries(instrumentData).map(([key, data]) => (
          <div 
            key={key}
            className="p-4 border border-gray-700 rounded-lg hover:bg-gray-800 cursor-pointer transition duration-300"
            onClick={() => setSelectedInstrument(key)}
          >
            <h3 className="text-xl font-bold mb-2">{data.title}</h3>
            <p className="text-gray-300">{data.description}</p>
          </div>
        ))}
      </div>

      {selectedInstrument && (
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">
            {instrumentData[selectedInstrument].title}
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Data Source & Components</h3>
            <p className="text-green-400 mb-2">Primary: {instrumentData[selectedInstrument].dataSource.primary}</p>
            <ul className="list-disc pl-6 text-gray-300">
              {instrumentData[selectedInstrument].dataSource.components.map((component, index) => (
                <li key={index} className="mb-1">{component}</li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Technical Details</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-blue-400">Operation</h4>
                <ul className="list-disc pl-6 text-gray-300">
                  {instrumentData[selectedInstrument].technicalDetails.operation.map((op, index) => (
                    <li key={index} className="mb-1">{op}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-blue-400">Calibration</h4>
                <ul className="list-disc pl-6 text-gray-300">
                  {instrumentData[selectedInstrument].technicalDetails.calibration.map((cal, index) => (
                    <li key={index} className="mb-1">{cal}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Maintenance Requirements</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-orange-400">Regular</h4>
                <ul className="list-disc pl-6 text-gray-300">
                  {instrumentData[selectedInstrument].maintenance.regular.map((item, index) => (
                    <li key={index} className="mb-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-orange-400">Periodic</h4>
                <ul className="list-disc pl-6 text-gray-300">
                  {instrumentData[selectedInstrument].maintenance.periodic.map((item, index) => (
                    <li key={index} className="mb-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Limitations & Considerations</h3>
            <ul className="list-disc pl-6 text-gray-300">
              {instrumentData[selectedInstrument].limitations.map((limitation, index) => (
                <li key={index} className="mb-1">{limitation}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstrumentPanel;
