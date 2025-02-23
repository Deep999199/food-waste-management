// Connect to Ganache
const web3 = new Web3('http://127.0.0.1:7545');

// Replace with your contract's ABI and address
const contractABI = [ {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "adminAddress",
          "type": "address"
        }
      ],
      "name": "AdminAssigned",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "donationId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        }
      ],
      "name": "DonationClaimed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "donationId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "foodType",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "quantity",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "donor",
          "type": "address"
        }
      ],
      "name": "DonationCreated",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "admin",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "donationCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "donations",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "foodType",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "quantity",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "donor",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "claimed",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_foodType",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_quantity",
          "type": "uint256"
        }
      ],
      "name": "createDonation",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_donationId",
          "type": "uint256"
        }
      ],
      "name": "claimDonation",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }];
const contractAddress = 0x0757aD39b97e67497eDcF928C5A19b2468d04546; // Replace with your contract address

// Create contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Get accounts from MetaMask
let accounts;

// Load accounts and update UI
const loadAccounts = async () => {
  accounts = await web3.eth.requestAccounts();
  console.log('Accounts loaded:', accounts);
};

// Create Donation
document.getElementById('createDonationForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const foodType = document.getElementById('foodType').value;
  const quantity = document.getElementById('quantity').value;

  await contract.methods.createDonation(foodType, quantity).send({ from: accounts[0] });
  alert('Donation created successfully!');
  loadDonations();
});

// Claim Donation
document.getElementById('claimDonationForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const donationId = document.getElementById('donationId').value;

  await contract.methods.claimDonation(donationId).send({ from: accounts[0] });
  alert('Donation claimed successfully!');
  loadDonations();
});

// Load Donations
const loadDonations = async () => {
  const donationList = document.getElementById('donationList');
  donationList.innerHTML = '';

  const donationCount = await contract.methods.donationCount().call();

  for (let i = 1; i <= donationCount; i++) {
    const donation = await contract.methods.donations(i).call();
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <strong>ID:</strong> ${donation.id} |
      <strong>Food Type:</strong> ${donation.foodType} |
      <strong>Quantity:</strong> ${donation.quantity} |
      <strong>Donor:</strong> ${donation.donor} |
      <strong>Recipient:</strong> ${donation.recipient} |
      <strong>Claimed:</strong> ${donation.claimed ? 'Yes' : 'No'}
    `;
    donationList.appendChild(listItem);
  }
};

// Initialize
window.addEventListener('load', async () => {
  await loadAccounts();
  await loadDonations();
});// Connect to Ganache
const web3 = new Web3('http://127.0.0.1:7545');

// Replace with your contract's ABI and address
const contractABI = [ /* Paste your contract ABI here */ ];
const contractAddress = '0x...'; // Replace with your contract address

// Create contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Get accounts from MetaMask
let accounts;

// Load accounts and update UI
const loadAccounts = async () => {
  accounts = await web3.eth.requestAccounts();
  console.log('Accounts loaded:', accounts);
};

// Create Donation
document.getElementById('createDonationForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const foodType = document.getElementById('foodType').value;
  const quantity = document.getElementById('quantity').value;

  await contract.methods.createDonation(foodType, quantity).send({ from: accounts[0] });
  alert('Donation created successfully!');
  loadDonations();
});

// Claim Donation
document.getElementById('claimDonationForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const donationId = document.getElementById('donationId').value;

  await contract.methods.claimDonation(donationId).send({ from: accounts[0] });
  alert('Donation claimed successfully!');
  loadDonations();
});

// Load Donations
const loadDonations = async () => {
  const donationList = document.getElementById('donationList');
  donationList.innerHTML = '';

  const donationCount = await contract.methods.donationCount().call();

  for (let i = 1; i <= donationCount; i++) {
    const donation = await contract.methods.donations(i).call();
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <strong>ID:</strong> ${donation.id} |
      <strong>Food Type:</strong> ${donation.foodType} |
      <strong>Quantity:</strong> ${donation.quantity} |
      <strong>Donor:</strong> ${donation.donor} |
      <strong>Recipient:</strong> ${donation.recipient} |
      <strong>Claimed:</strong> ${donation.claimed ? 'Yes' : 'No'}
    `;
    donationList.appendChild(listItem);
  }
};

// Initialize
window.addEventListener('load', async () => {
  await loadAccounts();
  await loadDonations();
});