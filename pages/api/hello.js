// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// pages/api/proxy.js
export default async (req, res) => {
  try {
    const response = await fetch('http://numbersapi.com/42');
    const data = await response.text();
    res.status(200).json({ fact: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
