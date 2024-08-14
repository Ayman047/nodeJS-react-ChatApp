const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post('/authenticate', async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },
      { headers: { 'private-key': '2792cca1-4833-4118-b4b1-a51ddee1158d' } }
    );

    return res.status(r.status).json(r.data);
  } catch (e) {
    if (e.response) {
      return res.status(e.response.status).json(e.response.data);
    } else {
      console.error('Error details:', e);
      return res.status(500).json({ message: 'An unexpected error occurred' });
    }
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
