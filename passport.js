passport.use( 
    new LocalStrategy(async (email, password, done) => {
        try{
          const { rows } = await pool.query("SELECT * FROM users WHERE email= $1", [email]);
      const user = rows[0];

      if (!email) {
        return done(null, false, { message: "Incorrect email" });
      }
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
        } catch(err) {
            return done(err)
        }
    }))