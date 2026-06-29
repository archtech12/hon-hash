import mongoose from 'mongoose';
import { projects } from '../lib/projects';
import { news } from '../lib/news';
import Project from '../server/models/Project';

const newsSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String,
  imageUrl: String,
  publishDate: Date,
  excerpt: String
}, { timestamps: true });

const News = mongoose.models.News || mongoose.model('News', newsSchema);

const aboutSchema = new mongoose.Schema({
  title: String,
  content: String,
  updatedAt: { type: Date, default: Date.now },
});
const About = mongoose.models.About || mongoose.model('About', aboutSchema);

const MONGODB_URI = 'mongodb://127.0.0.1:27017/hon-hash-dashboard';

async function migrate() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected.');

    console.log('Clearing old projects...');
    await Project.deleteMany({});
    console.log('Inserting projects from lib/projects.ts...');
    
    // Map projects to match schema (remove _id to let mongo generate it)
    const projectsToInsert = projects.map(p => {
      const { _id, ...rest } = p;
      return rest;
    });
    await Project.insertMany(projectsToInsert);
    console.log(`Inserted ${projectsToInsert.length} projects.`);

    console.log('Clearing old news...');
    await News.deleteMany({});
    console.log('Inserting news from lib/news.ts...');
    const newsToInsert = news.map(n => {
      const { _id, ...rest } = n;
      return rest;
    });
    await News.insertMany(newsToInsert);
    console.log(`Inserted ${newsToInsert.length} news articles.`);

    console.log('Upserting About Data...');
    await About.findOneAndUpdate(
      {},
      {
        title: 'About Hon. Hassan Shehu Hussain',
        content: `<p>Hon. Hassan Shehu Hussain (popularly known as Hon. HASH) is the Member representing Nasarawa Federal Constituency in the House of Representatives under the platform of the All Progressives Congress (APC).</p>
            <p>A committed leader and grassroots politician, Hon. HASH has dedicated his tenure to transforming lives through impactful projects in Infrastructure, Education, Health, and Empowerment. His vision is built on the principles of service to humanity and participatory governance.</p>
            <p>Since his inauguration, he has spearheaded numerous development initiatives across the 11 wards of Nasarawa Federal Constituency, including Gama, Kaura Goje, Hotoron Kudu, Hotoron Arewa, Tudun Murtala, Kawaji, Gawuna, Tudun Wada, Gwagwarwa, and Dakata.</p>`
      },
      { upsert: true, new: true }
    );
    console.log('About data inserted.');

    console.log('Migration completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

migrate();
