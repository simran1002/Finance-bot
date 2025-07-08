const Stock = require('../models/Stock');
const Crypto = require('../models/Crypto');
const Forex = require('../models/Forex');

const seedData = async () => {
  try {
    const stockCount = await Stock.countDocuments();
    const cryptoCount = await Crypto.countDocuments();
    const forexCount = await Forex.countDocuments();

    if (stockCount === 0) {
      const stocks = [
        { symbol: 'AAPL', name: 'Apple Inc.', price: 150.25, change: 2.5, volume: 50000000 },
        { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2750.80, change: -1.2, volume: 25000000 },
        { symbol: 'MSFT', name: 'Microsoft Corporation', price: 320.45, change: 3.1, volume: 35000000 },
        { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 3300.00, change: -0.8, volume: 40000000 },
        { symbol: 'TSLA', name: 'Tesla Inc.', price: 850.75, change: 5.2, volume: 60000000 },
        { symbol: 'NVDA', name: 'NVIDIA Corporation', price: 450.25, change: 1.5, volume: 30000000 },
        { symbol: 'META', name: 'Meta Platforms Inc.', price: 280.50, change: 2.8, volume: 28000000 },
        { symbol: 'NFLX', name: 'Netflix Inc.', price: 485.75, change: -1.5, volume: 15000000 },
        { symbol: 'ADBE', name: 'Adobe Inc.', price: 520.30, change: 0.8, volume: 12000000 },
        { symbol: 'CRM', name: 'Salesforce Inc.', price: 210.45, change: 1.2, volume: 18000000 },
        
        // Financial Stocks
        { symbol: 'JPM', name: 'JPMorgan Chase & Co.', price: 145.80, change: 0.5, volume: 22000000 },
        { symbol: 'BAC', name: 'Bank of America Corp.', price: 32.15, change: -0.3, volume: 45000000 },
        { symbol: 'WFC', name: 'Wells Fargo & Company', price: 45.60, change: 0.7, volume: 28000000 },
        { symbol: 'GS', name: 'Goldman Sachs Group Inc.', price: 380.25, change: 1.8, volume: 12000000 },
        { symbol: 'MS', name: 'Morgan Stanley', price: 85.40, change: 0.9, volume: 15000000 },
        { symbol: 'JNJ', name: 'Johnson & Johnson', price: 165.30, change: 0.4, volume: 18000000 },
        { symbol: 'PFE', name: 'Pfizer Inc.', price: 42.80, change: -0.6, volume: 35000000 },
        { symbol: 'UNH', name: 'UnitedHealth Group Inc.', price: 485.90, change: 1.1, volume: 8000000 },
        { symbol: 'ABBV', name: 'AbbVie Inc.', price: 145.75, change: 0.8, volume: 12000000 },
        { symbol: 'TMO', name: 'Thermo Fisher Scientific Inc.', price: 520.60, change: 2.1, volume: 6000000 },
        { symbol: 'KO', name: 'The Coca-Cola Company', price: 58.45, change: 0.2, volume: 22000000 },
        { symbol: 'PEP', name: 'PepsiCo Inc.', price: 175.30, change: 0.6, volume: 15000000 },
        { symbol: 'WMT', name: 'Walmart Inc.', price: 155.80, change: 0.3, volume: 18000000 },
        { symbol: 'HD', name: 'The Home Depot Inc.', price: 320.45, change: 1.2, volume: 12000000 },
        { symbol: 'DIS', name: 'The Walt Disney Company', price: 85.20, change: -1.5, volume: 25000000 },
        
        // Industrial Stocks
        { symbol: 'BA', name: 'Boeing Company', price: 185.60, change: 2.8, volume: 20000000 },
        { symbol: 'CAT', name: 'Caterpillar Inc.', price: 245.30, change: 1.5, volume: 10000000 },
        { symbol: 'GE', name: 'General Electric Company', price: 95.45, change: 0.8, volume: 28000000 },
        { symbol: 'MMM', name: '3M Company', price: 125.80, change: -0.4, volume: 12000000 },
        { symbol: 'HON', name: 'Honeywell International Inc.', price: 195.60, change: 1.1, volume: 8000000 }
      ];

      await Stock.insertMany(stocks);
      console.log('✅ Stocks seeded successfully');
    }

    if (cryptoCount === 0) {
      const cryptos = [
        { symbol: 'BTC', name: 'Bitcoin', price: 45000, change: 2.8, volume: 25000000000 },
        { symbol: 'ETH', name: 'Ethereum', price: 3200, change: 1.5, volume: 15000000000 },
        { symbol: 'ADA', name: 'Cardano', price: 1.25, change: -0.5, volume: 2000000000 },
        { symbol: 'BNB', name: 'Binance Coin', price: 380, change: 3.2, volume: 8000000000 },
        { symbol: 'SOL', name: 'Solana', price: 95, change: 5.8, volume: 3500000000 },
        { symbol: 'XRP', name: 'Ripple', price: 0.85, change: -1.2, volume: 2800000000 },
        { symbol: 'DOT', name: 'Polkadot', price: 18.50, change: 2.1, volume: 1200000000 },
        { symbol: 'DOGE', name: 'Dogecoin', price: 0.12, change: 8.5, volume: 1500000000 },
        { symbol: 'AVAX', name: 'Avalanche', price: 85, change: 4.2, volume: 1800000000 },
        { symbol: 'MATIC', name: 'Polygon', price: 1.85, change: 6.1, volume: 2200000000 },
        { symbol: 'UNI', name: 'Uniswap', price: 12.50, change: 1.8, volume: 800000000 },
        { symbol: 'LINK', name: 'Chainlink', price: 15.80, change: 2.4, volume: 1200000000 },
        { symbol: 'AAVE', name: 'Aave', price: 285, change: 3.6, volume: 600000000 },
        { symbol: 'COMP', name: 'Compound', price: 85, change: -0.8, volume: 400000000 },
        { symbol: 'SUSHI', name: 'SushiSwap', price: 2.15, change: 4.2, volume: 300000000 },
        { symbol: 'ATOM', name: 'Cosmos', price: 28.50, change: 1.9, volume: 900000000 },
        { symbol: 'NEAR', name: 'NEAR Protocol', price: 12.80, change: 7.2, volume: 500000000 },
        { symbol: 'FTM', name: 'Fantom', price: 0.85, change: 12.5, volume: 800000000 },
        { symbol: 'ALGO', name: 'Algorand', price: 1.45, change: -1.2, volume: 400000000 },
        { symbol: 'VET', name: 'VeChain', price: 0.065, change: 3.8, volume: 600000000 }
      ];

      await Crypto.insertMany(cryptos);
      console.log('✅ Cryptocurrencies seeded successfully');
    }

    if (forexCount === 0) {
      const forexPairs = [
        { pair: 'EUR/USD', rate: 1.1850, change: 0.002, description: 'Euro to US Dollar' },
        { pair: 'GBP/USD', rate: 1.3750, change: -0.001, description: 'British Pound to US Dollar' },
        { pair: 'USD/JPY', rate: 110.50, change: 0.15, description: 'US Dollar to Japanese Yen' },
        { pair: 'USD/CHF', rate: 0.9250, change: -0.003, description: 'US Dollar to Swiss Franc' },
        { pair: 'AUD/USD', rate: 0.7450, change: 0.008, description: 'Australian Dollar to US Dollar' },
        { pair: 'USD/CAD', rate: 1.2550, change: -0.005, description: 'US Dollar to Canadian Dollar' },
        { pair: 'NZD/USD', rate: 0.7050, change: 0.012, description: 'New Zealand Dollar to US Dollar' },
        { pair: 'EUR/GBP', rate: 0.8620, change: 0.004, description: 'Euro to British Pound' },
        { pair: 'EUR/JPY', rate: 130.85, change: 0.25, description: 'Euro to Japanese Yen' },
        { pair: 'GBP/JPY', rate: 151.75, change: 0.18, description: 'British Pound to Japanese Yen' },
        { pair: 'AUD/JPY', rate: 82.35, change: 0.45, description: 'Australian Dollar to Japanese Yen' },
        { pair: 'EUR/CHF', rate: 1.0950, change: -0.001, description: 'Euro to Swiss Franc' },
        { pair: 'USD/CNY', rate: 6.4850, change: -0.025, description: 'US Dollar to Chinese Yuan' },
        { pair: 'USD/INR', rate: 74.25, change: 0.15, description: 'US Dollar to Indian Rupee' },
        { pair: 'USD/BRL', rate: 5.1850, change: 0.025, description: 'US Dollar to Brazilian Real' },
        { pair: 'USD/MXN', rate: 20.15, change: -0.08, description: 'US Dollar to Mexican Peso' },
        { pair: 'USD/ZAR', rate: 14.85, change: 0.12, description: 'US Dollar to South African Rand' },
        { pair: 'USD/RUB', rate: 73.50, change: -0.35, description: 'US Dollar to Russian Ruble' },
        { pair: 'USD/SEK', rate: 8.65, change: -0.02, description: 'US Dollar to Swedish Krona' },
        { pair: 'USD/NOK', rate: 8.85, change: -0.03, description: 'US Dollar to Norwegian Krone' },
        { pair: 'USD/DKK', rate: 6.25, change: -0.01, description: 'US Dollar to Danish Krone' }
      ];

      await Forex.insertMany(forexPairs);
      console.log('✅ Forex pairs seeded successfully');
    }

    console.log('🎉 Database seeding completed!');
  } catch (error) {
    console.error('❌ Error seeding data:', error);
  }
};

module.exports = seedData; 