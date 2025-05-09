export const NablaCurveAbi = [
    {
      "type": "function",
      "name": "inverseDiagonal",
      "inputs": [
        {
          "name": "_b",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "_l",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "_capitalB",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "_decimals",
          "type": "uint8",
          "internalType": "uint8"
        }
      ],
      "outputs": [
        {
          "name": "t_",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "inverseHorizontal",
      "inputs": [
        {
          "name": "_b",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "_l",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "_capitalB",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "_decimals",
          "type": "uint8",
          "internalType": "uint8"
        }
      ],
      "outputs": [
        {
          "name": "t_",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "psi",
      "inputs": [
        {
          "name": "_b",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "_l",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "_decimals",
          "type": "uint8",
          "internalType": "uint8"
        }
      ],
      "outputs": [
        {
          "name": "psi_",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "beta",
        "inputs": [
        ],
        "outputs": [
          {
            "name": "beta_",
            "type": "int256",
            "internalType": "int256"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "c",
        "inputs": [],
        "outputs": [
            {
                "name": "c",
                "type": "int256",
                "internalType": "int256"
            }
        ],
        "stateMutability": "view"
    },
  ] as const;