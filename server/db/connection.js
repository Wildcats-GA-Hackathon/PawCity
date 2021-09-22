import mongoose from 'mongoose';

const PORT = process.env.PORT || 5000;

mongoose
	.connect(process.env.CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
	)
	.catch((error) => console.log(error.message));
