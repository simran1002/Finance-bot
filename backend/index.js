const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const seedData = require('./utils/seedData');

// Import models
const Stock = require('./models/Stock');
const Crypto = require('./models/Crypto');
const Forex = require('./models/Forex');

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Seed data on startup
seedData();

// Chatbot response logic
async function generateResponse(userMessage) {
  const message = userMessage.toLowerCase();
  
  try {
    // Stock-related queries
    if (message.includes('stock') || message.includes('stocks')) {
      // Technology stocks
      if (message.includes('apple') || message.includes('aapl')) {
        const stock = await Stock.findOne({ symbol: 'AAPL' });
        if (stock) {
          return `Apple Inc. (AAPL) is currently trading at $${stock.price} with a ${stock.change > 0 ? '+' : ''}${stock.change}% change today. Volume: ${stock.volume.toLocaleString()}`;
        }
      }
      if (message.includes('google') || message.includes('googl')) {
        const stock = await Stock.findOne({ symbol: 'GOOGL' });
        if (stock) {
          return `Alphabet Inc. (GOOGL) is currently trading at $${stock.price} with a ${stock.change > 0 ? '+' : ''}${stock.change}% change today. Volume: ${stock.volume.toLocaleString()}`;
        }
      }
      if (message.includes('microsoft') || message.includes('msft')) {
        const stock = await Stock.findOne({ symbol: 'MSFT' });
        if (stock) {
          return `Microsoft Corporation (MSFT) is currently trading at $${stock.price} with a ${stock.change > 0 ? '+' : ''}${stock.change}% change today. Volume: ${stock.volume.toLocaleString()}`;
        }
      }
      if (message.includes('amazon') || message.includes('amzn')) {
        const stock = await Stock.findOne({ symbol: 'AMZN' });
        if (stock) {
          return `Amazon.com Inc. (AMZN) is currently trading at $${stock.price} with a ${stock.change > 0 ? '+' : ''}${stock.change}% change today. Volume: ${stock.volume.toLocaleString()}`;
        }
      }
      if (message.includes('tesla') || message.includes('tsla')) {
        const stock = await Stock.findOne({ symbol: 'TSLA' });
        if (stock) {
          return `Tesla Inc. (TSLA) is currently trading at $${stock.price} with a ${stock.change > 0 ? '+' : ''}${stock.change}% change today. Volume: ${stock.volume.toLocaleString()}`;
        }
      }
      if (message.includes('nvidia') || message.includes('nvda')) {
        const stock = await Stock.findOne({ symbol: 'NVDA' });
        if (stock) {
          return `NVIDIA Corporation (NVDA) is currently trading at $${stock.price} with a ${stock.change > 0 ? '+' : ''}${stock.change}% change today. Volume: ${stock.volume.toLocaleString()}`;
        }
      }
      if (message.includes('meta') || message.includes('facebook')) {
        const stock = await Stock.findOne({ symbol: 'META' });
        if (stock) {
          return `Meta Platforms Inc. (META) is currently trading at $${stock.price} with a ${stock.change > 0 ? '+' : ''}${stock.change}% change today. Volume: ${stock.volume.toLocaleString()}`;
        }
      }
      if (message.includes('netflix') || message.includes('nflx')) {
        const stock = await Stock.findOne({ symbol: 'NFLX' });
        if (stock) {
          return `Netflix Inc. (NFLX) is currently trading at $${stock.price} with a ${stock.change > 0 ? '+' : ''}${stock.change}% change today. Volume: ${stock.volume.toLocaleString()}`;
        }
      }
      
      // Financial stocks
      if (message.includes('jpmorgan') || message.includes('jp morgan') || message.includes('jpm')) {
        const stock = await Stock.findOne({ symbol: 'JPM' });
        if (stock) {
          return `JPMorgan Chase & Co. (JPM) is currently trading at $${stock.price} with a ${stock.change > 0 ? '+' : ''}${stock.change}% change today. Volume: ${stock.volume.toLocaleString()}`;
        }
      }
      if (message.includes('bank of america') || message.includes('bac')) {
        const stock = await Stock.findOne({ symbol: 'BAC' });
        if (stock) {
          return `Bank of America Corp. (BAC) is currently trading at $${stock.price} with a ${stock.change > 0 ? '+' : ''}${stock.change}% change today. Volume: ${stock.volume.toLocaleString()}`;
        }
      }
      if (message.includes('goldman') || message.includes('gs')) {
        const stock = await Stock.findOne({ symbol: 'GS' });
        if (stock) {
          return `Goldman Sachs Group Inc. (GS) is currently trading at $${stock.price} with a ${stock.change > 0 ? '+' : ''}${stock.change}% change today. Volume: ${stock.volume.toLocaleString()}`;
        }
      }
      
      // Healthcare stocks
      if (message.includes('johnson') || message.includes('jnj')) {
        const stock = await Stock.findOne({ symbol: 'JNJ' });
        if (stock) {
          return `Johnson & Johnson (JNJ) is currently trading at $${stock.price} with a ${stock.change > 0 ? '+' : ''}${stock.change}% change today. Volume: ${stock.volume.toLocaleString()}`;
        }
      }
      if (message.includes('pfizer') || message.includes('pfe')) {
        const stock = await Stock.findOne({ symbol: 'PFE' });
        if (stock) {
          return `Pfizer Inc. (PFE) is currently trading at $${stock.price} with a ${stock.change > 0 ? '+' : ''}${stock.change}% change today. Volume: ${stock.volume.toLocaleString()}`;
        }
      }
      if (message.includes('unitedhealth') || message.includes('unh')) {
        const stock = await Stock.findOne({ symbol: 'UNH' });
        if (stock) {
          return `UnitedHealth Group Inc. (UNH) is currently trading at $${stock.price} with a ${stock.change > 0 ? '+' : ''}${stock.change}% change today. Volume: ${stock.volume.toLocaleString()}`;
        }
      }
      
      // Consumer stocks
      if (message.includes('coca') || message.includes('coke') || message.includes('ko')) {
        const stock = await Stock.findOne({ symbol: 'KO' });
        if (stock) {
          return `The Coca-Cola Company (KO) is currently trading at $${stock.price} with a ${stock.change > 0 ? '+' : ''}${stock.change}% change today. Volume: ${stock.volume.toLocaleString()}`;
        }
      }
      if (message.includes('pepsi') || message.includes('pep')) {
        const stock = await Stock.findOne({ symbol: 'PEP' });
        if (stock) {
          return `PepsiCo Inc. (PEP) is currently trading at $${stock.price} with a ${stock.change > 0 ? '+' : ''}${stock.change}% change today. Volume: ${stock.volume.toLocaleString()}`;
        }
      }
      if (message.includes('walmart') || message.includes('wmt')) {
        const stock = await Stock.findOne({ symbol: 'WMT' });
        if (stock) {
          return `Walmart Inc. (WMT) is currently trading at $${stock.price} with a ${stock.change > 0 ? '+' : ''}${stock.change}% change today. Volume: ${stock.volume.toLocaleString()}`;
        }
      }
      if (message.includes('disney') || message.includes('dis')) {
        const stock = await Stock.findOne({ symbol: 'DIS' });
        if (stock) {
          return `The Walt Disney Company (DIS) is currently trading at $${stock.price} with a ${stock.change > 0 ? '+' : ''}${stock.change}% change today. Volume: ${stock.volume.toLocaleString()}`;
        }
      }
      
      // Industrial stocks
      if (message.includes('boeing') || message.includes('ba')) {
        const stock = await Stock.findOne({ symbol: 'BA' });
        if (stock) {
          return `Boeing Company (BA) is currently trading at $${stock.price} with a ${stock.change > 0 ? '+' : ''}${stock.change}% change today. Volume: ${stock.volume.toLocaleString()}`;
        }
      }
      if (message.includes('caterpillar') || message.includes('cat')) {
        const stock = await Stock.findOne({ symbol: 'CAT' });
        if (stock) {
          return `Caterpillar Inc. (CAT) is currently trading at $${stock.price} with a ${stock.change > 0 ? '+' : ''}${stock.change}% change today. Volume: ${stock.volume.toLocaleString()}`;
        }
      }
      
      // General stocks query
      const stocks = await Stock.find().limit(10);
      const stockList = stocks.map(s => `${s.symbol} (${s.name})`).join(', ');
      return `Here are some popular stocks: ${stockList}. Ask me about any specific stock by name or symbol!`;
    }
    
    // Crypto-related queries
    if (message.includes('crypto') || message.includes('bitcoin') || message.includes('ethereum') || message.includes('cryptocurrency')) {
      if (message.includes('bitcoin') || message.includes('btc')) {
        const crypto = await Crypto.findOne({ symbol: 'BTC' });
        if (crypto) {
          return `Bitcoin (BTC) is currently trading at $${crypto.price.toLocaleString()} with a ${crypto.change > 0 ? '+' : ''}${crypto.change}% change today. Volume: $${(crypto.volume / 1000000000).toFixed(1)}B`;
        }
      }
      if (message.includes('ethereum') || message.includes('eth')) {
        const crypto = await Crypto.findOne({ symbol: 'ETH' });
        if (crypto) {
          return `Ethereum (ETH) is currently trading at $${crypto.price.toLocaleString()} with a ${crypto.change > 0 ? '+' : ''}${crypto.change}% change today. Volume: $${(crypto.volume / 1000000000).toFixed(1)}B`;
        }
      }
      if (message.includes('cardano') || message.includes('ada')) {
        const crypto = await Crypto.findOne({ symbol: 'ADA' });
        if (crypto) {
          return `Cardano (ADA) is currently trading at $${crypto.price} with a ${crypto.change > 0 ? '+' : ''}${crypto.change}% change today. Volume: $${(crypto.volume / 1000000000).toFixed(1)}B`;
        }
      }
      if (message.includes('binance') || message.includes('bnb')) {
        const crypto = await Crypto.findOne({ symbol: 'BNB' });
        if (crypto) {
          return `Binance Coin (BNB) is currently trading at $${crypto.price} with a ${crypto.change > 0 ? '+' : ''}${crypto.change}% change today. Volume: $${(crypto.volume / 1000000000).toFixed(1)}B`;
        }
      }
      if (message.includes('solana') || message.includes('sol')) {
        const crypto = await Crypto.findOne({ symbol: 'SOL' });
        if (crypto) {
          return `Solana (SOL) is currently trading at $${crypto.price} with a ${crypto.change > 0 ? '+' : ''}${crypto.change}% change today. Volume: $${(crypto.volume / 1000000000).toFixed(1)}B`;
        }
      }
      if (message.includes('ripple') || message.includes('xrp')) {
        const crypto = await Crypto.findOne({ symbol: 'XRP' });
        if (crypto) {
          return `Ripple (XRP) is currently trading at $${crypto.price} with a ${crypto.change > 0 ? '+' : ''}${crypto.change}% change today. Volume: $${(crypto.volume / 1000000000).toFixed(1)}B`;
        }
      }
      if (message.includes('dogecoin') || message.includes('doge')) {
        const crypto = await Crypto.findOne({ symbol: 'DOGE' });
        if (crypto) {
          return `Dogecoin (DOGE) is currently trading at $${crypto.price} with a ${crypto.change > 0 ? '+' : ''}${crypto.change}% change today. Volume: $${(crypto.volume / 1000000000).toFixed(1)}B`;
        }
      }
      if (message.includes('polkadot') || message.includes('dot')) {
        const crypto = await Crypto.findOne({ symbol: 'DOT' });
        if (crypto) {
          return `Polkadot (DOT) is currently trading at $${crypto.price} with a ${crypto.change > 0 ? '+' : ''}${crypto.change}% change today. Volume: $${(crypto.volume / 1000000000).toFixed(1)}B`;
        }
      }
      if (message.includes('avalanche') || message.includes('avax')) {
        const crypto = await Crypto.findOne({ symbol: 'AVAX' });
        if (crypto) {
          return `Avalanche (AVAX) is currently trading at $${crypto.price} with a ${crypto.change > 0 ? '+' : ''}${crypto.change}% change today. Volume: $${(crypto.volume / 1000000000).toFixed(1)}B`;
        }
      }
      if (message.includes('polygon') || message.includes('matic')) {
        const crypto = await Crypto.findOne({ symbol: 'MATIC' });
        if (crypto) {
          return `Polygon (MATIC) is currently trading at $${crypto.price} with a ${crypto.change > 0 ? '+' : ''}${crypto.change}% change today. Volume: $${(crypto.volume / 1000000000).toFixed(1)}B`;
        }
      }
      
      // General crypto query
      const cryptos = await Crypto.find().limit(8);
      const cryptoList = cryptos.map(c => `${c.symbol} (${c.name})`).join(', ');
      return `Here are some popular cryptocurrencies: ${cryptoList}. Ask me about any specific crypto by name or symbol!`;
    }
    
    // Forex-related queries
    if (message.includes('forex') || message.includes('currency') || message.includes('exchange rate') || message.includes('foreign exchange')) {
      if (message.includes('eur') || message.includes('euro')) {
        const forex = await Forex.findOne({ pair: 'EUR/USD' });
        if (forex) {
          return `EUR/USD exchange rate is currently ${forex.rate} with a ${forex.change > 0 ? '+' : ''}${forex.change} change. ${forex.description}`;
        }
      }
      if (message.includes('gbp') || message.includes('pound') || message.includes('sterling')) {
        const forex = await Forex.findOne({ pair: 'GBP/USD' });
        if (forex) {
          return `GBP/USD exchange rate is currently ${forex.rate} with a ${forex.change > 0 ? '+' : ''}${forex.change} change. ${forex.description}`;
        }
      }
      if (message.includes('jpy') || message.includes('yen')) {
        const forex = await Forex.findOne({ pair: 'USD/JPY' });
        if (forex) {
          return `USD/JPY exchange rate is currently ${forex.rate} with a ${forex.change > 0 ? '+' : ''}${forex.change} change. ${forex.description}`;
        }
      }
      if (message.includes('chf') || message.includes('swiss franc')) {
        const forex = await Forex.findOne({ pair: 'USD/CHF' });
        if (forex) {
          return `USD/CHF exchange rate is currently ${forex.rate} with a ${forex.change > 0 ? '+' : ''}${forex.change} change. ${forex.description}`;
        }
      }
      if (message.includes('aud') || message.includes('australian dollar')) {
        const forex = await Forex.findOne({ pair: 'AUD/USD' });
        if (forex) {
          return `AUD/USD exchange rate is currently ${forex.rate} with a ${forex.change > 0 ? '+' : ''}${forex.change} change. ${forex.description}`;
        }
      }
      if (message.includes('cad') || message.includes('canadian dollar')) {
        const forex = await Forex.findOne({ pair: 'USD/CAD' });
        if (forex) {
          return `USD/CAD exchange rate is currently ${forex.rate} with a ${forex.change > 0 ? '+' : ''}${forex.change} change. ${forex.description}`;
        }
      }
      if (message.includes('cny') || message.includes('yuan') || message.includes('chinese')) {
        const forex = await Forex.findOne({ pair: 'USD/CNY' });
        if (forex) {
          return `USD/CNY exchange rate is currently ${forex.rate} with a ${forex.change > 0 ? '+' : ''}${forex.change} change. ${forex.description}`;
        }
      }
      if (message.includes('inr') || message.includes('rupee') || message.includes('indian')) {
        const forex = await Forex.findOne({ pair: 'USD/INR' });
        if (forex) {
          return `USD/INR exchange rate is currently ${forex.rate} with a ${forex.change > 0 ? '+' : ''}${forex.change} change. ${forex.description}`;
        }
      }
      
      // General forex query
      const forexPairs = await Forex.find().limit(8);
      const forexList = forexPairs.map(f => f.pair).join(', ');
      return `Here are some popular forex pairs: ${forexList}. Ask me about any specific currency pair!`;
    }
    
    // Market sector queries
    if (message.includes('technology') || message.includes('tech stocks')) {
      const techStocks = await Stock.find({ 
        symbol: { $in: ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA', 'NVDA', 'META', 'NFLX', 'ADBE', 'CRM'] }
      });
      const techList = techStocks.map(s => `${s.symbol} ($${s.price})`).join(', ');
      return `Major technology stocks: ${techList}. Ask me about any specific tech company!`;
    }
    
    if (message.includes('financial') || message.includes('banking') || message.includes('finance stocks')) {
      const financeStocks = await Stock.find({ 
        symbol: { $in: ['JPM', 'BAC', 'WFC', 'GS', 'MS'] }
      });
      const financeList = financeStocks.map(s => `${s.symbol} ($${s.price})`).join(', ');
      return `Major financial stocks: ${financeList}. Ask me about any specific bank or financial institution!`;
    }
    
    if (message.includes('healthcare') || message.includes('medical') || message.includes('pharma')) {
      const healthStocks = await Stock.find({ 
        symbol: { $in: ['JNJ', 'PFE', 'UNH', 'ABBV', 'TMO'] }
      });
      const healthList = healthStocks.map(s => `${s.symbol} ($${s.price})`).join(', ');
      return `Major healthcare stocks: ${healthList}. Ask me about any specific healthcare company!`;
    }
    
    // General finance queries
    if (message.includes('market') || message.includes('finance') || message.includes('data') || message.includes('investing')) {
      return `I can help you with comprehensive finance data! I have information about:
• 30+ major stocks across technology, finance, healthcare, consumer, and industrial sectors
• 20+ cryptocurrencies including major coins, DeFi tokens, and Layer 1 alternatives  
• 20+ forex pairs including major currencies, cross pairs, and emerging markets

Try asking about specific assets like "Apple stock", "Bitcoin price", "EUR/USD rate", or ask about sectors like "technology stocks" or "healthcare stocks".`;
    }
    
    // Default response
    return `Hello! I'm your comprehensive finance chatbot. I can help you with detailed information about:
• 30+ major stocks (AAPL, GOOGL, MSFT, JPM, JNJ, etc.)
• 20+ cryptocurrencies (BTC, ETH, SOL, DOGE, etc.)  
• 20+ forex pairs (EUR/USD, GBP/USD, USD/JPY, etc.)

Try asking me about specific assets like "Apple stock", "Bitcoin price", or "EUR/USD rate"!`;
    
  } catch (error) {
    console.error('Error generating response:', error);
    return "Sorry, I'm having trouble accessing the finance data right now. Please try again later.";
  }
}

// API Routes
app.get('/', (req, res) => {
  res.json({ message: 'Finance Chatbot API is running!' });
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }
    
    const response = await generateResponse(message);
    
    res.json({
      success: true,
      response,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Chat endpoint error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all finance data
app.get('/api/finance-data', async (req, res) => {
  try {
    const [stocks, crypto, forex] = await Promise.all([
      Stock.find(),
      Crypto.find(),
      Forex.find()
    ]);

    res.json({
      success: true,
      data: { stocks, crypto, forex },
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Finance data endpoint error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get specific data types
app.get('/api/stocks', async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.json({
      success: true,
      data: stocks,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Stocks endpoint error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/crypto', async (req, res) => {
  try {
    const crypto = await Crypto.find();
    res.json({
      success: true,
      data: crypto,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Crypto endpoint error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/forex', async (req, res) => {
  try {
    const forex = await Forex.find();
    res.json({
      success: true,
      data: forex,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Forex endpoint error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add new stock
app.post('/api/stocks', async (req, res) => {
  try {
    const { symbol, name, price, change, volume } = req.body;
    
    if (!symbol || !name || !price || change === undefined || !volume) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const stock = new Stock({ symbol, name, price, change, volume });
    await stock.save();

    res.status(201).json({
      success: true,
      data: stock,
      message: 'Stock added successfully'
    });
  } catch (error) {
    console.error('Add stock error:', error);
    if (error.code === 11000) {
      res.status(400).json({ error: 'Stock symbol already exists' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

// Update stock price
app.put('/api/stocks/:symbol', async (req, res) => {
  try {
    const { symbol } = req.params;
    const { price, change, volume } = req.body;

    const stock = await Stock.findOneAndUpdate(
      { symbol: symbol.toUpperCase() },
      { price, change, volume, lastUpdated: new Date() },
      { new: true }
    );

    if (!stock) {
      return res.status(404).json({ error: 'Stock not found' });
    }

    res.json({
      success: true,
      data: stock,
      message: 'Stock updated successfully'
    });
  } catch (error) {
    console.error('Update stock error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Finance Chatbot API server running on port ${PORT}`);
  console.log(`📊 API available at: http://localhost:${PORT}`);
}); 