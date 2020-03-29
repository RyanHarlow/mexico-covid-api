export const dataLayer = {
  id: 'data',
  type: 'fill',
  paint: {
    'fill-color': {
      property: 'percentile',
      stops: [
        [0, 'rgba(255, 255, 0, 0)'],
        [1, 'rgba(255, 223, 0, .5)'],
        [2, 'rgba(255, 191, 0, .5)'],
        [3, 'rgba(255, 159, 0, .5)'],
        [4, 'rgba(255, 128, 0, .5)'],
        [5, 'rgba(255, 96, 0, .5)'],
        [6, 'rgba(255, 64, 0, .5)'],
        [7, 'rgba(255, 32, 0, .5)'],
        [8, 'rgba(255, 0, 0, .5)']
      ]
    }
  }
};