const path  = require('path');
module.exports = {
  "config": path.resolve('./database/administrator/config', 'config.js'),
  "models-path": path.resolve('./database/administrator/models'),
  "seeders-path": path.resolve('./database/administrator/seeders'),
  "migrations-path": path.resolve('./database/administrator/migrations')
};

module.exports = {
  "config": path.resolve('./database/hijra/config', 'config.js'),
  "models-path": path.resolve('./database/hijra/models'),
  "seeders-path": path.resolve('./database/hijra/seeders'),
  "migrations-path": path.resolve('./database/hijra/migrations')
};