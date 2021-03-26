1. Registration

	- Gets registration details, stores in mysql LoginDB database.
	- Throws exceptions if same username or emailId already exists in the database.
	- Sends registration details to Rabbit message queue user-details.

2. Login

	- Gets username and password, verifies username.
	- Generates a jwt bearer token signed with secret key, if verified and returns it.
	- Throws exception "Unauthorised" if verification fails.

