var chart = c3.generate({
    data: {
        rows: [
          ['feature-1', 0.66, -0.43],
          ['feature-2', 0.79, -0.69],
          ['feature-3', 0.67, -0.53],
          ['feature-4', 0.95, -0.84],
          ['feature-5', 0.6, -0.6],
          ['feature-6', 0.08, -0.92],
          ['feature-7', 0.5, -0.54],
          ['feature-8', 0.92, -0.83],
          ['feature-9', 0.8, -0.44],
          ['feature-10', 0.58, -0.58],
          ['feature-11', 0.37, -0.67],
          ['feature-12', 0.48, -0.56],
          ['feature-13', 0.75, -0.59],
          ['feature-14', 0.99, -0.7],
          ['feature-15', 0.58, -0.42],
          ['feature-16', 0.32, -0.54],
          ['feature-17', 0.84, -0.76],
          ['feature-18', 0.72, -0.77],
          ['feature-19', 0.72, -0.44],
          ['feature-20', 0.92, -0.85],
          ['feature-21', 0.54, -0.33],
          ['feature-22', 0.71, -0.54],
          ['feature-23', 0.27, -0.18],
          ['feature-24', 0.9, -0.9],
          ['feature-25', 0.29, -0.72],
          ['feature-26', 0.31, -0.35],
          ['feature-27', 0.54, -0.56],
          ['feature-28', 0.23, -0.23],
          ['feature-29', 0.64, -0.47],
          ['feature-30', 0.72, -0.59]
        ],
        type: 'bar',
        order: 'desc'
    },
    grid: {
        y: {
            lines: [{value:0}]
        }
    },
});