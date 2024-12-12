import React from 'react'

const RecentScans = () => {
    const scans = [
        { name: 'OpenVAS', target: 'https://bosta.co/', result: 'Overlimit', date: '1 day ago' },
        { name: 'OWASP ZAP', target: 'https://bosta.co/', result: 'Overlimit', date: '1 day ago' },
        { name: 'Nmap', target: 'https://bosta.co/', result: 'Overlimit', date: '1 day ago' },
      ];
    
      return (
        <div className="bg-white rounded-lg shadow-lg mb-6 overflow-auto">
          {/*<table className="w-full table-auto text-sm md:text-base">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-2 md:px-4 py-2">Scan</th>
                <th className="px-2 md:px-4 py-2">Target(s)</th>
                <th className="px-2 md:px-4 py-2">Results</th>
                <th className="px-2 md:px-4 py-2">Created</th>
              </tr>
            </thead>
            <tbody>
              {scans.map((scan, index) => (
                <tr className="border-t" key={index}>
                  <td className="px-2 md:px-4 py-2">{scan.name}</td>
                  <td className="px-2 md:px-4 py-2">{scan.target}</td>
                  <td className="px-2 md:px-4 py-2 text-yellow-500">{scan.result}</td>
                  <td className="px-2 md:px-4 py-2">{scan.date}</td>
                </tr>
              ))}
            </tbody>
          </table>*/}
          <table class="items-center bg-transparent w-full border-collapse ">
        <thead>
            <tr>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        NO.
                        </th>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Scan
                        </th>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Target(s)
                        </th>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Results
                        </th>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Created
                        </th>
            </tr>
        </thead>
        </table>
        </div>
        
      );
    };

export default RecentScans
