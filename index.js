const axios = require('axios');

async function createInvestmentAccount() {
  const url = 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount';
  const headers = {
    'Content-Type': 'application/json'
  };
  const data = {
    name: 'sahil aggarwal',
    email: 'sahil1220.be21@chitkara.edu.in',
    rollNumber: 2110991220, 
    phone: 9814581570
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log('Account created successfully:', response.data);
  } catch (error) {
    console.error('Error creating account:', error.response ? error.response.data : error.message);
  }
}

createInvestmentAccount();