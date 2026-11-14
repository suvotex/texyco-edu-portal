// Texyco Edu Portal - App & Auth Logic

// Signup Function
async function handleSignup(email, password) {
    const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password,
    });
    if (error) {
        alert("Signup Error: " + error.message);
    } else {
        alert("Signup Successful! Please check your email for verification.");
    }
}

// Login Function
async function handleLogin(email, password) {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password,
    });
    if (error) {
        alert("Login Error: " + error.message);
    } else {
        alert("Login Successful! Welcome to Texyco Edu Portal.");
        window.location.reload();
    }
}

// Logout Function
async function handleLogout() {
    const { error } = await supabaseClient.auth.signOut();
    if (!error) {
        alert("Logged out successfully!");
        window.location.reload();
    }
}