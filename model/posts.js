module.exports = {
  posts: [
    {
      id: "qualquer coisa",
      title: "Teste do mural",
      description: "Desrição do mural",
    },
  ],

  getAll() {
    return this.posts;
  },

  newPost(title, description) {
    this.posts.push({ id: generateID(), title, description });
  },
};

function generateID() {
  return Math.random().toString(36).substring(2, 9);
}
