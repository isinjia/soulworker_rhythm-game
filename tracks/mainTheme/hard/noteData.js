const notes = [
  {
    "time": 1.13,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 1.302,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 1.475,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 1.658,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 1.841,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 2.186,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 2.358,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 2.542,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 2.725,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 3.07,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 3.242,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 3.601,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 3.774,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 3.946,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 4.126,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 4.837,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 5.009,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 5.182,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 5.354,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 5.548,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 5.721,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 6.073,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 6.245,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 6.59,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 6.777,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 6.949,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 7.121,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 7.315,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 7.488,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 7.833,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 8.005,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 8.178,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 8.544,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 8.716,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 9.061,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 9.428,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 9.6,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 9.772,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 9.945,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 10.128,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 10.484,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 10.656,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 10.843,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 11.015,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 11.015,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 11.532,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 11.885,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 12.078,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 12.423,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 12.596,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 12.768,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 12.951,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 13.135,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 13.307,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 13.487,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 13.659,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 13.831,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 14.004,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 14.363,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 14.708,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 14.891,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 15.074,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 15.247,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 15.419,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 15.591,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 16.13,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 16.303,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 16.475,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 16.648,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 16.648,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 17.014,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 17.186,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 17.359,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 17.531,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 17.898,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 18.07,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 18.07,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 18.774,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 18.946,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 19.119,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 19.298,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 19.471,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 19.665,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 19.837,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 20.01,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 20.182,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 20.354,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 20.721,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 20.9,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 20.9,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 21.073,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 21.418,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 21.777,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 21.949,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 22.122,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 22.305,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 22.305,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 22.833,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 23.005,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 23.005,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 23.372,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 23.717,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 23.717,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 23.889,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 24.061,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 24.255,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 24.428,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 24.6,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 24.773,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 24.945,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 25.128,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 25.311,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 25.484,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 25.656,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 25.829,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 26.015,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 26.188,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 26.36,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 26.533,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 26.533,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 26.705,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 26.885,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 27.068,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 27.251,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 27.424,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 27.596,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 27.768,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 27.941,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 28.135,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 28.307,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 28.487,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 28.659,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 28.832,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 29.004,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 29.176,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 29.363,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 29.363,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 29.536,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 29.708,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 29.891,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 30.074,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 30.247,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 30.419,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 30.592,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 30.764,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 30.958,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 31.131,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 31.303,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 31.475,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 31.648,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 31.831,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 32.014,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 32.187,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 32.187,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 32.359,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 32.531,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 32.715,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 32.898,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 33.07,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 33.243,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 33.429,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 33.602,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 33.602,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 33.774,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 33.947,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 34.119,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 34.299,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 34.471,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 34.665,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 34.665,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 34.837,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 35.01,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 35.01,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 35.182,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 35.355,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 35.538,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 35.721,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 35.901,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 36.073,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 36.246,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 36.418,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 36.59,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 36.777,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 36.95,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 37.122,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 37.294,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 37.488,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 37.661,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 37.833,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 37.833,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 38.006,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 38.178,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 38.372,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 38.544,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 38.717,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 38.889,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 39.062,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 39.234,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 39.234,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 39.428,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 39.601,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 39.773,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 39.945,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 39.945,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 40.118,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 40.312,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 40.484,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 40.657,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 40.657,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 40.829,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 41.001,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 41.188,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 41.361,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 41.533,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 41.713,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 41.885,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 42.068,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 42.068,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 42.251,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 42.424,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 42.596,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 42.769,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 42.769,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 42.952,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 43.135,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 43.307,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 43.487,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 43.487,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 43.659,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 43.832,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 44.004,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 44.177,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 44.177,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 44.364,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 44.536,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 44.708,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 44.902,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 44.902,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 45.075,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 45.42,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 45.42,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 45.592,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 45.592,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 45.958,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 45.958,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 46.303,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 46.303,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 46.648,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 46.842,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 47.014,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 47.187,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 47.532,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 47.715,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 47.726,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 47.898,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 48.07,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 48.243,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 48.43,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 48.602,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 48.775,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 48.947,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 49.119,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 49.119,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 49.471,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 49.665,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 49.838,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 49.838,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 50.183,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 50.549,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 50.549,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 50.901,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 51.246,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 51.246,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 51.418,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 51.95,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 51.95,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 52.122,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 52.305,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 52.489,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 52.661,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 52.661,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 52.834,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 53.006,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 53.178,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 53.372,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 53.717,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 53.89,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 54.062,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 54.062,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 54.234,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 54.601,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 54.773,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 54.773,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 55.312,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 55.484,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 55.484,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 55.829,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 56.016,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 56.188,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 56.188,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 56.533,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 56.713,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 56.885,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 56.885,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 57.058,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 57.252,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 57.597,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 57.597,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 58.135,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 58.315,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 58.487,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 58.66,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 58.832,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 59.005,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 59.005,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 59.177,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 59.364,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 59.536,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 59.709,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 59.881,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 60.075,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 60.247,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 60.42,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 60.42,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 60.948,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 61.131,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 61.131,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 61.476,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 61.648,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 61.842,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 61.842,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 62.36,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 62.532,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 62.532,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 63.243,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 63.243,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 63.947,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 64.12,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 64.292,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 64.472,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 64.644,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 64.838,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 65.01,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 65.183,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 65.355,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 65.528,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 65.711,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 65.894,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 66.074,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 66.074,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 66.419,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 66.591,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 66.763,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 67.123,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 67.467,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 67.661,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 67.834,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 68.006,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 68.179,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 68.179,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 68.351,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 68.545,
    "lane": 0.0,
    "type": "hold",
    "duration": 0.172
  },
  {
    "time": 68.717,
    "lane": 6.0,
    "type": "hold",
    "duration": 0.173
  },
  {
    "time": 68.89,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 68.89,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 69.235,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 69.235,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 69.579,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 69.579,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 69.752,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 69.752,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 70.097,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 70.097,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 70.442,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 70.786,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 71.131,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 71.304,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 71.476,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 71.648,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 71.648,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 71.993,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 71.993,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 72.166,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 72.338,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 72.338,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 72.511,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 72.511,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 72.855,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 72.855,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 73.373,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 73.545,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 73.717,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 73.89,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 73.89,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 74.407,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 74.407,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 74.752,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 74.924,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 75.097,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 75.269,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 75.269,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 75.614,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 75.614,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 75.959,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 76.304,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 76.649,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 76.821,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 76.993,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 77.166,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 77.166,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 77.511,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 77.683,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 77.855,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 77.855,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 78.028,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 78.2,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 78.373,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 78.545,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 78.718,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 78.89,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 79.062,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 79.235,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 79.407,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 79.58,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 79.752,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 79.924,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 79.924,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 80.269,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 80.269,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 80.442,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 80.614,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 80.787,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 80.787,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 81.131,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 81.131,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 81.476,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 82.166,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 82.338,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 82.511,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 82.683,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 82.683,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 83.028,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 83.028,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 83.2,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 83.373,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 83.373,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 83.545,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 83.545,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 83.89,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 83.89,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 84.407,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 84.58,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 84.752,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 84.925,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 84.925,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 85.269,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 85.442,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 85.442,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 85.787,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 85.959,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 86.132,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 86.304,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 86.476,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 86.649,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 86.649,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 86.821,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 87.166,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 87.511,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 87.511,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 87.683,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 87.856,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 87.856,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 88.028,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 88.201,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 88.201,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 88.545,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 88.718,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 88.89,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 88.89,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 89.063,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 89.235,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 89.407,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 89.407,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 89.58,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 89.752,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 89.925,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 90.097,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 90.27,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 90.27,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 90.442,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 90.614,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 90.787,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 90.959,
    "lane": 5.0,
    "type": "hold",
    "duration": 0.173
  },
  {
    "time": 90.959,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 91.304,
    "lane": 3.0,
    "type": "hold",
    "duration": 0.345
  },
  {
    "time": 91.476,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 91.994,
    "lane": 1.0,
    "type": "hold",
    "duration": 0.172
  },
  {
    "time": 92.166,
    "lane": 1.0,
    "type": "hold",
    "duration": 0.173
  },
  {
    "time": 92.339,
    "lane": 6.0,
    "type": "hold",
    "duration": 0.172
  },
  {
    "time": 92.683,
    "lane": 4.0,
    "type": "hold",
    "duration": 0.173
  },
  {
    "time": 92.856,
    "lane": 6.0,
    "type": "hold",
    "duration": 0.172
  },
  {
    "time": 93.201,
    "lane": 3.0,
    "type": "hold",
    "duration": 0.172
  },
  {
    "time": 93.373,
    "lane": 6.0,
    "type": "hold",
    "duration": 0.172
  },
  {
    "time": 93.718,
    "lane": 0.0,
    "type": "hold",
    "duration": 0.172
  },
  {
    "time": 94.063,
    "lane": 4.0,
    "type": "hold",
    "duration": 0.172
  },
  {
    "time": 94.408,
    "lane": 0.0,
    "type": "hold",
    "duration": 0.172
  },
  {
    "time": 94.752,
    "lane": 2.0,
    "type": "hold",
    "duration": 0.173
  },
  {
    "time": 94.925,
    "lane": 2.0,
    "type": "hold",
    "duration": 0.172
  },
  {
    "time": 95.27,
    "lane": 1.0,
    "type": "hold",
    "duration": 0.172
  },
  {
    "time": 95.614,
    "lane": 2.0,
    "type": "hold",
    "duration": 0.173
  },
  {
    "time": 95.959,
    "lane": 4.0,
    "type": "hold",
    "duration": 0.173
  },
  {
    "time": 96.132,
    "lane": 5.0,
    "type": "hold",
    "duration": 0.172
  },
  {
    "time": 96.477,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 96.821,
    "lane": 5.0,
    "type": "hold",
    "duration": 0.173
  },
  {
    "time": 97.166,
    "lane": 4.0,
    "type": "hold",
    "duration": 0.097
  },
  {
    "time": 97.511,
    "lane": 4.0,
    "type": "hold",
    "duration": 0.172
  },
  {
    "time": 97.683,
    "lane": 5.0,
    "type": "hold",
    "duration": 0.173
  },
  {
    "time": 98.028,
    "lane": 0.0,
    "type": "hold",
    "duration": 0.173
  },
  {
    "time": 98.373,
    "lane": 2.0,
    "type": "hold",
    "duration": 0.173
  },
  {
    "time": 98.718,
    "lane": 3.0,
    "type": "hold",
    "duration": 0.172
  },
  {
    "time": 98.89,
    "lane": 5.0,
    "type": "hold",
    "duration": 0.173
  },
  {
    "time": 99.063,
    "lane": 4.0,
    "type": "hold",
    "duration": 0.345
  },
  {
    "time": 99.235,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 99.58,
    "lane": 5.0,
    "type": "hold",
    "duration": 0.172
  },
  {
    "time": 99.925,
    "lane": 5.0,
    "type": "hold",
    "duration": 0.172
  },
  {
    "time": 100.27,
    "lane": 2.0,
    "type": "hold",
    "duration": 0.172
  },
  {
    "time": 100.442,
    "lane": 6.0,
    "type": "hold",
    "duration": 0.173
  },
  {
    "time": 100.787,
    "lane": 5.0,
    "type": "hold",
    "duration": 0.172
  },
  {
    "time": 101.132,
    "lane": 2.0,
    "type": "hold",
    "duration": 0.172
  },
  {
    "time": 101.477,
    "lane": 1.0,
    "type": "hold",
    "duration": 0.344
  },
  {
    "time": 101.649,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 101.821,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 101.994,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 101.994,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 102.339,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 102.684,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 102.684,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 103.028,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 103.201,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 103.546,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 103.718,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 103.89,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 104.063,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 104.063,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 104.235,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 104.408,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 104.58,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 104.753,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 105.097,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 105.442,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 105.442,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 105.787,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 105.959,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 106.304,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 106.477,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 106.649,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 106.822,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 106.822,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 106.994,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 107.166,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 107.339,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 107.511,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 107.511,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 107.856,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 108.201,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 108.201,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 108.546,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 108.718,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 109.063,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 109.235,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 109.408,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 109.58,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 109.58,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 109.753,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 109.925,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 110.097,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 110.27,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 110.27,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 110.615,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 110.96,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 110.96,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 111.304,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 111.477,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 111.822,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 111.994,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 112.339,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 112.511,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 112.684,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 112.856,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 113.029,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 113.029,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 113.373,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 113.546,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 113.718,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 113.718,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 114.063,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 114.235,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 114.58,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 114.753,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 114.925,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 115.098,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 115.27,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 115.442,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 115.615,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 115.787,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 116.132,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 116.477,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 116.477,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 116.822,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 116.994,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 117.339,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 117.511,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 117.684,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 117.856,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 118.029,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 118.201,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 118.373,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 118.546,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 118.891,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 119.236,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 119.236,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 119.753,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 120.098,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 120.27,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 120.442,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 120.615,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 120.787,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 120.96,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 121.132,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 121.305,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 121.305,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 121.649,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 121.649,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 121.994,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 121.994,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 122.167,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 122.339,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 122.339,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 122.511,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 122.511,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 123.029,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 123.029,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 123.201,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 123.374,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 123.374,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 123.546,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 123.718,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 123.891,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 124.063,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 124.063,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 124.408,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 124.58,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 124.753,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 124.753,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 124.925,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 125.098,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 125.27,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 125.443,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 125.443,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 125.787,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 125.787,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 125.96,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 126.132,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 126.305,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 126.305,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 126.477,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 126.649,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 126.822,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 126.822,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 127.167,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 127.339,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 127.512,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 127.512,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 127.684,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 127.856,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 128.029,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 128.201,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 128.201,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 128.546,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 128.718,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 128.891,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 128.891,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 129.063,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 129.236,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 129.408,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 129.581,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 129.581,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 129.925,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 130.098,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 130.27,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 130.27,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 130.443,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 130.615,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 130.787,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 130.96,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 130.96,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 131.305,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 131.477,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 131.65,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 131.65,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 131.822,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 131.994,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 132.167,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 132.339,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 132.339,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 132.684,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 132.856,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 133.029,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 133.029,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 133.201,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 133.374,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 133.546,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 133.719,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 133.719,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 134.063,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 134.063,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 134.408,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 134.408,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 134.581,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 134.753,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 134.925,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 135.098,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 135.098,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 135.443,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 135.615,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 135.788,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 135.788,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 135.96,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 136.132,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 136.305,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 136.305,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 136.477,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 136.822,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 136.822,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 136.994,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 137.167,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 137.167,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 137.339,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 137.512,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 137.684,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 137.857,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 138.201,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 138.374,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 138.546,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 138.546,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 138.719,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 138.891,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 138.891,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 139.063,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 139.236,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 139.236,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 139.581,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 139.753,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 139.926,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 139.926,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 140.098,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 140.098,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 140.27,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 140.443,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 140.615,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 140.615,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 140.96,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 141.132,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 141.305,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 141.305,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 141.477,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 141.65,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 141.65,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 141.822,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 141.995,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 141.995,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 142.339,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 142.512,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 142.684,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 142.684,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 142.857,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 143.029,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 143.201,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 143.374,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 143.374,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 143.719,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 143.891,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 144.064,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 144.064,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 144.236,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 144.408,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 144.581,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 144.753,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 144.753,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 144.926,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 145.098,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 145.27,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 145.443,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 145.443,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 145.615,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 145.788,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 145.96,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 146.133,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 146.133,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 146.477,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 146.65,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 146.822,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 146.822,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 146.995,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 146.995,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 147.167,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 147.339,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 147.339,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 147.512,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 147.512,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 147.857,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 148.029,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 148.202,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 148.374,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 148.374,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 148.546,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 148.719,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 148.891,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 148.891,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 149.236,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 149.408,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 149.581,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 149.753,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 149.926,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 150.098,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 150.271,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 150.271,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 150.615,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 150.96,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 150.96,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 151.133,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 151.305,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 151.305,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 151.477,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 151.65,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 151.65,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 151.995,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 152.167,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 152.34,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 152.512,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 152.684,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 152.857,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 153.029,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 153.029,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 153.374,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 153.546,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 153.719,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 153.891,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 154.064,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 154.064,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 154.236,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 154.409,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 154.409,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 154.753,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 154.926,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 155.098,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 155.098,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 155.271,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 155.443,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 155.615,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 155.788,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 156.133,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 156.305,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 156.305,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 156.478,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 156.65,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 156.65,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 156.822,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 156.995,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 157.167,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 157.167,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 157.512,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 157.684,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 157.857,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 157.857,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 158.029,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 158.202,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 158.374,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 158.374,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 158.547,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 158.547,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 158.891,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 159.064,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 159.064,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 159.236,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 159.409,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 159.581,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 159.926,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 159.926,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 160.271,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 160.443,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 160.616,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 160.788,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 160.96,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 161.133,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 161.305,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 161.305,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 161.822,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 161.822,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 161.995,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 161.995,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 162.167,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 162.34,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 162.512,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 162.685,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 162.685,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 163.029,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 163.202,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 163.374,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 163.374,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 163.719,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 163.891,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 164.064,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 164.064,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 164.409,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 164.754,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 164.926,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 165.098,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 165.271,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 165.443,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 165.443,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 165.788,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 165.961,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 166.133,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 166.133,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 166.305,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 166.478,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 166.65,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 166.65,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 166.823,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 166.995,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 167.167,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 167.167,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 167.34,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 167.512,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 167.512,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 167.685,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 167.857,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 168.03,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 168.03,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 168.202,
    "lane": 2.0,
    "type": "hold",
    "duration": 0.065
  },
  {
    "time": 168.202,
    "lane": 5.0,
    "type": "hold",
    "duration": 0.065
  },
  {
    "time": 168.547,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 169.086,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 169.258,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 169.441,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 169.624,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 169.797,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 169.969,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 170.142,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 170.328,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 170.673,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 170.853,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 171.025,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 171.198,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 171.93,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 172.103,
    "lane": 2.0,
    "type": "hold",
    "duration": 0.065
  },
  {
    "time": 172.282,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 172.455,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 172.642,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 172.814,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 173.008,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 173.18,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 173.374,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 173.558,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 173.741,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 173.935,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 174.466,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 174.646,
    "lane": 5.0,
    "type": "hold",
    "duration": 0.065
  },
  {
    "time": 174.84,
    "lane": 1.0,
    "type": "tap"
  },
  {
    "time": 175.012,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 175.206,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 175.386,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 175.573,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 175.745,
    "lane": 6.0,
    "type": "tap"
  },
  {
    "time": 175.939,
    "lane": 0.0,
    "type": "hold",
    "duration": 0.043
  },
  {
    "time": 176.306,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 176.672,
    "lane": 0.0,
    "type": "tap"
  },
  {
    "time": 176.866,
    "lane": 6.0,
    "type": "hold",
    "duration": 0.129
  },
  {
    "time": 177.225,
    "lane": 4.0,
    "type": "tap"
  },
  {
    "time": 177.415,
    "lane": 3.0,
    "type": "tap"
  },
  {
    "time": 177.8,
    "lane": 3.0,
    "type": "hold",
    "duration": 0.036
  },
  {
    "time": 178.159,
    "lane": 5.0,
    "type": "tap"
  },
  {
    "time": 178.353,
    "lane": 2.0,
    "type": "hold",
    "duration": 0.043
  },
  {
    "time": 178.892,
    "lane": 2.0,
    "type": "tap"
  },
  {
    "time": 179.452,
    "lane": 4.0,
    "type": "tap"
  }
];