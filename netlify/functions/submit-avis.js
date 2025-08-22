const { MongoClient } = require('mongodb');

// Ne pas modifier cette ligne, elle récupère votre clé en toute sécurité
const MONGODB_URI = process.env.MONGODB_URI;

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Méthode non autorisée. Utilisez POST.' };
  }
  if (!event.body) {
    return { statusCode: 400, body: 'Le corps de la requête est manquant.' };
  }

  try {
    const data = JSON.parse(event.body);

    if (!data.message || data.message.trim() === '') {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Le message de l\'avis ne peut pas être vide.' })
      };
    }

    const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db('Business'); // Nom de la base de données mis à jour
    const collection = db.collection('avis'); // Nom de la collection mis à jour

    const newAvis = {
      message: data.message,
      date: new Date(),
    };

    await collection.insertOne(newAvis);
    await client.close();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Avis enregistré avec succès!' })
    };
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement de l\'avis :', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Erreur interne du serveur.', error: error.message })
    };
  }
};