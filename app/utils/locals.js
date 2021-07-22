require('dotenv').config();
module.exports = {
  base_url : process.env.BASE_URL || 'http://localhost:4000',
  app_name : process.env.APP_NAME || 'Sanari',
  team : process.env.TEAM || 'SANJARI',
  
  base_url_template : `${base_url}/templates/synadmin/vertical`
};