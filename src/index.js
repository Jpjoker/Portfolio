'use strict';

alert('Dit is een alert!');
console.log('Welkom bij Webpack!');






module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // ... andere regels voor andere bestandstypen
    ]
  }
  