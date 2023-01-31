function getAdmin() {
  return `
        <h1>Gestion Administrateur</h1>
<ul>
  <li><a href="http://localhost:3000/messages">Voir les messages</a></li>
  <li><a href="http://localhost:3000/messages">Supprimer tous les messages !</a></li>
</ul>

    `;
}
module.exports = getAdmin;
