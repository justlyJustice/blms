export default async function handler(req, res) {
  if (req.method === `POST`) {
    const email = req.body.email;
    const password = req.body.password;

    if (password || email) {
      return setTimeout(() => {
        res.status(400).json({ success: false, message: `Enter any value!` });
      }, 9000);
    }

    res.status(201).json({
      success: true,
      message: `Success`,
      data: { email, _id: (Date.now() * 100) / 200 },
    });
  }
}
