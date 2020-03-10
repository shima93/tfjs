
export const ops = [
  {
    'name': 'FromPixels',
    'result': [513, 513, 3],
    'inputs': {'pixels': {}},
    'timeMs': 0.197
  },
  {
    'name': 'Cast',
    'result': [257, 257, 3],
    'inputs': [[257, 257, 3]],
    'timeMs': 0
  },
  {'name': 'Mul', 'result': [17, 2], 'inputs': [[17, 2], []], 'timeMs': 0},
  {'name': 'Cast', 'result': [17, 2], 'inputs': [[17, 2]], 'timeMs': 0},
  {'name': 'Add', 'result': [17, 2], 'inputs': [[17, 2], [17, 2]], 'timeMs': 0},
  {
    'name': 'PadV2',
    'result': [513, 513, 3],
    'inputs': [[513, 513, 3]],
    'timeMs': 0.312
  },
  {
    'name': 'ResizeBilinear',
    'result': [1, 257, 257, 3],
    'inputs': [[1, 513, 513, 3]],
    'timeMs': 0.513
  },
  {
    'name': 'Add',
    'result': [257, 257, 3],
    'inputs': [[257, 257, 3], [3]],
    'timeMs': 0.124
  },
  {
    'name': 'PadV2',
    'result': [1, 263, 263, 3],
    'inputs': [[1, 257, 257, 3]],
    'timeMs': 0.107
  },
  {
    'name': 'Conv2D',
    'result': [1, 129, 129, 64],
    'inputs': [[1, 263, 263, 3], [7, 7, 3, 64]],
    'timeMs': 9.573
  },
  {
    'name': 'Add',
    'result': [1, 129, 129, 64],
    'inputs': [[1, 129, 129, 64], [64]],
    'timeMs': 0.759
  },
  {
    'name': 'Relu',
    'result': [1, 129, 129, 64],
    'inputs': [[1, 129, 129, 64]],
    'timeMs': 1.459
  },
  {
    'name': 'PadV2',
    'result': [1, 131, 131, 64],
    'inputs': [[1, 129, 129, 64]],
    'timeMs': 0.797
  },
  {
    'name': 'MaxPool',
    'result': [1, 65, 65, 64],
    'inputs': [[1, 131, 131, 64]],
    'timeMs': 0.8300000000000001
  },
  {
    // PENDING
    'name': 'Conv2D',
    'result': [1, 65, 65, 64],
    'inputs': [[1, 65, 65, 64], [1, 1, 64, 64]],
    'timeMs': 0.7899999999999999
  },
  {
    'name': 'Add',
    'result': [1, 65, 65, 64],
    'inputs': [[1, 65, 65, 64], [64]],
    'timeMs': 0.215
  },
  {
    'name': 'Relu',
    'result': [1, 65, 65, 64],
    'inputs': [[1, 65, 65, 64]],
    'timeMs': 0.435
  },
  {
    'name': 'Conv2D',
    'result': [1, 65, 65, 64],
    'inputs': [[1, 65, 65, 64], [3, 3, 64, 64]],
    'timeMs': 7.891
  },
  {
    'name': 'Conv2D',
    'result': [1, 65, 65, 256],
    'inputs': [[1, 65, 65, 64], [1, 1, 64, 256]],
    'timeMs': 1.192
  },
  {
    'name': 'Add',
    'result': [1, 65, 65, 256],
    'inputs': [[1, 65, 65, 256], [256]],
    'timeMs': 0.275
  },
  {
    'name': 'Add',
    'result': [1, 65, 65, 256],
    'inputs': [[1, 65, 65, 256], [1, 65, 65, 256]],
    'timeMs': 0.618
  },
  {
    'name': 'Relu',
    'result': [1, 65, 65, 256],
    'inputs': [[1, 65, 65, 256]],
    'timeMs': 0.5
  },
  {
    'name': 'Conv2D',
    'result': [1, 65, 65, 64],
    'inputs': [[1, 65, 65, 256], [1, 1, 256, 64]],
    'timeMs': 1.538
  },
  {
    'name': 'PadV2',
    'result': [1, 67, 67, 64],
    'inputs': [[1, 65, 65, 64]],
    'timeMs': 0.237
  },
  {
    'name': 'Conv2D',
    'result': [1, 33, 33, 64],
    'inputs': [[1, 67, 67, 64], [3, 3, 64, 64]],
    'timeMs': 2.6970000000000005
  },
  {
    'name': 'Add',
    'result': [1, 33, 33, 64],
    'inputs': [[1, 33, 33, 64], [64]],
    'timeMs': 0.069
  },
  {
    'name': 'Relu',
    'result': [1, 33, 33, 64],
    'inputs': [[1, 33, 33, 64]],
    'timeMs': 0.17
  },
  {
    'name': 'Conv2D',
    'result': [1, 33, 33, 256],
    'inputs': [[1, 33, 33, 64], [1, 1, 64, 256]],
    'timeMs': 0.348
  },
  {
    'name': 'Add',
    'result': [1, 33, 33, 256],
    'inputs': [[1, 33, 33, 256], [256]],
    'timeMs': 0.09
  },
  {
    'name': 'MaxPool',
    'result': [1, 33, 33, 256],
    'inputs': [[1, 65, 65, 256]],
    'timeMs': 0.531
  },
  {
    'name': 'Add',
    'result': [1, 33, 33, 256],
    'inputs': [[1, 33, 33, 256], [1, 33, 33, 256]],
    'timeMs': 0.304
  },
  {
    'name': 'Relu',
    'result': [1, 33, 33, 256],
    'inputs': [[1, 33, 33, 256]],
    'timeMs': 0.087
  },
  {
    'name': 'Conv2D',
    'result': [1, 33, 33, 128],
    'inputs': [[1, 33, 33, 256], [1, 1, 256, 128]],
    'timeMs': 0.673
  },
  {
    'name': 'Add',
    'result': [1, 33, 33, 128],
    'inputs': [[1, 33, 33, 128], [128]],
    'timeMs': 0.053
  },
  {
    'name': 'Relu',
    'result': [1, 33, 33, 128],
    'inputs': [[1, 33, 33, 128]],
    'timeMs': 0.133
  },
  {
    'name': 'Conv2D',
    'result': [1, 33, 33, 128],
    'inputs': [[1, 33, 33, 128], [3, 3, 128, 128]],
    'timeMs': 6.922
  },
  {
    'name': 'Conv2D',
    'result': [1, 33, 33, 512],
    'inputs': [[1, 33, 33, 128], [1, 1, 128, 512]],
    'timeMs': 1.259
  },
  {
    'name': 'Add',
    'result': [1, 33, 33, 512],
    'inputs': [[1, 33, 33, 512], [512]],
    'timeMs': 0.158
  },
  {
    'name': 'Conv2D',
    'result': [1, 33, 33, 512],
    'inputs': [[1, 33, 33, 256], [1, 1, 256, 512]],
    'timeMs': 2.491
  },
  {
    'name': 'Add',
    'result': [1, 33, 33, 512],
    'inputs': [[1, 33, 33, 512], [1, 33, 33, 512]],
    'timeMs': 0.365
  },
  {
    'name': 'Relu',
    'result': [1, 33, 33, 512],
    'inputs': [[1, 33, 33, 512]],
    'timeMs': 0.3
  },
  {
    'name': 'Conv2D',
    'result': [1, 33, 33, 128],
    'inputs': [[1, 33, 33, 512], [1, 1, 512, 128]],
    'timeMs': 1.387
  },
  {
    'name': 'PadV2',
    'result': [1, 35, 35, 128],
    'inputs': [[1, 33, 33, 128]],
    'timeMs': 0.064
  },
  {
    'name': 'Conv2D',
    'result': [1, 17, 17, 128],
    'inputs': [[1, 35, 35, 128], [3, 3, 128, 128]],
    'timeMs': 1.445
  },
  {
    'name': 'Add',
    'result': [1, 17, 17, 128],
    'inputs': [[1, 17, 17, 128], [128]],
    'timeMs': 0.032
  },
  {
    'name': 'Relu',
    'result': [1, 17, 17, 128],
    'inputs': [[1, 17, 17, 128]],
    'timeMs': 0.089
  },
  {
    'name': 'Conv2D',
    'result': [1, 17, 17, 512],
    'inputs': [[1, 17, 17, 128], [1, 1, 128, 512]],
    'timeMs': 0.386
  },
  {
    'name': 'Add',
    'result': [1, 17, 17, 512],
    'inputs': [[1, 17, 17, 512], [512]],
    'timeMs': 0.06
  },
  {
    'name': 'MaxPool',
    'result': [1, 17, 17, 512],
    'inputs': [[1, 33, 33, 512]],
    'timeMs': 0.296
  },
  {
    'name': 'Add',
    'result': [1, 17, 17, 512],
    'inputs': [[1, 17, 17, 512], [1, 17, 17, 512]],
    'timeMs': 0.249
  },
  {
    'name': 'Relu',
    'result': [1, 17, 17, 512],
    'inputs': [[1, 17, 17, 512]],
    'timeMs': 0.064
  },
  {
    'name': 'Conv2D',
    'result': [1, 17, 17, 256],
    'inputs': [[1, 17, 17, 512], [1, 1, 512, 256]],
    'timeMs': 0.837
  },
  {
    'name': 'Add',
    'result': [1, 17, 17, 256],
    'inputs': [[1, 17, 17, 256], [256]],
    'timeMs': 0.042
  },
  {
    'name': 'Relu',
    'result': [1, 17, 17, 256],
    'inputs': [[1, 17, 17, 256]],
    'timeMs': 0.109
  },
  {
    'name': 'Conv2D',
    'result': [1, 17, 17, 256],
    'inputs': [[1, 17, 17, 256], [3, 3, 256, 256]],
    'timeMs': 7.308
  },
  {
    'name': 'Conv2D',
    'result': [1, 17, 17, 1024],
    'inputs': [[1, 17, 17, 256], [1, 1, 256, 1024]],
    'timeMs': 1.424
  },
  {
    'name': 'Add',
    'result': [1, 17, 17, 1024],
    'inputs': [[1, 17, 17, 1024], [1024]],
    'timeMs': 0.097
  },
  {
    'name': 'Conv2D',
    'result': [1, 17, 17, 1024],
    'inputs': [[1, 17, 17, 512], [1, 1, 512, 1024]],
    'timeMs': 2.857
  },
  {
    'name': 'Add',
    'result': [1, 17, 17, 1024],
    'inputs': [[1, 17, 17, 1024], [1, 17, 17, 1024]],
    'timeMs': 0.115
  },
  {
    'name': 'Relu',
    'result': [1, 17, 17, 1024],
    'inputs': [[1, 17, 17, 1024]],
    'timeMs': 0.094
  },
  {
    'name': 'Conv2D',
    'result': [1, 17, 17, 256],
    'inputs': [[1, 17, 17, 1024], [1, 1, 1024, 256]],
    'timeMs': 0.697
  },
  {
    'name': 'PadV2',
    'result': [1, 19, 19, 256],
    'inputs': [[1, 17, 17, 256]],
    'timeMs': 0.052
  },
  {
    'name': 'Conv2D',
    'result': [1, 9, 9, 256],
    'inputs': [[1, 19, 19, 256], [3, 3, 256, 256]],
    'timeMs': 3.967
  },
  {
    'name': 'Add',
    'result': [1, 9, 9, 256],
    'inputs': [[1, 9, 9, 256], [256]],
    'timeMs': 0.033
  },
  {
    'name': 'Relu',
    'result': [1, 9, 9, 256],
    'inputs': [[1, 9, 9, 256]],
    'timeMs': 0.105
  },
  {
    'name': 'Conv2D',
    'result': [1, 9, 9, 1024],
    'inputs': [[1, 9, 9, 256], [1, 1, 256, 1024]],
    'timeMs': 0.517
  },
  {
    'name': 'Add',
    'result': [1, 9, 9, 1024],
    'inputs': [[1, 9, 9, 1024], [1024]],
    'timeMs': 0.083
  },
  {
    'name': 'MaxPool',
    'result': [1, 9, 9, 1024],
    'inputs': [[1, 17, 17, 1024]],
    'timeMs': 0.191
  },
  {
    'name': 'Add',
    'result': [1, 9, 9, 1024],
    'inputs': [[1, 9, 9, 1024], [1, 9, 9, 1024]],
    'timeMs': 0.271
  },
  {
    'name': 'Relu',
    'result': [1, 9, 9, 1024],
    'inputs': [[1, 9, 9, 1024]],
    'timeMs': 0.081
  },
  {
    'name': 'Conv2D',
    'result': [1, 9, 9, 512],
    'inputs': [[1, 9, 9, 1024], [1, 1, 1024, 512]],
    'timeMs': 0.92
  },
  {
    'name': 'Add',
    'result': [1, 9, 9, 512],
    'inputs': [[1, 9, 9, 512], [512]],
    'timeMs': 0.046
  },
  {
    'name': 'Relu',
    'result': [1, 9, 9, 512],
    'inputs': [[1, 9, 9, 512]],
    'timeMs': 0.136
  },
  {
    'name': 'Conv2D',
    'result': [1, 9, 9, 512],
    'inputs': [[1, 9, 9, 512], [3, 3, 512, 512]],
    'timeMs': 11.471000000000002
  },
  {
    'name': 'Conv2D',
    'result': [1, 9, 9, 2048],
    'inputs': [[1, 9, 9, 512], [1, 1, 512, 2048]],
    'timeMs': 2.078
  },
  {
    'name': 'Add',
    'result': [1, 9, 9, 2048],
    'inputs': [[1, 9, 9, 2048], [2048]],
    'timeMs': 0.145
  },
  {
    'name': 'Conv2D',
    'result': [1, 9, 9, 2048],
    'inputs': [[1, 9, 9, 1024], [1, 1, 1024, 2048]],
    'timeMs': 4.078
  },
  {
    'name': 'Add',
    'result': [1, 9, 9, 2048],
    'inputs': [[1, 9, 9, 2048], [1, 9, 9, 2048]],
    'timeMs': 0.314
  },
  {
    'name': 'Relu',
    'result': [1, 9, 9, 2048],
    'inputs': [[1, 9, 9, 2048]],
    'timeMs': 0.316
  },
  {
    'name': 'Conv2D',
    'result': [1, 9, 9, 512],
    'inputs': [[1, 9, 9, 2048], [1, 1, 2048, 512]],
    'timeMs': 1.871
  },
  {
    'name': 'Conv2D',
    'result': [1, 9, 9, 17],
    'inputs': [[1, 9, 9, 2048], [1, 1, 2048, 17]],
    'timeMs': 1.731
  },
  {
    'name': 'Add',
    'result': [1, 9, 9, 17],
    'inputs': [[1, 9, 9, 17], [17]],
    'timeMs': 0.02
  },
  {
    'name': 'Conv2D',
    'result': [1, 9, 9, 34],
    'inputs': [[1, 9, 9, 2048], [1, 1, 2048, 34]],
    'timeMs': 1.223
  },
  {
    'name': 'Add',
    'result': [1, 9, 9, 34],
    'inputs': [[1, 9, 9, 34], [34]],
    'timeMs': 0.02
  },
  {
    'name': 'Conv2D',
    'result': [1, 9, 9, 32],
    'inputs': [[1, 9, 9, 2048], [1, 1, 2048, 32]],
    'timeMs': 1.224
  },
  {
    'name': 'Add',
    'result': [1, 9, 9, 32],
    'inputs': [[1, 9, 9, 32], [32]],
    'timeMs': 0.018
  },
  {
    'name': 'Sigmoid',
    'result': [9, 9, 17],
    'inputs': [[9, 9, 17]],
    'timeMs': 0.028
  },
  {
    'name': 'Transpose',
    'result': [17, 81],
    'inputs': [[81, 17]],
    'timeMs': 0.04
  },
  {'name': 'ArgMax', 'result': [17], 'inputs': [[17, 81]], 'timeMs': 0.158},
  {'name': 'FloorDiv', 'result': [17], 'inputs': [[17], []], 'timeMs': 0.072},
  {'name': 'Mul', 'result': [17], 'inputs': [[17], []], 'timeMs': 0.048},
  {
    'name': 'Sub',
    'result': [17],
    'inputs': [[17], [17]],
    'timeMs': 0.028999999999999998
  },
  {
    'name': 'Concat',
    'result': [17, 2],
    'inputs': [[17, 1], [17, 1]],
    'timeMs': 0.03
  }
];
