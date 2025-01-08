exports.registerUser = (req, res) => {
    const { username, email, password } = req.body;
  
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  
    res.status(201).json({ message: 'User registered successfully' });
  };
  