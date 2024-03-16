'use strict';

import './styles/main.css';
alert('Dit is een alert!');







module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // ... andere regels voor andere bestandstypen
    ]
  }
  