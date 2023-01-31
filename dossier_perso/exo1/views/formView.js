function getForm() {
  console.log("formaulaire");
  return `
  <form method="POST">
  <input name="email" type="email" placeholder="Votre Email" value="guillaume@gmail.com"><br>
  <textarea name="message">Amine the king</textarea><br>
  <button type="submit">Envoyer votre message</button><br>
</form>
    `;
}
module.exports = getForm;
