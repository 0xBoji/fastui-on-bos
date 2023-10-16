const data = {
    labels: ["Binance", "CoinBase Exchange", "Kraken"],
    datasets: [
      {
        label: "Top 3 Exchanges",
        data: [6.833, 1.124, 0.50675],
        backgroundColor: ["rgb(255, 205, 86)", "rgb(54, 162, 235)", "purple"],
        hoverOffset: 4,
      },
    ],
  };
  
  const config = {
    type: "pie",
    data: data,
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
    labels: ["Binance", "CoinBase Exchange", "Kraken"],
    datasets: [
      {
        label: "Top 3 Exchanges",
        data: [6.833, 1.124, 0.50675],
        backgroundColor: ["rgb(255, 205, 86)", "rgb(54, 162, 235)", "purple"],
        hoverOffset: 4,
      },
    ],
  };
  
  const config = {
    type: "pie",
    data: data,
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
  