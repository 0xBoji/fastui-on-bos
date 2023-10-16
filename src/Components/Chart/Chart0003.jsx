const data = {
    labels: ["BoredApe", "Winds", "DreadFulz", "DeGods", "MutantApe"],
    datasets: [
      {
        label: "Top NFT Market Prices 10/16/223",
        data: [1212, 890, 323, 252.3, 252],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
        ],
      },
    ],
  };
  
  const config = {
    type: "polarArea",
    data: data,
    options: { responsive: true },
  };
  
  const chartData = props.chartData ?? data; // Use your data or fall back to default data
  const chartOptions = props.chartOptions ?? config; // Use your config or fall back to default config
  
  const code = `
  <html>
  <head>
  <script src="https://unpkg.com/chart.js@4.3.0/dist/chart.umd.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.6/iframeResizer.contentWindow.js"></script>
    <style>
      canvas#myChart {
        width: 200px; /* Adjust the desired width */
        height: 100px; /* Adjust the desired height */
      }
    </style>
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
    labels: ["BoredApe", "Winds", "DreadFulz", "DeGods", "MutantApe"],
    datasets: [
      {
        label: "Top NFT Market Prices 10/16/223",
        data: [1212, 890, 323, 252.3, 252],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
        ],
      },
    ],
  };
  
  const config = {
    type: "polarArea",
    data: data,
    options: { responsive: true },
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
        className="w-60"
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
  