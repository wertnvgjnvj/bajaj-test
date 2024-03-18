const axios = require('axios');

async function buyStocks(accountNumber, company, currentPrice, githubRepoLink) {
  const url = 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks';
  const headers = {
    'Content-Type': 'application/json',
    'bfhl-auth': accountNumber 
  };
  const data = {
    company: company,
    currentPrice: currentPrice,
    accountNumber: accountNumber,
    githubRepoLink: githubRepoLink
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log('Stocks bought successfully:', response.data);
  } catch (error) {
    console.error('Error buying stocks:', error.response ? error.response.data : error.message);
  }
}

// Example usage:
const accountNumber = '123456'; 
const company = 'Bajaj finserv'; 
const currentPrice = 6255;
const githubRepoLink = 'https://github.com/wertnvgjnvj';

buyStocks(accountNumber, company, currentPrice, githubRepoLink);