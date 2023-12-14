var v1 = "#E8544E",
    v2 = "#B02863",
    v3 = "#2AA775";

Highcharts.chart("networkchart111", {
  chart: {
  height: 800,
    type: "networkgraph",
    marginTop: 0
  },
credits: {
        enabled: false
    },
  title: {
    text: ''
  },
  tooltip: {
        useHTML: true,
        formatter: function () {
         var info = "";
         switch (this.color) {
           case v1:
           info = '<div class="w-layout-hflex tt-wrapper"><div class="w-layout-vflex tt-box1 smaller"><div class="para p3 color-medium-base">Average Response Time</div><div class="w-layout-hflex tt-number"><div class="para p2 semi-bold">1.337</div><div class="tt-align"><div class="para p4 semi-bold">ms</div></div><img src="https://assets-global.website-files.com/652f9e7b31a28d6a528c14d6/6579ec0a1506ed7307b55a2f_Spark%20lines.png" loading="eager" width="100" height="20" alt="" class="tt-spark"></div></div><div class="w-layout-vflex tt-box1"><div class="para p3 color-medium-base">Calls</div><div class="w-layout-hflex tt-number"><div class="para p2 semi-bold">7.12</div><div class="tt-align"><div class="para p4 semi-bold">calls/min</div></div><img src="https://assets-global.website-files.com/652f9e7b31a28d6a528c14d6/6579ec0a1506ed7307b55a2f_Spark%20lines.png" loading="eager" width="100" height="20" alt="" class="tt-spark"></div></div><div class="w-layout-vflex tt-box1"><div class="para p3 color-medium-base">Errors</div><div class="w-layout-hflex tt-number"><div class="para p2 semi-bold">0.85</div><div class="tt-align"><div class="para p4 semi-bold">errors/min</div></div><img src="https://assets-global.website-files.com/652f9e7b31a28d6a528c14d6/6579ec0a1506ed7307b55a2f_Spark%20lines.png" loading="eager" width="100" height="20" alt="" class="tt-spark"></div></div></div>'
           break;
           case v2:
           info = '<div class="w-layout-hflex tt-wrapper"><div class="w-layout-vflex tt-box1 smaller"><div class="para p3 color-medium-base">Average Response Time</div><div class="w-layout-hflex tt-number"><div class="para p2 semi-bold">6.67K</div><div class="tt-align"><div class="para p4 semi-bold">ms</div></div><img src="https://assets-global.website-files.com/652f9e7b31a28d6a528c14d6/6579ec0a1506ed7307b55a2f_Spark%20lines.png" loading="eager" width="100" height="20" alt="" class="tt-spark"></div></div><div class="w-layout-vflex tt-box1"><div class="para p3 color-medium-base">Calls</div><div class="w-layout-hflex tt-number"><div class="para p2 semi-bold">0.32</div><div class="tt-align"><div class="para p4 semi-bold">calls/min</div></div><img src="https://assets-global.website-files.com/652f9e7b31a28d6a528c14d6/6579ec0a1506ed7307b55a2f_Spark%20lines.png" loading="eager" width="100" height="20" alt="" class="tt-spark"></div></div><div class="w-layout-vflex tt-box1"><div class="para p3 color-medium-base">Errors</div><div class="w-layout-hflex tt-number"><div class="para p2 semi-bold">7.85</div><div class="tt-align"><div class="para p4 semi-bold">errors/min</div></div><img src="https://assets-global.website-files.com/652f9e7b31a28d6a528c14d6/6579ec0a1506ed7307b55a2f_Spark%20lines.png" loading="eager" width="100" height="20" alt="" class="tt-spark"></div></div></div>'
           break;
           case v3:
           info = '<div class="w-layout-hflex tt-wrapper"><div class="w-layout-vflex tt-box1 smaller"><div class="para p3 color-medium-base">Average Response Time</div><div class="w-layout-hflex tt-number"><div class="para p2 semi-bold">2.671</div><div class="tt-align"><div class="para p4 semi-bold">ms</div></div><img src="https://assets-global.website-files.com/652f9e7b31a28d6a528c14d6/6579ec0a1506ed7307b55a2f_Spark%20lines.png" loading="eager" width="100" height="20" alt="" class="tt-spark"></div></div><div class="w-layout-vflex tt-box1"><div class="para p3 color-medium-base">Calls</div><div class="w-layout-hflex tt-number"><div class="para p2 semi-bold">12.8</div><div class="tt-align"><div class="para p4 semi-bold">calls/min</div></div><img src="https://assets-global.website-files.com/652f9e7b31a28d6a528c14d6/6579ec0a1506ed7307b55a2f_Spark%20lines.png" loading="eager" width="100" height="20" alt="" class="tt-spark"></div></div><div class="w-layout-vflex tt-box1"><div class="para p3 color-medium-base">Errors</div><div class="w-layout-hflex tt-number"><div class="para p2 semi-bold">201</div><div class="tt-align"><div class="para p4 semi-bold">errors/min</div></div><img src="https://assets-global.website-files.com/652f9e7b31a28d6a528c14d6/6579ec0a1506ed7307b55a2f_Spark%20lines.png" loading="eager" width="100" height="20" alt="" class="tt-spark"></div></div></div>'
           break;
         }
         return "<b>" + this.key + "</b> <br>" + info;
       },
             shadow: {
               color: "rgba(0, 0, 0, 0.18)",
               offsetX:0,
               offsetY:3,
               width:4
               },
                padding: 12,
               shape: 'square',
               shared: true,
               borderWidth: "2px",
               borderColor: "#656C75",
               borderRadius: 6,
               backgroundColor: "#ffffff",
               headerFormat: "",
               style: {
                 fontSize: "13px",
                 lineHeight:"20px",
                 color: "#23282E"
               },
             },
  plotOptions: {
    networkgraph: {
      keys: ["from", "to"],
      layoutAlgorithm: {
        enableSimulation: false,
        integration: "verlet",
        linkLength: 160
      }
    }
  },
  series: [
    {
      marker: {
        radius: 30,
          states: {
              hover:{
                lineColor:'#0D5CBD',
                lineWidth: 3
              },
          },
      },
      link:{
        width: 2,
        color: '#596069',
      },
      dataLabels: {
        y:60,
        enabled: true,
        linkFormat: "",
        allowOverlap: true,
        style: {
          fontSize: "12px",
          color:'#23282E',
          textOutline: false
        }
      },
      data: [
        ["shop_inventory", "cloudkart-inventory-service"],
        ["localhost:5778", "cloudkart-inventory-service"],
        ["cloudkart-shop-robocannon-service", "cloudkart-inventory-service"],
        ["cloudkart-notification-service", "cloudkart-shop-robocannon-service"],
        ["cassandra", "cloudkart-notification-service"],
        ["cassandra2", "cloudkart-notification-service"],
        ["cloudkart-user-service", "cloudkart-shop-robocannon-service"],
        ["cloudkart-aws-dev-65435116", "cloudkart-shop-robocannon-service"],
        ["http-backend", "cloudkart-shop-robocannon-service"],
        ["cloudkart-fulfillment-service", "cloudkart-shop-robocannon-service"],
        ["shop_users", "cloudkart-user-service"],        
      ],
      nodes: [
        {
          id: "cloudkart-inventory-service",
          marker: {
            symbol: 'url(https://uploads-ssl.webflow.com/652f9e7b31a28d6a528c14d6/6579f3cb6c91453b9c51f02a_Node.svg)',
          },
          color: v1
        },
         {
          id: "cloudkart-shop-robocannon-service",
          marker: {
            symbol: 'url(https://uploads-ssl.webflow.com/652f9e7b31a28d6a528c14d6/657acf9bb757158a997adfdd_Node.svg)',
          },
          color: v2
        },
        {
          id: "cloudkart-user-service",
          marker: {
            symbol: 'url(https://uploads-ssl.webflow.com/652f9e7b31a28d6a528c14d6/6579f3cb6c91453b9c51f02a_Node.svg)',

          },
          color: v3
        },
        {
          id: "shop_users",
          marker: {
            symbol: 'url(https://uploads-ssl.webflow.com/652f9e7b31a28d6a528c14d6/6579f80c54b688cd79f7c2b9_Node.svg)',
        },
          color: v1
        },
        {
          id: "shop_inventory",
          marker: {
            symbol: 'url(https://uploads-ssl.webflow.com/652f9e7b31a28d6a528c14d6/6579f80c54b688cd79f7c2b9_Node.svg)',
        },
          color: v2
        },
        {
          id: "cloudkart-notification-service",
          marker: {
            symbol: 'url(https://uploads-ssl.webflow.com/652f9e7b31a28d6a528c14d6/6579f2baa05dd3cea24a3834_Node.svg)',
        },
          color: v3
        },
          {
          id: "cloudkart-fulfillment-service",
          marker: {
            symbol: 'url(https://uploads-ssl.webflow.com/652f9e7b31a28d6a528c14d6/6579f2baa05dd3cea24a3834_Node.svg)',
        },
          color: v1
        },
          {
          id: "cassandra",
          marker: {
            symbol: 'url(https://uploads-ssl.webflow.com/652f9e7b31a28d6a528c14d6/6579f80c54b688cd79f7c2b9_Node.svg)',

          },
          color: v2
        },
         {
          id: "cassandra2",
          marker: {
            symbol: 'url(https://uploads-ssl.webflow.com/652f9e7b31a28d6a528c14d6/6579f80c54b688cd79f7c2b9_Node.svg)',
            raduis: 26,

          },
          color: v3
        },
        {
          id: "localhost:5778",
          marker: {
            symbol: 'url(https://uploads-ssl.webflow.com/652f9e7b31a28d6a528c14d6/6579f60313d78f5e665e2a8d_Node.svg)',
            raduis: 26,

          },
          color: v1
        },
        {
          id: "http-backend",
          marker: {
            symbol: 'url(https://uploads-ssl.webflow.com/652f9e7b31a28d6a528c14d6/657a021ba978fbf8febe8b12_Node.svg)',
            raduis: 26,

          },
          color: v2
        },
        {
          id: "cloudkart-aws-dev-65435116",
          marker: {
            symbol: 'url(https://uploads-ssl.webflow.com/652f9e7b31a28d6a528c14d6/657a021ba978fbf8febe8b12_Node.svg)',
            raduis: 26,

          },
          color: v3
        }
      ]
    }
  ]
});
