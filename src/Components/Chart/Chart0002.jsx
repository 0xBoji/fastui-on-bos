const data = {
    labels: [
      "Oct 2013",
      "May 2017",
      "Dec 2017",
      "Jan 2021",
      "Mar 2021",
      "Otc 2021",
      "Mar 2022",
      "Dec 2022",
      "Jun 2023",
      "Aug 2023",
    ],
    datasets: [
      {
        label: "Bitcoin Marketcap (in billion U.S. dollars)",
        data: [2.43, 37.41, 237.47, 758, 955.404, 1247, 883, 342, 520, 576],
        backgroundColor: [
          "rgba(255, 205, 86, 0.2)",
          "#00e592",
          "#00e592",
          "#00e592",
          "#00e592",
          "#00e592",
          "#ff080c",
          "#ff080c",
          "#00e592",
          "#00e592",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "#00e592",
          "#00e592",
          "#00e592",
          "#00e592",
          "#00e592",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const config = {
    type: "bar",
    data: data,
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  
  const chartData = props.chartData ?? data; // Use your data or fall back to default data
  const chartOptions = props.chartOptions ?? config; // Use your config or fall back to default config
  
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
   const data = {
    labels: [
      "Oct 2013",
      "May 2017",
      "Dec 2017",
      "Jan 2021",
      "Mar 2021",
      "Otc 2021",
      "Mar 2022",
      "Dec 2022",
      "Jun 2023",
      "Aug 2023",
    ],
    datasets: [
      {
        label: "Bitcoin Marketcap (in billion U.S. dollars)",
        data: [2.43, 37.41, 237.47, 758, 955.404, 1247, 883, 342, 520, 576],
        backgroundColor: [
          "rgba(255, 205, 86, 0.2)",
          "#00e592",
          "#00e592",
          "#00e592",
          "#00e592",
          "#00e592",
          "#ff080c",
          "#ff080c",
          "#00e592",
          "#00e592"
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "#00e592",
          "#00e592",
          "#00e592",
          "#00e592",
          "#00e592",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  
  const chartData = props.chartData ?? data; // Use your data or fall back to default data
  const chartOptions = props.chartOptions ?? config; // Use your config or fall back to default config
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
  