class GitHub {
constructor(){
    this.client_id = 'bc8d67df9d585ed13cf9';
    this.client_sceret = 'ffd4f7445d227a2fe0dc1ff80d536347aead44ac';

}

async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_sceret}`);
    const profile = await profileResponse.json();

    return{
        profile
    }
}


}