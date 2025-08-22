const { MongoClient } = require('mongodb');

const MONGODB_URI = process.env.MONGODB_URI;

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'GET') {
        return { statusCode: 405, body: 'Méthode non autorisée. Utilisez GET.' };
    }

    let client;
    try {
        client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();

        const db = client.db('Business'); // Nom de la base de données mis à jour
        const collection = db.collection('avis'); // Nom de la collection mis à jour

        // Récupère les avis du plus récent au plus ancien
        const avis = await collection.find().sort({ date: -1 }).toArray();
        
        await client.close();

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(avis)
        };
    } catch (error) {
        console.error('Erreur lors de la récupération des avis:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Erreur interne du serveur.', error: error.message })
        };
    }
};