const chartData = props.chartData ?? {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Near Protocol Price (in U.S. dollars)",
        backgroundColor: "#00e592",
        borderColor: "rgba (23, 23, 23, 1)",
        data: [
          1.2556, 2.3317, 2.2291, 1.9917, 1.9336, 1.5661, 1.3837, 1.3697, 1.1548,
          1.134,
        ],
      },
    ],
  };
  const chartOptions = props.chartOptions ?? {
    type: "line",
    options: { responsive: true },
  };
  
  const code = `
  <html>
  <head>
  <script src="https://unpkg.com/chart.js@4.3.0/dist/chart.umd.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.6/iframeResizer.contentWindow.js"></script>
  </head>
  <body>
  <canvas id="myChart"></canvas>
  </body>
  <script>
      function createChart(ctx, data, options) {
          new Chart(ctx, {
              type: options.type,
              data: data,
              options: options.options
          });
      }
  
      window.addEventListener('message', function(event) {
      }, false);
  
      const handleMessage = (m) => {
          const { data, options } = m;
          const ctx = document.getElementById('myChart').getContext('2d');
          createChart(ctx, data, options);
      };
  
      window.iFrameResizer = {
          onMessage: handleMessage
      }
  </script>
  </html>
  `;
  
  const props = {
    copyBtn:
      `
    const chartData = props.chartData ?? {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label:  "Near Protocol Price (in U.S. dollars)",
        backgroundColor: "#00e592",
        borderColor: "rgba (23, 23, 23, 1)",
        data: [
          1.2556, 2.3317, 2.2291, 1.9917, 1.9336, 1.5661, 1.3837, 1.3697, 1.1548,
          1.134,
        ],
      },
    ],
  };
  const chartOptions = props.chartOptions ?? {
    type: "line",
    options: { responsive: true },
  };
  \n` +
      "const code = `" +
      `
  <html>
  <head>
  <script src="https://unpkg.com/chart.js@4.3.0/dist/chart.umd.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.6/iframeResizer.contentWindow.js"></script>
  </head>
  <body>
  <canvas id="myChart"></canvas>
  </body>
  <script>
      function createChart(ctx, data, options) {
          new Chart(ctx, {
              type: options.type,
              data: data,
              options: options.options
          });
      }
  
      window.addEventListener('message', function(event) {
      }, false);
  
      const handleMessage = (m) => {
          const { data, options } = m;
          const ctx = document.getElementById('myChart').getContext('2d');
          createChart(ctx, data, options);
      };
  
      window.iFrameResizer = {
          onMessage: handleMessage
      }
  </script>
  </html>
  ` +
      "\n`;" +
      `\n return(
    <>
        <iframe
        iframeResizer
        className="w-100"
        srcDoc={code}
        message={{ data: chartData, options: chartOptions }}
      />
    </>
  )`,
    component: (
      <iframe
        iframeResizer
        className="w-100"
        srcDoc={code}
        message={{ data: chartData, options: chartOptions }}
      />
    ),
  };
  return (
    <>
      <Widget src="freeui.testnet/widget/CardMain.CardChart" props={props} />
    </>
  );
  